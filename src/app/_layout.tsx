import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";

export default function Layout() {
    return (
        <>
            <StatusBar style="light" />

            <Stack screenOptions={{
                headerShown: false,
                contentStyle: {
                    backgroundColor: 'transparent'
                },
                animation: 'fade_from_bottom',
            }} >
                <Stack.Screen name="search/index" />
                {/* <Stack.Screen name="index" /> */}
            </Stack>
        </>
    )
}