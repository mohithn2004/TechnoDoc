import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'


const LoginScreen = () => {

  const navigation = useNavigation()

  return (
    <View style={tw`h-full bg-blue-50`}>
    <View>
    <Image
        style={tw`w-20 h-9 ml-32 mt-5`}
        source={require('./images/logo.png')}
      />
    <Text style={tw`text-base ml-3 mt-16`}>Enter Your Aadhar/Insurance Number</Text>
    <TextInput style={tw`border mx-3 p-3 rounded-full mt-5`}/>
    <Text style={tw`text-base ml-3 mt-8`}>Enter Your Phone Number</Text>
    <TextInput style={tw`border mx-3 p-3 rounded-full mt-5`}/>
    <TouchableOpacity onPress={()=> navigation.navigate('HomeScreen')} style={tw`mx-28 mt-8`}>
        <Text style={tw`px-10 py-5 rounded-full bg-green-100 ml-5`}>Login</Text>
    </TouchableOpacity>
    <Text style={tw`text-lg px-40 ml-5 mt-8`}>Or</Text>
    <View style={tw``}>
    <TouchableOpacity onPress={()=> navigation.navigate('RegisterScreen')} style={tw`ml-28 mr-24 mt-8`}>
        <Text style={tw`px-10 py-5 rounded-full ml-3 bg-green-100`}>Register</Text>
    </TouchableOpacity>
    </View>
    </View>
    </View>
  )
}

export default LoginScreen