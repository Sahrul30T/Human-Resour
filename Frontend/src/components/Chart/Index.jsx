import { useEffect, useRef } from 'react';
import { Chart } from "@antv/g2";

const Rekap = () => {
  const chartContainer = useRef(null);

  useEffect(() => {
    const data = [
      { name: "Jam Kerja", Bulan: "Jan.", Jam: 18.9 },
      { name: "Jam Kerja", Bulan: "Feb.", Jam: 28.8 },
      { name: "Jam Kerja", Bulan: "Mar.", Jam: 39.3 },
      { name: "Jam Kerja", Bulan: "Apr.", Jam: 81.4 },
      { name: "Jam Kerja", Bulan: "May", Jam: 47.2 },
      { name: "Hari Masuk", Bulan: "Jan.", Hari: 18.9 },
      { name: "Hari Masuk", Bulan: "Feb.", Hari: 28.8 },
      { name: "Hari Masuk", Bulan: "Mar.", Hari: 39.3 },
      { name: "Hari Masuk", Bulan: "Apr.", Hari: 81.4 },
      { name: "Hari Masuk", Bulan: "May", Hari: 47.2 },
      { name: "Jumlah Izin", Bulan: "Jan.", Hari: 18.9 },
      { name: "Jumlah Izin", Bulan: "Feb.", Hari: 28.8 },
      { name: "Jumlah Izin", Bulan: "Mar.", Hari: 39.3 },
      { name: "Jumlah Izin", Bulan: "Apr.", Hari: 81.4 },
      { name: "Jumlah Izin", Bulan: "May", Hari: 47.2 },
    ];

    const yField = "Hari";

    const chart = new Chart({
      container: chartContainer.current,
      autoFit: true,
      theme: "classic", // Pilih tema yang sesuai
    });

    chart
      .interval()
      .data(data)
      .encode("x", "Bulan")
      .encode("y", yField)
      .encode("color", "name")
      .transform({ type: "dodgeX" })
      .interaction("elementHighlight", { background: true });

    chart.render();

    return () => {
      chart.destroy(); // Bersihkan saat komponen dibongkar
    };
  }, []); // Gunakan efek hanya setelah komponen dipasang

  return <div ref={chartContainer} />; // Gunakan div ref sebagai container
};

export default Rekap;
