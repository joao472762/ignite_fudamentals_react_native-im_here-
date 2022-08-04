import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

const {colors} = theme
export const styles = StyleSheet.create({
    participantModalContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#0004'
    },
    content:{
        backgroundColor: colors.white100,
        borderRadius: 8,
        width: '65%',
    },

    title:{
        marginTop: 20,
        fontSize: 18,
        fontWeight: '900',
        textAlign: 'center'

    },
    subTitle:{
        fontSize: 14,
        textAlign: 'center'
    },
    actions:{
        borderBottomEndRadius: 8,
        overflow: "hidden",
        marginTop: 16,
        flexDirection: 'row',

    },

    button:{
        paddingVertical: 8,
        alignItems: 'center',
        flex: 1,
        borderColor: colors.gray100,
        borderRightWidth: .5,
        borderTopWidth: .5
        
    },
    textButton:{
        fontSize: 16,
        color: colors.blue300
    }
})