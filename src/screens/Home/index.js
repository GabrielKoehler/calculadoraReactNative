import React, { useState, memo } from 'react';
import { View, Text, Button, Image } from 'react-native';
import styles from './style';

export default function Home({ navigation }) {

  return (
    <View style={styles.container}>

      <View style={styles.textContainer}>
        <Text style={styles.initialText}> This is a simples application for</Text>
        <Text style={styles.initialText}> PDM (Programming for mobile devices) lesson.</Text>
      </View>

      <View style={styles.logoContainer}>
        <Image
          style={styles.logoProperties}
          source={{
            uri: 'https://lh3.googleusercontent.com/proxy/emEqKt08y6KvT64reAJWCJzL79FAuKs1DBAtqaIjvRM4UOL7AVtDdW9zkYRdI7Sy-PYUAOGpRHfQP21RFt4xJvTw9nPycRJEEQEei1VrzU101H7anlVQyOSs9QX_nM8_gj8Y2t_ESrkqhsUJHms',
          }}
        />
      </View>

      <View style={styles.gotoContainer}>

        <Text style={styles.gotoText}> Go to... </Text>

        <View style={styles.gotoButton}>
          <Button
            color="#e0554a"
            title="Calculator"
            onPress={() => navigation.navigate("Calculator")}
          />
        </View>

        <View style={styles.gotoButton}>
          <Button
            color="#e0554a"
            title="Memory"
            onPress={() => navigation.navigate("Memory")}
          />
        </View>

        <View style={styles.gotoButton}>
          <Button
            color="#e0554a"
            title="Credits"
            onPress={() => navigation.navigate("Credits")}
          />
        </View>

      </View>

    </View>
  );
}