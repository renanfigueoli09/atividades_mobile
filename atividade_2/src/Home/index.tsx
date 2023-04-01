import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, TextInput, Text, View, Button } from 'react-native';
import { useState } from 'react';
import AleatoriaNumeros from '../utils/AleatorizaNumero';
const Home = () => {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [mostrarNumero, setMostrarNumero] = useState(false);
    const [numeroEscolhido, setNumeroEscolhido] = useState(Number);
    return (
        <View style={styles.view}>
            <Text>Escolha dois Números</Text>
            <SafeAreaView >
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber1}
                    value={number1}
                    placeholder="número inicial"
                    keyboardType="numeric"
                />
                <TextInput
                    style={styles.input}
                    onChangeText={setNumber2}
                    value={number2}
                    placeholder="número final"
                    keyboardType="numeric"

                />
                <Button title="Escolher Número" onPress={() => {
                    if (number1 && number2) {
                        setNumeroEscolhido(AleatoriaNumeros(parseInt(number1), parseInt(number2)));
                        setMostrarNumero(true);
                    } else {
                        setMostrarNumero(false);
                    }
                }} />
            </SafeAreaView>
            {mostrarNumero && (<View style={styles.view2}>
                <Text>Número: {numeroEscolhido}</Text>

                <Button title="Limpar"
                    onPress={() => {
                        setNumber1('');
                        setNumber2('');
                        setMostrarNumero(false);
                    }}
                />
            </View>)}
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    view2: {
        marginTop: 20
    }
});
export default Home