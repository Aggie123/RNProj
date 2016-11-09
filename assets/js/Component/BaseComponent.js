import React,{
  Component
} from 'react';

export default class BaseComponent extends Component {

  constructor(props) {
        super(props);
    }


  _openThisComponent(title,component){
    let {navigator,route}=this.props;
    //console.log('BaseComponent navigator',navigator);
    const nextIndex = route.index + 1;
    navigator.push({
      title: title,
      index: nextIndex,
      component:component
    });

  }

  _onPressBack(){
    let {navigator,route}=this.props;
    //console.log('BaseComponent navigator',navigator);
    navigator.pop();
  }

  render() {
    return false;
  }
}
