import {
  View,
  Text,
  TouchableOpacityProps,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, SHADOWS, SIZES } from "../../constants";

interface CircleButtonProps extends TouchableOpacityProps {
  imgURL: any;
  onHandlePress: () => void;
}

const CircleButton = ({
  imgURL,
  onHandlePress,
  ...rest
}: CircleButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: "absolute",
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        ...SHADOWS.light,
        right: 12,
        top: 10,
        ...rest,
      }}
      onPress={onHandlePress}
      {...rest}
    >
      <Image
        source={imgURL}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default CircleButton;
