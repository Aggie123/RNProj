import React from 'react'
import {
  View,
  Text,
  Navigator,
  StyleSheet
} from 'react-native'
import CommonStyles from '../Common/CommonStyles'
import BaseComponent from '../Component/BaseComponent'
import CommonNavBar from '../Component/NavBar/CommonNavBar'
import ScrollFun from './ScrollFun'
import CommonModal from '../Component/Modal/CommonModal'
import Modal2 from '../Component/Modal/Modal2'
import MiButton from '../Component/Button/index'

export default class Example extends BaseComponent {
  constructor(props) {
    super(props);
  }

  static get defaultProps() {
    return {
      title: 'Example'
    };
  }

  render() {
    const {
      route,
      navigator
    } = this.props;
    let btnActions = {
      onPressBack: this._onPressBack.bind(this),
      openThisComponent: this._openThisComponent.bind(this)
    }
    return (
      <View style={styles.container}>
        <CommonNavBar title={route.title} {...btnActions}/>
        <Text>Button</Text>
        <View style={styles.box}>  
          <MiButton
            text={'default'}
            type={'default'}
            onClick={()=>{}}
            containerStyle={{marginRight:10}}
            textStyle={{}}
            />
          <MiButton
            text={'warn'}
            type={'warn'}
            onClick={()=>{}}
            containerStyle={{marginRight:10}}
            textStyle={{}}
            />
          <MiButton
            text={'sec'}
            type={'sec'}
            size={'default'}
            onClick={()=>{}}
            containerStyle={{marginRight:10}}
            textStyle={{}}
            />    
        </View>
        <View style={styles.box}>  
          <MiButton
            text={'default'}
            type={'default'}
            disabled={true}
            onClick={()=>{}}
            containerStyle={{marginRight:10}}
            textStyle={{}}
            />
          <MiButton
            text={'warn'}
            type={'warn'}
            disabled={true}
            onClick={()=>{}}
            containerStyle={{marginRight:10}}
            textStyle={{}}
            />
          <MiButton
            text={'sec'}
            type={'sec'}
            size={'default'}
            disabled={true}
            onClick={()=>{}}
            containerStyle={{marginRight:10}}
            textStyle={{}}
            />    
        </View>
        <View style={styles.box}>
          <MiButton
              text={'default'}
              type={'default'}
              size={'large'}
              onClick={()=>{}}
              containerStyle={{flex:1}}
              textStyle={{}}
              />
        </View>
         <View style={styles.box}>
          <MiButton
              text={'default'}
              type={'default'}
              size={'large'}
              disabled={true}
              onClick={()=>{}}
              containerStyle={{flex:1}}
              textStyle={{}}
              />
        </View>
        
        
        <Text style={{marginTop:20}}>Modal</Text>
          <CommonModal/>
          <Modal2/>

        {/*<View style={{flexDirection:'row'}}>
          <CommonModal/>
          <Modal2/>
        </View>*/}

      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: CommonStyles.viewWidth,
  },
  box: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  }
})