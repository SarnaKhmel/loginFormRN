import {
    StyleSheet,
    Text,
    TextInput,
    TextInputProps,
    View,
} from "react-native";
import React, { useState } from "react";
import Colors from "../constants/Colors";
import Font from "../constants/Fonts";
import FontSize from "../constants/FontsSize";
import Spacing from "../constants/Spacing";

const AppTextInput: React.FC<TextInputProps> = ({ ...otherProps }) => {
    const [focused, setFocused] = useState<boolean>(false);
    return (
        <View>
            <Text>AppTextInput</Text>
        </View>
    );
};

export default AppTextInput;

const styles = StyleSheet.create({});