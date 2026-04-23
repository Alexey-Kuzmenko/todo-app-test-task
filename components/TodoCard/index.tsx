import { colors } from '@/constants/theme';
import { Todo } from '@/types/todo.type';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox } from 'expo-checkbox';
import { FC, useState } from 'react';
import {
    Pressable,
    StyleProp,
    Text,
    TextStyle,
    View,
    ViewStyle
} from 'react-native';

import styles from './styles';

interface Props {
    data: Todo
    cardStyle?: StyleProp<ViewStyle>
    titleStyle?: StyleProp<TextStyle>
}

export const TodoCard: FC<Props> = ({ data, cardStyle, titleStyle }) => {
    const [isChecked, setChecked] = useState<boolean>(false);

    return (
        <View style={[styles.card, cardStyle]}>
            <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? colors.accent : undefined}
            />

            <Text style={[styles.title, isChecked && styles.titleChecked, titleStyle]}>{data.title}</Text>

            <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
                <Ionicons name='trash-outline' size={32} color={colors.black} />
            </Pressable>
        </View>
    );
};
