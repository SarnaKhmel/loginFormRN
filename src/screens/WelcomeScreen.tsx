import {
    Dimensions,
    ImageBackground,
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

const WelcomeScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
        <SafeAreaView>
            <View
                style={{
                    paddingHorizontal: Spacing * 4,
                    paddingTop: Spacing * 10,
                }}
            >
                <Text
                    style={{
                        fontSize: FontSize.xxLarge,
                        color: Colors.primary,
                        fontFamily: Font["bold"],
                        textAlign: "center",
                    }}
                >
                    Join NOW!
                </Text>
            </View>
            <View
                style={{
                    paddingHorizontal: Spacing * 4,
                    paddingTop: Spacing * 5,
                }}
            >
                <Text
                    style={{
                        fontSize: FontSize.xxLarge,
                        color: Colors.primary,
                        fontFamily: Font["regular"],
                        textAlign: "center",
                    }}
                >
                    Join now / come back to us
                </Text>
            </View>
            <View style={{
                paddingTop: Spacing * 6
            }}>
                <ImageBackground style={{
                    height: height / 2.5,
                }}
                    resizeMode="contain" source={require("../assets/images/welcomeBG.png")} />
            </View>
            <View
                style={{
                    paddingHorizontal: Spacing * 2,
                    paddingTop: Spacing * 6,
                    flexDirection: "row",
                }}
            >
                <TouchableOpacity
                    onPress={() => navigate("Login")}
                    style={{
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
                        Login
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate("Register")}
                    style={{
                        paddingVertical: Spacing * 1.5,
                        paddingHorizontal: Spacing * 2,
                        width: "48%",
                        borderRadius: Spacing,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: Font["bold"],
                            color: Colors.text,
                            fontSize: FontSize.large,
                            textAlign: "center",
                        }}
                    >
                        Register
                    </Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});