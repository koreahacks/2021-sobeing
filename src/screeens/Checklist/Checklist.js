import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import Header from '../../components/Header'
import TodoItem from '../../components/TodoItem'
import TaskModal from '../../components/TaskModal'
export default class Checklist extends React.Component {
  

    state = {
      todos: [
      {
        title: "계약후보 집들을 체크리스트를 통해 비교해보세요!"
      },
      ],
      showModal: false,
    }
  
  
  
    render() {
      return (
        <SafeAreaView style={styles.container}>
          <Header 
            show={() => {
              this.setState({ showModal: true})
            }}  
          />
          <FlatList 
            data={this.state.todos}
            renderItem={({ item, index }) => {
              return (
                <TodoItem
                  title={item.title}
                  keyExtractor={ (id, index ) => {
                    return id + '${index}'
                  }}
                  remove={() => {
                    this.setState({
                      todos: this.state.todos.filter((_, i) => i !== index)
                    }, this.save)
                  }}
                 
                />
              )
            }}
          />
          <TaskModal 
            isVisible={this.state.showModal} 
            add={(title) => {
              this.setState({
                todos: this.state.todos.concat({
                  title: title,
                  done: false,
                }),
                showModal: false,
              }, this.save)
            }}
            hide={() => {
              this.setState({ showModal : false })
            }}
          />
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