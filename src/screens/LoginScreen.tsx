import {
    ImageBackground,
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
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
import AppTextInput from "../components/TextInput";
const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<Props> = ({ navigation: { navigate } }) => {
    return (
        <SafeAreaView>
            <View style={{
                padding: Spacing * 2,
            }}>

                <View
                    style={{
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: FontSize.xLarge,
                            color: Colors.primary,
                            fontFamily: Font["bold"],
                            marginVertical: Spacing * 4,
                        }}
                    >
                        Login
                    </Text>
                    <Text
                        style={{
                            fontFamily: Font["regular"],
                            fontSize: FontSize.large,
                            maxWidth: "80%",
                            textAlign: "center",
                        }}
                    >
                        Ready to keep changing the world
                    </Text>
                </View>


                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <AppTextInput placeholder="Email" />
                    <AppTextInput placeholder="Password" />
                </View>
                <TouchableOpacity
                    style={{
                        padding: Spacing * 2,
                        backgroundColor: Colors.primary,
                        marginVertical: Spacing * 3,
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
                            textAlign: "center",
                            fontSize: FontSize.xLarge,
                        }}
                    >
                        Sign in
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate("Register")}
                    style={{
                        padding: Spacing,
                    }}
                >
                    <Text
                        style={{
                            fontFamily: Font["bold"],
                            color: Colors.text,
                            textAlign: "center",
                            fontSize: FontSize.small,
                        }}
                    >
                        Haven't joined yet?
                    </Text>
                </TouchableOpacity>

                <View>
                    <ImageBackground style={{
                        height: height / 3,
                    }}
                        resizeMode="contain" source={require("../assets/images/loginBG.png")} />
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({});