import React from 'react';
import { LineChart as RechartsLineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid, ResponsiveContainer } from "recharts";
import { tourismData } from "../tourismdata"; 
import { useTranslation } from "react-i18next";

const LineChartTranslated = ({ selectedCountry }) => {
  const { t } = useTranslation();

  return (
    <ResponsiveContainer width="100%" height={400}>
      <RechartsLineChart data={tourismData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
        <CartesianGrid stroke="#e0e0e0" strokeDasharray="3 3" />
        <XAxis dataKey="year" tick={{ fontSize: 12 }} />
        <YAxis 
          tickFormatter={(value) => `${(value / 1_000_000).toFixed(0)}M`}
          label={{ value: t('touristArrivals'), angle: -90, position: 'insideLeft', fontSize: 12 }}
          tick={{ fontSize: 12 }}
        />
        <Tooltip 
          formatter={(value, name) => [`${value.toLocaleString()}`, t(`countries.${name}`, name)]}
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

export default LineChartTranslated;
