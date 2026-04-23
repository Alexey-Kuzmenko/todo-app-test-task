import { FC } from 'react';
import { Pressable, PressableProps, StyleProp, Text, View, ViewStyle } from 'react-native';

import styles from './styles';

interface Props extends PressableProps {
    label: string
    buttonStyle?: StyleProp<ViewStyle>
}

export const Button: FC<Props> = ({ label, disabled, buttonStyle, ...props }) => {
    return (
        <Pressable {...props} style={({ pressed }) => ({ opacity: pressed && !disabled ? 0.5 : 1 })}>
            <View style={[styles.button, disabled ? styles.buttonDisabled : styles.buttonActive, buttonStyle]}>
                <Text style={[styles.label, disabled ? styles.labelDisabled : styles.labelActive]}>{label}</Text>
            </View>
        </Pressable>
    );
};
