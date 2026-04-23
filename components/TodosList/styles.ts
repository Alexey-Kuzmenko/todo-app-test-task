import { colors } from '@/constants/theme';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    placeholderTextWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    },
    placeholderText: {
        color: colors.lightGray,
        fontSize: 20,
        fontWeight: '600'
    },
    deleteBtn: {
        alignSelf: 'center',
        width: '100%',
        marginTop: 10
    },
    todoList: {
        marginTop: 20
    },
    todoListInnerContainer: {
        rowGap: 5
    }
})