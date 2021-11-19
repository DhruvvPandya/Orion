import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import styles from "./style";

const Button = ({ Title, onPress }) => {
  return (
    <Pressable style={styles.Button} onPress={onPress}>
      <Text style={styles.btnText}>{Title}</Text>
    </Pressable>
  );
};

export default Button;
