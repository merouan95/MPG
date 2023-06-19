import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DetailJoueurScreen from '../screens/DetailJoueurScreen';
import ListeJoueursScreen from '../screens/ListeJoueursScreen';
import { DetailJoueurScreenProps, Joueur } from '../interfaces/joueurs.interfaces';

export type RootStackParamList = {
    ListeJoueursScreen: undefined;
    DetailJoueurScreen: { joueur: Joueur };  
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const indexNavigation : React.FC= () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={"ListeJoueursScreen"} screenOptions={{  }}>
                <Stack.Screen name="ListeJoueursScreen" component={ListeJoueursScreen} />
                <Stack.Screen name="DetailJoueurScreen" component={DetailJoueurScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default indexNavigation;