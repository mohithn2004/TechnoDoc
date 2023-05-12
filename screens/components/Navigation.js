import {View, Text,TouchableOpacity,  Image,ScrollView, SafeAreaView,} from "react-native";
import React, { useState } from "react";
import { Icon, Avatar, Button } from "react-native-elements";
import tw from "tailwind-react-native-classnames";
import { Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
const Navigation = () => {
  const navigation = useNavigation()

  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <View>
      <Modal
        style={tw`absolute`}
        visible={visible}
        onRequestClose={hide}
        transparent
      >
        <View style={tw`bg-blue-100 mr-40 pb-72`}>
          <View style={tw`mt-5 ml-32`}>
            <Icon name="close" size={30} onPress={hide} type="antdesign" />
          </View>
          <TouchableOpacity style={tw`flex flex-row`}>
          <View style={tw`mt-5 ml-5`}>
          <Icon name="home" size={30} />
          </View>
            <Text style={tw`ml-3 my-5 text-lg `}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row`}>
          <View style={tw`mt-5 ml-5`}>
          <Icon name="settings" size={30} />
          </View>
            <Text style={tw`ml-3 my-5 text-lg `}>Settings</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row`}>
          <View style={tw`mt-5 ml-5`}>
          <Icon name="help" size={30} />
          </View>
            <Text style={tw`ml-3 my-5 text-lg `}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row`}>
          <View style={tw`mt-5 ml-5`}>
          <Icon name="person" size={30} />
          </View>
            <Text style={tw`ml-3 my-5 text-lg `}>My Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row`}>
          <View style={tw`mt-5 ml-5`}>
          <Icon name="info" size={30} />
          </View>
            <Text style={tw`ml-3 my-5 text-lg `}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity style={tw`flex flex-row`}>
          <View style={tw`mt-5 ml-5`}>
          <Icon name="message" size={30} />
          </View>
            <Text style={tw`ml-3 my-5 text-lg `}>Feedback</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <View style={tw`bg-white`}>
      <View style={tw`flex flex-row pl-5`}>
        <Icon name="menu" size={35} style={tw`pl-5 mt-2`} onPress={show} />
        <Image
        style={tw`w-20 h-9 ml-20`}
        source={require('../images/logo.png')}
      />
        <View style={tw`ml-20`}>
          <Avatar
            size={48}
            rounded
            source={require("../images/TejuPic.jpg") }
          />
        </View>
      </View>
      <Text style={tw`text-2xl mt-5 ml-6 font-extrabold `}>
        Hello{" "}
        <Text
          style={{
            color: "#99DDCC",
            fontWeight: "bold",
            // fontFamily: "sans-serif",
          }}
        >
          Tejashwini!
        </Text>
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
        onPress={()=> navigation.navigate('AmbulanceScreen')}
          style={tw`ml-5 mr-5 mt-10 px-14 pt-5 pb-5 border-8 border-red-100 rounded-lg`}
        >
          <View style={tw`flex flex-row`}>
            <Text style={tw`text-2xl mt-7`}>Emergency</Text>
            <Image
              style={{ width: 150, height: 95, resizeMode: "contain" }}
              source={require("../images/Ambulance.png")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=> navigation.navigate('DoctorConsultationScreen')}
          style={tw`ml-5 mr-5 mt-10 px-14 pt-5 pb-5 border-8 border-blue-100 rounded-lg`}
        >
          <View style={tw`flex flex-row`}>
            <Text style={tw`text-2xl mt-7`}>Doctor Consultation</Text>
            <Image
              style={{ width: 150, height: 95, resizeMode: "contain" }}
              source={require("../images/doctor-appointment.jpeg")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=> navigation.navigate('HospitalsScreen')}
          style={tw`ml-5 mr-5 mt-10 px-14 pt-5 pb-5 border-8 border-gray-100 rounded-lg`}
        >
          <View style={tw`flex flex-row`}>
            <Text style={tw`text-2xl mt-7`}>Hospitals near me</Text>
            <Image
              style={{ width: 80, height: 105, resizeMode: "contain" }}
              source={require("../images/location.jpg")}
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
         onPress={()=> navigation.navigate('MonthlyPrescriptionScreen')}
          style={tw`ml-5 mr-5 mt-10 px-14 pt-5 pb-5 border-8 border-green-100 rounded-lg`}
        >
          <View style={tw`flex flex-row`}>
            <Text style={tw`text-2xl mt-7`}>Monthly Prescription</Text>
            <Image
              style={{ width: 130, height: 95, resizeMode: "contain" }}
              source={require("../images/appointment.jpg")}
            />
          </View>
        </TouchableOpacity>
        <View style={tw`my-44`} />
      </ScrollView>
      </View>
    </View>
  );
};

export default Navigation;
