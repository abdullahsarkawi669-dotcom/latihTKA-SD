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

// Render HTML Soal ke Layar (Tombol Pembahasan di Bawah)
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
            babHeader = `<div class="bg-indigo-100 text-indigo-800 font-extrabold px-6 py-4 mt-10 mb-6 rounded-2xl text-xl uppercase tracking-wide border-l-8 border-indigo-500">${q.bab}</div>`;
        }

        const safeOptions = q.options || [];
        
        let opsiHtml = safeOptions.map((opsi, oIndex) => `
            <label class="cursor-pointer relative block group">
                <input type="${inputType}" name="q_${qIndex}" value="${oIndex}" class="checkbox-custom absolute opacity-0 w-0 h-0" onchange="handleOptionChange(${qIndex}, ${oIndex}, this, ${isMultipleAnswer})">
                <div class="p-5 bg-gray-50 border-2 border-gray-200 rounded-2xl group-hover:bg-purple-50 group-hover:border-purple-300 transition-colors flex items-start gap-4">
                    <div class="w-7 h-7 mt-0.5 rounded border-2 border-gray-300 flex items-center justify-center shrink-0 check-indicator">
                        <span class="opacity-0 font-bold text-white text-sm">✓</span>
                    </div>
                    <span class="text-gray-700 font-medium text-lg leading-relaxed">${opsi.text}</span>
                </div>
            </label>
        `).join('');

        questionsContainer.innerHTML += `
            ${babHeader}
            <div class="glass-panel p-6 md:p-8 rounded-3xl shadow-md border-2 border-white relative" id="question-card-${qIndex}">
                
                <!-- Bagian Judul dan Teks Pertanyaan -->
                <div class="mb-6 border-b-2 border-gray-100 pb-4">
                    <h3 class="text-xl font-bold text-gray-800 mb-3">
                         <span class="text-rose-500 bg-rose-50 px-3 py-1 rounded-lg">Soal ${qIndex + 1}</span> 
                    </h3>
                    ${q.stimulus ? `<p class="text-gray-700 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-xl text-base md:text-lg mb-4 leading-relaxed">${q.stimulus}</p>` : ''}
                    <p class="font-bold text-gray-800 text-lg md:text-xl leading-relaxed">${q.questionText} <br class="md:hidden"/> ${hintText}</p>
                </div>
                
                <!-- Bagian Opsi Jawaban -->
                <div class="flex flex-col gap-4 mt-2">
                    ${opsiHtml}
                </div>

                <!-- Bagian Tombol Pembahasan di Bawah -->
                <div class="mt-6 pt-4 border-t-2 border-gray-50 flex justify-end">
                    <button onclick="showPembahasanSoal(${qIndex})" class="bg-blue-100 hover:bg-blue-200 text-blue-700 font-bold py-3 px-6 rounded-2xl text-sm shadow-sm border border-blue-200 w-full md:w-auto transition transform hover:scale-105">
                        💡 Lihat Pembahasan
                    </button>
                </div>
                
                <!-- Feedback Penilaian -->
                <div id="feedback-${qIndex}" class="hidden mt-4 p-5 rounded-2xl font-bold border-l-8 text-lg"></div>
            </div>
        `;
    });
}

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

function showPembahasanSoal(qIndex) {
    const q = currentQuestions[qIndex];
    
    const correctOptionsText = q.options.filter(opt => opt.isCorrect).map(opt => `<span class="bg-green-100 text-green-800 px-3 py-2 rounded-lg font-bold mr-2 mb-2 inline-block border border-green-200">${opt.text}</span>`).join('');
    
    const html = `
        <div class="mb-5">
            <h4 class="font-bold text-xl text-gray-800 mb-3 border-b-2 pb-2">Soal No. ${qIndex + 1}</h4>
            ${q.stimulus ? `<p class="text-gray-700 bg-gray-100 p-4 rounded-xl mb-3 leading-relaxed border-l-4 border-gray-300">${q.stimulus}</p>` : ''}
            <p class="font-bold text-gray-800 text-lg leading-relaxed">${q.questionText}</p>
        </div>
        <div class="mb-5 bg-white p-4 rounded-xl border-2 border-gray-100">
            <h4 class="font-bold text-gray-500 mb-3 uppercase tracking-wide text-sm">Kunci Jawaban:</h4>
            <div class="flex flex-wrap">${correctOptionsText}</div>
        </div>
        <div class="space-y-4">
            <div class="bg-blue-50 p-5 rounded-2xl border border-blue-100 shadow-sm">
                <h4 class="font-bold text-blue-800 mb-2 flex items-center gap-2">📖 Penjelasan</h4>
                <p class="text-blue-900 leading-relaxed">${q.pembahasan}</p>
            </div>
            ${q.trik ? `
            <div class="bg-yellow-50 p-5 rounded-2xl border border-yellow-100 shadow-sm">
                <h4 class="font-bold text-yellow-800 mb-2 flex items-center gap-2">⚡ Trik Cepat</h4>
                <p class="text-yellow-900 leading-relaxed">${q.trik}</p>
            </div>
            ` : ''}
        </div>
    `;
    
    document.getElementById('pembahasan-content').innerHTML = html;
    pembahasanModal.classList.remove('hidden');
}

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
            feedbackEl.innerHTML = `✅ <b class="mr-2">Sempurna!</b> Semua opsi dijawab benar. (Poin: ${benar})`;
        } else if (benar > 0) {
            feedbackEl.classList.add('bg-yellow-100', 'border-yellow-500', 'text-yellow-900');
            feedbackEl.innerHTML = `⚠️ <b class="mr-2">Kurang Tepat.</b> Benar: ${benar} | Salah: ${salah} | Poin Akhir: ${benar - salah}`;
        } else {
            feedbackEl.classList.add('bg-rose-100', 'border-rose-500', 'text-rose-900');
            feedbackEl.innerHTML = `❌ <b class="mr-2">Tidak Tepat / Kosong.</b> Poin Akhir: ${0 - salah}`;
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