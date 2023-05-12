import { View, Text, Button } from "react-native";
import React, { useCallback } from "react";
import tw from "tailwind-react-native-classnames";
import { Avatar, Icon } from "react-native-elements";
import { TouchableOpacity } from "react-native";
import { FAB } from "react-native-elements";
import { Modal } from "react-native";
import { useState } from "react";
import { TextInput } from "react-native";
import DateField from "react-native-datefield";

const Medication = ({ medication }) => {
  return (
    <View style={tw`bg-blue-100 mt-5 p-5 rounded-xl mx-3`}>
      <Text style={tw`text-lg`} >{medication.name}</Text>
      <Text style={tw`text-gray-500`} >{medication.startDate} to {medication.endDate}</Text>
    </View>
  );
};

const MonthlyPrescriptionScreen = () => {
  const [medications, setMedications] = useState([]);
  const [medicationName, setMedicationName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSave = () => {
    const newMedication = {
      name: medicationName,
      startDate,
      endDate,
    };
    setMedications([...medications, newMedication]);
    setMedicationName('');
    setStartDate('');
    setEndDate('');
    setVisible(false)
  };

  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);


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


      <View style={tw`flex flex-row`}>
      <View style={tw`ml-5 mt-5`}>
        <Icon name="menu" size={35}  onPress={showModal} />
        </View>
        <View style={tw`pl-60 mt-5`}>
          <Avatar size={48} rounded source={require("./images/TejuPic.jpg")} />
        </View>
      </View>
      <View >
      {medications.map((medication, index) => (
          <Medication medication={medication} key={index} />
        ))}
        </View>
      <TouchableOpacity>
        <View style={{marginTop: 600, marginLeft: 300}}>
          <FAB
          placement="right"
            onPress={show}
            icon={{ name: "add", color: "white" }}
            color="#99ddcc"
          />
        </View>
      </TouchableOpacity>
      <View>
        <Modal
          style={tw`absolute`}
          visible={visible}
          onRequestClose={hide}
          transparent

        >
          <View style={tw`ml-3 mt-28`}>
            <View style={tw`bg-gray-100 mr-3`}>
              <View style={tw`mt-5 ml-60`}>
                <Icon name="close" size={30} onPress={hide} type="antdesign" />
              </View>
              <Text style={tw`text-base ml-3 mt-3`}>Enter the medicine</Text>
              <TextInput
              value={medicationName}
            onChangeText={setMedicationName}
                style={tw`text-base mx-3 px-3 py-1 mt-3 border rounded-full`}
                placeholder="Enter here"
              />
                {/* // styleInput={tw`text-base mx-1 px-3 py-1 mt-3 border rounded-full`} */}
              <Text style={tw`text-base ml-3 mt-5`}>
                Enter the Starting date
              </Text>
              <TextInput
            style={tw`text-base mx-3 px-3 py-1 mt-3 border rounded-full`}
            placeholder="Start Date"
            value={startDate}
            onChangeText={setStartDate}
          />
              <Text style={tw`text-base ml-3 mt-5`}>Enter the Ending date</Text>
              <TextInput
            style={tw`text-base mx-3 px-3 py-1 mt-3 border rounded-full`}
            placeholder="End Date"
            value={endDate}
            onChangeText={setEndDate}
          />
              <View style={tw`m-8`}>
                <Button  onPress={handleSave} color="#99ddcc" title="Submit" />
              </View>
            </View>
          </View>
        </Modal>
      </View>
      </View>
  );
};

export default MonthlyPrescriptionScreen;
