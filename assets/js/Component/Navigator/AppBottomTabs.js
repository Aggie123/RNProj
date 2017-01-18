import React,{Component,PropTypes} from'react'
import {View,Text} from 'react-native'

export default YourTabs = createAppNavigationContainer(class extends Component {
  static propTypes = {
    navigationState: NavigationPropTypes.navigationState.isRequired,
    navigate: PropTypes.func.isRequired,
  };

  constructor(props: Object, context: any) {
    super(props, context);
  }

  render(): React.Element {
    return (
      <View style={styles.tabs}>
        {this.props.navigationState.routes.map(this._renderTab, this)}
      </View>
    );
  }

  _renderTab(route: Object, index: number): React.Element {
    return (
      <YourTab
        key={route.key}
        route={route}
        selected={this.props.navigationState.index === index}
      />
    );
  }
});

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  navigatorCardStack: {
    flex: 20,
  },
  tabs: {
    flex: 1,
    flexDirection: 'row',
  },
  tab: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'center',
  },
  tabText: {
    color: '#222',
    fontWeight: '500',
  },
  tabSelected: {
    color: 'blue',
  },
});