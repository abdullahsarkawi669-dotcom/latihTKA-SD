// Konfigurasi Kuis
const MAX_SOAL_PER_SESI = 50;
let currentQuestions = [];
let userAnswers = {}; 
let isQuizFinished = false;

// Elemen DOM
const homeScreen = document.getElementById('home-screen');
const quizScreen = document.getElementById('quiz-screen');
const questionsContainer = document.getElementById('questions-container');
const btnSelesai = document.getElementById('btn-selesai');
const postQuizActions = document.getElementById('post-quiz-actions');
const scoreModal = document.getElementById('score-modal');
const pembahasanModal = document.getElementById('pembahasan-modal');
const quizTitle = document.getElementById('quiz-title');

// Fungsi Memulai Kuis
function startQuiz(subject) {
    // PENDETEKSI ERROR: Mengecek apakah soal.js berhasil dimuat atau rusak akibat salah ketik
    if (typeof db === 'undefined') {
        alert("⚠️ GAGAL MEMUAT SOAL!\n\nFile soal.js tidak terdeteksi atau mengalami kerusakan (Syntax Error). Silakan periksa kembali file soal.js Anda, pastikan tidak ada tanda koma (,) atau kurung tutup yang terlewat.");
        return;
    }
    
    if (!db[subject] || db[subject].length === 0) {
        alert(`⚠️ GAGAL MEMUAT SOAL!\n\nKategori '${subject}' belum memiliki data soal di dalam file soal.js.`);
        return;
    }

    homeScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    btnSelesai.classList.remove('hidden');
    postQuizActions.classList.add('hidden');
    
    quizTitle.innerHTML = subject === 'matematika' ? '🔢 Latihan Matematika' : '📖 Latihan Bahasa Indonesia';
    isQuizFinished = false;
    userAnswers = {};

    currentQuestions = generateRandomQuestions(subject, MAX_SOAL_PER_SESI);
    renderQuestions();
}

// Logika Pengambilan dan Pengacakan Soal
function generateRandomQuestions(subject, limit) {
    const chapters = db[subject];
    let selectedQuestions = [];
    
    const numChapters = chapters.length;
    const perChapterLimit = Math.ceil(limit / numChapters);

    chapters.forEach((chap) => {
        // Mencegah error jika bab tidak memiliki soal
        const questionsArr = chap.questions || [];
        
        let shuffledSoal = [...questionsArr].sort(() => 0.5 - Math.random());
        let chapterQuestions = shuffledSoal.slice(0, perChapterLimit).map(q => ({
            ...q,
            bab: chap.chapterTitle 
        }));
        
        selectedQuestions = selectedQuestions.concat(chapterQuestions);
    });

    return selectedQuestions.slice(0, limit);
}

