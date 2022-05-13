import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
import { assets, COLORS, FONTS, SIZES } from "../../constants";
import { BackButton, FocusedStatusBar } from "../components";
import LikeButton from "../components/LikeButton";
import { EthPrice, NFTTitle, SubInfo } from "../components/SubInfo";
import { RootScreen } from "../utils/navigation";

const Details: RootScreen<"Details"> = ({ navigation, route }) => {
  const { data } = route.params;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <FocusedStatusBar animated backgroundColor={COLORS.primary} />

      <View style={{}}>
        <Image
          source={data.imageURL}
          resizeMode="cover"
          style={{ width: "100%", height: 300 }}
        />

        <BackButton onHandlePress={() => navigation.goBack()} />

        <LikeButton onHandlePress={() => {}} />
      </View>

      <SubInfo />

      <View style={{ padding: SIZES.font }}>
        <View
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <NFTTitle
            title={data.name}
            subTitle={data.creator}
            titleSize={SIZES.extraLarge}
            subTitleSize={SIZES.font}
          />
          <EthPrice price={data.price} />
        </View>

        <Text
          style={{
            marginTop: SIZES.large,
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>

        <Text
          style={{
            marginTop: SIZES.large,
            fontFamily: FONTS.light,
            fontSize: SIZES.medium,
            color: COLORS.primary,
          }}
        >
          {data.description}
        </Text>

        <Text
          style={{
            marginTop: SIZES.large,
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.medium,
            color: COLORS.primary,
          }}
        >
          Current bids
        </Text>

        <View>
          {data.bids.map((bid) => (
            <View
              key={bid.id}
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                marginTop: SIZES.base,
              }}
            >
              <Image source={bid.imageURL} style={{ width: 50, height: 50 }} />
              <View style={{ flexDirection: "column" }}>
                <Text
                  style={{ fontFamily: FONTS.bold, fontSize: SIZES.medium }}
                >
                  {bid.name}
                </Text>
                <Text
                  style={{ fontFamily: FONTS.light, fontSize: SIZES.small }}
                >
                  {bid.date}
                </Text>
              </View>
              <EthPrice price={bid.price} />
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default Details;
