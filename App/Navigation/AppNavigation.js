import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'

// Manifest of possible screens
const AppNavigation = createStackNavigator({
  LaunchScreen: {
    screen: LaunchScreen
  }
}, {
    // Default config for all screens
    headerMode: 'none',
    initialRouteName: 'LaunchScreen',
  })

export default createAppContainer(AppNavigation)
