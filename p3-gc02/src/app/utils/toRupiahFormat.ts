function formatRupiah(angka: number) {
  return angka.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

export default formatRupiah;
