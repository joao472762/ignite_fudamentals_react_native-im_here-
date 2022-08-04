import {Modal,ModalProps, View, Text, TouchableOpacity} from 'react-native'
import { styles } from './styles'
interface ParticipantModalProps extends ModalProps {
    participantName: string | undefined,
    changeModalState: () => void
    deleteOneParticipant: () => void
}

export function ParticipantModal(
    {   
        participantName,
        changeModalState,
        deleteOneParticipant,
        ...props
    } : ParticipantModalProps){

    function handleCloseModal(){
        changeModalState()
    }
    function handleDeleteParticipant(){
        deleteOneParticipant()
        changeModalState()
    }
    return(
        <Modal {...props} transparent={true}>
            <View style = {styles.participantModalContainer}>
                <View style={styles.content}>

                    <Text style={styles.title}>Remover</Text>
                    <Text style={styles.subTitle}>Remover {participantName} ?</Text>

                    <View style={styles.actions}>

                        <TouchableOpacity style={styles.button} onPress={handleCloseModal}>
                            <Text style={styles.textButton}>Não</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={handleDeleteParticipant}>
                            <Text style={styles.textButton} >Sim</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}