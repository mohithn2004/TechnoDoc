import { View, Text, TouchableOpacity, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { Avatar } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";

const SelectFormScreen = () => {
  const navigation = useNavigation();

  const [selected, setSelected] = useState("");

  return (
    <View style={tw`bg-blue-50 h-full`}>
      <Text style={tw`text-xl mt-5 ml-5`}>Select the patient</Text>
      <View style={tw`flex flex-row`}>
        <TouchableOpacity
          onPress={() => {
            setSelected("1");
          }}
          style={
            selected == "1"
              ? tw`m-5 border-4 border-green-300 rounded-full`
              : tw`m-5`
          }
        >
          <Avatar size={75} rounded source={require("./images/TejuPic.jpg")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected("2");
          }}
          style={
            selected == "2"
              ? tw`m-5 border-4 border-green-300 rounded-full`
              : tw`m-5`
          }
        >
          <Avatar size={75} rounded source={require("./images/pic1.jpeg")} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected("3");
          }}
          style={
            selected == "3"
              ? tw`m-5 border-4 border-green-300 rounded-full`
              : tw`m-5`
          }
        >
          <Avatar size={75} rounded source={require("./images/pic2.jpeg")} />
        </TouchableOpacity>
      </View>

      {selected=='1'?
      <View>
      <Text style={tw`text-xl ml-5`}>Check the Identification mark</Text>
        <View
          style={
              tw`my-3 mx-5 bg-white px-5 py-3 rounded-full`
          }
        >
          <Text>Mole on right ring finger</Text>
        </View>
        <View
          style={tw`my-3 mx-5 bg-white px-5 py-3 rounded-full`
          }
        >
          <Text>Birthmark on face</Text>
        </View>
        <View
          style={tw`my-3 mx-5 bg-white px-5 py-3 rounded-full`
          }
        >
          <Text>Scar on left elbow</Text>
        </View>
      </View>:''}

      {selected=='2'?
      <View>
      <Text style={tw`text-xl ml-5`}>Check the Identification mark</Text>
        <View
          style={
              tw`my-3 mx-5 bg-white px-5 py-3 rounded-full`
          }
        >
          <Text>Mole on left index finger</Text>
        </View>
        <View
          style={tw`my-3 mx-5 bg-white px-5 py-3 rounded-full`
          }
        >
          <Text>Mole on chin</Text>
        </View>
        <View
          style={tw`my-3 mx-5 bg-white px-5 py-3 rounded-full`
          }
        >
          <Text>Scar on right ankle</Text>
        </View>
      </View>:''}

      {selected=='3'?
      <View>
      <Text style={tw`text-xl ml-5`}>Check the Identification mark</Text>
        <View
          style={
              tw`my-3 mx-5 bg-white px-5 py-3 rounded-full`
          }
        >
          <Text>Scar on forehead</Text>
        </View>
        <View
          style={tw`my-3 mx-5 bg-white px-5 py-3 rounded-full`
          }
        >
          <Text>Birthmark on right knee</Text>
        </View>
        <View
          style={tw`my-3 mx-5 bg-white px-5 py-3 rounded-full`
          }
        >
          <Text>Scar on right wrist</Text>
        </View>
      </View>:''}


      <View style={tw`m-10`}>
        <TouchableOpacity
        style={tw`my-3 mx-5 bg-blue-200 px-5 py-3 rounded-full`
          }
          onPress={() => navigation.navigate("MapScreen")}
        >
            <Text style={tw`text-base ml-5`}>Check for ambulance</Text>
        </TouchableOpacity>

        <TouchableOpacity
        style={tw`my-3 mx-5 bg-blue-200 px-5 py-3 rounded-full`
          }
          onPress={() => navigation.navigate("TalkToDoctorScreen")}
        >
            <Text style={tw`text-base ml-5`}>Talk to Doctor</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SelectFormScreen;


