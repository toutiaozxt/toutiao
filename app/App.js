
import HomeScreen from './screen/HomeScreen'
import NewsScreen from './screen/NewsScreen'
import CollectScreen from './screen/CollectScreen'
import SetScreen from './screen/SetScreen'
import {StackNavigator} from 'react-navigation';


export default App = StackNavigator({
  homeScreen: {
    screen: HomeScreen,
    navigationOptions: {
      cardStack: {gesturesEnabled: true},
      header: null,
    }
  },
  newsScreen: {
    screen: NewsScreen,
    // path:'http://3g.163.com/news/18/0419/20/DFPJ1H8900018AOQ.html',
    // navigationOptions: {
    //   // title: 'welcome',
    //   cardStack: {gesturesEnabled: true},
    //   // header: 

    // }
  },
  // collectScreen: {
  //   screen: CollectScreen,
  // },
  // setScreen: {
  //   screen: SetScreen,
  // }
}, {
    initialRouteName: 'homeScreen', // 默认显示界面
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        // header: 
        cardStack: {
            gesturesEnabled: true
        }
    }, 
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    cardStyle: {backgroundColor: '#f3f3f2'},
    headerMode: 'screen', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    // onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    // onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});


