/* eslint-disable no-unused-vars */
import { useState } from "react";
import axios from "axios";
import Logo from "../assets/images/logo.png";

export default function Tracking() {
  const [kurir, setKurir] = useState("jne");
  const [resi, setResi] = useState("");
  const [hasil, setHasil] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const kurirList = [
    { code: "jne", name: "JNE" },
    { code: "jnt", name: "J&T Express" },
    { code: "sicepat", name: "SiCepat" },
    { code: "pos", name: "Pos Indonesia" },
    { code: "tiki", name: "TIKI" },
    { code: "wahana", name: "Wahana" },
    { code: "ninja", name: "Ninja Xpress" },
    { code: "lion", name: "Lion Parcel" },
    { code: "anteraja", name: "AnterAja" },
    { code: "sap", name: "SAP Express" },
    { code: "jet", name: "J&T Cargo" },
    { code: "first", name: "First Logistics" },
    { code: "rex", name: "REX" },
    { code: "idexpress", name: "ID Express" },
    { code: "shoexpress", name: "Shopee Express" },
    { code: "sentral", name: "Sentral Cargo" },
  ];

  const handleCekResi = async () => {
    setLoading(true);
    setError("");
    setHasil(null);

    try {
      const response = await axios.get(`https://api-amins-trackingres.up.railway.app/cek-resi`, {
        params: {
          kurir,
          resi,
        },
      });
      setHasil(response.data);
    } catch (err) {
      setError("❌ Data tidak ditemukan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto mt-10 flex flex-col md:flex-row items-center justify-between px-6">
      {/* Form Section */}
      <div className="w-full md:w-2/3">
        <h1 className="text-4xl font-bold text-blue-900 mb-2">Pelacakan</h1>
        <p className="text-lg text-gray-700 mb-6">
          Masukkan nomor resi pengirimanmu.
        </p>

        {/* Dropdown Kurir */}
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1">
            Pilih Kurir
          </label>
          <select
            value={kurir}
            onChange={(e) => setKurir(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-400"
          >
            {kurirList.map((k) => (
              <option key={k.code} value={k.code}>
                {k.name}
              </option>
            ))}
          </select>
        </div>

        {/* Input Resi */}
        <div className="bg-white rounded-full px-6 py-4 flex items-center shadow-md w-full mb-2">
          {resi && (
            <div className="bg-blue-100 text-blue-900 font-semibold px-4 py-2 rounded-full mr-2">
              {resi}
            </div>
          )}
          <input
            type="text"
            placeholder="Ketik Nomor Resi"
            value={resi}
            onChange={(e) => setResi(e.target.value)}
            className="flex-grow outline-none text-gray-700 placeholder-gray-400"
          />
        </div>

        <p className="text-sm text-gray-500 mb-4">Contoh: JP1234567890</p>

        {/* Tombol Lacak */}
        <button
          onClick={handleCekResi}
          disabled={loading || !resi}
          className={`bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-200 ${
            (!resi || loading) && "opacity-50 cursor-not-allowed"
          }`}
        >
          {loading ? "🔄 Melacak..." : "Lacak Pengiriman"}
        </button>

        {error && (
          <p className="text-red-600 mt-4 text-sm font-medium">{error}</p>
        )}

        {/* Tampilkan Hasil */}
        {hasil && (
          <div className="mt-6">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
              <thead className="bg-gray-100 text-gray-700">
                <tr>
                  <th className="px-4 py-3 text-left">No</th>
                  <th className="px-4 py-3 text-left">No. AWB</th>
                  <th className="px-4 py-3 text-left">Kurir</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3 font-semibold">
                    {hasil?.data?.summary?.awb || resi}
                  </td>
                  <td className="px-4 py-3">
                    {hasil?.data?.summary?.courier || kurir.toUpperCase()}
                  </td>
                  <td className="px-4 py-3 text-gray-700">
                    {hasil?.data?.summary?.status || "Data tidak ditemukan"}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {/* === Informasi Umum === */}
        {hasil?.data?.summary && (
          <div className="mt-6 bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-bold mb-4 text-blue-700">
              📦 Informasi Umum
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p>
                <span className="font-semibold">AWB:</span>{" "}
                {hasil.data.summary.awb}
              </p>
              <p>
                <span className="font-semibold">Kurir:</span>{" "}
                {hasil.data.summary.courier}
              </p>
              <p>
                <span className="font-semibold">Status:</span>{" "}
                {hasil.data.summary.status}
              </p>
              <p>
                <span className="font-semibold">Tanggal:</span>{" "}
                {hasil.data.summary.date}
              </p>
            </div>
          </div>
        )}

        {/* === Detail Pengiriman === */}
        {hasil?.data?.detail && (
          <div className="mt-6 bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-bold mb-4 text-blue-700">
              🚚 Detail Pengiriman
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <p>
                <span className="font-semibold">Pengirim:</span>{" "}
                {hasil.data.detail.shipper}
              </p>
              <p>
                <span className="font-semibold">Penerima:</span>{" "}
                {hasil.data.detail.receiver}
              </p>
              <p>
                <span className="font-semibold">Asal:</span>{" "}
                {hasil.data.detail.origin}
              </p>
              <p>
                <span className="font-semibold">Tujuan:</span>{" "}
                {hasil.data.detail.destination}
              </p>
            </div>
          </div>
        )}

        {/* === Riwayat Perjalanan === */}
        {hasil?.data?.history?.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow p-4">
            <h3 className="text-xl font-bold mb-4 text-blue-700">
              🕓 Riwayat Perjalanan
            </h3>
            <ol className="space-y-4 text-sm">
              {hasil.data.history.map((log, idx) => (
                <li key={idx} className="border-l-4 border-blue-600 pl-4">
                  <p className="text-gray-600 font-medium">{log.date}</p>
                  <p>{log.desc}</p>
                  {log.location && (
                    <p className="text-gray-500 text-xs">
                      Lokasi: {log.location}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>

      {/* Gambar Truk */}
      <div className="hidden md:block w-1/3">
        <img
          src={Logo}
          alt="JNE Truck"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}
