import { createStackNavigator, createAppContainer } from 'react-navigation'
import Colors from './resources/colors'
import Screens from './resources/screens'
import './config/StatusBarConfig'
import WelcomeScreen from './features/auth/WelcomeScreen'
import NameInputScreen from './features/auth/NameInputScreen'
import CredentialsScreen from './features/auth/CredentialsScreen'
import LoginScreen from './features/auth/LoginScreen'
import ForgotPasswordScreen from './features/auth/ForgotPasswordScreen'

const AppNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    NameInput: NameInputScreen,
    Credentials: CredentialsScreen,
    Login: LoginScreen,
    ForgotPassword: ForgotPasswordScreen,
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
