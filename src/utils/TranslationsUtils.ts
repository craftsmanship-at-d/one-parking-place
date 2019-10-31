import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_de from '../translations/de.json';
import common_en from '../translations/en.json';
import common_pl from '../translations/pl.json';

export class TranslationUtils {
    public static initializeTranslation(): void {
        const resources = {
            de: {
                translation: common_de,
            },
            en: {
                translation: common_en,
            },
            pl: {
                translation: common_pl,
            },
        };

        i18next.use(initReactI18next).init({
            interpolation: { escapeValue: false },
            lng: 'en',
            resources,
        });
    }
}
