import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { t } = useTranslation();  // Only use `t` if needed, otherwise can remove

  // Function to switch language
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div style={{ marginBottom: '1rem' }}>
      <span
        style={{ cursor: 'pointer', fontWeight: i18n.language === 'en' ? 'bold' : 'normal', marginRight: '10px' }}
        onClick={() => changeLanguage('en')}
      >
        EN
      </span>
      |
      <span
        style={{ cursor: 'pointer', fontWeight: i18n.language === 'fr' ? 'bold' : 'normal', marginLeft: '10px' }}
        onClick={() => changeLanguage('fr')}
      >
        FR
      </span>
    </div>
  );
};

export default LanguageToggle;
