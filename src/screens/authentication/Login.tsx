import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { RootScreen } from "../../utils/navigation";
import { assets, COLORS, SIZES } from "../../../constants";
import { FocusedStatusBar } from "../../components";

const Login: RootScreen<"Login"> = ({ navigation }) => {
  const handleLogin = () => {
    navigation.navigate("Home");
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
        onPress={handleLogin}
      >
        <Text style={{ color: COLORS.primary, alignItems: "center" }}>
          Login
        </Text>
      </TouchableOpacity>

      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          width: "100%",
          marginTop: 8,
        }}
      >
        <Text
          style={{ color: COLORS.white }}
          onPress={() => navigation.navigate("SignUp")}
        >
          Create account
        </Text>
        <Text style={{ color: COLORS.white }}>Forgot password?</Text>
      </View>
    </View>
  );
};

export default Login;
