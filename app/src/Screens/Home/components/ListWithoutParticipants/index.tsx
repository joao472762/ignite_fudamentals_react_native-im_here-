import { View, Text } from "react-native"
import { styles } from "./styles"

export function ListWithoutParticipants(){
    return(
        <View style={styles.withoutParticipantsContainer}>
            <Text style={styles.message}>
                Ainda não há nenhum participante
            </Text>
        </View>
    )
}