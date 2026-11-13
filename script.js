
// =====================================
// DIGITAL SMART - CYBER MISSION
// BANK SOAL: 30 PERTANYAAN
// =====================================

const questionBank = [
    {
        q: "Apa yang dimaksud dengan literasi digital?",
        options: [
            "Kemampuan menggunakan teknologi digital secara bijak",
            "Kemampuan memperbaiki semua perangkat elektronik",
            "Kemampuan bermain game online",
            "Kemampuan membuat perangkat komputer"
        ],
        answer: 0,
        explanation: "Literasi digital adalah kemampuan menggunakan teknologi digital secara bijak, aman, dan bertanggung jawab."
    },
    {
        q: "Apa tujuan utama penggunaan kata sandi yang kuat?",
        options: [
            "Agar akun terlihat menarik",
            "Melindungi akun dari akses tidak sah",
            "Mempercepat koneksi internet",
            "Menghemat penggunaan data"
        ],
        answer: 1,
        explanation: "Kata sandi yang kuat membantu mencegah orang lain mengakses akun tanpa izin."
    },
    {
        q: "Apa yang dimaksud dengan phishing?",
        options: [
            "Teknik mempercepat internet",
            "Proses menghapus virus",
            "Penipuan untuk mencuri informasi pribadi",
            "Cara membuat website"
        ],
        answer: 2,
        explanation: "Phishing merupakan penipuan yang bertujuan memperoleh data sensitif seperti kata sandi atau informasi rekening."
    },
    {
        q: "Apa yang sebaiknya dilakukan saat menerima tautan mencurigakan?",
        options: [
            "Langsung membukanya",
            "Membagikannya kepada teman",
            "Memasukkan data pribadi",
            "Memeriksa sumber dan tidak membukanya sembarangan"
        ],
        answer: 3,
        explanation: "Tautan mencurigakan bisa mengarah ke situs palsu atau halaman berbahaya."
    },
    {
        q: "Apa fungsi autentikasi dua faktor (2FA)?",
        options: [
            "Memberikan lapisan keamanan tambahan",
            "Menghapus semua data akun",
            "Mempercepat pengunduhan",
            "Mengganti nama pengguna"
        ],
        answer: 0,
        explanation: "2FA membutuhkan verifikasi tambahan selain kata sandi untuk melindungi akun."
    },
    {
        q: "Mengapa kita harus memeriksa kebenaran berita sebelum membagikannya?",
        options: [
            "Agar berita cepat viral",
            "Agar tidak ikut menyebarkan informasi palsu",
            "Agar mendapat banyak pengikut",
            "Agar penyimpanan penuh"
        ],
        answer: 1,
        explanation: "Memeriksa fakta membantu mencegah penyebaran hoaks dan kesalahpahaman."
    },
    {
        q: "Apa yang dimaksud dengan jejak digital?",
        options: [
            "Bekas kaki di tanah",
            "Riwayat penggunaan listrik",
            "Rekaman aktivitas seseorang di dunia digital",
            "Daftar perangkat komputer"
        ],
        answer: 2,
        explanation: "Jejak digital adalah data atau rekaman aktivitas yang ditinggalkan saat menggunakan internet."
    },
    {
        q: "Apa contoh informasi pribadi yang harus dijaga?",
        options: [
            "Warna kesukaan",
            "Judul film favorit",
            "Nama hewan peliharaan",
            "Nomor identitas dan kata sandi"
        ],
        answer: 3,
        explanation: "Nomor identitas dan kata sandi merupakan informasi sensitif yang tidak boleh dibagikan sembarangan."
    },
    {
        q: "Apa fungsi utama antivirus?",
        options: [
            "Mendeteksi dan membantu menghapus malware",
            "Meningkatkan ukuran layar",
            "Mengubah warna komputer",
            "Menambah kapasitas baterai"
        ],
        answer: 0,
        explanation: "Antivirus membantu mendeteksi, mencegah, dan menangani perangkat lunak berbahaya."
    },
    {
        q: "Apa yang dimaksud dengan malware?",
        options: [
            "Aplikasi untuk belajar",
            "Perangkat lunak yang dirancang untuk merugikan sistem",
            "Program untuk menggambar",
            "Sistem operasi komputer"
        ],
        answer: 1,
        explanation: "Malware adalah perangkat lunak berbahaya yang dapat mencuri data atau merusak sistem."
    },
    {
        q: "Mengapa pembaruan perangkat lunak penting?",
        options: [
            "Agar perangkat menjadi lebih berat",
            "Agar layar berubah warna",
            "Untuk memperbaiki bug dan celah keamanan",
            "Untuk menghapus semua aplikasi"
        ],
        answer: 2,
        explanation: "Pembaruan sering membawa perbaikan keamanan, peningkatan fitur, dan perbaikan kesalahan."
    },
    {
        q: "Apa arti HTTPS pada alamat sebuah website?",
        options: [
            "Website tidak membutuhkan internet",
            "Website pasti bebas penipuan",
            "Website hanya untuk pemerintah",
            "Koneksi ke website menggunakan enkripsi"
        ],
        answer: 3,
        explanation: "HTTPS mengenkripsi komunikasi antara browser dan website, tetapi tidak menjamin website tersebut jujur."
    },
    {
        q: "Apa yang dimaksud dengan cyberbullying?",
        options: [
            "Perundungan yang dilakukan melalui media digital",
            "Belajar menggunakan komputer",
            "Membuat konten pendidikan",
            "Mengirim tugas melalui internet"
        ],
        answer: 0,
        explanation: "Cyberbullying adalah tindakan mengintimidasi atau menyakiti orang lain melalui teknologi digital."
    },
    {
        q: "Apa tindakan tepat jika mengalami cyberbullying?",
        options: [
            "Membalas dengan ancaman",
            "Menyimpan bukti dan melaporkannya",
            "Menyebarkan data pelaku",
            "Mengikuti semua permintaan pelaku"
        ],
        answer: 1,
        explanation: "Simpan bukti, blokir pelaku jika perlu, dan laporkan kepada pihak tepercaya."
    },
    {
        q: "Apa yang dimaksud dengan hak cipta digital?",
        options: [
            "Hak menggunakan semua karya tanpa izin",
            "Hak menghapus internet",
            "Perlindungan hukum terhadap karya seseorang",
            "Hak mengambil akun orang lain"
        ],
        answer: 2,
        explanation: "Hak cipta melindungi karya seperti tulisan, foto, musik, dan video dari penggunaan tanpa izin."
    },
    {
        q: "Apa yang sebaiknya dilakukan sebelum menggunakan gambar dari internet?",
        options: [
            "Menghapus nama pembuatnya",
            "Mengaku sebagai pembuat",
            "Menggunakan tanpa memeriksa",
            "Memeriksa lisensi dan ketentuan penggunaannya"
        ],
        answer: 3,
        explanation: "Periksa lisensi, izin penggunaan, dan cantumkan atribusi jika diwajibkan."
    },
    {
        q: "Apa fungsi utama mesin pencari?",
        options: [
            "Menemukan informasi di internet",
            "Memperbaiki keyboard",
            "Mengisi daya baterai",
            "Membuat jaringan listrik"
        ],
        answer: 0,
        explanation: "Mesin pencari membantu menemukan halaman dan informasi berdasarkan kata kunci."
    },
    {
        q: "Apa yang dimaksud dengan cloud storage?",
        options: [
            "Penyimpanan di dalam keyboard",
            "Penyimpanan data melalui server internet",
            "Penyimpanan di atas meja",
            "Penyimpanan menggunakan kertas"
        ],
        answer: 1,
        explanation: "Cloud storage memungkinkan data disimpan dan diakses melalui layanan berbasis internet."
    },
    {
        q: "Apa risiko menggunakan Wi-Fi publik tanpa perlindungan?",
        options: [
            "Baterai selalu penuh",
            "Komputer menjadi lebih cepat",
            "Data dapat disadap oleh pihak tidak bertanggung jawab",
            "Layar menjadi lebih besar"
        ],
        answer: 2,
        explanation: "Jaringan publik yang tidak aman dapat meningkatkan risiko penyadapan data."
    },
    {
        q: "Apa yang dimaksud dengan rekayasa sosial (social engineering)?",
        options: [
            "Membuat desain media sosial",
            "Membangun jaringan komputer",
            "Mengembangkan aplikasi",
            "Memanipulasi seseorang agar memberikan informasi rahasia"
        ],
        answer: 3,
        explanation: "Social engineering memanfaatkan kepercayaan atau kelengahan manusia untuk mendapatkan akses atau informasi."
    },
    {
        q: "Mengapa kita tidak boleh membagikan kode OTP?",
        options: [
            "Karena kode tersebut dapat digunakan untuk mengambil alih akun",
            "Karena membuat internet lambat",
            "Karena menghabiskan baterai",
            "Karena mengubah alamat email"
        ],
        answer: 0,
        explanation: "OTP adalah kode verifikasi rahasia. Orang lain dapat menyalahgunakannya untuk masuk ke akun."
    },
    {
        q: "Apa arti dari istilah spam?",
        options: [
            "Pesan penting dari keluarga",
            "Pesan yang tidak diinginkan dan dikirim secara massal",
            "Aplikasi keamanan",
            "Sistem penyimpanan"
        ],
        answer: 1,
        explanation: "Spam biasanya berupa pesan massal yang tidak diminta dan dapat berisi iklan atau penipuan."
    },
    {
        q: "Apa manfaat membuat cadangan data (backup)?",
        options: [
            "Menghapus semua file",
            "Mengurangi keamanan perangkat",
            "Memulihkan data ketika data asli hilang atau rusak",
            "Mematikan jaringan internet"
        ],
        answer: 2,
        explanation: "Backup menyediakan salinan data agar dapat dipulihkan jika terjadi kerusakan atau kehilangan."
    },
    {
        q: "Apa yang dimaksud dengan kecerdasan buatan (AI)?",
        options: [
            "Alat untuk memperbesar layar",
            "Jaringan kabel komputer",
            "Sistem penyimpanan biasa",
            "Teknologi yang memungkinkan mesin melakukan tugas yang membutuhkan kecerdasan"
        ],
        answer: 3,
        explanation: "AI memungkinkan komputer melakukan tugas seperti mengenali pola, memahami bahasa, dan membuat prediksi."
    },
    {
        q: "Mengapa hasil dari AI tetap perlu diperiksa?",
        options: [
            "Karena AI bisa menghasilkan informasi yang keliru",
            "Karena AI tidak membutuhkan data",
            "Karena AI selalu benar",
            "Karena AI tidak bisa menghasilkan teks"
        ],
        answer: 0,
        explanation: "AI dapat membuat kesalahan atau memberikan informasi yang tidak akurat sehingga perlu diverifikasi."
    },
    {
        q: "Apa yang dimaksud dengan algoritma?",
        options: [
            "Jenis perangkat keras",
            "Urutan langkah untuk menyelesaikan suatu masalah",
            "Nama jaringan internet",
            "Jenis virus komputer"
        ],
        answer: 1,
        explanation: "Algoritma adalah rangkaian instruksi atau langkah yang disusun secara logis untuk menyelesaikan masalah."
    },
    {
        q: "Apa fungsi firewall dalam keamanan jaringan?",
        options: [
            "Memperbesar kapasitas layar",
            "Membuat desain website",
            "Mengatur dan menyaring lalu lintas jaringan",
            "Menghapus seluruh aplikasi"
        ],
        answer: 2,
        explanation: "Firewall membantu mengontrol lalu lintas jaringan berdasarkan aturan keamanan."
    },
    {
        q: "Apa yang dimaksud dengan identitas digital?",
        options: [
            "Nomor seri keyboard",
            "Warna tampilan perangkat",
            "Jenis kabel internet",
            "Informasi yang mewakili seseorang di dunia digital"
        ],
        answer: 3,
        explanation: "Identitas digital dapat berupa nama akun, foto profil, alamat email, dan informasi lain yang mewakili seseorang."
    },
    {
        q: "Apa tindakan yang tepat saat menemukan berita yang judulnya sangat provokatif?",
        options: [
            "Memeriksa isi, sumber, tanggal, dan fakta berita",
            "Langsung membagikannya",
            "Mempercayainya tanpa membaca",
            "Mengubah judul agar lebih menarik"
        ],
        answer: 0,
        explanation: "Judul provokatif belum tentu menggambarkan isi berita. Periksa sumber dan fakta sebelum percaya."
    },
    {
        q: "Apa prinsip utama etika berkomunikasi di internet?",
        options: [
            "Bebas menghina siapa saja",
            "Menghormati orang lain dan bertanggung jawab atas ucapan",
            "Menyebarkan informasi pribadi orang",
            "Membuat komentar kasar"
        ],
        answer: 1,
        explanation: "Etika digital mengajarkan kesopanan, penghormatan, dan tanggung jawab ketika berkomunikasi secara online."
    }
];

