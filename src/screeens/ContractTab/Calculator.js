import React from 'react'
import {StyleSheet, Button, Text, View, TextInput} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 


class Calculator extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            status: false
        };
    }
    
    render(){
        return(
        <View style = {styles.container}>
            <View >
                <Text style={styles.header}>계약서 분석 결과</Text>
            </View>
            <View style={styles.center}>
            <View style={styles.textContainerone}>
                <Text style = {styles.textHeader}>이름 일치 확인</Text>
                <View style = {styles.textContent}>
                <Text >계약자의 이름이 동일한 것을 확인하였습니다.</Text>
                </View>
            </View>
            <View style={styles.textContainertwo}>
                <Text style = {styles.textHeader}>특약 사항에서 위험 요소 발견!</Text>
                <View style = {styles.textContent}>
                <Text>건물에 융자가 있을 시 "등가사항 전부 증명서사 근저당 설정 금 000원 설정 상태에서의 계약임"을 기재하는 것을 추천드립니다.</Text>
                </View>
            </View>
            </View>
            <Text style= {styles.calculator}> 보증금 보장 계산기 </Text>
            <View style={styles.bottomContainer}>
            <View style={styles.inputContainer}>
            <TextInput
                style={styles.input}
                placeholder="보증금을 입력해주세요"
                placeholderTextColor="gray"
                autoCapitalize="none"
            />
            <TextInput
                style={styles.input}
                placeholder="건물 가격을 입력해주세요"
                placeholderTextColor="gray"
                autoCapitalize="none"
                />
            <TextInput
                style={styles.input}
                placeholder="융자를 입력해주세요"
                placeholderTextColor="gray"
                autoCapitalize="none"
            />
            </View>
            <View style={styles.icon}>
            <AntDesign onPress= {()=>{if(this.state.status == false)
      { 
        this.setState({status: true})
      }
      else
      {
        this.setState({status: true})
      } }} name="rightcircleo" size={24} color="black" />
            </View>
            </View>
            <View style= {styles.result}>
                {this.state.status ? <Text style={styles.resultText}>결과: 최대 3000만원까지 보장됩니다</Text> : null}
            </View>
        </View>
      
        )
    
}
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: '100%',
        height: '100%',
    },
    header: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20
    },
    textHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginTop: 10,
        marginLeft: 10
    },
    textContent: {
        marginTop: 10,
        marginLeft: 10
    },
    center: {
        justifyContent: 'center', 
        alignItems: 'center',
        height: '58%',
    },
    input: {
       marginLeft: 28,
       marginTop: 10,
       marginBottom: 10,
       width: '100%',
       borderBottomWidth: 1,
       borderBottomColor: 'gray'
      },
    textContainerone: {
        backgroundColor: '#F8F8F8',
        width: '90%',
        borderColor: '#F8F8F8',
        borderWidth: 1,
        borderRadius: 20,
        height: '37%',
    },
    textContainertwo: {
        backgroundColor: '#F8F8F8',
        marginTop: 20,
        width: '90%',
        borderColor: '#F8F8F8',
        borderWidth: 1,
        borderRadius: 20,
        height: '37%',
    },
    calculator: {
        fontSize: 22,
        fontWeight: 'bold',
        marginLeft: 20
    },
    bottomContainer: {
        flexDirection: 'row'
    },
    inputContainer: {
        width: '65%',
    },
    icon: {
        width: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    result: {
        marginLeft: 40,
        marginTop: 20
    },
    resultText: {
        fontSize: 18,
        color: 'gray'
    }
})

export default Calculator