import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      lineChartTitle: "Tourism Growth Over Time",
      barChartTitle: "Top Destinations in",
      selectCountry: "Select Country",
      selectYear: "Select Year",
      touristArrivals: "Tourist Arrivals",
      topDestinations: "Top 5 Tourist Destinations",
      language: "Language",
      tourismChartDescription: "Visualizing international tourist arrivals for selected countries from 2000 to 2020.",
      barChartTitle: "Top Destinations in",
      barChartDescription: "Visualizing top tourist destinations for the selected year based on international arrivals.",



      countries: {
        France: 'France',
        USA: 'USA',
        Spain: 'Spain',
        China: 'China',
        Italy: 'Italy',
        Turkey: 'Turkey'
      }
    }
  },
  fr: {
    translation: {
      lineChartTitle: "Croissance du tourisme au fil du temps",
      barChartTitle: "Top des destinations en",
      selectCountry: "Sélectionner un pays",
      selectYear: "Sélectionner une année",
      touristArrivals: "Arrivées de touristes",
      topDestinations: "Top 5 des destinations touristiques",
      language: "Langue",
      tourismChartDescription: "Visualisation des arrivées de touristes internationaux par pays sélectionné de 2000 à 2020.",
      barChartTitle: "Top des destinations en",
        barChartDescription: "Visualisation des principales destinations touristiques pour l'année sélectionnée selon les arrivées internationales.",


      countries: {
        France: 'France',
        USA: 'États-Unis',
        Spain: 'Espagne',
        China: 'Chine',
        Italy: 'Italie',
        Turkey: 'Turquie'
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
