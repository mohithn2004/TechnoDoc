import { View, Text, Button, TouchableWithoutFeedback } from 'react-native'
import React, { useRef, useState } from 'react'
import AutoCompleteInput from "react-native-tomtom-autocomplete";
import RBSheet from "react-native-raw-bottom-sheet";
import tw from 'tailwind-react-native-classnames';
import { Avatar, Icon } from 'react-native-elements';
import DoctorsList from './components/DoctorsList';
import { Modal } from 'react-native';
import { TouchableOpacity } from 'react-native';

const DoctorConsultationScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const refRBSheet = useRef();

  return (
    <View style={tw`h-full bg-blue-50`}>

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
        <View style={tw`pl-60`}>
          <Avatar
            size={48}
            rounded
            source={require("./images/TejuPic.jpg") }
          />
        </View>
      </View>
      <View>
      <Text style={tw`ml-5 text-lg`}>Search for Hospital</Text>
      <AutoCompleteInput
      onPress={() => refRBSheet.current.open()}
    inputProps={{
        placeholder: "Search",
    }}
    inputContainerStyle={tw`p-3 border mx-2 rounded-full mt-3`}
    listItemsContainerStyle={tw`ml-2 border border-gray-500 mt-3 bg-gray-100`}
    bottomDivider
    tomtomOptions={{ key: "Ka3ocl48hATBR2gPSpthiCnpPkPE9l7k" }}
/>
      </View>

      <View>
     <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={500}
        customStyles={{
          wrapper: {
            // marginBottom: 200,
            color: '#f6f6f6',
            borderRadius: 20
          },
          draggableIcon: {
            backgroundColor: "#000"
          }

        }}
      >
      <DoctorsList/>
      </RBSheet>
    </View>
      </View>
  )
}

export default DoctorConsultationScreen

