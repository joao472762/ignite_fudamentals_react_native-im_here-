import { useState } from "react";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons"
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { View, Text, TextInput, TouchableOpacity, FlatList} from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles";
import { Participant } from "../../components/Participant";
import { ListWithoutParticipants } from "./components/ListWithoutParticipants";

interface Participants {
    id: string,
    name: string,
}

export function Home(){
    const [participantName, setParticipantName] = useState('')
    const [participants,setParticipants] = useState<Participants[]>([])
    
    const currentDate = new Date()
    const currentDateFomated =  format(currentDate, "eee ',' d MMMM 'de' yyyy",{
        locale: ptBR
    })

    function handleAddNewPaticipant(){
        if(!participantName.length){
            return
        }
    
        const newPaticipant: Participants = {
            id: currentDate.toISOString(),
            name: participantName
        }

        setParticipants(state => [...state,newPaticipant])
        setParticipantName(() => '')
    }
    
    function deleteOneParticipant(id: string){
        const participantsWithoutOne = participants.filter(participant => {
            return participant.id != id
        })

        setParticipants(() => participantsWithoutOne)
    }
   
    return(
        <View style={styles.homeContainer}>

            <Text style={styles.eventName}>Meu niver</Text>
            <Text style={styles.date}>{currentDateFomated}</Text>

            <View style={styles.form}>
                <TextInput 
                    value= {participantName}
                    style={styles.input}
                    onChangeText={event  => setParticipantName(event)}
                    placeholder= 'Digite o nome do participante'
                    placeholderTextColor = {theme.colors.gray100}
                />
                <TouchableOpacity 
                    onPress={handleAddNewPaticipant}
                    style={styles.button} 
                    activeOpacity= {.7}
                >
                    <Entypo name="plus" style={styles.plusIcon} />
                </TouchableOpacity>
            </View>

            <Text style={styles.participantsHeader}>Participantes</Text>

            <FlatList
                data={participants}
            
                showsVerticalScrollIndicator= {false}
                keyExtractor= {item => item.id}
                renderItem={({item}) => {
                    return( 
                        <Participant 
                        id={item.id} 
                        name={item.name}
                        deleteOneParticipant = {deleteOneParticipant}
                        /> 
                        )
                    }}
                ListEmptyComponent = {() => <ListWithoutParticipants/>}
            /> 
        </View>
    )
}




