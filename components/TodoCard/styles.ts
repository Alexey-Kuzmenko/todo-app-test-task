import { colors, rounded } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

        paddingHorizontal: 15,
        paddingVertical: 20,

        borderWidth: 1,
        borderColor: colors.lightGray,
        borderRadius: rounded.md,
    },
    checkbox: {
        borderRadius: rounded.xl
    },
    title: {
        color: colors.black,
        fontSize: 16,
        fontWeight: '600',
        flexShrink: 1
    },
    titleChecked: {
        textDecorationLine: 'line-through'
    }
})
