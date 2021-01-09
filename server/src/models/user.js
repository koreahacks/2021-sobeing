const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs') // bycrypt npm module를 이용해서 password hashing
// hashing 알고리즘은 reverse 불가. 다시 text로 돌아갈 수 없다.
const jwt = require('jsonwebtoken')
const Contract = require('./contract')

// Schema 생성
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, // 반드시 입력해야됨
        trim: true
    },
    email: {
        type: String,
        unique: true, // 중복된 email은 가입 불가
        required: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if (value < 0) {
                throw new Error('Age must be a positive number')
            }
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]
})

// 실제로 db에 저장되지는 않고 mongoose에서 user와 contract 사이의 관계를 나타내는 virtual property
// 첫번째 인자 : virtual field의 name
// 두번째 인자 : object
userSchema.virtual('contracts', {
    ref: 'Contract',
    localField: '_id', // user id
    foreignField: 'owner' // user id의 Contract 기준 이름
})

userSchema.virtual('checklists', {
    ref: "Checklist",
    localField: '_id',
    foreignField: 'owner'
})

// methods는 인스턴스에 함수를 정의할 때
// this 키워드가 함수 안에 사용하므로 일반 함수로 정의
/*
const pet = {
    name: 'Hal'
}

pet.toJSON = function () {
    console.log(this)
    return {} // stringify한 결과값 설정
}
console.log(JSON.stringify(pet)) //object를 json으로 변환
// res.send()를 하면 stringify해서 자동으로 json 객체로 변환됨
*/

userSchema.methods.toJSON = function() {
    const user = this
    const userObject = user.toObject()

    // response에 표시 안할 목록 지정
    delete userObject.password
    delete userObject.tokens

    return userObject // stringify한 결과값 설정
}

userSchema.methods.generateAuthToken = async function () {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'thisismynewcourse') // user._id는 object이므로 jwt가 원하는 string형태로 변환

    user.tokens = user.tokens.concat({ token })
    await user.save() // token이 추가된 user를 db에 저장

    return token
}

// router 파일 안의 User.findByCredentials 함수 정의
// statics은 model안에 함수 정의할 때
userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Unable to login')
    }

    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch) {
        throw new Error('Unable to login')
    }

    return user
}

// Hash the plain text password before saving
// middleware : 특정 이벤트 직전 또는 직후에 실행
// arrow function은 binding을 하지 않기 때문에 this를 사용할 수 없으므로 여기서는 사용하지 않는다.
userSchema.pre('save', async function (next) {
    const user = this // 여기서 this는 save되는 individual user

    // password 필드가 created, updated되었다면 true
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8) // hash된 적이 없다면 hash
    }

    console.log('just before saving!')

    next() // middleware 함수 종료
})

// Middleware
// Delete user contracts when user is removed 
userSchema.pre('remove', async function (next) {
    const user = this
    await Contract.deleteMany({ owner: user._id })
    next()
})

// 모델 생성
const User = mongoose.model('User', userSchema)

module.exports = User


/*
// 인스턴스 생성
const me = new User({
    name: '   Andrew    ',
    email: 'MYEMAIL@MEAD.IO    ',
    password: 'phone098!'
})

// 인스턴스를 데이터베이스에 저장
me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log('Error!', error)
})
*/

/*
const bycrypt = require('bcryptjs') // bycrypt npm module를 이용해서 password hashing
// hashing 알고리즘은 reverse 불가. 다시 text로 돌아갈 수 없다.
const myfunction = async () => {
    const password = 'Red12345!'
    const hashedPassword = await bycrypt.hash(password, 8) // 두번째 인자는 hashing알고리즘 반복횟수, 높을수록 보안 강하다.

    console.log(password)
    console.log(hashedPassword)

    const isMatch = await bycrypt.compare('Red12345!', hashedPassword)
    console.log(isMatch)
}

myfunction()
*/

/*
const jwt = require('jsonwebtoken')

const myFunction = async () => {
    const token = jwt.sign({ _id: 'abc123' }, 'thisismynewcourse', { expiresIn: '7 days' })
    // 첫번째 인자 : user를 구분할 수 있는 unique한 속성, 토큰에 저장될 data object
    // 두번째 인자 : token에 sign할 때 사용하는 secrete code
    // json web token은 header(base 64, meta info, type 등), body(base 64, id 속성 포함), signature(token을 verify)
    // 어떤 사람이 token에 있는 data를 수정하려고 하면 secret을 알아야
    // expiresIn : token 지속 시간
    console.log(token) // header + body + verifytoken(token 인증에 이용)

    const data = jwt.verify(token, 'thisismynewcourse')
    console.log(data)
}

myFunction()
*/