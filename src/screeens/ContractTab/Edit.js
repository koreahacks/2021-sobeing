import React, {Component} from 'react'
import {StyleSheet, Text, View, TouchableOpacity, Image, SafeAreaView, TextInput, FlatList} from 'react-native'
import { AntDesign } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
class Edit extends React.Component {
    state = {
      date: undefined,
      tenant: undefined, 
      landlord: undefined,
      cost: undefined, 
      special: undefined
    };
    getContractInfo = ( ) => {
      fetch(`https://rickandmortyapi.com/api/character/5`)
      .then(response => response.json())
      .then(data => {
          this.setState({date: data.name})
          this.setState({tenant: data.name})
          this.setState({landlord: data.status})
          this.setState({cost: data.gender})
          this.setState({special: data.origin.name}) 
      })
      .catch((error)=>{
          console.log("계약서 문자 변환 오류");
          alert(error.message);
          });
          }
    componentDidMount() {
      this.getContractInfo();
    }
    render() {
  
      return (
        <SafeAreaView>
        <Text style = {styles.header}>계약서 직접 수정하기</Text>
        <View style = {styles.center}>
                <View style = {styles.box}>
                <View><Text style = {styles.headerText}> 날짜</Text></View>
        <TextInput
          onChange={(text) => {
            this.setState({ date: text.target.value });
          }}
          value={this.state.date}
        />
        </View>
              <View style = {styles.box}>
              <View><Text style = {styles.headerText}>임대인</Text></View>
        <TextInput
          onChange={(text) => {
            this.setState({ landlord: text.target.value });
          }}
          value={this.state.landlord}
        />
        </View>
                <View style = {styles.box}>
              <View><Text style = {styles.headerText}>임차인</Text></View>
        <TextInput
          onChange={(text) => {
            this.setState({ tenant: text.target.value });
          }}
          value={this.state.tenant}
        />
        </View>
              <View style = {styles.box}>
              <View><Text style = {styles.headerText}>가격</Text></View>
        <TextInput
          onChange={(text) => {
            this.setState({ cost: text.target.value });
          }}
          value={this.state.cost}
        />
        </View>
              <View style = {styles.bigbox}>
              <View><Text style = {styles.headerText}>특약사항</Text></View>
        <TextInput
          onChange={(text) => {
            this.setState({ special: text.target.value });
          }}
          value={this.state.special}
        />
        </View>
        <TouchableOpacity  onPress={()=> this.props.navigation.navigate('Calculator')}>
        <Feather style = {styles.icon} name="send" size={34} color="gray" />
        </TouchableOpacity>
      </View>
      </SafeAreaView>
        

      );
    }
  }
const styles= StyleSheet.create({
  box: {
    width: '88%',
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
    height: '13%',
    marginBottom: 13,
    shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.16,
  shadowRadius: 2,
},
center: {
    justifyContent: 'center',
    alignItems: 'center'
},
headerText: {
    fontSize: 12,
    color: '#333',
    marginBottom: 6
},
buttonText: {
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    fontSize: 19
 },
 button: {
    width: '50%',
    marginTop: 25,
    borderRadius : 12,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.16,
    shadowRadius: 2,
    backgroundColor: '#ffd31d',
    alignItems: 'center'
    },
header: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 30,
    marginLeft: 30
},
bigbox: {
  height: '20%',
  width: '88%',
    backgroundColor: '#F8F8F8',
    borderColor: '#F8F8F8',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    paddingTop: 10,
    marginBottom: 13,
    shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.16,
  shadowRadius: 2,
},
icon: {
  marginTop: 10
}
})
export default Edit