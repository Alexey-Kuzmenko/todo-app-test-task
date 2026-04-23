import { colors, rounded } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    form: {
        backgroundColor: colors.natural,
        borderWidth: 1,
        borderColor: colors.lightGray,
        borderRadius: rounded.md,

        paddingHorizontal: 10,
        paddingVertical: 15,

        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        columnGap: 10,
    },
    input: {
        flex: 1,

        paddingVertical: 10,
        paddingLeft: 15,
        paddingRight: 10,

        color: colors.black,
        fontSize: 14,
        lineHeight: 18,

        backgroundColor: colors.lightGray,
        borderRadius: rounded.sm
    }
})