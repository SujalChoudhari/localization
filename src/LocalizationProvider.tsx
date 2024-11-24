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
 * A component that provides a context for the current language and a function to change it.
 * It accepts a children prop which is the component tree that will be wrapped in this context.
 * It also accepts two optional props: persistLanguage and defaultLanguage.
 * persistLanguage is a boolean that defaults to false.
 * If it is true, the current language will be stored in localStorage and will persist between page reloads.
 * defaultLanguage is a number that defaults to 0.
 * It sets the initial value of currentLanguage if persistLanguage is false.
 * @param {LocalizationProviderProps & { persistLanguage?: boolean; defaultLanguage?: number; }} props
 * @returns {ReactNode}
 */
export const LocalizationProvider: FC<LocalizationProviderProps & {
    persistLanguage?: boolean;
    defaultLanguage?: number;
}> = ({ children, persistLanguage = false, defaultLanguage = 0 }) => {
    const [currentLanguage, setCurrentLanguage] = useState(
        persistLanguage
            ? Number(localStorage.getItem('currentLanguage')) || defaultLanguage
            : defaultLanguage,
    );

    const changeLanguage = (newLanguage: number) => {
        setCurrentLanguage(newLanguage);
        if (persistLanguage) {
            localStorage.setItem('currentLanguage', String(newLanguage));
        }
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
