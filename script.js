const hari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
const tanggal = new Date();
const hariNama = hari[tanggal.getDay()];
const tanggalString = `${hariNama}, ${tanggal.toLocaleDateString('id-ID')}`;
document.getElementById('tanggal1').value = tanggalString;
document.getElementById('tanggal2').value = tanggalString;

// Tampilkan halaman kalkulator pertama
document.getElementById('kalkulator').style.display = 'block';

document.getElementById('hitung1').addEventListener('click', function() {
    const harga = parseFloat(document.getElementById('harga1').value);
    const jumlah = parseFloat(document.getElementById('jumlah1').value);
    const total = harga * jumlah;

    if (!isNaN(total)) {
        document.getElementById('result1').innerText = `Total Biaya: Rp ${total.toFixed(2)}`;
    } else {
        alert('Silakan masukkan harga dan jumlah yang valid!');
    }
});

document.getElementById('tambahTernak').addEventListener('click', function() {
    const jenisTernak = document.getElementById('jenisTernak1').value;
    const harga = parseFloat(document.getElementById('harga1').value);
    const jumlah = parseFloat(document.getElementById('jumlah1').value);
    const total = harga * jumlah;

    if (!isNaN(total)) {
        const tabel = document.getElementById('tabelTernakUtuh').getElementsByTagName('tbody')[0];
        const newRow = tabel.insertRow();
        newRow.innerHTML = `<td>${tanggalString}</td><td>${jenisTernak}</td><td>${harga}</td><td>${jumlah}</td><td>${total.toFixed(2)}</td><td><button class="delete-button">Hapus</button></td>`;
        document.getElementById('result1').innerText = '';
        addDeleteEvent(newRow);
    } else {
        alert('Silakan masukkan harga dan jumlah yang valid!');
    }
});

document.getElementById('hitung2').addEventListener('click', function() {
    const harga = parseFloat(document.getElementById('harga2').value);
    const jumlah = parseFloat(document.getElementById('jumlah2').value);
    const total = harga * jumlah;

    if (!isNaN(total)) {
        document.getElementById('result2').innerText = `Total Biaya: Rp ${total.toFixed(2)}`;
    } else {
        alert('Silakan masukkan harga dan jumlah yang valid!');
    }
});

document.getElementById('tambahBagian').addEventListener('click', function() {
    const produk = document.getElementById('produk').value;
    const harga = parseFloat(document.getElementById('harga2').value);
    const jumlah = parseFloat(document.getElementById('jumlah2').value);
    const total = harga * jumlah;

    if (!isNaN(total)) {
        const tabel = document.getElementById('tabelBagianTernak').getElementsByTagName('tbody')[0];
        const newRow = tabel.insertRow();
        newRow.innerHTML = `<td>${tanggalString}</td><td>${produk}</td><td>${harga}</td><td>${jumlah}</td><td>${total.toFixed(2)}</td><td><button class="delete-button">Hapus</button></td>`;
        document.getElementById('result2').innerText = '';
        addDeleteEvent(newRow);
    } else {
        alert('Silakan masukkan harga dan jumlah yang valid!');
    }
});

function addDeleteEvent(row) {
    const deleteButton = row.querySelector('.delete-button');
    deleteButton.addEventListener('click', function() {
        row.remove();
    });
}

document.getElementById('kembali').addEventListener('click', function() {
    document.getElementById('hasilPenjualan').style.display = 'none';
    document.getElementById('kalkulator').style.display = 'block';
});

// Fungsi untuk menampilkan halaman hasil penjualan
function showHasilPenjualan() {
    document.getElementById('kalkulator').style.display = 'none';
    document.getElementById('kalkulatorBagian').style.display = 'none';
    document.getElementById('hasilPenjualan').style.display = 'block';
}

// Tampilkan halaman hasil penjualan saat tombol ditekan
document.getElementById('tambahTernak').addEventListener('click', showHasilPenjualan);
document.getElementById('tambahBagian').addEventListener('click', showHasilPenjualan);