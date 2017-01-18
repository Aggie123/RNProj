import React, {
  Component
} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  PixelRatio,
} from 'react-native'
import CommonStyles from '../../Common/CommonStyles'
import {styles} from './styles'

export default class MiButton extends Component {
  constructor(props) {
    super(props);
  }

  static get defaultProps() {
    return {
      text: 'Button',
      type:'default',//default,warn,sec,
      size:'default',//large,default,small(no small so far)
      disabled:false
    };
  }

  static propTypes = {
    text: React.PropTypes.string, 
    type:React.PropTypes.string,
    size:React.PropTypes.string,
    disabled:React.PropTypes.bool,
    onClick:React.PropTypes.function,
  }

  render() {
    let {text,type,size,disabled,onClick,containerStyle,textStyle}=this.props;
    let containerStyleType=type?`container_${type}`:'container_default',
        textStyleType=type?`text_${type}`:'text_default',
        containerStyleSize=size?`container_size_${size}`:'container_size_default',
        textStyleSize=size?`text_size_${size}`:'text_size_default';
    if(disabled){
      var containerDisabled=type?`container_disabled_${type}`:'container_disabled_default',
          textDisabled=type?`text_disabled_${type}`:'text_disabled_default';
    }
    let containerStyleDisabled=disabled?styles[containerDisabled]:{},
    textStyleDisabled=disabled?styles[textDisabled]:{};

    return (
      <TouchableHighlight 
        onPress={this.props.onClick} 
        underlayColor={CommonStyles.touchHighlightBg}
        style={[styles.container,styles[containerStyleType],styles[containerStyleSize],containerStyleDisabled,containerStyle]}>
        <Text style={[styles.text,styles[textStyleType],styles[textStyleSize],textStyleDisabled,textStyle]}>{this.props.text}</Text>
      </TouchableHighlight>
    )
  }
}
