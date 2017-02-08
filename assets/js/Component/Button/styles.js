import {
	StyleSheet,
	PixelRatio
} from 'react-native'
import CommonStyles from '../../Common/CommonStyles'
import Theme from '../../Common/Theme'

let styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 3,
	},
	//css by type
	container_default: {
		backgroundColor: '#fff',
		borderColor: CommonStyles.normalRed,
		borderWidth: 1 / PixelRatio.get(),
	},
	container_warn: {
		backgroundColor: CommonStyles.normalRed,
	},
	container_sec: {
		backgroundColor: '#fff',
		borderColor: CommonStyles.btnBorderGrey,
		borderWidth: 1 / PixelRatio.get(),
	},
	//css by disabled
	container_disabled_default: {
		backgroundColor: '#fefcfc',
		borderColor: '#ebcccc',
		borderWidth: 1 / PixelRatio.get(),
	},
	container_disabled_warn: {
		backgroundColor: '#e9b5b5',
	},
	container_disabled_sec: {
		backgroundColor: '#fafcfb',
		borderWidth: 1 / PixelRatio.get(),
	},
	//css by size
	container_size_default: {
		paddingTop: 8,
		paddingBottom: 8,
		paddingLeft: 10,
		paddingRight: 10,
		minWidth: 64,
	},
	container_size_large: {
		//width: 978 / 3,
		height: 132 / 3,
		borderRadius: 5,
	},
	container_size_small: {

	},

	text: {
		fontSize: Theme.font13
	},
	//text css by type
	text_default: {
		color: CommonStyles.normalRed,
	},
	text_warn: {
		color: '#fff',
	},
	text_sec: {
		color: '#000'
	},
	//text css by size
	text_size_large: {
		fontSize: Theme.font15,
	},
	text_size_default: {
		fontSize: Theme.font13,
	},
	//text css by disabled
	text_disabled_default: {
		color: '#ecdada',
	},
	text_disabled_warn: {
		color: '#f4dcdc',
	},
	text_disabled_sec: {
		color: '#ccc'
	},
	text_green:{
		color:'#00b377'
	}

})

export {
	styles
}