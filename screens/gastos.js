import React from "react";
import { StyleSheet, Button, Text, View, SafeAreaView, Alert, Picker, TouchableOpacity, ImagePropTypes, ScrollView } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { render } from "react-dom";

const Separator = () => (
    <View style={styles.separator} />
);
export default function gastos(props) {
    return (
        <View>
            <ScrollView>
            <View >
                <Text style={styles.titulo}>Ultimos gastos adicionados</Text>
                <Separator/>
                <View style={styles.titulo}>
                    <Text style ={styles.texto}>Data: 21/07/2021</Text>
                    <Text  style ={styles.texto}>Tipo: Combustível</Text>
                    <Text  style ={styles.texto}>Valor : R$268,34</Text>
                    <Text  style ={styles.texto}>Placa: AAA-0000</Text>
                </View>
                <Separator />
                <View style={styles.titulo}>
                    <Text style ={styles.texto}>Data: 21/07/2021</Text>
                    <Text  style ={styles.texto}>Tipo: Combustível</Text>
                    <Text  style ={styles.texto}>Valor : R$268,34</Text>
                    <Text  style ={styles.texto}>Placa: AAA-0000</Text>
                </View>
                <Separator />
                <View style={styles.titulo}>
                    <Text style ={styles.texto}>Data: 21/07/2021</Text>
                    <Text  style ={styles.texto}>Tipo: Combustível</Text>
                    <Text  style ={styles.texto}>Valor : R$268,34</Text>
                    <Text  style ={styles.texto}>Placa: AAA-0000</Text>
                </View>
                <Separator />
                <View style={styles.titulo}>
                    <Text style ={styles.texto}>Data: 21/07/2021</Text>
                    <Text  style ={styles.texto}>Tipo: Combustível</Text>
                    <Text  style ={styles.texto}>Valor : R$268,34</Text>
                    <Text  style ={styles.texto}>Placa: AAA-0000</Text>
                </View>
                <Separator />
                </View>
                <View style={styles.titulo}>
                    <Text style ={styles.texto}>Data: 21/07/2021</Text>
                    <Text  style ={styles.texto}>Tipo: Combustível</Text>
                    <Text  style ={styles.texto}>Valor : R$268,34</Text>
                    <Text  style ={styles.texto}>Placa: AAA-0000</Text>
                </View>
                <Separator />


            </ScrollView>
        </View>
    );

}
const styles = StyleSheet.create({
    titulo: {
        fontSize: 20,
        marginTop: 5,
        fontWeight: "bold",
        paddingLeft: 20,
        color: '#000080',
        padding: 9
     },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderWidth: 1,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    texto:{
        color: '#000080',
        fontSize: 18,
        fontWeight: "bold",
    }
});