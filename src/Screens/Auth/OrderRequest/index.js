import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './style';

const OrderRequest = () => {
  return (
    <SafeAreaView style={styles.MainCntainer}>
      <Text style={styles.Title}>OrderRequest</Text>
    </SafeAreaView>
  );
};

export default OrderRequest;
