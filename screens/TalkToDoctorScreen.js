import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { useHeaderHeight } from '@react-navigation/elements'
import { Avatar, Icon } from 'react-native-elements'
import { TouchableOpacity } from 'react-native'

const TalkToDoctorScreen = () => {

  return (
    <View style={tw`bg-blue-50 h-full`}>
    <View style={tw`px-2 py-5 flex flex-row items-end`}>
      <Avatar size={125} rounded source={require("./images/maleDoc.jpeg")} />
      <Text style={tw`mb-12 ml-3 text-base`}>Connected to <Text style={tw`font-bold`}>Dr.Ramalingam</Text></Text>
      <View style={tw`ml-2 `}>
      </View>
    </View>
    <View style={{marginTop:500,paddingHorizontal:50,paddingVertical:5, borderWidth:2, borderColor: 'black', borderRadius:9999,display:'flex', flexDirection:'row'}}>
        <TextInput placeholder='Type your message here'/> 
        <TouchableOpacity style={tw`ml-28`}>
        <Icon name="mic" size={30} />
        </TouchableOpacity>
        </View>
    <View>
    </View>
    </View>
  )
}

export default TalkToDoctorScreen

