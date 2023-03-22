import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface IProps{
    participantName: string;
    onPress: ()=>void,
    buttonText: string;
}
export function Participant({participantName="", onPress, buttonText=""}: IProps){
    return(
        <View style={styles.container}>
            <Text style={styles.name}>
                {participantName}
            </Text>
            <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}