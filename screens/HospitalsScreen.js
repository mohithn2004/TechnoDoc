import { View, Text } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import AutoCompleteInput from "react-native-tomtom-autocomplete";
import MapView, { Marker } from 'react-native-maps';
import { Avatar, Icon } from 'react-native-elements';
import { Modal } from 'react-native';
import { TouchableOpacity } from 'react-native';
const HospitalsScreen = () => {  
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  const lat = 11.9394854;
  const long = 75.3472446;

  return (
    <View style={tw`bg-blue-50 h-full`}>

<Modal
        style={tw`absolute`}
        visible={modalVisible}
        onRequestClose={hideModal}
        transparent
      >
        <View style={tw`bg-blue-100 mr-40 pb-72`}>
          <View style={tw`mt-5 ml-32`}>
            <Icon name="close" size={30} onPress={hideModal} type="antdesign" />
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


    <View style={tw`flex flex-row pl-5`}>
        <Icon name="menu" size={35} style={tw`pl-5 mt-2`} onPress={showModal} />
        <View style={tw`pl-60 mt-3`}>
          <Avatar
            size={48}
            rounded
            source={require("./images/TejuPic.jpg") }
          />
        </View>
      </View>
      <View style={tw`h-1/4 mt-3`}>
      <Text style={tw`text-lg ml-5`}>Search for hospitals</Text>
        <AutoCompleteInput
    inputProps={{
        placeholder: "Search",
    }}
    inputContainerStyle={tw`p-3 border mx-2 rounded-full mt-3`}
    listItemsContainerStyle={tw`ml-2 border border-gray-500 mt-3 bg-gray-100`}
    bottomDivider
    tomtomOptions={{ key: "Ka3ocl48hATBR2gPSpthiCnpPkPE9l7k" }}
/>
      </View>
      <View style={tw`mx-5`}>
      <MapView
    style={{ 
              width: 325,
              height: 450
            }}
  initialRegion={{
    latitude:  lat,
    longitude: long,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  }}>
  <Marker coordinate={{latitude:  lat,
    longitude: long}}/>
    </MapView>
      </View>
    </View>
  )
}

export default HospitalsScreen

