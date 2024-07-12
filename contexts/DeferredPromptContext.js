import {useState, useContext, createContext} from 'react'

const DeferredPromptContext = createContext({});

export const useDeferredPrompt = () => {
    return useContext(DeferredPromptContext);
}

export const DeferredPromptProvider = ({ children }) => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);


    return (
        <DeferredPromptContext.Provider value={{ deferredPrompt, setDeferredPrompt }}>
            {children}
        </DeferredPromptContext.Provider>
    );
}