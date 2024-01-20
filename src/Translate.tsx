// Translate.tsx
import React, { ReactNode } from 'react';
import { useLocalization } from './LocalizationProvider'; // Update with your actual file path

interface TranslateProps {
    textKey: ReactNode;
}

const Translate: React.FC<TranslateProps> = ({ children }) => {
    const { currentLanguage } = useLocalization();

    const translationArray: Array<string> = children?.toString().split("~") || [];
    let displayText: string = `[Translation Not Added at language index ${currentLanguage}]` // want to tell user where not added
    if (currentLanguage >= translationArray?.length) {
        displayText = translationArray[currentLanguage]
    }

    return <>{displayText}</>
};

export default Translate;
