/* eslint-disable arrow-body-style */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const DrawerView = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
      </View>
      <Text
        style={styles.Title2}
        onPress={() => navigation.navigate('MyProfile')}>
        Dashboard
      </Text>
      <Text
        style={styles.Title2}
        onPress={() => navigation.navigate('MyOrders')}>
        TradingList
      </Text>
      <Text
        style={styles.Title2}
        onPress={() => navigation.navigate('Settings')}>
        DeliveryList
      </Text>      
    </View>
  );
};

DrawerView.propTypes = {};

export default DrawerView;
