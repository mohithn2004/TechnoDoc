import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { Avatar, Icon } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import MapView, { Marker } from 'react-native-maps';

const MapScreen = () => { 
    const navigation = useNavigation()
  return (
    <View style={tw` bg-transparent h-full`}>
    <View style={tw` bg-blue-50 h-3/4`}>
    <MapView
    style={tw`flex-1`}
  initialRegion={{
    latitude:  11.9888128,
    longitude: 75.3790031,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  }}>
  <Marker coordinate={{latitude:  11.9888128,
    longitude: 75.3790031}}/>
    <Marker coordinate={{latitude: 11.9390995,
    longitude: 75.3479531}}/>
    <Marker coordinate={{latitude: 11.9590995,
    longitude: 75.3479531}}
    >
         <Image
    source={require('./images/Ambulance.png')}
    style={{width: 48, height: 60}}
    resizeMode='contain'
  />
    </Marker>
    </MapView>
      </View>
      <View style={tw`flex flex-row`}>
      <View style={tw`w-3/4 bg-blue-100 pb-40 rounded-xl`}>
        <Text style={tw`m-5 text-base font-semibold`}>Driver details</Text>
        <View style={tw`flex flex-row justify-between`}>
            <View style={tw`ml-5`}>
            <Avatar
            size={75}
            rounded
            source={require("./images/male.jpg") }
          /></View>
            <Text style={tw`mr-10 text-base`}>Chokkalingam {'\n'}+91 9591611214</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate("TalkToDoctorScreen")} style={tw`w-1/4 bg-green-50 pb-40 rounded-xl`}>
        <Text style={tw`mt-5 ml-5`}>Talk to {'\n'}Doctor</Text>
        <Icon name="message" size={35} style={tw` mt-5`}/>
        </TouchableOpacity>
        </View>
      </View>
  )
}

export default MapScreen

