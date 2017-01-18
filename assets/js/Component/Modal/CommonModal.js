import React from 'react'
import {
  View,
  Text,
  Navigator,
  StyleSheet,
  Modal,
  TouchableHighlight,
  Button,
  PixelRatio,
} from 'react-native'
import CommonStyles from '../../Common/CommonStyles'
import BaseComponent from '../BaseComponent'
import CommonNavBar from '../NavBar/CommonNavBar'
import Theme from '../../Common/Theme'
import MiButton from '../Button/index'
//import ScrollFun from './ScrollFun'

export default class CommonModal extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      transparent: true,
    }
  }

  static get defaultProps() {
    return {
      title: '普通弹窗'
    };
  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }


  render() {
    const {
      route,
      navigator
    } = this.props;
    var modalBackgroundStyle = {
      backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.8)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = this.state.transparent ? {
      backgroundColor: '#fff',
      //padding: 20
    } : null;
    var activeButtonStyle = {
      backgroundColor: '#ddd'
    };
    return (
      <View style={styles.container}>
        <MiButton 
              text={'Show Modal'} 
              onClick={() => {this.setModalVisible(true)}}/>

        <Modal
          animationType={"slide"}
          transparent={this.state.transparent}
          visible={this.state.modalVisible}
          onRequestClose={() => {alert("Modal has been closed.")}}
          >
         <View style={[styles.modalContainer,modalBackgroundStyle]}>
          <View style={[styles.innerContainer, innerContainerTransparentStyle]}> 

            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitleTxt}>普通弹窗</Text>
            </View>

            <View style={styles.modalContent}>
              <Text style={{lineHeight:30}}>Hello World!Hello World!Hello World!Hello World!Hello World!</Text>
            </View>

            <View style={styles.bottomContainer}>
              <MiButton 
                text={'关闭'} 
                size={'large'}
                type={'sec'}
                containerStyle={{flex:1,borderRadius:5}}
                onClick={() => {this.setModalVisible(!this.state.modalVisible)}}/>
            </View>

           {/* <View style={styles.bottomContainer}>
              <MiButton 
                text={'关闭'} 
                type={'sec'}
                size={'large'}
                containerStyle={{flex:1,borderRadius:0}}
                onClick={() => {this.setModalVisible(!this.state.modalVisible)}}/>
              <MiButton
                text={'确认'}
                type={'sec'}
                size={'large'}
                containerStyle={{flex:1,borderRadius:0}}
                onClick={()=>{}}
                textStyle={{}}
                />  
            </View>*/}
            
          </View>
         </View>
        </Modal>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: CommonStyles.viewWidth,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    //bottom:0,
    //padding: 20,
  },
  innerContainer: {
    //flex:1,
    borderRadius: 5,
    alignItems: 'center',
  },
  modalTitleContainer: {
    height: 52,
    width:CommonStyles.viewWidth,
    //flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    /*borderBottomWidth: 1 / PixelRatio,
    borderColor: '#f00',*/
  },
  modalTitleTxt: {
    fontSize: Theme.font15,
  },
  bottomContainer: {
    flexDirection: 'row',
    //flex: 1,
  },
  modalContent:{
    padding:10,
    borderWidth: 1 / PixelRatio,
    borderColor: '#f00',
  }
 /* modalBtnContainer:{
    borderColor:'#e1e5e3',
    borderWidth:1/PixelRatio,
    backgroundColor:'#808089',
    borderRadius:5,
  }*/

})