import React from 'react'
import {
  View,
  Text,
  Navigator,
  TouchableHighlight,
  StyleSheet,
  Image,
  ListView
} from 'react-native';

import BaseComponent from '../Component/BaseComponent'
import CommonNavBar from '../Component/NavBar/CommonNavBar'
import CommonStyles from '../Common/CommonStyles'
import Page1 from './Page1';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import PageList from './PageList'
import homeList from '../Data/data'
import AppBottom from '../Component/AppBottom'

var img1=require('../../res/img/banner1.jpg');

export default class Home extends BaseComponent {
  constructor(props) {
    super(props);
    this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
       dataSource: this.ds.cloneWithRows(homeList),
    };
  }

  /*ComponentWillMount(){
    console.log('homeList',homeList)
    
    this.setState({
      dataSource:this.ds.cloneWithRows(homeList)
    })

  }*/

  _renderRow(rowData, sectionID, rowID){
    let data=rowData;
    return (
      <View style={{height:80,flexDirection:'row',alignItems:'center',backgroundColor:'#fff',borderBottomWidth :1,borderColor:'#eee'}} key={data.id}>
        
        <Image style={{width:70,height:70}} source={{uri:'http://static.home.mi.com/app/shop/img?id=shop_295d6f30a3654063c770265e66fdce58.jpeg&w=420&h=240'}} />

        <View style={{flex:1}}>
          <Text style={{fontSize:14}} numberOfLines={1}>{data.name}</Text>
          <Text style={{color:'#aaa',fontSize:12}} numberOfLines={2}>{data.description}</Text>
          <Text style={{color:'#f00',fontSize:15}}>¥{data.price}</Text>
        </View>
      </View>
      )
  }

  _renderHeader(){
    return (
      <View>
        <Text style={{textAlign:'center',fontSize:14,color:'#000'}}>商品列表</Text>
      </View>
      )
  }


  render() {
    let {route}=this.props;

    return (
      <View style={styles.container}> 
        <Image source={img1} style={styles.bannerTop}/>
        <View style={styles.menuContainer}>
          <TouchableHighlight style={styles.menuBtn} underlayColor={CommonStyles.touchHighlightBg} onPress={this._openThisComponent.bind(this,'Page1',Page1)}>
            <Text style={styles.menuBtnTxt}>Page 1</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuBtn} underlayColor={CommonStyles.touchHighlightBg} onPress={this._openThisComponent.bind(this,'Page2',Page2)}>
            <Text style={styles.menuBtnTxt}>Page 2</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuBtn} underlayColor={CommonStyles.touchHighlightBg} onPress={this._openThisComponent.bind(this,'PageList',PageList)}>
            <Text style={styles.menuBtnTxt}>Page 3</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.menuBtn} underlayColor={CommonStyles.touchHighlightBg} onPress={this._openThisComponent.bind(this,'Page4',Page4)}>
            <Text style={styles.menuBtnTxt}>Page 4</Text>
          </TouchableHighlight>
        </View>

        <View style={styles.contentContainer}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this._renderRow}
            //renderHeader={this._renderHeader}
            style={{flex:1}}
            automaticallyAdjustContentInsets={false}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps={true}
            showsVerticalScrollIndicator={true}
            />
        </View>

      </View>
    )
  }
}

Home.defaultProps={
  title:'Home'
}

const styles=StyleSheet.create({
  container:{
    width:CommonStyles.viewWidth,
    height:CommonStyles.viewHeight,
  },
  bannerTop:{
    height:150,
    width:CommonStyles.viewWidth,
    resizeMode :'contain'
  },
  menuContainer:{
    //flex:1,
    flexDirection:'row',
    height:40,  
  },
  menuBtn:{
    flex:1,
    backgroundColor:'#dec',
    //justifyContent:'center'
  },
  menuBtnTxt:{
    textAlign:'center',
    fontSize:14,
    margin:10,
  },
  contentContainer:{
    flex:1,
    width:CommonStyles.viewWidth,
    //marginBottom:40,
    //backgroundColor:'#f00'
  }
})


 /* _onPressPage() {
    let {navigator,route}=this.props;
    console.log('this.props',this.props);
    const nextIndex = route.index + 1;
    navigator.push({
      title: 'Scene ' + nextIndex,
      index: nextIndex,
      component:Page1
    });
  }

  _openThisPage(){
    let {navigator,route}=this.props;
    console.log('this.props',this.props);
    navigator.push({
      title: 'Scene ' + nextIndex,
      index: nextIndex,
      component:Page1
    });

  }

  _openThisComponent(title,component){
    let {navigator,route}=this.props;
    console.log('this.props',this.props);
    const nextIndex = route.index + 1;
    navigator.push({
      title: title,
      index: nextIndex,
      component:component
    });

  }

  _onPressBack(){
    let {navigator,route}=this.props;
    navigator.pop();
  }*/