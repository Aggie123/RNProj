import React, {
  Component
} from 'react';
import {
  AppRegistry,
  Navigator,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

//import MyScene from './MyScene';
import Home from './Container/Home';
import ScrollFun from './Container/ScrollFun';
import AppBottom from './Component/AppBottom'
/*import Page1 from './Container/Page1';
import Page2 from './Container/Page2';*/

export default class RNProj extends Component {

  renderScene(route, navigator) {
    let Component = route.component;
    return <Component route={route} navigator={navigator}/>
  }

  render() {
    //let navBar=<View><TouchableHighlight onPress={()=>{this.props.navigator}}>返回</TouchableHighlight></View>;
    return ( <Navigator 
      initialRoute = {
        {
          title: 'Home',
          index: 0,
          component: Home
        }
      }
      renderScene = {this.renderScene}
      navigationBar ={<AppBottom/>}
      />
    );
  }
}

const styles=StyleSheet.create({
  topNav:{

  }
})
