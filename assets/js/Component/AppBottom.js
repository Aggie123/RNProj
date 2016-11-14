import React,{Component} from 'react'
import {View,StyleSheet,TouchableHighlight,Text} from 'react-native'
import CommonStyles from '../Common/CommonStyles'

let navMenuBottom=['首页','动态','发现','我的']

export default class AppBottom extends Component{

	render (){
		return (
			<View style={styles.container}>
				{navMenuBottom.map((value,index)=>
					<TouchableHighlight key={index} style={styles.navItem}>
						<Text style={styles.navItemTxt}>{value}</Text>
					</TouchableHighlight>
					)}

			</View>
			)
	}
}

let styles=StyleSheet.create({
	container:{
		flexDirection:'row',
		width:CommonStyles.viewWidth,
		height:40,
		backgroundColor:'#eee',	
	},
	navItem:{
		flex:1,
		/*justifyContent: 'center',
		alignItems: 'center',*/
		//backgroundColor:'#f00',
		height:40

	},
	navItemTxt:{
		textAlign:'center',
		margin:10
	}
})