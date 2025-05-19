// Contoh data dummy
const data = [
  {
    kode_barang: "b500",
    nama_barang: "laptopasus",
    jumlah_masuk: 2000,
    jumlah_keluar: 500
  },
  {
    kode_barang: "b501",
    nama_barang: "mousepad",
    jumlah_masuk: 300,
    jumlah_keluar: 100
  }
];

const tableBody = document.querySelector("#inventory-table tbody");

data.forEach(item => {
  const stokSisa = item.jumlah_masuk - item.jumlah_keluar;
  const row = `
    <tr>
      <td>${item.kode_barang}</td>
      <td>${item.nama_barang}</td>
      <td>${item.jumlah_masuk}</td>
      <td>${item.jumlah_keluar}</td>
      <td>${stokSisa}</td>
    </tr>
  `;
  tableBody.innerHTML += row;
});
