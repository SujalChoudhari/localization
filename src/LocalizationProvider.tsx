// LocalizationProvider.tsx
import React,{ createContext, useContext, FC, ReactNode, useState } from 'react';

interface LocalizationContextProps {
    currentLanguage: number;
    changeLanguage: (newLanguage: number) => void;
}

const LocalizationContext = createContext<LocalizationContextProps | undefined>(undefined);

interface LocalizationProviderProps {
    children: ReactNode;
}

export const LocalizationProvider: FC<LocalizationProviderProps> = ({ children }) => {
    const [currentLanguage, setCurrentLanguage] = useState(0); // Initial language

    const changeLanguage = (newLanguage: number) => {
        setCurrentLanguage(newLanguage);
    };

    return (
        <LocalizationContext.Provider value={{ currentLanguage, changeLanguage }}>
            {children}
        </LocalizationContext.Provider>
    );
};

export const useLocalization = () => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};
