function tampilkanDetail(sepatuId) {
    const header = document.getElementById('detailHeader');
    const popup = document.getElementById('detailPopup');
    const detailImage = document.getElementById('detailImage');
    const detailText = document.getElementById('detailText');

    // Ganti gambar dan deskripsi sesuai dengan sepatu yang dipilih
    if (sepatuId === 'sepatu1') {
        detailImage.src = 'sepatu1.jpg';
        detailText.textContent = 'Ini adalah sepatu cosmic. Sepatu ini sangat nyaman untuk berolahraga.';
    } else if (sepatuId === 'sepatu2') {
        detailImage.src = 'IMG_1806.jpg';
        detailText.textContent = 'Ini adalah sepatu Bowa. Sepatu ini cocok untuk digunakan sehari-hari.';
    }

    popup.style.display = 'block';
}

function tutupDetail() {
    const popup = document.getElementById('detailPopup');
    popup.style.display = 'none';
}

// Anda dapat menambahkan lebih banyak sepatu dan detailnya di sini
