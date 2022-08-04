import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

const {colors} = theme
export const styles = StyleSheet.create({
    homeContainer:{
        flex: 1,
        padding: 20,
        backgroundColor: colors.black
    },
    eventName:{
        color: colors.white100,
        marginTop: 60,
        fontWeight: "800",
        fontSize:  22
    },
    date:{
        marginTop: 8,
        color: colors.gray100,
    },
    form:{
        marginTop: 32,
        flexDirection: "row"

    },
    input:{
        height: 56,
        backgroundColor: '#181B19',
        borderRadius: 6,
        flex: 1,
        color: colors.white100,
        paddingHorizontal: 16

    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',

        width: 56,
        height: 56,
        marginLeft: 8,
        backgroundColor: colors.green300,
        borderRadius: 8
        
    },

    plusIcon:{
        fontSize: 23,
        color: colors.white100,
    },

    participantsHeader:{
        color: colors.white100,
        marginTop: 40,
        fontWeight: "800",
        fontSize:  19,
        marginBottom: 20
    },

})