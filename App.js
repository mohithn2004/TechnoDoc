
import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import HomeScreen from "./screens/HomeScreen";
import AmbulanceScreen from "./screens/AmbulanceScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DoctorConsultationScreen from "./screens/DoctorConsultationScreen";
import HospitalsScreen from "./screens/HospitalsScreen";
import MonthlyPrescriptionScreen from "./screens/MonthlyPrescriptionScreen";
import SelectFormScreen from "./screens/SelectFormScreen";
import MapScreen from "./screens/MapScreen";
import TalkToDoctorScreen from "./screens/TalkToDoctorScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";

const App = () => {
  const Stack = createNativeStackNavigator()

  return (
  
      <NavigationContainer style={tw`bg-white`}>
        <SafeAreaProvider style={tw`mt-10 bg-white`}>
        <Stack.Navigator>
        <Stack.Screen 
          name='LoginScreen'
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='RegisterScreen'
          component={RegisterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='HomeScreen'
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='AmbulanceScreen'
          component={AmbulanceScreen}
          options={{headerShown: false}}
        />
  
        <Stack.Screen 
          name='DoctorConsultationScreen'
          component={DoctorConsultationScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='HospitalsScreen'
          component={HospitalsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='MonthlyPrescriptionScreen'
          component={MonthlyPrescriptionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='SelectFormScreen'
          component={SelectFormScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='MapScreen'
          component={MapScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen 
          name='TalkToDoctorScreen'
          component={TalkToDoctorScreen}
          options={{headerShown: false}}
        />
        </Stack.Navigator>
        </SafeAreaProvider>
      </NavigationContainer> 
    
  );
};

export default App;

