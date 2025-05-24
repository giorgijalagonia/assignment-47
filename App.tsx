/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function ChatsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Chats</Text>
    </View>
  );
}

function UpdatesScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Updates</Text>
    </View>
  );
}

function CallsScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Calls</Text>
    </View>
  );
}

function CommunitiesScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.screenText}>Communities</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Chats"
        screenOptions={({ route }) => ({
          headerStyle: { backgroundColor: '#075e54' },
          headerTintColor: '#fff',
          tabBarActiveTintColor: '#075e54',
          tabBarInactiveTintColor: '#222',
          tabBarStyle: { backgroundColor: '#fff' },
          tabBarLabelStyle: { fontWeight: 'bold' },
          tabBarIcon: ({ color, size, focused }) => {
            let iconName = '';
            if (route.name === 'Chats') iconName = 'message-text-outline';
            if (route.name === 'Updates') iconName = 'update';
            if (route.name === 'Calls') iconName = 'phone-outline';
            if (route.name === 'Communities') iconName = 'account-group-outline';
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Chats" component={ChatsScreen} />
        <Tab.Screen name="Updates" component={UpdatesScreen} />
        <Tab.Screen name="Calls" component={CallsScreen} />
        <Tab.Screen name="Communities" component={CommunitiesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ece5dd',
  },
  screenText: {
    fontSize: 24,
    color: '#075e54',
    fontWeight: 'bold',
  },
});
