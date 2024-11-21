import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

type StyledButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
};

const StyledButton: React.FC<StyledButtonProps> = ({ children, onPress }) => {
  return (
    <TouchableOpacity
      className=" items-center rounded-lg bg-blue-500 p-3"
      onPress={onPress}
    >
      <Text className="text-white text-lg font-semibold">{children}</Text>
    </TouchableOpacity>
  );
};

export default StyledButton;
