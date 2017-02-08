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

export default class MiModal extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      transparent: true,
    }
  }

  static get defaultProps() {
    return {
      title: '普通弹窗'
    };
  }

  componentWillMount(){
    this.setState({
      visible:this.props.visible,
      transparent:this.props.transparent,
    })
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      visible:nextProps.visible,
      transparent:nextProps.transparent,
    })
  }

  setvisible(visible) {
    this.setState({
      visible: visible
    });
  }


  render() {
    const {
      title,
      animationType,
      onCancel,
      children,
      footer,
      //onRequestClose,
    } = this.props;
    let {visible,transparent}=this.state;
    var modalBackgroundStyle = {
      backgroundColor: transparent ? 'rgba(0, 0, 0, 0.8)' : '#f5fcff',
    };
    var innerContainerTransparentStyle = transparent ? {
      backgroundColor: '#fff',
      //padding: 20
    } : null;
    var activeButtonStyle = {
      backgroundColor: '#ddd'
    };
    return (
      <View style={styles.container}>
        <Modal
          animationType={animationType}
          transparent={transparent}
          visible={visible}
          onRequestClose={this.setvisible.bind(this,false)}
          >
         <TouchableHighlight style={[styles.modalContainer,modalBackgroundStyle]} onPress={this.setvisible.bind(this,false)}>
          <View style={[styles.innerContainer, innerContainerTransparentStyle]}> 

            <View style={styles.modalTitleContainer}>
              <Text style={styles.modalTitleTxt}>{title}</Text>
            </View>

            <View style={styles.modalContent}>
              {children}
            </View>

            <View style={styles.bottomContainer}>
              {footer}
            </View>
            
          </View>
         </TouchableHighlight>
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