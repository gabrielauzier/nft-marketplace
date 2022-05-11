import { View, Text, Image } from "react-native";
import React from "react";
import { Item } from "../utils/types";
import { COLORS, SIZES, SHADOWS, assets } from "../../constants";
import { useNavigation } from "@react-navigation/native";
import CircleButton from "./CircleButton";
import { EthPrice, NFTTitle, SubInfo } from "./SubInfo";
import RectButton from "./RectButton";

interface NFTCardProps {
  data: Item;
}

const NFTCard = ({ data }: NFTCardProps) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: "100%", height: 250 }}>
        <Image
          source={data.imageURL}
          resizeMode="cover"
          style={{
            width: "100%",
            height: "100%",
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />

        <CircleButton imgURL={assets.heart} onHandlePress={() => {}} />
      </View>
      <SubInfo />

      <View style={{ width: "100%", padding: SIZES.font }}>
        <NFTTitle
          title={data.name}
          subTitle={data.creator}
          titleSize={SIZES.large}
          subTitleSize={SIZES.small}
        />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <EthPrice price={data.price} />
          <RectButton
            minWidth={120}
            fontSize={SIZES.font}
            onHandlePress={() => {}}
          />
        </View>
      </View>
    </View>
  );
};

export default NFTCard;