// =====================================
// VARIABEL PERMAINAN
// =====================================

let playerName = "";
let selectedQuestions = [];
let current = 0;
let score = 0;
let answered = false;

const $ = (id) => document.getElementById(id);

const questionEl = $("question");
const answersEl = $("answers");
const feedbackEl = $("feedback");
const nextBtn = $("nextBtn");

// =====================================
// VALIDASI ELEMEN HTML
// =====================================

const requiredIds = [
    "welcome", "quiz", "result", "playerName",
    "nameError", "startBtn", "displayName",
    "counter", "score", "question-number",
    "progress-bar", "question", "answers",
    "feedback", "nextBtn", "resultName",
    "finalScore", "resultTitle", "resultText",
    "correctCount", "wrongCount",
    "restartBtn", "homeBtn"
];

const missingIds = requiredIds.filter(id => !$(id));

if (missingIds.length > 0) {
    console.error("Elemen HTML tidak ditemukan:", missingIds);
}

// Pastikan bank soal tersedia
if (!Array.isArray(questionBank) || questionBank.length < 10) {
    console.error("Bank soal harus memiliki minimal 10 soal.");
}

// =====================================
// FUNGSI ACAK
// =====================================

function shuffle(array) {
    const result = [...array];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
}

// =====================================
// MEMBUAT 10 SOAL ACAK
// =====================================

