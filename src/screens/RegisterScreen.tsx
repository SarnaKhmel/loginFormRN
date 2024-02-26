import {
    Dimensions,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    View,
    Alert
} from "react-native";
import React, { useState } from 'react';
import Spacing from "../constants/Spacing";
import FontSize from "../constants/FontsSize";
import Colors from "../constants/Colors";
import Font from "../constants/Fonts";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";
import AppTextInput from "../components/TextInput";
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height } = Dimensions.get("window");

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

const RegisterScreen: React.FC<Props> = ({ navigation: { navigate } }) => {

    const [userData, setUserData] = useState<{ name: string, email: string, password: string }>({
        name: '',
        email: '',
        password: ''
    });

    const saveUserDataToStorage = async (userData: { name: string, token: string }) => {
        try {
            const userDataJSON = JSON.stringify(userData);
            await AsyncStorage.setItem('userData', userDataJSON);
            // console.log(userDataJSON)
        } catch (error) {
            console.error('Error saving user data:', error);
        }
    };
    const handleRegistration = async () => {
        try {
            const fakeToken = 'fake_token';

            await saveUserDataToStorage({ ...userData, token: fakeToken });

            navigate('Home');
        } catch (error) {
            console.error('Registration error:', error);
            Alert.alert('Error', 'Something went wrong. Please try again.');
        }
    };
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
                        Create account
                    </Text>
                    <Text
                        style={{
                            fontFamily: Font["regular"],
                            fontSize: FontSize.large,
                            maxWidth: "80%",
                            textAlign: "center",
                        }}
                    >
                        Change the world: Join us!
                    </Text>
                </View>

                <View
                    style={{
                        marginVertical: Spacing * 3,
                    }}
                >
                    <AppTextInput placeholder="Name" onChangeText={(name) => setUserData({ ...userData, name })} />
                    <AppTextInput placeholder="Email" keyboardType="email-address" onChangeText={(email) => setUserData({ ...userData, email })} />
                    <AppTextInput placeholder="Password" secureTextEntry onChangeText={(password) => setUserData({ ...userData, password })} />
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
                        onPress={handleRegistration}
                    >
                        Sign up
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigate("Login")}
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
                        Already have an account?
                    </Text>
                </TouchableOpacity>

            </View>

            <View>
                <ImageBackground style={{
                    height: height / 4,
                }}
                    resizeMode="contain" source={require("../assets/images/registerBG.png")} />
            </View>

        </SafeAreaView>
    );
};

export default RegisterScreen;