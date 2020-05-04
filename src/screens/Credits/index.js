import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';

import styles from './style';

export default function Credits({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Text style={styles.boldText}> Pontifícia Universidade Católica</Text>
        <Text style={styles.simpleText}> PDM (Programming for mobile devices)</Text>
        <Text style={styles.simpleText}> Made with React Native </Text>
      </View>

      <View style={styles.logoContainer}>
        <Image
          style={styles.logoProperties}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png',
          }}
        />
      </View>

      <View style={styles.bottomContainer}>

        <Text style={styles.boldText}> Credits to... </Text>


        <Text style={styles.maleName}> Gabriel Koehler</Text>
        <Text style={styles.simpleText}> and</Text>
        <Text style={styles.femaleName}> Letícia Mattoso</Text>


      </View>

    </View>
  )
}