function prepareQuestions() {
    if (!Array.isArray(questionBank) || questionBank.length < 10) {
        throw new Error("Bank soal tidak tersedia atau jumlahnya kurang dari 10.");
    }

    selectedQuestions = shuffle(questionBank)
        .slice(0, 10)
        .map(question => {
            if (
                !question.q ||
                !Array.isArray(question.options) ||
                question.options.length !== 4 ||
                !Number.isInteger(question.answer) ||
                question.answer < 0 ||
                question.answer > 3
            ) {
                throw new Error("Ada soal yang formatnya tidak valid.");
            }

            const shuffledOptions = shuffle(
                question.options.map((option, index) => ({
                    text: option,
                    correct: index === question.answer
                }))
            );

            return {
                ...question,
                options: shuffledOptions.map(item => item.text),
                answer: shuffledOptions.findIndex(item => item.correct)
            };
        });

    current = 0;
    score = 0;
    answered = false;
}

// =====================================
// MEMULAI PERMAINAN
// =====================================

function startGame() {
    const nameInput = $("playerName");
    const name = nameInput.value.trim();

    if (!name) {
        $("nameError").textContent =
            "Silakan masukkan nama terlebih dahulu!";
        nameInput.focus();
        return;
    }

    playerName = name;
    $("nameError").textContent = "";

    try {
        prepareQuestions();

        $("welcome").classList.add("hidden");
        $("result").classList.add("hidden");
        $("quiz").classList.remove("hidden");

        $("displayName").textContent = playerName;

        showQuestion();

    } catch (error) {
        console.error("Gagal memulai permainan:", error);
        questionEl.textContent =
            "Terjadi kesalahan saat memuat soal. Periksa script.js.";
    }
}

