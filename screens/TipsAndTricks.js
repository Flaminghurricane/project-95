import { Text, View, } from 'react-native'
import React, { Component } from 'react'
import { FlatList } from "react-native-gesture-handler";
import TTCard from "../screens/TTCard"

let TTData = require("../assets/TT.json");
export default class TipsandTricks extends Component {
  renderItem=({item:content})=>{
  return <TTCard TTData={content} navigation={this.props.navigation}/>
  }
  keyExtractor=(item,index)=>{
    index.toString()
  }
  render() {
    return (
      
        <View style={{flex:1,backgroundColor:"black"}}>
              <FlatList
                keyExtractor={this.keyExtractor}
                data={TTData}
                renderItem={this.renderItem}
              /></View>
      
    )
  }
}

