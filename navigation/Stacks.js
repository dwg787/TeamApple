import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, TouchableOpacity } from 'react-native';
import Login from '../screens/Login';
import Filter from '../screens/Filter';
import Main from '../screens/Main';

const Stack = createNativeStackNavigator();

export default function Stacks() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name='Login' component={Login} /> */}
      <Stack.Screen name='Filter' component={Filter} />
      <Stack.Screen name='Main' component={Main} />
    </Stack.Navigator>
  );
}
