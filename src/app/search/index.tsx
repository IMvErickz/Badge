import { View, Text, TextInput } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Search() {
    return (
        <View className="flex-1 bg-slate-900 flex-col items-center justify-center px-4 gap-y-8">
            <Text className="text-white font-bold text-4xl text-center">Coloque aqui o seu nome de usuário do Github</Text>
            <TextInput className="bg-slate-400 w-full h-12 rounded text-black px-2" />
            <TouchableOpacity className="bg-slate-500 flex items-center justify-center w-80 h-10 rounded">
                <Text>Salvar</Text>
            </TouchableOpacity>
        </View>
    )
}