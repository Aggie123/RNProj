import React, { Component } from 'react';
import { View, Text,TouchableHighlight,StyleSheet  } from 'react-native';

import BaseComponent from '../BaseComponent'
import Home from '../../Container/Home'

export default class CommonNavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {left,title,right,onPressBack,openThisComponent}=this.props;
    let Left=left?left:
      <TouchableHighlight onPress={onPressBack} style={styles.navSideBox}>
        <Text style={styles.navSideText}>返回</Text>
      </TouchableHighlight>;
    let Right=right?right:
      <TouchableHighlight onPress={openThisComponent.bind(this,'首页',Home)} style={styles.navSideBox}>
        <Text style={styles.navSideText}>首页</Text>
      </TouchableHighlight>;
    
    return (
      <View style={styles.navContainer}>
        {Left}
        <Text style={styles.navMidText}> {this.props.title}</Text>
        {Right}
      </View>
          )
  }
}

const styles=StyleSheet.create({
  navContainer:{
    flexDirection:'row',
    height:42,
    backgroundColor:'grey',
    //alignItems:'center'
  },
  navSideBox:{
    width:60,
  },
  navSideText:{
    textAlign:'center',
    color:'white',
    fontSize:14,
    margin:12,
  },
  navMidText:{
    flex:1,
    textAlign:'center',
    color:'white',
    fontSize:14,
    margin:12,
  }
})