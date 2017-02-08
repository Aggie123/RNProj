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
  Alert
} from 'react-native'
import CommonStyles from '../../Common/CommonStyles'
import BaseComponent from '../BaseComponent'
import CommonNavBar from '../NavBar/CommonNavBar'
import Theme from '../../Common/Theme'
import MiButton from '../Button/index'
import MiModal from './index'
//import ScrollFun from './ScrollFun'

export default class CommonModal extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      transparent: true,
    }
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.handleOk = this.handleOk.bind(this);
  }

  static get defaultProps() {
    return {
      title: '普通弹窗'
    };
  }
  showModal() {
    this.setState({
      modalVisible: true
    });
  }
  hideModal() {
    this.setState({
      modalVisible: false
    });
  }
  handleOk() {
    Alert.alert(
      '提 示',
      '您确定要删除这个地址吗？', [{
        text: '删除',
        onPress: () => {}
      }, {
        text: '取消',
        onPress: () => {}
      }, ]
    );

  }

  setModalVisible(visible) {
    this.setState({
      modalVisible: visible
    });
  }


  render() {
    let {
      modalVisible,
      transparent
    } = this.state;
    return (
      <View style={styles.container}>
        <MiButton 
              text={'Show Modal2'} 
              type={'default'}
              onClick={this.showModal}/>

        <MiModal
          animationType={"slide"}
          visible={modalVisible}
          transparent={transparent}
          title={'普通弹窗'}
          onOK={this.handleOk}
          onCancle={this.hideModal}
          footer={[<MiButton 
                    text={'关闭'} 
                    type={'sec'}
                    size={'large'}
                    containerStyle={{flex:1,borderRadius:5}}
                    onClick={() => {this.setModalVisible(!this.state.modalVisible)}}/>,
                  <MiButton
                    text={'确认'}
                    type={'sec'}
                    size={'large'}
                    containerStyle={{flex:1,borderRadius:5}}
                    onClick={()=>{}}
                    textStyle={{color:'#00b377'}}
                    /> ]}
          >
              <Text style={{lineHeight:30}}>Hello World!Hello World!Hello World!Hello World!Hello World!</Text>
          </MiModal>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //width: CommonStyles.viewWidth,
  },

})