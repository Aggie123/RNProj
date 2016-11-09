import React from 'react'
import { View, Text, Navigator,WebView,StyleSheet } from 'react-native'
import CommonStyles from '../Common/CommonStyles'
import BaseComponent from '../Component/BaseComponent'
import CommonNavBar from '../Component/NavBar/CommonNavBar'
import {WebViewExample,ScaledWebView} from '../Component/Widget/WebView'

export default class Page2 extends BaseComponent {
  constructor(props) {
    super(props);
    this.state={
      url:'https://m.facebook.com',
      scalesPageToFit: true,
    }
  }

  onShouldStartLoadWithRequest(event) {
    // Implement any custom loading logic here, don't forget to return!
    return true;
  }

  /*onNavigationStateChange(navState) {
    this.setState({
      backButtonEnabled: navState.canGoBack,
      forwardButtonEnabled: navState.canGoForward,
      url: navState.url,
      status: navState.title,
      loading: navState.loading,
      scalesPageToFit: true
    });
  }*/

  render() {
    const {route,navigator}=this.props;
    let btnActions={
      onPressBack:this._onPressBack.bind(this),
      openThisComponent:this._openThisComponent.bind(this)
    }
    return (
      <View style={styles.container}>
        <CommonNavBar title={route.title} {...btnActions}/>
        <WebView
          ref={'webview'}
          automaticallyAdjustContentInsets={false}
          style={{height:500,backgroundColor:'#eed'}}
          source={{uri: this.state.url}}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          decelerationRate="normal"
          //onNavigationStateChange={this.onNavigationStateChange}
          onShouldStartLoadWithRequest={this.onShouldStartLoadWithRequest}
          startInLoadingState={true}
          scalesPageToFit={this.state.scalesPageToFit}
        />

        {/*<WebViewExample/>*/}
        {/*<ScaledWebView/>*/}
      </View>
    )
  }
}

Page2.defaultProps = {
  title: 'Page2'
}

const styles=StyleSheet.create({
  container:{
    flex:1,
    width:CommonStyles.viewWidth,
    //height:CommonStyles.viewHeight
  }
})