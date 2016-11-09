import React from 'react'
import { View, Text, Navigator,StyleSheet } from 'react-native'
import CommonStyles from '../Common/CommonStyles'
import BaseComponent from '../Component/BaseComponent'
import CommonNavBar from '../Component/NavBar/CommonNavBar'

export default class Page1 extends BaseComponent {
  constructor(props) {
    super(props);
  }
  
  static get defaultProps() {
    return {
      title: 'Page1'
    };
  }

  render() {
    const {route,navigator}=this.props;
    let btnActions={
      onPressBack:this._onPressBack.bind(this),
      openThisComponent:this._openThisComponent.bind(this)
    }
    return (
      <View>
        <CommonNavBar title={route.title} {...btnActions}/>
        <Text>Hi! My name is {route.title}.</Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    width:CommonStyles.viewWidth,
  }
})