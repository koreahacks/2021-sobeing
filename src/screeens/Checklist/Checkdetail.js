import React from 'react';
import { StyleSheet, SafeAreaView, Button } from 'react-native';
import CheckItem from '../../components/CheckItem'
class Checkdetail extends React.Component{
  render(){
    return (
      <SafeAreaView style={styles.container}>
        <CheckItem></CheckItem>
      </SafeAreaView>   
    );
  }  
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  });
  export default Checkdetail