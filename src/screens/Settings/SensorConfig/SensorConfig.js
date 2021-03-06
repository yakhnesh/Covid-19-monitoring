import React, { useEffect, useState } from 'react'
import { FlatList, Keyboard, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import styles from './sensorConfigStyles';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';
import { firebase } from '../../../firebase/config'
import SettingsComponent from '../../../components/SettingsComponent';


export default function SensorConfig(props) {

  const email = props.extraData.email
  const userID = props.extraData.id
  const navigation = useNavigation(); 

  const settingsOptions=[
    {title: 'Add Sensor', subTitle: 'Add a new sensor with the given sensor ID', onPress: () => {
        navigation.navigate("Add Sensor")
    }},
    {title: 'Delete Sensor', subTitle: 'Delete a sensor from the following list', onPress: () => {
        navigation.navigate("Delete Sensor")
    }}
  ]
  return <SettingsComponent settingsOptions={settingsOptions} />;
  
}