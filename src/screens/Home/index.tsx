import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Participant } from '../../components/Participant';
import { styles } from './styles';

export function Home() {
    const [participants, setParticipants] = useState<string[]>([
        "Carlos", "Thiago", "Ewilin", "Erika", "Vinicius", "Bruno", "Carol",
        "Leticia", "Roberta", "Taynara"
    ]);
    const [participant, setParticipant] = useState<string>("");
    // const participants =
    //     [
    //         "Carlos", "Thiago", "Ewilin", "Erika", "Vinicius", "Bruno", "Carol",
    //         "Leticia", "Roberta", "Taynara"
    //     ];
    const handleAdd = () => {
        if (participants.includes(participant)) {
            Alert.alert("Already joined!", "Participant already in the list");
            return;
        }
        setParticipants([...participants, participant]);
        setParticipant("");
    }
    const handleRemoveParticipant = (name: string) => {
        Alert.alert("Remove", `Do you really want to remove ${name}?`,
            [
                {
                    text: "Yes",
                    onPress: () => {
                        setParticipants([...participants.filter(currentElement => currentElement != name)]);
                        Alert.alert(`${name.trim()} was removed.`);
                    }
                },
                {
                    text: "No",
                    style: "cancel"
                }
            ]);
    }
    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Nome do evento!</Text>
            <Text style={styles.eventDate}>Sexta, 4 de novembro de 2023</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Nome do participante"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={(text) => (setParticipant(text))}
                    value={participant}
                />
                <TouchableOpacity style={styles.button} onPress={handleAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>
            <FlatList
                showsVerticalScrollIndicator={false}
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant key={item}
                        participantName={item}
                        onPress={() => handleRemoveParticipant(item)}
                        buttonText="-" />

                )}
                ListEmptyComponent={() => (
                    <Text style={styles.listEmptyText}>
                        Ninguem chegou no evento ainda.
                        Adicione participantes no botao +
                    </Text>
                )}
            />

        </View>
    );
}