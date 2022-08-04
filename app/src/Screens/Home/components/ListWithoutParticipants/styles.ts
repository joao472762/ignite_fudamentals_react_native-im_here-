import { StyleSheet } from "react-native";
import { theme } from "../../../../global/styles";

const {colors} = theme
export const styles = StyleSheet.create({
    
    withoutParticipantsContainer:{
        flex: 1,
        justifyContent: 'center',
        marginTop: 120
    },

    message:{
        textAlign: 'center',
        color: colors.white100,
        fontWeight: "800",
    }
})