import { View, Image, Text } from "react-native";
import React from "react";
import QRCode from "react-qr-code";

interface BadgeProps {
    Image: string
    Name: string
    ValueQrCode: string
}

export function Badge(props: BadgeProps) {
    return (
        <View className="bg-slate-700 w-80 h-max py-10 flex flex-col items-center justify-center rounded-xl shadow-2xl gap-y-8">
            <View className="bg-zinc-800 w-20 h-12">

            </View>
            <View className="items-center  justify-center w-44 h-44 rounded-full border-[5px] border-solid border-white">
                <Image
                    source={{ uri: props.Image }}
                    width={160}
                    height={160}
                    alt="Não encontrado"
                    className="rounded-full"
                />
            </View>

            <Text className="text-white font-semibold text-4xl">{props.Name}</Text>

            <View>
                <QRCode value={props.ValueQrCode} size={160} />
            </View>
        </View>
    )
}