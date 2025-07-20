import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { tourismData } from "../tourismdata"; 
import { useTranslation } from "react-i18next";

// for number values to be displayed correclty in both languages
const formatNumber = (value, language) => {
  return value.toLocaleString(language === 'fr' ? 'fr-FR' : 'en-US');
};


const LineChart = ({ selectedCountry }) => {
const { t, i18n } = useTranslation();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart data={tourismData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
        <XAxis dataKey="year" tick={{ fontSize: 12 }} />
      <YAxis 
    tickFormatter={(value) => formatNumber(value, i18n.language)}
    label={{ value: t('touristArrivals'), angle: -90, position: 'insideLeft', fontSize: 12 }}
    tick={{ fontSize: 12 }}
    />

        <Tooltip 
        formatter={(value, name) => [formatNumber(value, i18n.language), t(`countries.${name}`, name)]}
        />

        <Legend 
          formatter={(value) => t(`countries.${value}`, value)}
        />
        <Line 
          type="monotone"
          dataKey={selectedCountry}
          stroke="#007bff"
          strokeWidth={3}
          dot={{ r: 4 }}
        />
      </RechartsLineChart>
    </ResponsiveContainer>
  );
};

export default LineChart;