// Render HTML Soal ke Layar
function renderQuestions() {
    questionsContainer.innerHTML = '';
    
    currentQuestions.forEach((q, qIndex) => {
        userAnswers[qIndex] = []; 
        
        const isMultipleAnswer = q.type === 'multiple';
        const inputType = isMultipleAnswer ? 'checkbox' : 'radio';
        let hintText = '<span class="text-blue-500 text-sm font-semibold ml-2">(Pilih satu jawaban)</span>';
        
        if(isMultipleAnswer){
             hintText = '<span class="text-purple-500 text-sm font-semibold ml-2">(Pilih lebih dari satu)</span>';
        } else if (q.type === 'true_false') {
             hintText = '<span class="text-rose-500 text-sm font-semibold ml-2">(Tentukan Benar/Salah)</span>';
        }

        let babHeader = '';
        if (qIndex === 0 || currentQuestions[qIndex - 1].bab !== q.bab) {
            babHeader = `<div class="bg-indigo-100 text-indigo-800 font-extrabold px-6 py-3 mt-8 mb-4 rounded-xl text-lg uppercase tracking-wide border-l-8 border-indigo-500">${q.bab}</div>`;
        }

        // Mencegah error jika opsi tidak terdefinisi
        const safeOptions = q.options || [];
        
        let opsiHtml = safeOptions.map((opsi, oIndex) => `
            <label class="cursor-pointer relative block group">
                <input type="${inputType}" name="q_${qIndex}" value="${oIndex}" class="checkbox-custom absolute opacity-0 w-0 h-0" onchange="handleOptionChange(${qIndex}, ${oIndex}, this, ${isMultipleAnswer})">
                <div class="p-4 bg-gray-50 border-2 border-gray-200 rounded-xl group-hover:bg-purple-50 group-hover:border-purple-300 transition-colors flex items-center gap-3">
                    <div class="w-6 h-6 rounded border-2 border-gray-300 flex items-center justify-center shrink-0 check-indicator">
                        <span class="opacity-0 font-bold text-white text-xs">✓</span>
                    </div>
                    <span class="text-gray-700 font-medium">${opsi.text}</span>
                </div>
            </label>
        `).join('');

        questionsContainer.innerHTML += `
            ${babHeader}
            <div class="glass-panel p-6 rounded-3xl shadow-sm border-2 border-white relative" id="question-card-${qIndex}">
                <div class="flex justify-between items-start mb-4 gap-4">
                    <div class="flex-1">
                        <h3 class="text-lg font-bold text-gray-800 mb-2">
                             <span class="text-rose-500">Soal ${qIndex + 1}.</span> 
                        </h3>
                        <p class="text-gray-600 bg-gray-100 p-3 rounded-lg text-sm mb-3 italic">${q.stimulus || 'Perhatikan instruksi soal berikut:'}</p>
                        <p class="font-bold text-gray-800">${q.questionText} ${hintText}</p>
                    </div>
                    <button onclick="showPembahasanSoal(${qIndex})" class="bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-2 px-4 rounded-xl text-sm shrink-0 shadow-sm border border-blue-200">
                        💡 Pembahasan
                    </button>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    ${opsiHtml}
                </div>
                
                <div id="feedback-${qIndex}" class="hidden mt-6 p-4 rounded-xl font-medium border-l-4"></div>
            </div>
        `;
    });
}

// Menangani Pemilihan Opsi
function handleOptionChange(qIndex, oIndex, el, isMultiple) {
    if (isQuizFinished) {
        el.checked = !el.checked; 
        return;
    }

    if (!isMultiple) {
        userAnswers[qIndex] = [oIndex];
        document.querySelectorAll(`input[name="q_${qIndex}"]`).forEach(input => {
            input.nextElementSibling.querySelector('.check-indicator').classList.remove('bg-purple-500', 'border-purple-500');
            input.nextElementSibling.querySelector('span').classList.add('opacity-0');
        });
    } else {
        if (el.checked) {
            userAnswers[qIndex].push(oIndex);
        } else {
            userAnswers[qIndex] = userAnswers[qIndex].filter(v => v !== oIndex);
        }
    }

    if (el.checked) {
        el.nextElementSibling.querySelector('.check-indicator').classList.add('bg-purple-500', 'border-purple-500');
        el.nextElementSibling.querySelector('span').classList.remove('opacity-0');
    } else {
        el.nextElementSibling.querySelector('.check-indicator').classList.remove('bg-purple-500', 'border-purple-500');
        el.nextElementSibling.querySelector('span').classList.add('opacity-0');
    }
}

// Logika Penskoran Plus-Minus
function finishQuiz() {
    if(!confirm("Yakin ingin mengumpulkan jawaban?")) return;

    isQuizFinished = true;
    let totalScore = 0;

    currentQuestions.forEach((q, qIndex) => {
        let questionScore = 0;
        const userSelected = userAnswers[qIndex] || [];
        
        userSelected.forEach(ansIndex => {
            if (q.options[ansIndex].isCorrect) {
                questionScore += 1; 
            } else {
                questionScore -= 1; 
            }
        });
        
        totalScore += questionScore;
    });

    document.getElementById('final-score').innerText = totalScore;
    scoreModal.classList.remove('hidden');
    
    btnSelesai.classList.add('hidden');
    postQuizActions.classList.remove('hidden');
}

