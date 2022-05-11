import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import React from "react";
import { COLORS, FONTS, SIZES } from "../../constants";

interface RectButtonProps extends TouchableOpacityProps {
  minWidth: any;
  fontSize: any;
  onHandlePress: () => void;
}

const RectButton = ({
  minWidth,
  fontSize,
  onHandlePress,
  ...rest
}: RectButtonProps) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.small,
        borderRadius: SIZES.extraLarge,
        minWidth: minWidth,
        ...rest,
      }}
      onPress={onHandlePress}
    >
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: fontSize,
          color: COLORS.white,
          textAlign: "center",
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  );
};

export default RectButton;
