import './App.css';
import LanguageToggle from './components/LanguageToggle';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LineChart from './components/LineChart';
import BarChart from './components/BarChart';
import { tourismData } from './tourismdata';

function App() {
  const { t } = useTranslation();

  const [selectedCountry, setSelectedCountry] = useState('France');
  const countries = ['France', 'USA', 'Spain', 'China', 'Italy', 'Turkey'];

  const [selectedYear, setSelectedYear] = useState('2020');
  const years = tourismData.map(item => item.year);

  return (
    <div className="container mt-5">
      <LanguageToggle />
      <h1 className="text-center fw-bold" style={{ marginBottom: '75px' }}>Global Tourism Dashboard</h1>

      {/* Line Chart Section */}
      <div className="text-center mb-5 ">
        <h2 className="mb-3">{t('lineChartTitle')}</h2>
        <p className="text-muted">{t('tourismChartDescription')}</p>

        <div className="d-flex justify-content-center align-items-center my-4">
          <label htmlFor="countrySelect" className="me-2 fw-semibold">{t('selectCountry')}:</label>
          <select
            id="countrySelect"
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="form-select w-auto"
          >
            {countries.map(country => (
              <option key={country} value={country}>
                {t(`countries.${country}`, country)}
              </option>
            ))}
          </select>
        </div>

        <LineChart selectedCountry={selectedCountry} />
      </div>

      {/* divider*/}
<hr className="my-5" />

      {/* Bar Chart Section */}
     <div className="text-center mt-4">
  <h2 className="mb-1 py-4">{t('barChartTitle')} {selectedYear}</h2>

  <p className="text-muted">
    {t('barChartDescription')}
  </p>

  <div className="d-flex justify-content-center align-items-center my-4">
    <label htmlFor="yearSelect" className="me-2 fw-semibold">
      {t('selectYear')}:
    </label>
    <select
      id="yearSelect"
      value={selectedYear}
      onChange={(e) => setSelectedYear(e.target.value)}
      className="form-select w-auto"
    >
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  </div>

  <BarChart selectedYear={selectedYear} />
</div>
<p className="text-center text-muted mt-5">
  Data sourced from international tourism reports.
</p>

    </div>
  );
}

export default App;
