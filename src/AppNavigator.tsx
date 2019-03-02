import { createStackNavigator, createAppContainer } from 'react-navigation'
import WelcomeScreen from './features/auth/WelcomeScreen'
import NameInputScreen from './features/auth/NameInputScreen'
import Colors from './resources/colors'
import Screens from './resources/screens'
import './config/StatusBarConfig'

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    NameInput: NameInputScreen,
  },
  {
    initialRouteName: Screens.Welcome,
    defaultNavigationOptions: {
      headerTransparent: true,
      headerTintColor: Colors.WarmGrey,
      headerBackTitle: 'Back',
    },
  }
)

export default createAppContainer(AppNavigator)