// =====================================
// MENAMPILKAN PERTANYAAN
// =====================================

function showQuestion() {
    if (
        !selectedQuestions.length ||
        current >= selectedQuestions.length
    ) {
        console.error("Pertanyaan tidak tersedia.");
        return;
    }

    answered = false;

    const item = selectedQuestions[current];

    $("counter").textContent =
        `${String(current + 1).padStart(2, "0")} / 10`;

    $("score").textContent = score * 10;

    $("question-number").textContent =
        `MISSION ${String(current + 1).padStart(2, "0")}`;

    $("progress-bar").style.width =
        `${(current / 10) * 100}%`;

    questionEl.textContent = item.q;

    answersEl.innerHTML = "";

    feedbackEl.className = "feedback";
    feedbackEl.textContent = "";

    nextBtn.classList.add("hidden");

    item.options.forEach((option, index) => {
        const button = document.createElement("button");

        button.type = "button";
        button.className = "answer";

        button.textContent =
            `${String.fromCharCode(65 + index)}. ${option}`;

        button.addEventListener("click", () => {
            chooseAnswer(index);
        });

        answersEl.appendChild(button);
    });
}

// =====================================
// MEMERIKSA JAWABAN
// =====================================

function chooseAnswer(choice) {
    if (answered) return;

    answered = true;

    const item = selectedQuestions[current];

    const buttons = [
        ...answersEl.querySelectorAll(".answer")
    ];

    buttons.forEach((button, index) => {
        button.disabled = true;

        if (index === item.answer) {
            button.classList.add("correct");
        }

        if (index === choice && choice !== item.answer) {
            button.classList.add("wrong");
        }
    });

    const isCorrect = choice === item.answer;

    if (isCorrect) {
        score++;
    }

    $("score").textContent = score * 10;

    feedbackEl.className =
        `feedback show ${isCorrect ? "good" : "bad"}`;

    const title = document.createElement("strong");
    title.textContent = isCorrect
        ? "✓ JAWABAN BENAR!"
        : "✕ JAWABAN SALAH!";

    const explanation = document.createElement("p");
    explanation.textContent = item.explanation;

    feedbackEl.replaceChildren(title, explanation);

    nextBtn.textContent =
        current === 9
            ? "LIHAT HASIL 🏆"
            : "PERTANYAAN SELANJUTNYA →";

    nextBtn.classList.remove("hidden");
}

