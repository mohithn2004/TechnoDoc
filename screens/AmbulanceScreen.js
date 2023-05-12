import { View, Text } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Form from './components/Form'
import HomeScreen from './HomeScreen'

const AmbulanceScreen = () => {
  return (
    <View style={tw`bg-blue-50 h-full`}>
      <Form/>
    </View>
  )
}

export default AmbulanceScreen

