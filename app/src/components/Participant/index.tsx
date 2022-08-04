import { styles } from "./styles";
import { Entypo } from "@expo/vector-icons"
import { View, Text,TouchableOpacity} from "react-native";

interface participantProps{
    id: string,
    name: string,
    changeParticipantIdToDelete: (id:string) => void
    changeModalState: () => void
}

export function Participant({name,id,changeParticipantIdToDelete,changeModalState}: participantProps){
   
    function handleShowModal(){
        changeParticipantIdToDelete(id)
        changeModalState()
    }

    return(
    <View style={styles.ParticipantContainer}>
        <View style={styles.user}>
            <Text style={styles.userName}>{name}</Text>
        </View>
        <TouchableOpacity
            style={styles.button}
            onPress={handleShowModal}
        >
            <Entypo name="minus" style={styles.minusIcon}/>
        </TouchableOpacity>
    </View>
    )
}