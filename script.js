document.addEventListener("DOMContentLoaded", () => {
    const text = `Nama "Kabinet Indrapatra" terinspirasi dari Benteng Indra Patra, sebuah benteng bersejarah di Aceh yang melambangkan semangat juang dan keteguhan hati rakyat Aceh, khususnya di bawah kepemimpinan Laksamana Malahayati. Benteng ini tidak hanya menjadi simbol perlawanan yang gigih, tetapi juga simbol kekokohan dan ketahanan yang luar biasa.
    
Pemilihan nama INDRAPATRA untuk kabinet DEMA (Dewan Eksekutif Mahasiswa)  UIN Ar-Raniry Periode 2024-2025 menunjukkan aspirasi DEMA UIN AR-RANIRY untuk menjadi penjaga dan pelindung hak-hak mahasiswa, serta berkomitmen untuk menyelesaikan berbagai permasalahan yang dihadapi baik oleh mahasiswa maupun masyarakat Aceh. Filosofi ini mencerminkan bahwa, seperti Benteng Indra Patra yang tetap kokoh menghadapi tantangan zaman, DEMA UIN Ar-Raniry juga bertekad untuk berdiri teguh dalam memperjuangkan dan melindungi kepentingan mahasiswa tanpa takut terhadap rintangan dan tekanan.`;
    
    const typingEffect = document.getElementById("typing-effect");
    let index = 0;

    function typeText() {
        if (index < text.length) {
            typingEffect.textContent += text[index];
            index++;
            setTimeout(typeText, ); // Kecepatan ketikan
        }
    }

    typeText();
});