// =====================================
// PERTANYAAN BERIKUTNYA
// =====================================

function nextQuestion() {
    if (!answered) return;

    if (current < 9) {
        current++;
        showQuestion();
    } else {
        showResult();
    }
}

// =====================================
// MENAMPILKAN HASIL
// =====================================

function showResult() {
    $("quiz").classList.add("hidden");
    $("result").classList.remove("hidden");

    $("progress-bar").style.width = "100%";

    $("resultName").textContent = playerName;
    $("finalScore").textContent = `${score * 10}/100`;

    $("correctCount").textContent = score;
    $("wrongCount").textContent = 10 - score;

    let title;
    let message;

    if (score >= 9) {
        title = "MASTER DIGITAL! 🚀";
        message = "Luar biasa! Kamu memiliki pengetahuan literasi digital yang sangat baik.";
    } else if (score >= 7) {
        title = "DIGITAL EXPERT! 🌟";
        message = "Hebat! Kamu sudah memahami banyak hal tentang dunia digital.";
    } else if (score >= 5) {
        title = "DIGITAL EXPLORER! 💡";
        message = "Bagus! Terus tingkatkan kemampuan dan pengetahuan digitalmu.";
    } else {
        title = "KEEP LEARNING! 🔥";
        message = "Jangan menyerah! Pelajari kembali materi dan coba tantangan berikutnya.";
    }

    $("resultTitle").textContent = title;
    $("resultText").textContent = message;
}

// =====================================
// MAIN LAGI
// =====================================

function restartGame() {
    try {
        prepareQuestions();

        $("result").classList.add("hidden");
        $("quiz").classList.remove("hidden");

        $("displayName").textContent = playerName;

        showQuestion();

    } catch (error) {
        console.error("Gagal mengulang permainan:", error);
        alert("Terjadi kesalahan saat memulai permainan.");
    }
}

// =====================================
// KEMBALI KE BERANDA
// =====================================

function goHome() {
    $("result").classList.add("hidden");
    $("quiz").classList.add("hidden");
    $("welcome").classList.remove("hidden");

    $("playerName").value = playerName;
    $("nameError").textContent = "";
}

// =====================================
// EVENT LISTENERS
// =====================================

$("startBtn").addEventListener("click", startGame);

$("playerName").addEventListener("keydown", event => {
    if (event.key === "Enter") {
        startGame();
    }
});

nextBtn.addEventListener("click", nextQuestion);

$("restartBtn").addEventListener("click", restartGame);

$("homeBtn").addEventListener("click", goHome);

// =====================================
// KONFIRMASI BANK SOAL
// =====================================

console.log(
    `Digital Smart siap! ${questionBank.length} soal tersedia.`
);
