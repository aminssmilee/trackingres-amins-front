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
      const response = await axios.get(
        `https://api-amins-trackingres.up.railway.app/cek-resi`,
        {
          params: {
            kurir,
            resi,
          },
        }
      );
      setHasil(response.data);
    } catch (err) {
      setError("❌ Data tidak ditemukan.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="">
      {/* Form Section */}
      <div></div>
      <div className=" ">
        <div className=" ">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 p-6 min-h-screen">
            {/* Bagian kiri (logo dan judul) */}
            <div className="w-1/3 flex flex-col items-center justify-center p-5">
              <img
                src={Logo}
                alt="JNE Truck"
                className="w-60 md:w-1/2 object-contain bg-white border-4 border-red-600 rounded-full p-2 shadow-lg"
              />
              <h1 className="text-3xl  md:text-6xl font-bold text-red-700 mt-4 mb-2">
                Pelacakan
              </h1>
              <p className="text-xs md:text-lg    text-gray-600 text-center">
                Masukkan nomor resi pengirimanmu.
              </p>
            </div>

            {/* Bagian kanan (form kurir dan input resi) */}
            <div className="w-full md:w-auto flex flex-col items-center">
              {/* Pilih Kurir */}
              <div className="mb-4 w-60">
                <label className="block text-sm font-semibold text-gray-700 mb-1">
                  Pilih Kurir
                </label>
                <select
                  value={kurir}
                  onChange={(e) => setKurir(e.target.value)}
                  className="w-full px-4 py-2 border border-red-600 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {kurirList.map((k) => (
                    <option key={k.code} value={k.code}>
                      {k.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Input Resi */}
              <div className="bg-white rounded-full px-6 py-3 flex items-center shadow-md w-60 border-2 border-red-500">
                <input
                  type="text"
                  placeholder="Ketik Nomor Resi"
                  value={resi}
                  onChange={(e) => setResi(e.target.value)}
                  className="flex-grow outline-none text-gray-700 placeholder-gray-400 bg-transparent"
                />
              </div>
              <p className="text-sm text-gray-500 mb-4 p-5">
                Contoh: JP1234567890
              </p>

              <button
                onClick={handleCekResi}
                disabled={loading || !resi}
                className={`bg-red-600 hover:bg-red-700 text-white text-lg font-semibold py-3 px-8 rounded-full transition duration-200 ${
                  (!resi || loading) && "cursor-not-allowed"
                }`}
              >
                {loading ? "🔄 Melacak..." : "Lacak Pengiriman"}
              </button>

              {error && (
                <p className="text-red-600 mt-4 text-sm font-medium">{error}</p>
              )}
            </div>
          </div>
        </div>

        {/* Tampilkan Hasil */}
        {hasil && (
          <div className="flex justify-center items-center flex-col mt-6">
            <table className="bg-white border border-gray-200 shadow-md rounded-md overflow-hidden w-full max-w-2xl">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="px-4 py-3 text-left">No</th>
                  <th className="px-4 py-3 text-left">No. AWB</th>
                  <th className="px-4 py-3 text-left">Kurir</th>
                  <th className="px-4 py-3 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-200 hover:bg-gray-50">
                  <td className="px-4 py-3">1</td>
                  <td className="px-4 py-3 font-semibold">
                    {hasil?.data?.summary?.awb || resi}
                  </td>
                  <td className="px-4 py-3 uppercase">
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
        {/* === Informasi Umum & Detail Pengiriman === */}
        {(hasil?.data?.summary || hasil?.data?.detail) && (
          <div className="mt-6 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Informasi Umum */}
            {hasil?.data?.summary && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-red-700 flex items-center gap-2">
                  📦 Informasi Umum
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
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

            {/* Detail Pengiriman */}
            {hasil?.data?.detail && (
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-red-700 flex items-center gap-2">
                  🚚 Detail Pengiriman
                </h3>
                <div className="space-y-2 text-sm text-gray-700">
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
          </div>
        )}

        {/* === Riwayat Perjalanan === */}
        {hasil?.data?.history?.length > 0 && (
          <div className="mt-6 bg-white rounded-lg shadow-md p-6 w-full max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-red-700 flex items-center gap-2">
              🕓 Riwayat Perjalanan
            </h3>
            <ol className="relative border-l-2 border-red-500 ml-4">
              {hasil.data.history.map((log, idx) => (
                <li key={idx} className="mb-8 ml-4">
                  <div className="absolute w-3 h-3 bg-white border-2 border-red-500 rounded-full -left-[7px] top-1.5"></div>
                  <p className="text-xs text-gray-500">{log.date}</p>
                  <p className="font-semibold text-gray-800">{log.desc}</p>
                  {log.location && (
                    <p className="text-xs text-gray-600">
                      Kota: {log.location}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
