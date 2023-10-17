"use client"
import { useState } from "react";
import DarkTheme from "@/app/hooks/styles.dark.module.css"
import LightTheme from "@/app/hooks/styles.light.module.css"

const theme = {
    dark: DarkTheme,
    light: LightTheme
};

const payloadDarkTheme = {key: "dark", payload: theme.dark};
const payloadLightTheme = {key: "light", payload: theme.light};

function useTheme() {
    const [nowTheme, setNowTheme] = useState(payloadLightTheme)
    function switchTheme () {
        setNowTheme(function (oldState) {
            if (oldState.key === payloadLightTheme.key) {
                return payloadDarkTheme
            }
            return payloadLightTheme
        })
    }
    return {theme: nowTheme.payload, switchTheme}
}

export default useTheme;