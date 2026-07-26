// --- 1. SELEKSI ELEMEN DOM ---
const elAngkaInput = document.getElementById("input-angka");
const elSkalaAsal = document.getElementById("select-skala");
const btnKonversi = document.getElementById("btn-konversi");

const elOutC = document.getElementById("output-celsius");
const elOutF = document.getElementById("output-fahrenheit");
const elOutK = document.getElementById("output-kelvin");
const elOutR = document.getElementById("output-reaumur");

// --- 2. FUNGSI LOGIKA UTAMA: PROSES KONVERSI ---
function hitungKonversiSuhu() {
    // Ambil nilai mentah input dan ubah menjadi bilangan desimal/float
    const suhuAsal = parseFloat(elAngkaInput.value);
    const skala = elSkalaAsal.value;

    // Proteksi validasi jika kolom input kosong atau bukan angka
    if (isNaN(suhuAsal)) {
        alert("Harap masukkan nilai angka suhu yang valid! ⚠️");
        return;
    }

    // Variabel penampung perantara standar dasar (Celsius)
    let celsius = 0;

    // STRATEGI TAHAP 1: Normalisasi Skala Asal Menjadi Skala Celsius Terlebih Dahulu
    switch (skala) {
        case "C":
            celsius = suhuAsal;
            break;
        case "F":
            celsius = (suhuAsal - 32) * 5 / 9;
            break;
        case "K":
            celsius = suhuAsal - 273.15;
            break;
        case "R":
            celsius = suhuAsal * 5 / 4;
            break;
    }

    // STRATEGI TAHAP 2: Hitung Nilai Output dari Dasar Celsius ke Seluruh Skala
    const hasilFahrenheit = (celsius * 9 / 5) + 32;
    const hasilKelvin = celsius + 273.15;
    const hasilReaumur = celsius * 4 / 5;

    // --- MUTASI ANTARMUKA DOM (FORMAT MAKSIMAL 2 ANGKA DI BELAKANG KOMA) ---
    elOutC.innerText = `${formatAngka(celsius)} °C`;
    elOutF.innerText = `${formatAngka(hasilFahrenheit)} °F`;
    elOutK.innerText = `${formatAngka(hasilKelvin)} K`;
    elOutR.innerText = `${formatAngka(hasilReaumur)} °R`;
}

// --- 3. FUNGSI HELPER: FORMAT PEMBULATAN ANGKA ---
// Berfungsi merapikan angka agar tidak terlalu panjang (maksimal 2 angka di belakang koma)
function formatAngka(nilai) {
    // Jika angka bulat utuh (contoh 25), tampilkan langsung. Jika desimal, potong jadi 2 angka belakang koma.
    return Number.isInteger(nilai) ? nilai : nilai.toFixed(2);
}

// --- 4. BINDING EVENT LISTENERS ---
btnKonversi.addEventListener("click", hitungKonversiSuhu);

// Fitur kenyamanan interaktif: Pemicu konversi instan tanpa klik tombol saat dropdown diganti
elSkorAsal = elSkalaAsal.addEventListener("change", hitungKonversiSuhu);
