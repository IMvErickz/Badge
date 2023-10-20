import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import QRCode from "react-qr-code";
import { Badge } from "../components/Bandge";
import { Link } from 'expo-router'


export default function Home() {

    const info = [
        {
            Name: 'IMvErickz',
            Image: 'https://github.com/IMvErickz.png',
            value: 'https://github.com/IMvErickz'
        },
    ]

    return (
        <View className='flex-1 items-center justify-center bg-slate-900 pt-20 px-4'>
            <Text className="text-white text-3xl font-bold text-center">Olá Erick, aqui está o seu crachá</Text>
            <View className="flex-1 items-center justify-center">
                {info.map(element => {
                    return (
                        <Badge
                            Name={element.Name}
                            Image={element.Image}
                            ValueQrCode={element.value}
                            key={element.value}
                        />
                    )
                })}
            </View>
            <Link href={'/search'}>
                ir
            </Link>
        </View>
    );
}