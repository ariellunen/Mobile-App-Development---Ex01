import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import VoteScreen from './src/screens/VoteScreen';
import StatusScreen from './src/screens/StatusScreen';

const navigator = createStackNavigator(
  {
    Vote: {
      screen: VoteScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
    Status: {
      screen: StatusScreen,
      navigationOptions: {
        headerShown: false,
      },
    },
  },
  {
    initialRouteName: 'Vote',
  },
);
export default createAppContainer(navigator);
