import React from 'react'
import { View, Text, Navigator,StyleSheet,TouchableHighlight } from 'react-native'
import CommonStyles from '../Common/CommonStyles'
import BaseComponent from '../Component/BaseComponent'
import CommonNavBar from '../Component/NavBar/CommonNavBar'
import ScrollFun from './ScrollFun'
import CommonModal from '../Component/Modal/CommonModal'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Example from './Example';

export default class PageList extends BaseComponent {
  constructor(props) {
    super(props);
  }
  
  static get defaultProps() {
    return {
      title: 'PageList'
    };
  }

  render() {
    const {route,navigator}=this.props;
    let btnActions={
      onPressBack:this._onPressBack.bind(this),
      openThisComponent:this._openThisComponent.bind(this)
    }
    return (
      <View style={styles.container}>
        <CommonNavBar title={route.title} {...btnActions}/>
        <Text>Hi! My name is {route.title}.</Text>
        <View style={styles.menuContainer}>
          <TouchableHighlight style={styles.menuBtn} underlayColor={CommonStyles.touchHighlightBg} onPress={this._openThisComponent.bind(this,'Page1',Page1)}>
            <Text style={styles.menuBtnTxt}>Page 1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuBtn} underlayColor={CommonStyles.touchHighlightBg} onPress={this._openThisComponent.bind(this,'Page2',Page2)}>
            <Text style={styles.menuBtnTxt}>Page 2</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuBtn} underlayColor={CommonStyles.touchHighlightBg} onPress={this._openThisComponent.bind(this,'Page3',Page3)}>
            <Text style={styles.menuBtnTxt}>Page 3</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuBtn} underlayColor={CommonStyles.touchHighlightBg} onPress={this._openThisComponent.bind(this,'Page4',Page4)}>
            <Text style={styles.menuBtnTxt}>Page 4</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuBtn} underlayColor={CommonStyles.touchHighlightBg} onPress={this._openThisComponent.bind(this,'Page5',Page5)}>
            <Text style={styles.menuBtnTxt}>Page 5</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuBtn} underlayColor={CommonStyles.touchHighlightBg} onPress={this._openThisComponent.bind(this,'Example',Example)}>
            <Text style={styles.menuBtnTxt}>Example</Text>
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    width:CommonStyles.viewWidth,
  },
  menuBtn:{
    backgroundColor:'#0f0',
    height:30,
    alignItems:'center',
    justifyContent:'center'
  }
})