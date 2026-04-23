import { colors } from '@/constants/theme';
import { Todo } from '@/types/todo.type';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Checkbox } from 'expo-checkbox';
import { FC } from 'react';
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
    onDelete: (id: string) => void
    onToggle: (id: string) => void
}

export const TodoCard: FC<Props> = ({ data, cardStyle, titleStyle, onToggle, onDelete }) => {
    const { completed } = data;

    const handleValueChange = (): void => {
        onToggle(data.id)
    }
    const handlePress = (): void => onDelete(data.id)

    return (
        <View style={[styles.card, cardStyle]}>
            <Checkbox
                style={styles.checkbox}
                value={completed}
                onValueChange={handleValueChange}
                color={completed ? colors.accent : undefined}
            />

            <Text style={[styles.title, completed && styles.titleChecked, titleStyle]}>{data.title}</Text>

            <Pressable style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })} onPress={handlePress}>
                <Ionicons name='trash-outline' size={32} color={colors.black} />
            </Pressable>
        </View>
    );
};
