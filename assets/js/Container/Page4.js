/*import React from 'react'
import { View, Text, Navigator,StyleSheet } from 'react-native'
import CommonStyles from '../Common/CommonStyles'
import BaseComponent from '../Component/BaseComponent'
import CommonNavBar from '../Component/NavBar/CommonNavBar'
import SliderExample,{SlidingCompleteExample} from '../Component/Widget/Slider'

export default class Page4 extends BaseComponent {
  constructor(props) {
    super(props);
  }
  
  static get defaultProps() {
    return {
      title: 'Page4'
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
        <SliderExample
          minimumValue={-1}
          maximumValue={2}
        />
        <SlidingCompleteExample />
        <Text style={styles.baseText}>
          <Text style={styles.titleText} onPress={this.onPressTitle}>
            this.state.titleText + '\n\n'
          </Text>
          <Text numberOfLines={5}>
            this.state.bodyText
          </Text>
        </Text>
      </View>
    )
  }
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    width:CommonStyles.viewWidth,
  },
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})*/

'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} = React;
import BaseComponent from '../Component/BaseComponent'

export default class Page4 extends BaseComponent {
  constructor(props) {
    super(props);
  
    this.state = {};
  }
  _onPressIn(){
    this.start = Date.now()
    console.log("press in")
  }
  _onPressOut(){
    console.log("press out")
  }
  _onPress(){
    console.log("press")
  }
  _onLonePress(){
    console.log("long press "+(Date.now()-this.start))
  }
  render() {
    console.log('styles',styles)
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.touchable}
          onPressIn={this._onPressIn.bind(this)}
          onPressOut={this._onPressOut.bind(this)}
          onPress={this._onPress.bind(this)}
          onLongPress={this._onLonePress.bind(this)}>
          <Text>hello</Text>
         
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  button:{
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: 'red'
  },
  touchable: {
    borderRadius: 100,
    backgroundColor:'#0f0',
    height:60
  }
});
