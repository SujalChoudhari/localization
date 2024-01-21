# localization

> Simple Localization tool for React with multiple languages and easy selection

[![NPM](https://img.shields.io/npm/v/localization.svg)](https://www.npmjs.com/package/localization) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @sujalchoudhari/localization
```

## Usage

```tsx
// main.tsx

import {LocalizationProvider, useLocalization} from 'localization'
<LocalizationProvider>
  <App />
</LocalizationProvider>
```

```tsx
//  Using Translatons
import Translate from 'localization'

<Translate> Hello ~ नमस्ते ~ नमस्कार </Translate>
// <Translate> 0 ~ 1 ~ 2 ~ ... ~ n </Translate>
```

```tsx
// Changing Localization
import {useLocalization} from 'localization'

const {currentLanguage,changeLanguage} = useLocalization()

changeLanguage(1)
```

## License

MIT © [SujalChoudhari](https://github.com/SujalChoudhari)
