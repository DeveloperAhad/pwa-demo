import '../styles/globals.css'
import {useEffect } from 'react'
import {DeferredPromptProvider, useDeferredPrompt} from "../contexts/DeferredPromptContext";


export default function App({Component, pageProps}) {
    const { setDeferredPrompt } = useDeferredPrompt();

    useEffect(() => {
        const handleBeforeInstallPrompt = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
        }

        window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

        if ("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/sw.js")
                .then((reg) => console.log("sw worker registered", reg))
                .catch(() => console.log("failed"));
        }

        return () => {
            window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
        }
    }, [setDeferredPrompt]);

    return(
        <DeferredPromptProvider>
            <Component {...pageProps} />
        </DeferredPromptProvider>
    )
}
