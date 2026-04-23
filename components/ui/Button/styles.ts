import { colors, rounded } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    button: {
        alignSelf: 'flex-start',
        padding: 10,
        borderRadius: rounded.sm,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonActive: {
        backgroundColor: colors.primary,
    },
    buttonDisabled: {
        backgroundColor: colors.lightGray,
        borderWidth: 1,
        borderBlockColor: colors.black
    },
    label: {
        fontSize: 14,
    },
    labelActive: {
        color: colors.natural,
    },
    labelDisabled: {
        color: colors.black,
    }
})