import { AppRegistry } from 'react-native'
import { name as appName } from './app.json'
import WelcomeScreen from './src/features/auth/WelcomeScreen'

AppRegistry.registerComponent(appName, () => WelcomeScreen)
