import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons"
import { View, Text,TouchableOpacity, Alert} from "react-native";

interface participantProps{
    id: string,
    name: string,
    deleteOneParticipant: (id:string) => void
}

export function Participant({name,id,deleteOneParticipant}: participantProps){
   
    function handleDeleteOneParticipant(){
        Alert.alert('Remover Participante', `Deseja Remover ${name}`,[
            {
                text: 'Não',
                style: "cancel"
            },
            {
                text: "Sim",
                style: "destructive",
                onPress: () => deleteOneParticipant(id)
            }
        ])
    }

    return(
    <View style={styles.ParticipantContainer}>
        <View style={styles.user}>
            <Text style={styles.userName}>{name}</Text>
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={handleDeleteOneParticipant}
        >
            <Entypo name="minus" style={styles.minusIcon}/>
        </TouchableOpacity>
    </View>
    )
}