// Menampilkan Pop-Up Pembahasan Satu Soal
function showPembahasanSoal(qIndex) {
    const q = currentQuestions[qIndex];
    
    const correctOptionsText = q.options.filter(opt => opt.isCorrect).map(opt => `<span class="bg-green-100 text-green-800 px-2 py-1 rounded font-bold mr-1">${opt.text}</span>`).join('');
    
    const html = `
        <div class="mb-4">
            <h4 class="font-bold text-gray-800 mb-2">Soal No. ${qIndex + 1}</h4>
            <p class="text-gray-500 text-sm italic mb-2 bg-gray-50 p-2 rounded">${q.stimulus}</p>
            <p class="font-bold text-gray-800">${q.questionText}</p>
        </div>
        <div class="mb-4">
            <h4 class="font-bold text-gray-800 mb-2">Kunci Jawaban:</h4>
            <div class="flex flex-wrap gap-2">${correctOptionsText}</div>
        </div>
        <div>
            <h4 class="font-bold text-gray-800 mb-2">Trik & Penjelasan:</h4>
            <p class="bg-blue-50 text-blue-900 p-3 rounded-xl border border-blue-100 mb-2"><strong>Penjelasan:</strong> ${q.pembahasan}</p>
            <p class="bg-yellow-50 text-yellow-900 p-3 rounded-xl border border-yellow-100"><strong>Trik:</strong> ${q.trik}</p>
        </div>
    `;
    
    document.getElementById('pembahasan-content').innerHTML = html;
    pembahasanModal.classList.remove('hidden');
}

// Menampilkan Evaluasi Seluruh Soal di Bawah Card
function showReviewMenyeluruh() {
    currentQuestions.forEach((q, qIndex) => {
        const feedbackEl = document.getElementById(`feedback-${qIndex}`);
        feedbackEl.classList.remove('hidden');

        const userSelected = userAnswers[qIndex] || [];
        
        const correctKeys = [];
        q.options.forEach((opt, idx) => { if(opt.isCorrect) correctKeys.push(idx) });
        
        let benar = 0; let salah = 0;
        userSelected.forEach(ans => {
            if (correctKeys.includes(ans)) benar++;
            else salah++;
        });

        if (benar > 0 && salah === 0 && userSelected.length === correctKeys.length) {
            feedbackEl.classList.add('bg-green-100', 'border-green-500', 'text-green-800');
            feedbackEl.innerHTML = `✅ <b>Sempurna!</b> Semua opsi dijawab benar. (Poin: ${benar})`;
        } else if (benar > 0) {
            feedbackEl.classList.add('bg-yellow-100', 'border-yellow-500', 'text-yellow-800');
            feedbackEl.innerHTML = `⚠️ <b>Kurang Tepat.</b> Benar: ${benar}, Tebakan Salah: ${salah}. Poin: ${benar - salah}`;
        } else {
            feedbackEl.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-800');
            feedbackEl.innerHTML = `❌ <b>Salah Semua/Tidak Dijawab.</b> Poin: ${0 - salah}`;
        }

        document.querySelectorAll(`input[name="q_${qIndex}"]`).forEach((input, oIndex) => {
            const container = input.nextElementSibling;
            if (correctKeys.includes(oIndex)) {
                container.classList.add('border-green-500', 'bg-green-50'); 
            } else if (userSelected.includes(oIndex)) {
                container.classList.add('border-rose-500', 'bg-rose-50'); 
            }
        });
    });

    closeScoreModal();
}

function closeScoreModal() { scoreModal.classList.add('hidden'); }
function closePembahasanModal() { pembahasanModal.classList.add('hidden'); }
function backToHome() {
    quizScreen.classList.add('hidden');
    homeScreen.classList.remove('hidden');
    window.scrollTo(0, 0);
}