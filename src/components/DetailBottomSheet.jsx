import { useState } from "react";

export default function DetailBottomSheet() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="bg-red-600 text-white px-4 py-2 rounded"
        onClick={() => setShow(true)}
      >
        Tampilkan Detail
      </button>

      {/* Overlay */}
      {show && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setShow(false)}
        />
      )}

      {/* Bottom Sheet */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white rounded-t-2xl shadow-lg p-4 z-50 transition-transform duration-300 ${
          show ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="text-center font-semibold text-red-600 mb-4">Detail</div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">2018/04/13</span>
          <div>
            <p className="font-medium">Drop Point PASKAL</p>
            <p className="text-gray-600 text-xs">Kota: BANDUNG</p>
          </div>
        </div>
        <button
          className="mt-4 text-sm text-red-600 underline"
          onClick={() => setShow(false)}
        >
          Tutup
        </button>
      </div>
    </>
  );
}
