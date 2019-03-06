import React from 'react'
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
} from 'react-navigation'
import Colors from './resources/colors'
import Screens from './resources/screens'
import './config/StatusBarConfig'
import WelcomeScreen from './features/auth/WelcomeScreen'
import NameInputScreen from './features/auth/NameInputScreen'
import CredentialsScreen from './features/auth/CredentialsScreen'
import LoginScreen from './features/auth/LoginScreen'
import ForgotPasswordScreen from './features/auth/ForgotPasswordScreen'
import EmailSentScreen from './features/auth/EmailSentScreen'
import WishListScreen from './features/wishes/WishListScreen'
import { Image } from 'react-native'
import Images from './resources/images'
import { Strings } from './resources/strings'

const defaultNavigationOptions = {
  headerTransparent: true,
  headerTintColor: Colors.WarmGrey,
  headerBackTitle: Strings.General_Back,
}

const AuthNavigator = createStackNavigator(
  {
    Welcome: WelcomeScreen,
    NameInput: NameInputScreen,
    Credentials: CredentialsScreen,
    Login: LoginScreen,
    ForgotPassword: ForgotPasswordScreen,
    EmailSent: EmailSentScreen,
  },
  {
    initialRouteName: Screens.Welcome,
    defaultNavigationOptions: defaultNavigationOptions,
  }
)

const WishListNavigator = createStackNavigator(
  {
    WishList: WishListScreen,
  },
  {
    initialRouteName: Screens.WishList,
    defaultNavigationOptions: defaultNavigationOptions,
  }
)

const TabNavigator = createBottomTabNavigator(
  {
    WishList: {
      screen: WishListNavigator,
      navigationOptions: {
        tabBarLabel: Strings.TabMenu_WishLists,
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={Images.MenuGift} style={{ tintColor: tintColor }} />
        ),
      },
    },
    Account: {
      screen: WishListNavigator,
      navigationOptions: {
        tabBarLabel: Strings.TabMenu_Account,
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={Images.MenuAccount} style={{ tintColor: tintColor }} />
        ),
      },
    },
    Settings: {
      screen: WishListNavigator,
      navigationOptions: {
        tabBarLabel: Strings.TabMenu_Settings,
        tabBarIcon: ({ tintColor }: any) => (
          <Image source={Images.MenuSettings} style={{ tintColor: tintColor }} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.Pumpkin,
      inactiveTintColor: Colors.WarmGrey,
    },
  }
)

const AppNavigator = createSwitchNavigator(
  {
    AuthNavigator: AuthNavigator,
    TabNavigator: TabNavigator,
  },
  {
    initialRouteName: 'AuthNavigator',
  }
)

export default createAppContainer(AppNavigator)
