// Translate.tsx
import React, { ReactNode } from 'react';
import { useLocalization } from './LocalizationProvider';

interface TranslateProps {
    children: ReactNode;
    separator?: string;
}

/**
 * A component that will display a translation based on the currentLanguage
 * provided by the LocalizationProvider.
 *
 * The children of this component should be a string with translations
 * separated by a user-defined separator (default is ~). For example: 
 * "Hello ~ नमस्ते ~ नमस्कार"
 *
 * If the currentLanguage is not available in the children string, the
 * component will display a message letting the user know where the
 * translation is missing.
 */
const Translate: React.FC<TranslateProps> = ({ children, separator = '~' }) => {
    const { currentLanguage } = useLocalization();

    const translationArray: Array<string> = children?.toString().split(separator) || [];
    let displayText: string = `[Translation Not Added at language index ${currentLanguage}]`;
    if (currentLanguage < translationArray?.length) {
        displayText = translationArray[currentLanguage].trim();
    }

    return <span>{displayText}</span>;
};

export default Translate;

