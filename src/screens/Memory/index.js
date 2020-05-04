import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

import styles from './style';
export default function Memory({navigation}) {

  return (

    <View style={styles.container}>

<Text style={styles.memoryText}>Memory stored value</Text>
     <Text style={styles.memory}>--------------------------------------</Text>
      <Text style={styles.memory}>{global.memory}</Text>
      <Text style={styles.memory}>--------------------------------------</Text>
    </View>

  )
}