function ChecklistStackScreen() {
    return(
    <ChecklistStack.Navigator
        initialRouteName ='Checklist'
        screenOptions={{
            headerShown: true
          }}>
            <ChecklistStack.Screen name= "Checklist" component = {Checklist}></ChecklistStack.Screen>
            <ChecklistStack.Screen name= "Checkdetail" component = {Checkdetail}></ChecklistStack.Screen>
        </ChecklistStack.Navigator>
    )
    }
    
    export default ChecklistStackScreen
    
    