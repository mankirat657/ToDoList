import { StyleSheet,View,Text,Pressable } from "react-native";
function GaolItem(props){
    return (
        <View style={styles.goalItem}>
            <Pressable android_ripple={{color: '#dddddd'}} onPress={props.onDeleteItem.bind(this,props.id)} style={({pressData})=>pressData && styles.pressedItem}>
          <Text style={styles.goalText}>{props.text}</Text>
          </Pressable>
          </View>
    )
}

export default GaolItem;

const styles = StyleSheet.create({
    goalItem:{
     margin:8,
     borderRadius:4,
     
     backgroundColor:'#5e0acc',
     color:"#fff"
    },
    goalText:{
     fontSize:18,
     padding:8,
     color:"#fff"
    },
    pressedItem:{
        opacity:0.5
    }
     
   });
   