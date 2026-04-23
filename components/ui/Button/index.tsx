import { FC } from 'react';
import { Pressable, PressableProps, Text, View } from 'react-native';

import styles from './styles';

interface Props extends PressableProps {
    label: string
}

export const Button: FC<Props> = ({ label, disabled, ...props }) => {
    return (
        <Pressable {...props} style={({ pressed }) => ({ opacity: pressed && !disabled ? 0.5 : 1 })}>
            <View style={[styles.button, disabled ? styles.buttonDisabled : styles.buttonActive]}>
                <Text style={[styles.label, disabled ? styles.labelDisabled : styles.labelActive]}>{label}</Text>
            </View>
        </Pressable>
    );
}