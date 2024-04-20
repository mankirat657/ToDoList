import { StyleSheet, Text, View, FlatList,Button } from 'react-native';
import { useState } from 'react';
import GaolItem from './components/GaolItem';
import GoalInput from './components/GoalInput';
import { StatusBar } from 'expo-status-bar';
export default function App() {
  const [modalIsVisible,setModalIsVisible] = useState(false)
  const[courseGoals,setCourseGoals] = useState([])

  function startAddGoalHandler(){
    setModalIsVisible(true)
  }

  function endAddGoalHandler(){
    setModalIsVisible(false)
  }
  function addGoalHandler(enteredGoalText){
    setCourseGoals(currentCourseGoal =>[...currentCourseGoal , {text:enteredGoalText,id:Math.random().toString()}])
    endAddGoalHandler()
  };
  function deleteGoalHandler(id){
    setCourseGoals(currentCourseGoal =>{
      return currentCourseGoal.filter((goal)=>goal.id!==id)
    })
  }
  return (
    <>
    <StatusBar style='light'/>
    <View style = {styles.appContainer}>
      <Button title='Add New Goal' color="#5e0acc" onPress={startAddGoalHandler}/>
      <GoalInput onAddGoal = {addGoalHandler} visible = {modalIsVisible} onCancel={endAddGoalHandler}/>
      <View  style={styles.goalsContainer}>
      <FlatList data={courseGoals} renderItem={itemData=>{
        return <GaolItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>
      }} keyExtractor={(item,index)=>{
        return item.id;
      }} />
       </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
 appContainer :{
  paddingTop : 40,
  flex:1,
  paddingHorizontal:16,
 },
 inputContainer :{
  flex:1,
  flexDirection : "row",
  justifyContent :"space-between",
  alignItems:"center",
  // paddingBottom:24,
  marginBottom:24,
  borderBottomWidth: 1,
  borderBottomColor:"#cccccc"
 },
 textInput:{
  borderWidth:1,
  borderColor:'#cccccc',
  width:'70%',
  marginRight:8,
  padding:8
 },
 goalsContainer :{
  flex:5
 },
 goalItem:{
  margin:8,
  borderRadius:4,
  padding:8,
  backgroundColor:'#5e0acc',
  color:"#fff"
 },
 goalText:{
  fontSize:18,
  color:"#fff"
 }
  
});
