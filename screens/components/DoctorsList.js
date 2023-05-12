import { View, Text, ScrollView, TouchableOpacity, Button, TextInput } from "react-native";
import React, { useState } from "react";
import tw from "tailwind-react-native-classnames";
import { Avatar } from "react-native-elements";
import DateField from "react-native-datefield";

const Appointment = () => {
  return(
    <Text style={tw`text-2xl m-5 mt-28`}>Your Appointment Has been Booked.</Text>
  )
}


const DateAndTime = () =>{

  const [showApt,setShowApt] = useState(false)

  return(
    <View>
      {showApt==false?<View><Text style={tw`text-lg ml-2`}>Date of Appointment</Text>
       <DateField
              styleInput={tw`text-base px-5 py-1 mt-3 border rounded-full`}
                labelDate="Date"
                labelMonth="Month"
                labelYear="Year"
              />
          <Text style={tw`text-lg ml-2 mt-5`}>Time of Appointment</Text>   
          <View style={tw`flex flex-row ml-20`} >
          <TextInput style={tw`border rounded-full px-5 py-1 mt-3 ml-5`} placeholder="HH"/>
          <TextInput style={tw`border rounded-full px-5 py-1 mt-3 ml-5`} placeholder="MM"/>
          </View>
          <TouchableOpacity onPress={() => {setShowApt(true)}} style={tw`rounded-full my-10 mx-28 px-2 py-5 bg-green-100`}><Text>Book Appointment</Text></TouchableOpacity></View>:''}
          {showApt?<Appointment/>:''}
    </View>
  )

}

const DoctorsList = () => {
  const [selected, setSelected] = useState("");
  const [showDt, setShowDt] = useState(false)
  

  return (
    <View>
      <View>
      {showDt==false?
        <ScrollView vertical showsVerticalScrollIndicator={false}>
          <Text style={tw`text-lg font-bold ml-5 mt-5`}>Pediatrics</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("1-1 t");
                }}
                style={
                  selected == "1-1 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Ethan</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("1-2 t");
                }}
                style={
                  selected == "1-2 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Amelia</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("1-3 t");
                }}
                style={
                  selected == "1-3 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Mason</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("1-4 t");
                }}
                style={
                  selected == "1-4 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Ava</Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("1-5 t");
                }}
                style={
                  selected == "1-5 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Logan</Text>
            </View>
          </ScrollView>



          <Text style={tw`text-lg font-bold ml-5 mt-5`}>Cardiology</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("2-1 t");
                }}
                style={
                  selected == "2-1 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Cameron</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("2-2 t");
                }}
                style={
                  selected == "2-2 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Jasmine</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("2-3 t");
                }}
                style={
                  selected == "2-3 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Michael</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("2-4 t");
                }}
                style={
                  selected == "2-4 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Samantha</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("2-5 t");
                }}
                style={
                  selected == "2-5 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Lucas</Text>
            </View>
          </ScrollView>


          <Text style={tw`text-lg font-bold ml-5 mt-5`}>Neurology</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("3-1 t");
                }}
                style={
                  selected == "3-1 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Aarav</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("3-2 t");
                }}
                style={
                  selected == "3-2 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Ishita </Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("3-3 t");
                }}
                style={
                  selected == "3-3 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Arjun</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("3-4 t");
                }}
                style={
                  selected == "3-4 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Rhea</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("3-5 t");
                }}
                style={
                  selected == "3-5 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Rohit</Text>
            </View>
          </ScrollView>


          <Text style={tw`text-lg font-bold ml-5 mt-5`}>psychatry</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("4-1 t");
                }}
                style={
                  selected == "4-1 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Aarav</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("4-2 t");
                }}
                style={
                  selected == "4-2 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Tanvi</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("4-3 t");
                }}
                style={
                  selected == "4-3 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Advait</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("4-4 t");
                }}
                style={
                  selected == "4-4 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Shreya</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("4-5 t");
                }}
                style={
                  selected == "4-5 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Rohit</Text>
            </View>
          </ScrollView>


          <Text style={tw`text-lg font-bold ml-5 mt-5`}>Gynacology</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("5-1 t");
                }}
                style={
                  selected == "5-1 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Neha</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("5-2 t");
                }}
                style={
                  selected == "5-2 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Akshay</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("5-3 t");
                }}
                style={
                  selected == "5-3 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Devika</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("5-4 t");
                }}
                style={
                  selected == "5-4 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/maleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Rohit</Text>
            </View>

            <View>
              <TouchableOpacity
                onPress={() => {
                  setSelected("5-5 t");
                }}
                style={
                  selected == "5-5 t"
                    ? tw`m-5 border-4 border-green-300 rounded-full`
                    : tw`m-5`
                }
              >
                <Avatar
                  size={75}
                  rounded
                  source={require("../images/femaleDoc.jpeg")}
                />
              </TouchableOpacity>
              <Text style={tw`ml-6 text-base`}>Dr.Pooja</Text>
            </View>
            <View style={tw`pt-3`}></View>
          </ScrollView>
        {selected.charAt(4)=='t'?<View style={tw`pb-20 mt-5 `}><TouchableOpacity onPress={()=>{setShowDt(true)}} style={tw`p-5 bg-green-200`}><Text style={tw`text-lg ml-32`}>Proceed</Text></TouchableOpacity></View>:<Text></Text>}
        </ScrollView>:<Text></Text>}
        {showDt?<DateAndTime/>:''}
      </View>
    </View>
  );
};

export default DoctorsList;
