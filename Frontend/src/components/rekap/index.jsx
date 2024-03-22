import { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import absensiData from './absensi.json';

const RekapAbsensi = () => {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    prepareChartData();
  }, []);

  const prepareChartData = () => {
    if (!Array.isArray(absensiData) || absensiData.length === 0) {
      return;
    }

    const labels = absensiData.map(entry => entry.tanggal);
    const waktuMasukData = absensiData.map(entry => entry.waktuMasuk);
    const waktuKeluarData = absensiData.map(entry => entry.waktuKeluar);

    setChartData({
      labels,
      series: [
        { name: 'Waktu Masuk', data: waktuMasukData },
        { name: 'Waktu Keluar', data: waktuKeluarData },
      ],
    });
  };

  const options = {
    chart: {
      type: 'bar',
      height: 350,
    },
    xaxis: {
      categories: chartData.labels || [],
    },
    legend: {
      position: 'top',
    },
  };

  return (
    <div className="container mx-auto  p-5 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4">Rekap Absensi</h2>
      {chartData.labels && chartData.labels.length > 0 ? (
        <Chart options={options} series={chartData.series} type="bar" height={350} />
      ) : (
        <p>No attendance data available.</p>
      )}
    </div>
  );
};

export default RekapAbsensi;
