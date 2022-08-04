import { StyleSheet } from "react-native";
import { theme } from "../../global/styles";

const  {colors} = theme

export const styles = StyleSheet.create({
    ParticipantContainer:{
        justifyContent: 'center',
        
        flexDirection: 'row',
        height: 56,
        marginTop: 8,
        backgroundColor: '#181B19',
        borderRadius: 6,
    },
    
    user:{
        justifyContent: 'center',
        flex: 1,

        paddingHorizontal: 16,
    },
    userName:{
        color: colors.white100,
    },

    button:{
        justifyContent: 'center',
        alignItems: 'center',

        width: 56,
        height: 56,
        borderRadius: 6,
        backgroundColor: colors.red300,
        
    },
    minusIcon:{
        fontSize: 23,
        color: colors.white100,
    },
})