import {
    ImageBackground,
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontsSize";
import Colors from "../constants/Colors";
import Font from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Welcome">;

const HomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
        <SafeAreaView>
            <View style={{
                padding: Spacing * 2,
            }}>

                <Text
                    style={{
                        fontSize: FontSize.xLarge,
                        color: Colors.primary,
                        fontFamily: Font["bold"],
                        marginVertical: Spacing * 4,
                    }}
                >
                    Home
                </Text>
                <Text
                    style={{
                        fontFamily: Font["regular"],
                        fontSize: FontSize.xLarge,
                        maxWidth: "80%",
                        textAlign: "left",
                    }}
                >
                    You're in.
                    <Text
                        style={{
                            fontFamily: Font["bold"],
                            fontSize: FontSize.xLarge,
                            textAlign: "left",
                            color: Colors.primary,
                            textDecorationLine: 'underline',
                        }}
                    >
                        Name
                    </Text>
                </Text>
                <Text
                    style={{
                        marginTop: Spacing * 2,
                        fontFamily: Font["regular"],
                        fontSize: FontSize.large,
                        maxWidth: "80%",
                        textAlign: "left",

                    }}
                >
                    A great journey begins with the first step.
                </Text>
                <View>
                    <ImageBackground style={{
                        height: height / 2,
                    }}
                        resizeMode="contain" source={require("../assets/images/homeBG.png")} />
                </View>

                <TouchableOpacity
                    onPress={() => navigate("Welcome")}
                    style={{
                        marginTop: Spacing * 6,
                        backgroundColor: Colors.primary,
                        paddingVertical: Spacing * 1.5,
                        paddingHorizontal: Spacing * 2,
                        width: "48%",
                        borderRadius: Spacing,
                        shadowColor: Colors.primary,
                        shadowOffset: {
                            width: 0,
                            height: Spacing,
                        },
                        shadowOpacity: 0.3,
                        shadowRadius: Spacing,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: Font["bold"],
                            color: Colors.onPrimary,
                            fontSize: FontSize.large,
                            textAlign: "center",
                        }}
                    >
                        Log out
                    </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({});