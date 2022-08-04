import { useState } from "react";
import { format } from "date-fns";
import { Entypo } from "@expo/vector-icons"
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { View, Text, TextInput, TouchableOpacity, FlatList} from "react-native";

import { styles } from "./styles";
import { theme } from "../../global/styles";
import { Participant } from "../../components/Participant";
import { ParticipantModal } from "../../components/Modal";

interface Participants {
    id: string,
    name: string,
}

export function Home(){
    const [participantName, setParticipantName] = useState('')
    const [modalIsVisible, setModalIsVisibel]  = useState(false)
    const [participants,setParticipants] = useState<Participants[]>([])
    const [participantIdToDelete, setParticipantIdToDelete ] = useState('')

    const participantToDelete = participants.find(participant => participant.id == participantIdToDelete)

    const currentDate = new Date()
    const currentDateFomated =  format(currentDate, "eee ',' d MMMM 'de' yyyy",{
        locale: ptBR
    })
    function changeParticipantIdToDelete(id: string){
        setParticipantIdToDelete(() => id)
    }

    function changeModalState(){
        modalIsVisible
        ? setModalIsVisibel(false)
        : setModalIsVisibel(true)
    }
   
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
    
    function deleteOneParticipant(){
        const participantsWithoutOne = participants.filter(participant => {
            return participant.id != participantIdToDelete
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
            {
                participants.length 
                ?(
                    <FlatList
                        showsVerticalScrollIndicator= {false}
                        data={participants}
                        keyExtractor= {item => item.id}
                        renderItem={({item}) => {
                            return( 
                                <Participant 
                                    id={item.id} 
                                    name={item.name}
                                    changeModalState= {changeModalState}
                                    changeParticipantIdToDelete= {changeParticipantIdToDelete}
                                /> 
                            )
                        }}
                    />

                )
                :(
                    <View style={styles.withoutParticipants}>
                        <Text style={styles.withoutParticipantsMessage}>Ainda não há nenhum participante</Text>
                    </View>
                )
            }
            <ParticipantModal
                animationType="fade"
                visible= {modalIsVisible}
                participantName= {participantToDelete?.name}
                deleteOneParticipant = {deleteOneParticipant}
                changeModalState={changeModalState}
                />
        </View>
    )
}




