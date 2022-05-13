import React from "react";
import { View, FlatList, Text, SafeAreaView } from "react-native";
import { COLORS, NFTData } from "../../constants";
import { NFTCard, HomeHeader, FocusedStatusBar } from "../components";
import { RootScreen } from "../utils/navigation";

const Home: RootScreen<"Home"> = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar animated backgroundColor={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={NFTData}
            renderItem={({ item }) => (
              <NFTCard
                data={item}
                onBidButtonPressed={() =>
                  navigation.navigate("Details", { data: item })
                }
              />
            )}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={() => {}} />}
          />
        </View>

        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
