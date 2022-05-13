import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { RootScreen } from "../../utils/navigation";
import { assets, COLORS, SIZES } from "../../../constants";
import { BackButton, FocusedStatusBar } from "../../components";

const SignUp: RootScreen<"SignUp"> = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    setIsLoading(true);
    navigation.navigate("Home");
    setIsLoading(false);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.primary,
        padding: SIZES.medium,
        alignItems: "center",
      }}
    >
      <FocusedStatusBar animated backgroundColor={COLORS.primary} />
      <BackButton
        onHandlePress={() => {
          navigation.goBack();
        }}
      />
      <Image
        source={assets.logo}
        style={{
          resizeMode: "contain",
          width: 90,
          height: 30,
          marginBottom: 60,
        }}
      />
      <TextInput
        keyboardType="email-address"
        style={{
          backgroundColor: COLORS.secondary,
          width: "100%",
          height: 40,
          borderRadius: SIZES.base,
          paddingHorizontal: SIZES.large,
          marginBottom: SIZES.medium,
        }}
        placeholder="Username"
        placeholderTextColor={COLORS.white}
      />
      <TextInput
        keyboardType="email-address"
        style={{
          backgroundColor: COLORS.secondary,
          width: "100%",
          height: 40,
          borderRadius: SIZES.base,
          paddingHorizontal: SIZES.large,
          marginBottom: SIZES.medium,
        }}
        placeholder="E-mail"
        placeholderTextColor={COLORS.white}
      />
      <TextInput
        keyboardType="visible-password"
        style={{
          backgroundColor: COLORS.secondary,
          width: "100%",
          height: 40,
          borderRadius: SIZES.base,
          paddingHorizontal: SIZES.large,
          marginBottom: 70,
        }}
        placeholder="Password"
        placeholderTextColor={COLORS.white}
      />

      <TouchableOpacity
        style={{
          backgroundColor: COLORS.white,
          width: "100%",
          height: 40,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: SIZES.base,
        }}
        onPress={handleSignUp}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={{ color: COLORS.primary, alignItems: "center" }}>
            Sign Up
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default SignUp;
