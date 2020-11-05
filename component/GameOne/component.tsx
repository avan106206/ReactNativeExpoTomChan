import React, { useState } from 'react';
import {hamster_display_list_type, hamster_Info_type, area_type} from './ComponentType';
import { View, Text, Image, ScrollView, SafeAreaView, TextInput, StyleSheet } from 'react-native';

const GameOne = () => {

  let hamster_list: Array<hamster_Info_type> = [
    {'hamster_id': '0', 'area_id': 'A', 'assets_path': 'assets/img/hamster_game/hamster_1.jpg'},
    {'hamster_id': '1', 'area_id': 'B', 'assets_path': 'assets/img/hamster_game/hamster_1.jpg'},
    {'hamster_id': '2', 'area_id': 'C', 'assets_path': 'assets/img/hamster_game/hamster_1.jpg'},
    {'hamster_id': '3', 'area_id': 'D', 'assets_path': 'assets/img/hamster_game/hamster_1.jpg'},
  ]  

  const [ hamster_display_list, sethamster_display_list] = useState<hamster_display_list_type>( // the argument can only be hamsterList_type
    {hamster:[...hamster_list]}, //use ... to clone the array
  ); 

  return (
    <View style = {styles.ParentView}>
      <View style={styles.flexDisplayImgParentView}>
          <Image style={styles.optionImage} source={require('../../Asset/img/hamster_game/hamster_1.jpg')} />
      </View>
      
      <View style={styles.flexQuestionParentView}>
          <Text>dsadas</Text>
      </View>
      

      
      <View style={styles.flexOptionParentView}>
          <View style={styles.flexOptionSubView} />
          <View style={styles.flexOptionSubView} />
      </View>
      <View style={styles.flexOptionParentView}>
          <View style={styles.flexOptionSubView} />
          <View style={styles.flexOptionSubView} />
      </View>
      
    </View>
  )
}

var styles = StyleSheet.create({
    ParentView:{
      height:"100%",
      flexDirection:'column',
      alignItems:'center'
    },
    flexDisplayImgParentView:{
      flex: 30,
      width:'90%',
      height: 100,
      backgroundColor:'red',
      alignItems:'center',
      justifyContent:'center'
    },
    flexQuestionParentView:{
      flex: 20,
      width:'90%',
      height: 100,
      backgroundColor:'green',
      alignItems:'center',
      justifyContent:'center'
    },
    flexOptionParentView:{
      flex: 50,
      height:300,
      width:'100%',
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-around',
    },
    flexOptionSubView:{
      width:'40%',
      height:200,
      backgroundColor:'black',
      marginBottom:20,
      marginTop:20
    },
    optionImage:{
     width: 150,
     height: 150
    }
  });
export default GameOne;