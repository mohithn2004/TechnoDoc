import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Form = () => {

  const [ambu, setAmbu] = useState('')
  const [age, setAge] = useState('')
  const [gender, setGender] = useState('')

  const navigation = useNavigation()

  return (
    <View>
      <View style={tw`flex mt-10`}>
        <TouchableOpacity onPress={() => {setAmbu('basic')}} >
          <Text style={ambu=='basic' ? tw`mx-3 p-4 bg-green-200 mb-5 rounded-xl text-base` : tw`mx-3 p-4 bg-white mb-5 rounded-xl text-base`}>
            Basic Ambulance
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {setAmbu('suffix')}}>
          <Text style={ambu=='suffix' ? tw`mx-3 p-4 bg-green-200 mb-5 rounded-xl text-base` : tw`mx-3 p-4 bg-white mb-5 rounded-xl text-base `}>
            Sophisticated Ambulance
          </Text>
        </TouchableOpacity>
      </View>
      <View style={tw`mx-8 mt-2`}>
        <Text style={tw`text-lg mt-3`}>Enter the Patient's Age category</Text>
        <View style={tw`flex justify-between flex-row mt-3`}>
            <TouchableOpacity onPress={()=>{setAge('child')}} style={age=='child' ? tw`bg-blue-300 p-5 pb-11 rounded-xl` : tw`bg-white p-5 pb-11 rounded-xl` }>
            <Text style={tw`text-base mt-3`}>Child</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setAge('adult')}} style={age=='adult' ? tw`bg-blue-300 p-5 pb-11 rounded-xl` : tw`bg-white p-5 pb-11 rounded-xl` }>
            <Text style={tw`text-base mt-3`}>Adult</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setAge('senior citizen')}} style={age=='senior citizen' ? tw`bg-blue-300 p-5 pb-11 rounded-xl` : tw`bg-white p-5 pb-11 rounded-xl` }>
            <Text style={tw`text-base`}>Senior {"\n"}<Text>Citizen</Text></Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={tw`mx-8 `}>
        <Text style={tw`text-lg mt-3`}>Enter the Patient's Gender</Text>
        <View style={tw`flex justify-between flex-row mt-3`}>
            <TouchableOpacity onPress={()=>{setGender('male')}} style={gender=='male'? tw`bg-blue-300 p-5 pb-11 rounded-xl`:tw`bg-white p-5 pb-11 rounded-xl`}>
            <Text style={tw`text-base mt-3`}>Male</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setGender('female')}} style={gender=='female'? tw`bg-red-200 p-5 pb-11 rounded-xl`:tw`bg-white p-5 pb-11 rounded-xl`}>
            <Text style={tw`text-base mt-3`}>Female</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{setGender('others')}} style={gender=='others'? tw`bg-green-200 p-5 pb-11 rounded-xl`:tw`bg-white p-5 pb-11 rounded-xl`}>
            <Text style={tw`text-base mt-3`}>Others</Text>
            </TouchableOpacity>
        </View>
      </View>
    <View style={tw`mx-24 my-10`}>
    <Button onPress={()=> navigation.navigate('SelectFormScreen')} title="Submit" color="#99ddcc"></Button>
    </View>
    </View>
  );
};

export default Form;
