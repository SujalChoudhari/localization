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

/**
 * Provides a context for localizing strings in a React application.
 * Should be the outermost component in the application.
 * @example
 * <LocalizationProvider>
 *   <App />
 * </LocalizationProvider>
 */
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

/**
 * Returns an object with two properties: currentLanguage, and changeLanguage.
 * currentLanguage is the index of the currently selected language.
 * changeLanguage is a function that takes a number and changes the currentLanguage to that number.
 * Note: This must be used within a LocalizationProvider.
 * @returns {LocalizationContextProps}
 */
export const useLocalization = () => {
    const context = useContext(LocalizationContext);
    if (!context) {
        throw new Error('useLocalization must be used within a LocalizationProvider');
    }
    return context;
};
