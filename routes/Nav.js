import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button } from 'react-native';
import Home from '../components/Home'
import Detail_Screen from '../components/Detail_Screen';
// function HomeScreen() {
//     return (
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Home Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }

// function DetailsScreen() {
//     return(
//         <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//             <Text>Details Screen</Text>
//             <Button
//                 title="Go to Details"
//                 onPress={() => navigation.navigate('Details')}
//             />
//         </View>
//     );
// }

const Stack = createStackNavigator();

export default function Routes() {
  return (
        <Stack.Navigator
        headerMode="none"
         initialRouteName="Home">
            <Stack.Screen 
            name="Home" 
            component={Home} />
            <Stack.Screen 
            name="Detail_Screen" 
            component={Detail_Screen} />
            {/* <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} /> */}
        </Stack.Navigator>
  );
}