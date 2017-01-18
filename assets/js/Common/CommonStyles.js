'use strict';
//import React from 'react'
import {Dimensions,PixelRatio} from 'react-native'

let CommonStyles={
	touchHighlightBg:'rgba(128,0,0,0.1)',
	touchHighlightBgGrey:'rgba(128,128,128,0.1)',
	touchHighlightBgRed:'rgba(99,0,0,0.1)',

	viewWidth:Dimensions.get('window').width,
	viewHeight:Dimensions.get('window').height,

	//common css
	normalRed:'#b60909',
	darkRed:'#990000',
	greyRed:'#f4dcdc',
	darkGreyRed:'#f5e5e5',

	btnBorderGrey:'#d6d5d6',
	seperatorGrey:'#e5e5e5',

}


module.exports=CommonStyles;