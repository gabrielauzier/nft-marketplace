import {
  View,
  Text,
  TouchableOpacityProps,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { assets, COLORS, SHADOWS, SIZES } from "../../constants";

interface LikeButtonProps extends TouchableOpacityProps {
  onHandlePress: () => void;
}

const LikeButton = ({ onHandlePress, ...rest }: LikeButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        position: "absolute",
        backgroundColor: COLORS.white,
        borderRadius: SIZES.extraLarge,
        alignItems: "center",
        justifyContent: "center",
        right: 12,
        top: 12,
        ...SHADOWS.light,
        ...rest,
      }}
      onPress={onHandlePress}
      {...rest}
    >
      <Image
        source={assets.heart}
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
      />
    </TouchableOpacity>
  );
};

export default LikeButton;
