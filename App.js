import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Location from 'expo-location';
import { UserLocationContext } from './app/Context/UserLocationContext';
import Colors from './app/Shared/Colors';
import LoginScreen from './app/Secreens/LoginScreen';
import Register from './app/Secreens/Register';
import TabNavigation from './app/Navigations/TabNavigation';

const Stack = createStackNavigator();

export default function App() {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            const location = await Location.getCurrentPositionAsync({});
            setLocation(location);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <UserLocationContext.Provider value={{ location, setLocation }}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName="LoginScreen">
                        <Stack.Screen name="LoginScreen" component={LoginScreen} />
                        <Stack.Screen name="Register" component={Register} />
                        <Stack.Screen name="TabNavigation" component={TabNavigation} />
                    </Stack.Navigator>
                </NavigationContainer>
            </UserLocationContext.Provider>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.WHITE,
        paddingTop: 20,
    },
});
