import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  StyleSheet,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import OptionsMenu from 'react-native-option-menu';


export default function DetailsScreen()
{
    const myIcon = <Feather name="list" size={30} color="#900" />;
    const [visible, setVisible] = React.useState(true);
    return (
      <View>
        <Text>Check</Text>
        <View style={{flexDirection: 'row',justifyContent: 'flex-end'}}>
          <OptionsMenu
            customButton={myIcon}
            destructiveIndex={1}
            options={['Edit', 'Delete', 'Cancel']}
            actions={[visible, setVisible]}
          />
        </View>
      </View>
    );
}