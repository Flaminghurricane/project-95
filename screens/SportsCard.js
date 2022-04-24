import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  TouchableOpacity
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font"

let customFonts={'bubblegum-sans':require("../assets/font/BubblegumSans-Regular.ttf")}

export default class SportsCard extends Component{
    constructor(props){
        super(props)
        this.state={
            fontsLoaded:false
        }
    }

 async loadFont(){
     await Font.loadAsync(customFonts)
     this.setState({
         fontsLoaded:true
        });
 }
 componentDidMount(){
     this.loadFont()
 }
    render(){
        let images = {
            image_1: require("../assets/Cristiano.png"),
            image_2: require("../assets/lionel.png"),
            image_3: require("../assets/neymar.jpg"),
            image_4: require("../assets/msdhoni.png"),
            image_5: require("../assets/viratkohli.png")
          };
          if(!this.state.fontsLoaded){
              return <AppLoading/>
          }
          else{
           return(
            <View>
               
                <View style={styles.cardContainer}>
                <Image source={images[this.props.SportsData.image]} style={{width:300,height:300,marginTop:10}}/>
                    <Text style={styles.name}>{this.props.SportsData.Name}</Text>
                    <Text style={styles.text}>{this.props.SportsData.Sport}</Text>
                    <Text style={styles.text}>{this.props.SportsData.dateofbirth}</Text>
                    <Text style={styles.text}>{this.props.SportsData.trophieswon}</Text>
                </View>
            </View>
        )
          }
    }
}

const styles=StyleSheet.create({
    name:{
        fontSize:RFValue(15),
        alignItems:"center",
        justifyContent:"center",
        fontWeight:'bold',
        fontFamily:'bubblegum-sans',
        color:"white"
    }, 
    text:{
        color:"white",
        marginTop:10,
        fontSize:RFValue(15),
        alignItems:"center",
        justifyContent:"center"
    },
    cardContainer:{
        margin:RFValue(13),
        backgroundColor:"#15193c",
        borderRadius:RFValue(20),
        alignItems:"center",
        justifyContent:"center"
    }
   
})