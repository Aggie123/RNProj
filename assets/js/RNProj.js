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
/*import Page1 from './Container/Page1';
import Page2 from './Container/Page2';*/

export default class RNProj extends Component {
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
      renderScene = {
        (route, navigator) => {
          let Component = route.component;
          return <Component route={route} navigator={navigator}/>
        }
      }
      />
    );
  }
}

const styles=StyleSheet.create({
  topNav:{

  }
})
