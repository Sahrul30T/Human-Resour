import { useState } from 'react';

const AbsensiKaryawan = () => {
  const [namaKaryawan, setNamaKaryawan] = useState('');
  const [waktuMasuk, setWaktuMasuk] = useState('');
  const [waktuKeluar, setWaktuKeluar] = useState('');
  const [izin, setIzin] = useState(false);
  const [izinKeterangan, setIzinKeterangan] = useState('');
  const [absensiData, setAbsensiData] = useState([]);
  const [formEmptyError, setFormEmptyError] = useState('');

  const handleNamaKaryawanChange = (event) => {
    setNamaKaryawan(event.target.value);
  };

  const handleMasukChange = (event) => {
    setWaktuMasuk(event.target.value);
  };

  const handleKeluarChange = (event) => {
    setWaktuKeluar(event.target.value);
  };

  const handleIzinChange = (event) => {
    setIzin(event.target.checked);
  };

  const handleIzinKeteranganChange = (event) => {
    setIzinKeterangan(event.target.value);
  };

  const handleSubmit = () => {
    if (!namaKaryawan) {
      setFormEmptyError('Form masih kosong. Harap isi nama karyawan.');
      return;
    }

    if (!izin && (!waktuMasuk || !waktuKeluar)) {
      setFormEmptyError('Form masih kosong. Harap isi waktu masuk dan keluar.');
      return;
    }

    setFormEmptyError('');

    const data = {
      namaKaryawan,
      waktuMasuk: izin ? '-' : waktuMasuk,
      waktuKeluar: izin ? '-' : waktuKeluar,
      izin,
      izinKeterangan,
    };

    setAbsensiData([...absensiData, data]);

    setNamaKaryawan('');
    setWaktuMasuk('');
    setWaktuKeluar('');
    setIzin(false);
    setIzinKeterangan('');
  };

  return (
    <div className="mx-auto mt-10 p-5 bg-gray-100 max-w-md ">
      <h2 className="text-2xl font-bold mb-4">Absensi Karyawan</h2>
      <label className="block mb-2">
        Nama Karyawan:
        <input
          type="text"
          value={namaKaryawan}
          onChange={handleNamaKaryawanChange}
          className="block w-full border border-gray-300 p-2 rounded"
        />
      </label>
      {!izin && (
        <>
          <label className="block mb-2">
            Waktu Masuk:
            <input
              type="time"
              value={waktuMasuk}
              onChange={handleMasukChange}
              pattern="[0-9]{2}:[0-9]{2}"
              className="block w-full border border-gray-300 p-2 rounded"
            />
          </label>
          <label className="block mb-2">
            Waktu Keluar:
            <input
              type="time"
              value={waktuKeluar}
              onChange={handleKeluarChange}
              pattern="[0-9]{2}:[0-9]{2}"
              className="block w-full border border-gray-300 p-2 rounded"
            />
          </label>
        </>
      )}
      <label className="block mb-2">
        <input
          type="checkbox"
          checked={izin}
          onChange={handleIzinChange}
          className="mr-2"
        />
        Izin
      </label>
      {izin && (
        <label className="block mb-2">
          Keterangan Izin:
          <input
            type="text"
            value={izinKeterangan}
            onChange={handleIzinKeteranganChange}
            className="block w-full border border-gray-300 p-2 rounded"
          />
        </label>
      )}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
      >
        Kirim
      </button>

      {formEmptyError && (
        <p className="text-red-500 mt-2">{formEmptyError}</p>
      )}

      <h3 className="text-lg font-bold mt-4">Data Absensi:</h3>
      <ul className="list-disc pl-5">
        {absensiData.map((data, index) => (
          <li key={index} className="mb-2">
            {`Nama Karyawan: ${data.namaKaryawan}, ${data.izin ? 'Izin' : `Waktu Masuk: ${data.waktuMasuk}, Waktu Keluar: ${data.waktuKeluar}`}`}
            {data.izin && data.izinKeterangan && `, Keterangan Izin: ${data.izinKeterangan}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AbsensiKaryawan;
