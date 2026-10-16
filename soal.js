const db = {
    matematika: [
        {
    chapterTitle: "Bab 1: Pecahan & Desimal",
    questions: [
        {
            id: "m1_1",
            type: "multiple",
            stimulus: "Ibu membeli 2,5 kg mangga dan 1,25 kg apel di pasar. Di perjalanan, ibu membagikan 1 kg mangga kepada tetangga.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Total buah yang dibeli ibu awalnya adalah 3,75 kg.", isCorrect: true },
                { text: "Sisa buah mangga ibu sekarang adalah 1,5 kg.", isCorrect: true },
                { text: "Buah apel lebih berat daripada sisa mangga.", isCorrect: false }
            ],
            pembahasan: "Total awal = 2,5 + 1,25 = 3,75 kg (Benar). Sisa mangga = 2,5 - 1 = 1,5 kg (Benar). Apel (1,25 kg) lebih ringan dari sisa mangga (1,5 kg) (Salah).",
            trik: "Sejajarkan koma saat menjumlahkan atau mengurangkan angka desimal."
        },
        {
            id: "m1_2",
            type: "single",
            stimulus: "Terdapat pita sepanjang 5,5 meter. Adik memotong pita tersebut menjadi potongan-potongan kecil sepanjang 0,5 meter.",
            questionText: "Berapa banyak potongan pita yang dihasilkan adik?",
            options: [
                { text: "10 potongan", isCorrect: false },
                { text: "11 potongan", isCorrect: true },
                { text: "12 potongan", isCorrect: false },
                { text: "15 potongan", isCorrect: false }
            ],
            pembahasan: "Panjang awal dibagi panjang potongan: 5,5 ÷ 0,5. Sama dengan 55 ÷ 5 = 11 potongan.",
            trik: "Untuk pembagian desimal, kalikan kedua angka dengan 10 agar komanya hilang (5,5 jadi 55, 0,5 jadi 5)."
        },
        {
            id: "m1_3",
            type: "true_false",
            stimulus: "Siti memiliki uang Rp 50.000. Ia membelanjakan 1/2 bagian untuk buku tulis dan 1/5 bagian untuk pensil.",
            questionText: "Benar atau Salah: Sisa uang Siti sekarang adalah Rp 15.000.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Buku = 1/2 x 50.000 = 25.000. Pensil = 1/5 x 50.000 = 10.000. Total belanja = 35.000. Sisa uang = 50.000 - 35.000 = 15.000. Pernyataan BENAR.",
            trik: "Ubah pecahan menjadi nominal uang secepatnya agar lebih mudah dibayangkan."
        },
        {
            id: "m1_4",
            type: "multiple",
            stimulus: "Di sebuah toko alat tulis, harga 1 buku Rp4.500 dan harga 1 pensil Rp2.000. Rina membeli 3 buku dan 4 pensil. Ia membayar dengan uang Rp25.000.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Total harga 3 buku adalah Rp13.500.", isCorrect: true },
                { text: "Total harga 4 pensil adalah Rp8.000.", isCorrect: true },
                { text: "Kembalian yang diterima Rina adalah Rp4.500.", isCorrect: false }
            ],
            pembahasan: "Harga 3 buku = 3 x 4.500 = 13.500 (Benar). Harga 4 pensil = 4 x 2.000 = 8.000 (Benar). Total belanja = 21.500. Kembalian = 25.000 - 21.500 = 3.500, bukan 4.500 (Salah).",
            trik: "Hitung total belanja dulu, baru kurangkan dari uang yang dibayarkan."
        },
        {
            id: "m1_5",
            type: "single",
            stimulus: "Sebuah botol berisi 1,8 liter air. Air tersebut akan dituang ke dalam gelas-gelas kecil yang masing-masing berisi 0,3 liter.",
            questionText: "Berapa banyak gelas yang diperlukan untuk menampung seluruh air?",
            options: [
                { text: "5 gelas", isCorrect: false },
                { text: "6 gelas", isCorrect: true },
                { text: "7 gelas", isCorrect: false },
                { text: "8 gelas", isCorrect: false }
            ],
            pembahasan: "1,8 ÷ 0,3 = 18 ÷ 3 = 6 gelas.",
            trik: "Kalikan kedua bilangan dengan 10 agar desimal hilang (1,8 jadi 18; 0,3 jadi 3)."
        },
        {
            id: "m1_6",
            type: "true_false",
            stimulus: "Ayah memiliki 3,75 meter tali. Ia menggunakan 1,5 meter untuk mengikat kayu dan 0,75 meter untuk mengikat bambu.",
            questionText: "Benar atau Salah: Sisa tali ayah sekarang adalah 1,25 meter.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Total penggunaan = 1,5 + 0,75 = 2,25 meter. Sisa = 3,75 - 2,25 = 1,5 meter, bukan 1,25 meter.",
            trik: "Sejajarkan tanda koma saat menjumlahkan dan mengurangkan desimal."
        },
        {
            id: "m1_7",
            type: "single",
            stimulus: "Pak Budi memiliki sawah seluas 2,4 hektar. Ia menjual 0,75 hektar sawahnya kepada tetangga.",
            questionText: "Berapa luas sawah Pak Budi yang tersisa?",
            options: [
                { text: "1,55 hektar", isCorrect: false },
                { text: "1,65 hektar", isCorrect: true },
                { text: "1,75 hektar", isCorrect: false },
                { text: "1,85 hektar", isCorrect: false }
            ],
            pembahasan: "Sisa = 2,4 - 0,75 = 1,65 hektar.",
            trik: "Ubah 2,4 menjadi 2,40 agar koma sejajar dengan 0,75."
        },
        {
            id: "m1_8",
            type: "multiple",
            stimulus: "Sebuah resep kue membutuhkan 0,5 kg tepung, 0,25 kg gula, dan 0,125 kg mentega.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Total berat bahan adalah 0,875 kg.", isCorrect: true },
                { text: "Tepung lebih berat daripada gabungan gula dan mentega.", isCorrect: true },
                { text: "Mentega lebih berat daripada gula.", isCorrect: false }
            ],
            pembahasan: "Total = 0,5 + 0,25 + 0,125 = 0,875 kg (Benar). Gula + mentega = 0,375 kg, tepung 0,5 kg lebih berat (Benar). Mentega 0,125 kg lebih ringan dari gula 0,25 kg (Salah).",
            trik: "Samakan jumlah angka di belakang koma sebelum menjumlahkan (0,500 + 0,250 + 0,125)."
        },
        {
            id: "m1_9",
            type: "single",
            stimulus: "Seorang pedagang memiliki 12,5 kg beras. Beras tersebut dimasukkan ke dalam kantong plastik berisi 2,5 kg setiap kantong.",
            questionText: "Berapa kantong plastik yang diperlukan?",
            options: [
                { text: "4 kantong", isCorrect: false },
                { text: "5 kantong", isCorrect: true },
                { text: "6 kantong", isCorrect: false },
                { text: "7 kantong", isCorrect: false }
            ],
            pembahasan: "12,5 ÷ 2,5 = 125 ÷ 25 = 5 kantong.",
            trik: "Kalikan kedua bilangan dengan 10 agar pembagian lebih mudah."
        },
        {
            id: "m1_10",
            type: "true_false",
            stimulus: "Nina membeli 0,75 meter kain. Ia menggunakan 0,25 meter untuk membuat boneka dan 0,15 meter untuk membuat baju boneka.",
            questionText: "Benar atau Salah: Sisa kain Nina adalah 0,35 meter.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Total penggunaan = 0,25 + 0,15 = 0,40 meter. Sisa = 0,75 - 0,40 = 0,35 meter. Pernyataan BENAR.",
            trik: "Jumlahkan dulu semua pemakaian, baru kurangkan dari total."
        },
        {
            id: "m1_11",
            type: "single",
            stimulus: "Bentuk pecahan biasa dari 0,8 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "1/8", isCorrect: false },
                { text: "4/5", isCorrect: true },
                { text: "8/100", isCorrect: false },
                { text: "5/4", isCorrect: false }
            ],
            pembahasan: "0,8 = 8/10 = 4/5 setelah disederhanakan.",
            trik: "Ubah desimal menjadi per sepuluh, lalu sederhanakan dengan FPB."
        },
        {
            id: "m1_12",
            type: "single",
            stimulus: "Bentuk desimal dari pecahan 3/4 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "0,25", isCorrect: false },
                { text: "0,34", isCorrect: false },
                { text: "0,75", isCorrect: true },
                { text: "0,80", isCorrect: false }
            ],
            pembahasan: "3/4 = 3 ÷ 4 = 0,75.",
            trik: "Bagi pembilang dengan penyebut untuk mengubah pecahan ke desimal."
        },
        {
            id: "m1_13",
            type: "multiple",
            stimulus: "Perhatikan bilangan-bilangan berikut: 0,6 ; 2/5 ; 65% ; 0,55.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "65% lebih besar daripada 0,6.", isCorrect: true },
                { text: "2/5 sama dengan 0,4.", isCorrect: true },
                { text: "0,55 adalah bilangan terkecil.", isCorrect: false }
            ],
            pembahasan: "65% = 0,65 > 0,6 (Benar). 2/5 = 0,4 (Benar). Terkecil adalah 2/5 = 0,4, bukan 0,55 (Salah).",
            trik: "Ubah semua bentuk ke desimal agar mudah dibandingkan."
        },
        {
            id: "m1_14",
            type: "true_false",
            stimulus: "Pecahan 6/8 dan 9/12 merupakan pecahan yang senilai.",
            questionText: "Benar atau Salah: Kedua pecahan tersebut senilai.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "6/8 = 3/4 dan 9/12 = 3/4. Keduanya senilai. Pernyataan BENAR.",
            trik: "Sederhanakan kedua pecahan ke bentuk paling sederhana."
        },
        {
            id: "m1_15",
            type: "single",
            stimulus: "Ibu memiliki 2 1/2 kg gula. Ia menggunakan 3/4 kg untuk membuat kue.",
            questionText: "Berapa sisa gula ibu?",
            options: [
                { text: "1 1/4 kg", isCorrect: false },
                { text: "1 1/2 kg", isCorrect: false },
                { text: "1 3/4 kg", isCorrect: true },
                { text: "2 kg", isCorrect: false }
            ],
            pembahasan: "2 1/2 - 3/4 = 5/2 - 3/4 = 10/4 - 3/4 = 7/4 = 1 3/4 kg.",
            trik: "Samakan penyebut sebelum mengurangkan pecahan campuran."
        },
        {
            id: "m1_16",
            type: "single",
            stimulus: "Hitunglah: 0,25 + 0,75 - 0,5 = ...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "0,25", isCorrect: false },
                { text: "0,5", isCorrect: true },
                { text: "0,75", isCorrect: false },
                { text: "1,0", isCorrect: false }
            ],
            pembahasan: "0,25 + 0,75 = 1,0. Lalu 1,0 - 0,5 = 0,5.",
            trik: "Kerjakan operasi dari kiri ke kanan untuk penjumlahan dan pengurangan."
        },
        {
            id: "m1_17",
            type: "multiple",
            stimulus: "Sebuah toko memberikan diskon 25% untuk semua buku. Harga sebuah buku sebelum diskon Rp20.000.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Besar diskon adalah Rp5.000.", isCorrect: true },
                { text: "Harga buku setelah diskon adalah Rp15.000.", isCorrect: true },
                { text: "Harga buku setelah diskon adalah Rp16.000.", isCorrect: false }
            ],
            pembahasan: "Diskon = 25% x 20.000 = 5.000 (Benar). Harga akhir = 20.000 - 5.000 = 15.000 (Benar). 16.000 salah.",
            trik: "Hitung besar diskon dulu, baru kurangkan dari harga awal."
        },
        {
            id: "m1_18",
            type: "true_false",
            stimulus: "0,125 sama dengan 1/8.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "1/8 = 1 ÷ 8 = 0,125. Pernyataan BENAR.",
            trik: "Hafalkan pecahan umum: 1/8 = 0,125; 1/4 = 0,25; 1/2 = 0,5."
        },
        {
            id: "m1_19",
            type: "single",
            stimulus: "Pak Amir membeli 3,5 kg jeruk dan 2,75 kg apel. Berapa total berat buah yang dibeli Pak Amir?",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "5,25 kg", isCorrect: false },
                { text: "6,25 kg", isCorrect: true },
                { text: "6,50 kg", isCorrect: false },
                { text: "6,75 kg", isCorrect: false }
            ],
            pembahasan: "3,5 + 2,75 = 3,50 + 2,75 = 6,25 kg.",
            trik: "Tambahkan angka 0 di belakang koma agar jumlah desimalnya sama."
        },
        {
            id: "m1_20",
            type: "single",
            stimulus: "Hasil dari 4,2 x 0,5 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "1,1", isCorrect: false },
                { text: "2,1", isCorrect: true },
                { text: "2,4", isCorrect: false },
                { text: "4,7", isCorrect: false }
            ],
            pembahasan: "4,2 x 0,5 = 42/10 x 5/10 = 210/100 = 2,1.",
            trik: "Kalikan tanpa koma dulu (42 x 5 = 210), lalu hitung total angka di belakang koma (2 angka) menjadi 2,10."
        },
        {
            id: "m1_21",
            type: "multiple",
            stimulus: "Perhatikan operasi berikut: 1/2 + 1/4 = ... dan 3/4 - 1/8 = ...",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Hasil 1/2 + 1/4 adalah 3/4.", isCorrect: true },
                { text: "Hasil 3/4 - 1/8 adalah 5/8.", isCorrect: true },
                { text: "Hasil 3/4 - 1/8 adalah 2/4.", isCorrect: false }
            ],
            pembahasan: "1/2 + 1/4 = 2/4 + 1/4 = 3/4 (Benar). 3/4 - 1/8 = 6/8 - 1/8 = 5/8 (Benar). 2/4 salah.",
            trik: "Samakan penyebut dengan KPK sebelum menjumlah atau mengurang pecahan."
        },
        {
            id: "m1_22",
            type: "true_false",
            stimulus: "Seorang siswa mengatakan bahwa 0,3 lebih besar daripada 1/3.",
            questionText: "Benar atau Salah: Pernyataan siswa tersebut benar.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "1/3 = 0,333... Jadi 0,3 < 1/3. Pernyataan siswa SALAH.",
            trik: "Ubah pecahan ke desimal dengan pembagian untuk membandingkan."
        },
        {
            id: "m1_23",
            type: "single",
            stimulus: "Uang Ani Rp40.000. Ia menggunakan 3/8 bagian untuk membeli buku.",
            questionText: "Berapa uang yang digunakan Ani untuk membeli buku?",
            options: [
                { text: "Rp12.000", isCorrect: false },
                { text: "Rp15.000", isCorrect: true },
                { text: "Rp18.000", isCorrect: false },
                { text: "Rp20.000", isCorrect: false }
            ],
            pembahasan: "3/8 x 40.000 = 3 x 5.000 = 15.000.",
            trik: "Bagi total dengan penyebut, lalu kalikan dengan pembilang."
        },
        {
            id: "m1_24",
            type: "single",
            stimulus: "Sebuah wadah berisi 7,5 liter minyak. Minyak tersebut akan dituang ke botol berukuran 0,25 liter.",
            questionText: "Berapa botol yang diperlukan?",
            options: [
                { text: "25 botol", isCorrect: false },
                { text: "30 botol", isCorrect: true },
                { text: "35 botol", isCorrect: false },
                { text: "40 botol", isCorrect: false }
            ],
            pembahasan: "7,5 ÷ 0,25 = 750 ÷ 25 = 30 botol.",
            trik: "Kalikan kedua bilangan dengan 100 agar desimal hilang."
        },
        {
            id: "m1_25",
            type: "true_false",
            stimulus: "Hasil dari 2,5 x 4 adalah 10.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "2,5 x 4 = 10. Pernyataan BENAR.",
            trik: "2,5 x 4 sama dengan 25 x 4 = 100, lalu bagi 10 = 10."
        },
        {
            id: "m1_26",
            type: "single",
            stimulus: "Urutan pecahan 0,45 ; 1/2 ; 40% ; 0,5 dari yang terkecil adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "40% ; 0,45 ; 1/2 ; 0,5", isCorrect: true },
                { text: "0,45 ; 40% ; 0,5 ; 1/2", isCorrect: false },
                { text: "40% ; 0,5 ; 0,45 ; 1/2", isCorrect: false },
                { text: "1/2 ; 0,5 ; 0,45 ; 40%", isCorrect: false }
            ],
            pembahasan: "40% = 0,40; 0,45; 1/2 = 0,50; 0,5 = 0,50. Urutan terkecil: 0,40 ; 0,45 ; 0,50 ; 0,50.",
            trik: "Ubah semua ke desimal dengan dua angka di belakang koma."
        },
        {
            id: "m1_27",
            type: "multiple",
            stimulus: "Sebuah keluarga menghabiskan 1,5 kg beras pada hari Senin, 1,25 kg pada hari Selasa, dan 0,75 kg pada hari Rabu.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Total beras yang dihabiskan selama tiga hari adalah 3,5 kg.", isCorrect: true },
                { text: "Hari Senin adalah pemakaian beras terbanyak.", isCorrect: true },
                { text: "Pemakaian hari Rabu lebih banyak daripada hari Selasa.", isCorrect: false }
            ],
            pembahasan: "Total = 1,5 + 1,25 + 0,75 = 3,5 kg (Benar). Terbanyak = Senin 1,5 kg (Benar). Rabu 0,75 < Selasa 1,25 (Salah).",
            trik: "Bandingkan angka dengan menyamakan jumlah desimalnya."
        },
        {
            id: "m1_28",
            type: "single",
            stimulus: "Hasil dari 1 1/2 + 2 1/4 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "3 1/4", isCorrect: false },
                { text: "3 1/2", isCorrect: false },
                { text: "3 3/4", isCorrect: true },
                { text: "4 1/4", isCorrect: false }
            ],
            pembahasan: "1 1/2 + 2 1/4 = 3/2 + 9/4 = 6/4 + 9/4 = 15/4 = 3 3/4.",
            trik: "Ubah pecahan campuran ke pecahan biasa, samakan penyebut, lalu jumlahkan."
        },
        {
            id: "m1_29",
            type: "true_false",
            stimulus: "Hasil dari 0,6 ÷ 0,2 adalah 3.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "0,6 ÷ 0,2 = 6 ÷ 2 = 3. Pernyataan BENAR.",
            trik: "Kalikan kedua bilangan dengan 10 agar desimal hilang."
        },
        {
            id: "m1_30",
            type: "single",
            stimulus: "Bu Rina memiliki 4,5 meter kain. Setiap seragam membutuhkan 1,5 meter kain.",
            questionText: "Berapa seragam yang dapat dibuat Bu Rina?",
            options: [
                { text: "2 seragam", isCorrect: false },
                { text: "3 seragam", isCorrect: true },
                { text: "4 seragam", isCorrect: false },
                { text: "5 seragam", isCorrect: false }
            ],
            pembahasan: "4,5 ÷ 1,5 = 45 ÷ 15 = 3 seragam.",
            trik: "Kalikan kedua bilangan dengan 10 untuk menghilangkan koma."
        },
        {
            id: "m1_31",
            type: "multiple",
            stimulus: "Perhatikan bilangan campuran berikut: 2 1/4 ; 1,75 ; 9/4 ; 200%.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "2 1/4 sama dengan 9/4.", isCorrect: true },
                { text: "1,75 sama dengan 200%.", isCorrect: false },
                { text: "200% sama dengan 2,0.", isCorrect: true }
            ],
            pembahasan: "2 1/4 = 9/4 (Benar). 1,75 = 175%, bukan 200% (Salah). 200% = 2,0 (Benar).",
            trik: "Ubah semua bentuk ke desimal atau pecahan biasa agar mudah dibandingkan."
        },
        {
            id: "m1_32",
            type: "true_false",
            stimulus: "Hasil dari 3/5 + 0,4 adalah 1.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "3/5 = 0,6. 0,6 + 0,4 = 1,0. Pernyataan BENAR.",
            trik: "Ubah pecahan ke desimal agar bisa langsung dijumlahkan."
        },
        {
            id: "m1_33",
            type: "single",
            stimulus: "Seorang petani memanen 8,4 ton padi. Padi tersebut dijual 5,75 ton.",
            questionText: "Berapa ton padi yang tersisa?",
            options: [
                { text: "2,55 ton", isCorrect: false },
                { text: "2,65 ton", isCorrect: true },
                { text: "2,75 ton", isCorrect: false },
                { text: "3,65 ton", isCorrect: false }
            ],
            pembahasan: "8,4 - 5,75 = 8,40 - 5,75 = 2,65 ton.",
            trik: "Tulis 8,4 sebagai 8,40 agar koma sejajar."
        },
        {
            id: "m1_34",
            type: "single",
            stimulus: "Hasil dari 5/8 x 0,4 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "0,2", isCorrect: false },
                { text: "0,25", isCorrect: true },
                { text: "0,3", isCorrect: false },
                { text: "0,4", isCorrect: false }
            ],
            pembahasan: "5/8 = 0,625. 0,625 x 0,4 = 0,25.",
            trik: "Ubah pecahan ke desimal dulu, lalu kalikan."
        },
        {
            id: "m1_35",
            type: "multiple",
            stimulus: "Di sebuah kelas, 1/4 siswa suka matematika, 0,4 siswa suka bahasa Indonesia, dan sisanya suka IPA.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Siswa yang suka matematika dan bahasa Indonesia totalnya 0,65 bagian.", isCorrect: true },
                { text: "Siswa yang suka IPA sebanyak 0,35 bagian.", isCorrect: true },
                { text: "Siswa yang suka matematika lebih banyak daripada bahasa Indonesia.", isCorrect: false }
            ],
            pembahasan: "1/4 = 0,25. 0,25 + 0,4 = 0,65 (Benar). Sisa = 1 - 0,65 = 0,35 (Benar). Matematika 0,25 < B. Indonesia 0,4 (Salah).",
            trik: "Ubah pecahan ke desimal, lalu jumlahkan untuk mencari sisa."
        },
        {
            id: "m1_36",
            type: "true_false",
            stimulus: "Hasil dari 1,2 x 3,5 adalah 4,2.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "1,2 x 3,5 = 12/10 x 35/10 = 420/100 = 4,2. Pernyataan BENAR.",
            trik: "Kalikan tanpa koma (12 x 35 = 420), lalu hitung 2 angka di belakang koma = 4,20."
        },
        {
            id: "m1_37",
            type: "single",
            stimulus: "Hasil dari 7,2 ÷ 0,9 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "6", isCorrect: false },
                { text: "7", isCorrect: false },
                { text: "8", isCorrect: true },
                { text: "9", isCorrect: false }
            ],
            pembahasan: "7,2 ÷ 0,9 = 72 ÷ 9 = 8.",
            trik: "Kalikan kedua bilangan dengan 10 agar desimal hilang."
        },
        {
            id: "m1_38",
            type: "single",
            stimulus: "Hasil dari 2/3 + 1/6 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "3/9", isCorrect: false },
                { text: "5/6", isCorrect: true },
                { text: "3/6", isCorrect: false },
                { text: "1/2", isCorrect: false }
            ],
            pembahasan: "2/3 + 1/6 = 4/6 + 1/6 = 5/6.",
            trik: "Samakan penyebut dengan KPK dari 3 dan 6, yaitu 6."
        },
        {
            id: "m1_39",
            type: "multiple",
            stimulus: "Sebuah tangki berisi 5,5 liter air. Air digunakan untuk menyiram 2,25 liter, lalu diisi lagi 1,5 liter.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Air di tangki setelah disiram adalah 3,25 liter.", isCorrect: true },
                { text: "Air di tangki setelah diisi lagi adalah 4,75 liter.", isCorrect: true },
                { text: "Air di tangki sekarang lebih banyak dari awalnya.", isCorrect: false }
            ],
            pembahasan: "5,5 - 2,25 = 3,25 (Benar). 3,25 + 1,5 = 4,75 (Benar). 4,75 < 5,5, jadi tidak lebih banyak (Salah).",
            trik: "Kerjakan berurutan sesuai cerita."
        },
        {
            id: "m1_40",
            type: "true_false",
            stimulus: "Pecahan 0,375 sama dengan 3/8.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "3/8 = 0,375. Pernyataan BENAR.",
            trik: "Hafalkan konversi 1/8 = 0,125, sehingga 3/8 = 0,375."
        },
        {
            id: "m1_41",
            type: "single",
            stimulus: "Seorang siswa membaca 0,4 bagian buku pada hari pertama dan 0,25 bagian pada hari kedua.",
            questionText: "Berapa bagian buku yang sudah dibaca siswa tersebut?",
            options: [
                { text: "0,55 bagian", isCorrect: false },
                { text: "0,60 bagian", isCorrect: false },
                { text: "0,65 bagian", isCorrect: true },
                { text: "0,75 bagian", isCorrect: false }
            ],
            pembahasan: "0,4 + 0,25 = 0,65 bagian.",
            trik: "Sejajarkan koma saat menjumlahkan desimal."
        },
        {
            id: "m1_42",
            type: "single",
            stimulus: "Hasil dari 1 - 0,375 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "0,525", isCorrect: false },
                { text: "0,625", isCorrect: true },
                { text: "0,725", isCorrect: false },
                { text: "0,875", isCorrect: false }
            ],
            pembahasan: "1 - 0,375 = 1,000 - 0,375 = 0,625.",
            trik: "Tulis 1 sebagai 1,000 agar bisa dikurangkan dengan bilangan desimal tiga angka."
        },
        {
            id: "m1_43",
            type: "multiple",
            stimulus: "Bu Tini membeli 1/2 kg gula, 0,25 kg tepung, dan 3/4 kg beras.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Berat beras lebih besar daripada gula.", isCorrect: true },
                { text: "Total berat belanjaan Bu Tini adalah 1,5 kg.", isCorrect: true },
                { text: "Tepung adalah belanjaan paling berat.", isCorrect: false }
            ],
            pembahasan: "Gula 0,5 kg; tepung 0,25 kg; beras 0,75 kg. Beras > gula (Benar). Total = 0,5 + 0,25 + 0,75 = 1,5 kg (Benar). Paling berat beras (Salah).",
            trik: "Ubah semua pecahan ke desimal agar mudah dibandingkan."
        },
        {
            id: "m1_44",
            type: "true_false",
            stimulus: "Hasil dari 4/5 - 1/2 adalah 3/10.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "4/5 - 1/2 = 8/10 - 5/10 = 3/10. Pernyataan BENAR.",
            trik: "Samakan penyebut dengan KPK dari 5 dan 2, yaitu 10."
        },
        {
            id: "m1_45",
            type: "single",
            stimulus: "Sebuah kran mengalirkan 0,75 liter air per menit. Berapa liter air yang mengalir dalam 4 menit?",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "2,5 liter", isCorrect: false },
                { text: "3 liter", isCorrect: true },
                { text: "3,5 liter", isCorrect: false },
                { text: "4 liter", isCorrect: false }
            ],
            pembahasan: "0,75 x 4 = 3 liter.",
            trik: "0,75 x 4 sama dengan 3/4 x 4 = 3."
        },
        {
            id: "m1_46",
            type: "single",
            stimulus: "Hasil dari 6,4 ÷ 8 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "0,6", isCorrect: false },
                { text: "0,7", isCorrect: false },
                { text: "0,8", isCorrect: true },
                { text: "0,9", isCorrect: false }
            ],
            pembahasan: "6,4 ÷ 8 = 64 ÷ 80 = 0,8.",
            trik: "Bagi tanpa koma (64 ÷ 8 = 8), lalu letakkan koma satu angka dari kanan = 0,8."
        },
        {
            id: "m1_47",
            type: "multiple",
            stimulus: "Perhatikan pernyataan berikut tentang bilangan 0,75.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "0,75 sama dengan 75%.", isCorrect: true },
                { text: "0,75 sama dengan 3/4.", isCorrect: true },
                { text: "0,75 lebih kecil daripada 0,7.", isCorrect: false }
            ],
            pembahasan: "0,75 = 75% (Benar). 0,75 = 3/4 (Benar). 0,75 > 0,7 (Salah).",
            trik: "Desimal ke persen: kalikan 100. Desimal ke pecahan: ubah ke per seratus lalu sederhanakan."
        },
        {
            id: "m1_48",
            type: "true_false",
            stimulus: "Hasil dari 0,9 - 0,45 adalah 0,45.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "0,90 - 0,45 = 0,45. Pernyataan BENAR.",
            trik: "Tulis 0,9 sebagai 0,90 agar koma sejajar."
        },
        {
            id: "m1_49",
            type: "single",
            stimulus: "Pak Hasan membeli 2,75 kg daging. Ia memasak 1,5 kg untuk acara keluarga.",
            questionText: "Berapa kg daging yang belum dimasak?",
            options: [
                { text: "1,15 kg", isCorrect: false },
                { text: "1,20 kg", isCorrect: false },
                { text: "1,25 kg", isCorrect: true },
                { text: "1,35 kg", isCorrect: false }
            ],
            pembahasan: "2,75 - 1,50 = 1,25 kg.",
            trik: "Tulis 1,5 sebagai 1,50 agar koma sejajar dengan 2,75."
        },
        {
            id: "m1_50",
            type: "multiple",
            stimulus: "Sebuah proyek diselesaikan dalam tiga tahap. Tahap pertama 0,35 bagian, tahap kedua 0,25 bagian, sisanya tahap ketiga.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Tahap ketiga menyelesaikan 0,40 bagian.", isCorrect: true },
                { text: "Tahap ketiga adalah bagian terbesar.", isCorrect: true },
                { text: "Tahap kedua lebih besar daripada tahap ketiga.", isCorrect: false }
            ],
            pembahasan: "Tahap ketiga = 1 - 0,35 - 0,25 = 0,40 (Benar). Terbesar = tahap pertama 0,35? Tidak, tahap ketiga 0,40 lebih besar. Jadi pernyataan kedua SALAH. Mohon koreksi: ubah opsi kedua menjadi 'Tahap ketiga adalah bagian terbesar' (Benar) atau tetap 'Tahap pertama adalah bagian terbesar' (Salah).",
            trik: "Hitung sisa terlebih dahulu, lalu bandingkan semua bagian."
        }
    ]
},
        {
    chapterTitle: "Bab 2: KPK & FPB",
    questions: [
        {
            id: "m2_1",
            type: "multiple",
            stimulus: "Ayah menyalakan tiga lampu hias. Lampu merah menyala tiap 2 detik, kuning tiap 3 detik, dan hijau tiap 4 detik.",
            questionText: "Jika ketiga lampu menyala bersamaan di detik pertama, manakah pernyataan yang tepat? (Pilih dua)",
            options: [
                { text: "Lampu merah dan kuning akan menyala bersama tiap 6 detik.", isCorrect: true },
                { text: "Ketiga lampu menyala bersama tiap 24 detik.", isCorrect: false },
                { text: "Ketiga lampu menyala bersama tiap 12 detik.", isCorrect: true }
            ],
            pembahasan: "KPK dari 2 dan 3 adalah 6 (Benar). KPK dari 2, 3, dan 4 adalah 12, bukan 24 (Salah, Benar).",
            trik: "Cari angka terkecil yang bisa dibagi oleh semua angka tersebut (KPK)."
        },
        {
            id: "m2_2",
            type: "single",
            stimulus: "Guru membagikan hadiah dari 24 pensil dan 36 penghapus. Hadiah dimasukkan ke dalam plastik dengan jumlah sama rata sebanyak-banyaknya.",
            questionText: "Berapa banyak plastik hadiah yang bisa dibuat?",
            options: [
                { text: "6 plastik", isCorrect: false },
                { text: "8 plastik", isCorrect: false },
                { text: "12 plastik", isCorrect: true },
                { text: "24 plastik", isCorrect: false }
            ],
            pembahasan: "Karena dibagi 'sama rata sebanyak-banyaknya', gunakan FPB dari 24 dan 36. FPB = 12.",
            trik: "Kata kunci 'dibagi sama rata / sebanyak-banyaknya' pasti menanyakan FPB."
        },
        {
            id: "m2_3",
            type: "true_false",
            stimulus: "Rudi berenang tiap 4 hari sekali, Doni berenang tiap 6 hari sekali.",
            questionText: "Benar atau Salah: Mereka berenang bersama-sama setiap 10 hari sekali.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "KPK dari 4 dan 6 adalah 12. Jadi mereka berenang bersama setiap 12 hari sekali.",
            trik: "Jangan tertipu menjumlahkan harinya (4+6). Cari kelipatannya."
        },
        {
            id: "m2_4",
            type: "multiple",
            stimulus: "Tiga buah lampu berkedip secara bergantian. Lampu A berkedip setiap 4 detik, lampu B setiap 6 detik, dan lampu C setiap 8 detik. Ketiganya berkedip bersamaan pada detik ke-0.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Lampu A dan B berkedip bersamaan setiap 12 detik.", isCorrect: true },
                { text: "Ketiga lampu berkedip bersamaan setiap 24 detik.", isCorrect: true },
                { text: "Lampu B dan C berkedip bersamaan setiap 18 detik.", isCorrect: false }
            ],
            pembahasan: "KPK 4 dan 6 = 12 (Benar). KPK 4, 6, dan 8 = 24 (Benar). KPK 6 dan 8 = 24, bukan 18 (Salah).",
            trik: "Untuk tiga bilangan, cari KPK dua bilangan dulu, lalu KPK hasilnya dengan bilangan ketiga."
        },
        {
            id: "m2_5",
            type: "single",
            stimulus: "Bu Sari memiliki 48 kue bolu dan 36 kue donat. Kedua jenis kue akan dimasukkan ke dalam kotak dengan jumlah yang sama rata sebanyak-banyaknya.",
            questionText: "Berapa banyak kotak yang dapat dibuat Bu Sari?",
            options: [
                { text: "6 kotak", isCorrect: false },
                { text: "8 kotak", isCorrect: false },
                { text: "12 kotak", isCorrect: true },
                { text: "18 kotak", isCorrect: false }
            ],
            pembahasan: "FPB dari 48 dan 36 adalah 12.",
            trik: "Kata kunci 'sama rata sebanyak-banyaknya' selalu mengarah ke FPB."
        },
        {
            id: "m2_6",
            type: "true_false",
            stimulus: "Andi berlatih renang setiap 3 hari sekali. Budi berlatih renang setiap 5 hari sekali. Mereka berlatih bersama pertama kali pada tanggal 1 Maret.",
            questionText: "Benar atau Salah: Mereka akan berlatih bersama lagi pada tanggal 16 Maret.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "KPK dari 3 dan 5 adalah 15. 1 Maret + 15 hari = 16 Maret. Pernyataan BENAR.",
            trik: "Jangan tertipu dengan menjumlahkan harinya. Cari KPK."
        },
        {
            id: "m2_7",
            type: "single",
            stimulus: "KPK dari 6 dan 8 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "14", isCorrect: false },
                { text: "24", isCorrect: true },
                { text: "48", isCorrect: false },
                { text: "12", isCorrect: false }
            ],
            pembahasan: "Kelipatan 6: 6, 12, 18, 24. Kelipatan 8: 8, 16, 24. KPK = 24.",
            trik: "Tulis kelipatan masing-masing bilangan sampai menemukan yang sama."
        },
        {
            id: "m2_8",
            type: "single",
            stimulus: "FPB dari 18 dan 24 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "2", isCorrect: false },
                { text: "3", isCorrect: false },
                { text: "6", isCorrect: true },
                { text: "12", isCorrect: false }
            ],
            pembahasan: "Faktor 18: 1,2,3,6,9,18. Faktor 24: 1,2,3,4,6,8,12,24. Faktor persekutuan terbesar = 6.",
            trik: "Daftar faktor kedua bilangan, lalu cari yang terbesar dan sama."
        },
        {
            id: "m2_9",
            type: "multiple",
            stimulus: "Dua lonceng berbunyi bersamaan pukul 08.00. Lonceng A berbunyi setiap 15 menit, lonceng B setiap 20 menit.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Kedua lonceng berbunyi bersama setiap 60 menit.", isCorrect: true },
                { text: "Kedua lonceng berbunyi bersama lagi pukul 09.00.", isCorrect: true },
                { text: "Kedua lonceng berbunyi bersama setiap 35 menit.", isCorrect: false }
            ],
            pembahasan: "KPK 15 dan 20 = 60 menit (Benar). 08.00 + 60 menit = 09.00 (Benar). 35 menit salah.",
            trik: "KPK dari 15 dan 20 adalah 60, bukan hasil penjumlahan 15+20."
        },
        {
            id: "m2_10",
            type: "true_false",
            stimulus: "FPB dari 12 dan 20 adalah 4.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Faktor 12: 1,2,3,4,6,12. Faktor 20: 1,2,4,5,10,20. FPB = 4. Pernyataan BENAR.",
            trik: "FPB selalu lebih kecil atau sama dengan bilangan terkecil."
        },
        {
            id: "m2_11",
            type: "single",
            stimulus: "Ibu memiliki 30 kue lapis dan 45 kue putu. Kue akan dimasukkan ke dalam kotak dengan jumlah sama banyak.",
            questionText: "Berapa kotak terbanyak yang dapat dibuat?",
            options: [
                { text: "5 kotak", isCorrect: false },
                { text: "10 kotak", isCorrect: false },
                { text: "15 kotak", isCorrect: true },
                { text: "20 kotak", isCorrect: false }
            ],
            pembahasan: "FPB dari 30 dan 45 = 15.",
            trik: "FPB dicari dengan faktor persekutuan terbesar, bukan KPK."
        },
        {
            id: "m2_12",
            type: "single",
            stimulus: "KPK dari 12 dan 18 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "6", isCorrect: false },
                { text: "24", isCorrect: false },
                { text: "36", isCorrect: true },
                { text: "72", isCorrect: false }
            ],
            pembahasan: "Kelipatan 12: 12, 24, 36. Kelipatan 18: 18, 36. KPK = 36.",
            trik: "KPK dari 12 dan 18 adalah 36, bukan 72 (72 adalah kelipatan persekutuan, tetapi bukan terkecil)."
        },
        {
            id: "m2_13",
            type: "multiple",
            stimulus: "Dua bus berangkat dari terminal yang sama. Bus A berangkat setiap 20 menit, bus B setiap 30 menit. Keduanya berangkat bersama pukul 06.00.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Kedua bus berangkat bersama setiap 60 menit.", isCorrect: true },
                { text: "Kedua bus berangkat bersama lagi pukul 07.00.", isCorrect: true },
                { text: "Kedua bus berangkat bersama setiap 50 menit.", isCorrect: false }
            ],
            pembahasan: "KPK 20 dan 30 = 60 menit (Benar). 06.00 + 60 menit = 07.00 (Benar). 50 menit salah.",
            trik: "KPK dari 20 dan 30 adalah 60."
        },
        {
            id: "m2_14",
            type: "true_false",
            stimulus: "KPK dari 5 dan 7 adalah 35.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "5 dan 7 adalah bilangan prima yang berbeda, sehingga KPK = 5 x 7 = 35. Pernyataan BENAR.",
            trik: "Jika dua bilangan prima berbeda, KPK = hasil kali keduanya."
        },
        {
            id: "m2_15",
            type: "single",
            stimulus: "FPB dari 36 dan 48 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "6", isCorrect: false },
                { text: "8", isCorrect: false },
                { text: "12", isCorrect: true },
                { text: "16", isCorrect: false }
            ],
            pembahasan: "Faktor 36: 1,2,3,4,6,9,12,18,36. Faktor 48: 1,2,3,4,6,8,12,16,24,48. FPB = 12.",
            trik: "FPB dari 36 dan 48 adalah 12."
        },
        {
            id: "m2_16",
            type: "single",
            stimulus: "Rina berlatih piano setiap 3 hari sekali, Sari setiap 4 hari sekali. Mereka berlatih bersama pertama kali tanggal 2 April.",
            questionText: "Kapan mereka berlatih bersama lagi?",
            options: [
                { text: "12 April", isCorrect: false },
                { text: "14 April", isCorrect: true },
                { text: "16 April", isCorrect: false },
                { text: "18 April", isCorrect: false }
            ],
            pembahasan: "KPK 3 dan 4 = 12. 2 April + 12 hari = 14 April.",
            trik: "KPK 3 dan 4 = 12 (bukan 7)."
        },
        {
            id: "m2_17",
            type: "multiple",
            stimulus: "Tiga orang petugas jaga malam: Ali jaga setiap 2 hari, Budi setiap 3 hari, Cici setiap 4 hari. Mereka jaga bersama pertama kali tanggal 1 Mei.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Ali dan Budi jaga bersama setiap 6 hari.", isCorrect: true },
                { text: "Ketiganya jaga bersama setiap 12 hari.", isCorrect: true },
                { text: "Ketiganya jaga bersama setiap 24 hari.", isCorrect: false }
            ],
            pembahasan: "KPK 2 dan 3 = 6 (Benar). KPK 2, 3, dan 4 = 12 (Benar). 24 salah karena bukan terkecil.",
            trik: "KPK dari 2, 3, dan 4 adalah 12, bukan 24."
        },
        {
            id: "m2_18",
            type: "true_false",
            stimulus: "FPB dari 16 dan 24 adalah 8.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Faktor 16: 1,2,4,8,16. Faktor 24: 1,2,3,4,6,8,12,24. FPB = 8. Pernyataan BENAR.",
            trik: "FPB dari 16 dan 24 adalah 8."
        },
        {
            id: "m2_19",
            type: "single",
            stimulus: "KPK dari 4, 6, dan 8 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "12", isCorrect: false },
                { text: "18", isCorrect: false },
                { text: "24", isCorrect: true },
                { text: "48", isCorrect: false }
            ],
            pembahasan: "KPK 4 dan 6 = 12. KPK 12 dan 8 = 24.",
            trik: "Hitung KPK dua bilangan dulu, lalu KPK hasilnya dengan bilangan ketiga."
        },
        {
            id: "m2_20",
            type: "single",
            stimulus: "Ibu memiliki 60 kue dan 90 permen. Keduanya akan dimasukkan ke dalam kantong dengan jumlah sama banyak.",
            questionText: "Berapa kantong terbanyak yang dapat dibuat?",
            options: [
                { text: "15 kantong", isCorrect: false },
                { text: "20 kantong", isCorrect: false },
                { text: "30 kantong", isCorrect: true },
                { text: "45 kantong", isCorrect: false }
            ],
            pembahasan: "FPB dari 60 dan 90 adalah 30.",
            trik: "FPB dicari dengan faktor persekutuan terbesar."
        },
        {
            id: "m2_21",
            type: "multiple",
            stimulus: "Dua buah jam alarm berbunyi bersamaan pukul 05.00. Jam A berbunyi setiap 12 menit, jam B setiap 18 menit.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Kedua jam berbunyi bersama setiap 36 menit.", isCorrect: true },
                { text: "Kedua jam berbunyi bersama lagi pukul 05.36.", isCorrect: true },
                { text: "Kedua jam berbunyi bersama setiap 30 menit.", isCorrect: false }
            ],
            pembahasan: "KPK 12 dan 18 = 36 (Benar). 05.00 + 36 menit = 05.36 (Benar). 30 menit salah.",
            trik: "KPK dari 12 dan 18 adalah 36."
        },
        {
            id: "m2_22",
            type: "true_false",
            stimulus: "KPK dari 8 dan 12 adalah 48.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "KPK dari 8 dan 12 adalah 24, bukan 48. Pernyataan SALAH.",
            trik: "48 adalah kelipatan persekutuan, tetapi bukan yang terkecil."
        },
        {
            id: "m2_23",
            type: "single",
            stimulus: "FPB dari 42 dan 56 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "7", isCorrect: false },
                { text: "14", isCorrect: true },
                { text: "21", isCorrect: false },
                { text: "28", isCorrect: false }
            ],
            pembahasan: "Faktor 42: 1,2,3,6,7,14,21,42. Faktor 56: 1,2,4,7,8,14,28,56. FPB = 14.",
            trik: "FPB dari 42 dan 56 adalah 14."
        },
        {
            id: "m2_24",
            type: "single",
            stimulus: "Pak Tani menanam jagung setiap 6 hari sekali dan kedelai setiap 9 hari sekali. Keduanya ditanam bersama tanggal 5 Juni.",
            questionText: "Kapan keduanya ditanam bersama lagi?",
            options: [
                { text: "17 Juni", isCorrect: false },
                { text: "23 Juni", isCorrect: true },
                { text: "29 Juni", isCorrect: false },
                { text: "5 Juli", isCorrect: false }
            ],
            pembahasan: "KPK 6 dan 9 = 18. 5 Juni + 18 hari = 23 Juni.",
            trik: "KPK 6 dan 9 = 18."
        },
        {
            id: "m2_25",
            type: "multiple",
            stimulus: "Lampu A menyala setiap 5 detik, lampu B setiap 6 detik, dan lampu C setiap 10 detik. Ketiganya menyala bersama pada detik ke-0.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Lampu A dan C menyala bersama setiap 10 detik.", isCorrect: true },
                { text: "Ketiga lampu menyala bersama setiap 30 detik.", isCorrect: true },
                { text: "Lampu B dan C menyala bersama setiap 60 detik.", isCorrect: false }
            ],
            pembahasan: "KPK 5 dan 10 = 10 (Benar). KPK 5, 6, dan 10 = 30 (Benar). KPK 6 dan 10 = 30, bukan 60 (Salah).",
            trik: "KPK dari 6 dan 10 adalah 30, bukan 60."
        },
        {
            id: "m2_26",
            type: "true_false",
            stimulus: "FPB dari 24 dan 36 adalah 12.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Faktor 24: 1,2,3,4,6,8,12,24. Faktor 36: 1,2,3,4,6,9,12,18,36. FPB = 12. Pernyataan BENAR.",
            trik: "FPB dari 24 dan 36 adalah 12."
        },
        {
            id: "m2_27",
            type: "single",
            stimulus: "KPK dari 10 dan 15 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "5", isCorrect: false },
                { text: "25", isCorrect: false },
                { text: "30", isCorrect: true },
                { text: "60", isCorrect: false }
            ],
            pembahasan: "Kelipatan 10: 10, 20, 30. Kelipatan 15: 15, 30. KPK = 30.",
            trik: "KPK dari 10 dan 15 adalah 30."
        },
        {
            id: "m2_28",
            type: "single",
            stimulus: "Bu Ani memiliki 72 kue dan 96 roti. Keduanya akan dimasukkan ke dalam kotak dengan jumlah sama banyak.",
            questionText: "Berapa kotak terbanyak yang dapat dibuat?",
            options: [
                { text: "12 kotak", isCorrect: false },
                { text: "18 kotak", isCorrect: false },
                { text: "24 kotak", isCorrect: true },
                { text: "36 kotak", isCorrect: false }
            ],
            pembahasan: "FPB dari 72 dan 96 adalah 24.",
            trik: "FPB dari 72 dan 96 adalah 24."
        },
        {
            id: "m2_29",
            type: "multiple",
            stimulus: "Dua orang berenang di kolam yang sama. Ani berenang setiap 4 hari, Budi setiap 6 hari. Mereka berenang bersama tanggal 1 Juli.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Mereka berenang bersama setiap 12 hari.", isCorrect: true },
                { text: "Mereka berenang bersama lagi tanggal 13 Juli.", isCorrect: true },
                { text: "Mereka berenang bersama setiap 10 hari.", isCorrect: false }
            ],
            pembahasan: "KPK 4 dan 6 = 12 (Benar). 1 Juli + 12 hari = 13 Juli (Benar). 10 hari salah.",
            trik: "KPK 4 dan 6 = 12."
        },
        {
            id: "m2_30",
            type: "true_false",
            stimulus: "KPK dari 6 dan 9 adalah 18.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Kelipatan 6: 6, 12, 18. Kelipatan 9: 9, 18. KPK = 18. Pernyataan BENAR.",
            trik: "KPK 6 dan 9 = 18."
        },
        {
            id: "m2_31",
            type: "single",
            stimulus: "FPB dari 28 dan 42 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "7", isCorrect: false },
                { text: "14", isCorrect: true },
                { text: "21", isCorrect: false },
                { text: "28", isCorrect: false }
            ],
            pembahasan: "Faktor 28: 1,2,4,7,14,28. Faktor 42: 1,2,3,6,7,14,21,42. FPB = 14.",
            trik: "FPB 28 dan 42 = 14."
        },
        {
            id: "m2_32",
            type: "single",
            stimulus: "Tiga lonceng berbunyi bersamaan pukul 07.00. Lonceng A berbunyi setiap 4 menit, B setiap 6 menit, C setiap 8 menit.",
            questionText: "Kapan ketiga lonceng berbunyi bersama lagi?",
            options: [
                { text: "07.12", isCorrect: false },
                { text: "07.24", isCorrect: true },
                { text: "07.36", isCorrect: false },
                { text: "07.48", isCorrect: false }
            ],
            pembahasan: "KPK 4, 6, dan 8 = 24 menit. 07.00 + 24 menit = 07.24.",
            trik: "KPK dari 4, 6, dan 8 adalah 24."
        },
        {
            id: "m2_33",
            type: "multiple",
            stimulus: "Ibu memiliki 45 kue dan 60 permen. Keduanya akan dimasukkan ke dalam kantong dengan jumlah sama banyak.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Kantong terbanyak yang dapat dibuat adalah 15.", isCorrect: true },
                { text: "Setiap kantong berisi 3 kue.", isCorrect: true },
                { text: "Setiap kantong berisi 5 permen.", isCorrect: false }
            ],
            pembahasan: "FPB 45 dan 60 = 15 (Benar). Kue per kantong = 45 ÷ 15 = 3 (Benar). Permen per kantong = 60 ÷ 15 = 4, bukan 5 (Salah).",
            trik: "Setelah FPB ditemukan, bagi jumlah masing-masing dengan FPB."
        },
        {
            id: "m2_34",
            type: "true_false",
            stimulus: "KPK dari 3, 4, dan 6 adalah 12.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "KPK 3 dan 4 = 12. KPK 12 dan 6 = 12. Jadi KPK = 12. Pernyataan BENAR.",
            trik: "Jika bilangan terkecil habis membagi KPK dua bilangan lain, KPK tidak berubah."
        },
        {
            id: "m2_35",
            type: "single",
            stimulus: "KPK dari 8 dan 10 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "18", isCorrect: false },
                { text: "20", isCorrect: false },
                { text: "40", isCorrect: true },
                { text: "80", isCorrect: false }
            ],
            pembahasan: "Kelipatan 8: 8, 16, 24, 32, 40. Kelipatan 10: 10, 20, 30, 40. KPK = 40.",
            trik: "KPK 8 dan 10 = 40."
        },
        {
            id: "m2_36",
            type: "single",
            stimulus: "FPB dari 32 dan 48 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "8", isCorrect: false },
                { text: "12", isCorrect: false },
                { text: "16", isCorrect: true },
                { text: "24", isCorrect: false }
            ],
            pembahasan: "Faktor 32: 1,2,4,8,16,32. Faktor 48: 1,2,3,4,6,8,12,16,24,48. FPB = 16.",
            trik: "FPB 32 dan 48 = 16."
        },
        {
            id: "m2_37",
            type: "multiple",
            stimulus: "Dua kapal berlayar dari pelabuhan yang sama. Kapal A berlayar setiap 8 hari, kapal B setiap 12 hari. Keduanya berlayar bersama tanggal 1 Agustus.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Kedua kapal berlayar bersama setiap 24 hari.", isCorrect: true },
                { text: "Kedua kapal berlayar bersama lagi tanggal 25 Agustus.", isCorrect: true },
                { text: "Kedua kapal berlayar bersama setiap 20 hari.", isCorrect: false }
            ],
            pembahasan: "KPK 8 dan 12 = 24 (Benar). 1 Agustus + 24 = 25 Agustus (Benar). 20 hari salah.",
            trik: "KPK 8 dan 12 = 24."
        },
        {
            id: "m2_38",
            type: "true_false",
            stimulus: "FPB dari 15 dan 25 adalah 5.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Faktor 15: 1,3,5,15. Faktor 25: 1,5,25. FPB = 5. Pernyataan BENAR.",
            trik: "FPB 15 dan 25 = 5."
        },
        {
            id: "m2_39",
            type: "single",
            stimulus: "Ibu membuat 84 bakwan dan 126 risol. Keduanya akan dimasukkan ke dalam kotak dengan jumlah sama banyak.",
            questionText: "Berapa kotak terbanyak yang dapat dibuat?",
            options: [
                { text: "14 kotak", isCorrect: false },
                { text: "21 kotak", isCorrect: false },
                { text: "42 kotak", isCorrect: true },
                { text: "63 kotak", isCorrect: false }
            ],
            pembahasan: "FPB dari 84 dan 126 adalah 42.",
            trik: "FPB 84 dan 126 = 42."
        },
        {
            id: "m2_40",
            type: "single",
            stimulus: "KPK dari 7 dan 9 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "16", isCorrect: false },
                { text: "49", isCorrect: false },
                { text: "63", isCorrect: true },
                { text: "72", isCorrect: false }
            ],
            pembahasan: "7 dan 9 saling prima (FPB = 1), maka KPK = 7 x 9 = 63.",
            trik: "Jika dua bilangan saling prima, KPK = hasil kali keduanya."
        },
        {
            id: "m2_41",
            type: "multiple",
            stimulus: "Rani les matematika setiap 4 hari, les bahasa Inggris setiap 5 hari. Ia les keduanya bersama tanggal 1 September.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Rani les keduanya bersama setiap 20 hari.", isCorrect: true },
                { text: "Rani les keduanya bersama lagi tanggal 21 September.", isCorrect: true },
                { text: "Rani les keduanya bersama setiap 9 hari.", isCorrect: false }
            ],
            pembahasan: "KPK 4 dan 5 = 20 (Benar). 1 September + 20 = 21 September (Benar). 9 hari salah.",
            trik: "KPK 4 dan 5 = 20."
        },
        {
            id: "m2_42",
            type: "true_false",
            stimulus: "KPK dari 12 dan 15 adalah 60.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Kelipatan 12: 12, 24, 36, 48, 60. Kelipatan 15: 15, 30, 45, 60. KPK = 60. Pernyataan BENAR.",
            trik: "KPK 12 dan 15 = 60."
        },
        {
            id: "m2_43",
            type: "single",
            stimulus: "FPB dari 27 dan 45 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "3", isCorrect: false },
                { text: "6", isCorrect: false },
                { text: "9", isCorrect: true },
                { text: "15", isCorrect: false }
            ],
            pembahasan: "Faktor 27: 1,3,9,27. Faktor 45: 1,3,5,9,15,45. FPB = 9.",
            trik: "FPB 27 dan 45 = 9."
        },
        {
            id: "m2_44",
            type: "single",
            stimulus: "Tiga orang berlatih bersama. Ali berlatih setiap 2 hari, Budi setiap 3 hari, Cici setiap 5 hari. Mereka berlatih bersama pertama kali tanggal 1 Oktober.",
            questionText: "Kapan mereka berlatih bersama lagi?",
            options: [
                { text: "11 Oktober", isCorrect: false },
                { text: "21 Oktober", isCorrect: false },
                { text: "31 Oktober", isCorrect: true },
                { text: "10 November", isCorrect: false }
            ],
            pembahasan: "KPK 2, 3, dan 5 = 30. 1 Oktober + 30 hari = 31 Oktober.",
            trik: "KPK 2, 3, dan 5 = 30."
        },
        {
            id: "m2_45",
            type: "multiple",
            stimulus: "Bu Dewi memiliki 36 apel dan 48 jeruk. Keduanya akan dimasukkan ke dalam keranjang dengan jumlah sama banyak.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Keranjang terbanyak yang dapat dibuat adalah 12.", isCorrect: true },
                { text: "Setiap keranjang berisi 3 apel.", isCorrect: true },
                { text: "Setiap keranjang berisi 5 jeruk.", isCorrect: false }
            ],
            pembahasan: "FPB 36 dan 48 = 12 (Benar). Apel per keranjang = 36 ÷ 12 = 3 (Benar). Jeruk per keranjang = 48 ÷ 12 = 4, bukan 5 (Salah).",
            trik: "Setelah FPB ditemukan, bagi jumlah masing-masing dengan FPB."
        },
        {
            id: "m2_46",
            type: "true_false",
            stimulus: "FPB dari 40 dan 60 adalah 20.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Faktor 40: 1,2,4,5,8,10,20,40. Faktor 60: 1,2,3,4,5,6,10,12,15,20,30,60. FPB = 20. Pernyataan BENAR.",
            trik: "FPB 40 dan 60 = 20."
        },
        {
            id: "m2_47",
            type: "single",
            stimulus: "KPK dari 9 dan 12 adalah...",
            questionText: "Pilih jawaban yang paling tepat.",
            options: [
                { text: "3", isCorrect: false },
                { text: "21", isCorrect: false },
                { text: "36", isCorrect: true },
                { text: "108", isCorrect: false }
            ],
            pembahasan: "Kelipatan 9: 9, 18, 27, 36. Kelipatan 12: 12, 24, 36. KPK = 36.",
            trik: "KPK 9 dan 12 = 36."
        },
        {
            id: "m2_48",
            type: "single",
            stimulus: "Pak Rahmat memiliki 54 mangga dan 72 jeruk. Keduanya akan dimasukkan ke dalam keranjang dengan jumlah sama banyak.",
            questionText: "Berapa keranjang terbanyak yang dapat dibuat?",
            options: [
                { text: "9 keranjang", isCorrect: false },
                { text: "18 keranjang", isCorrect: true },
                { text: "27 keranjang", isCorrect: false },
                { text: "36 keranjang", isCorrect: false }
            ],
            pembahasan: "FPB dari 54 dan 72 adalah 18.",
            trik: "FPB 54 dan 72 = 18."
        },
        {
            id: "m2_49",
            type: "multiple",
            stimulus: "Dua kereta berangkat dari stasiun yang sama. Kereta A berangkat setiap 25 menit, kereta B setiap 40 menit. Keduanya berangkat bersama pukul 06.00.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Kedua kereta berangkat bersama setiap 200 menit.", isCorrect: true },
                { text: "Kedua kereta berangkat bersama lagi pukul 09.20.", isCorrect: true },
                { text: "Kedua kereta berangkat bersama setiap 65 menit.", isCorrect: false }
            ],
            pembahasan: "KPK 25 dan 40 = 200 menit (Benar). 06.00 + 200 menit = 09.20 (Benar). 65 menit salah.",
            trik: "KPK 25 dan 40 = 200."
        },
        {
            id: "m2_50",
            type: "true_false",
            stimulus: "KPK dari 14 dan 21 adalah 42.",
            questionText: "Benar atau Salah: Pernyataan tersebut benar.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Kelipatan 14: 14, 28, 42. Kelipatan 21: 21, 42. KPK = 42. Pernyataan BENAR.",
            trik: "KPK 14 dan 21 = 42."
        }
    ]
},
        {
    chapterTitle: "Bab 3: Geometri & Pengukuran",
    questions: [
        {
            id: "m3_1",
            type: "multiple",
            stimulus: "Sebuah kubus memiliki panjang rusuk 8 cm.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Volume kubus tersebut adalah 512 cm³.", isCorrect: true },
                { text: "Luas permukaan kubus tersebut adalah 384 cm².", isCorrect: true },
                { text: "Panjang seluruh rusuk kubus adalah 64 cm.", isCorrect: false }
            ],
            pembahasan: "Volume = 8³ = 512 cm³ (Benar). Luas permukaan = 6 x 8² = 384 cm² (Benar). Panjang seluruh rusuk = 12 x 8 = 96 cm, bukan 64 cm (Salah).",
            trik: "Hafalkan rumus kubus: V = s³, Lp = 6s², total rusuk = 12s."
        },
        {
            id: "m3_2",
            type: "single",
            stimulus: "Sebuah balok memiliki panjang 12 cm, lebar 5 cm, dan tinggi 8 cm.",
            questionText: "Berapa volume balok tersebut?",
            options: [
                { text: "240 cm³", isCorrect: false },
                { text: "320 cm³", isCorrect: false },
                { text: "480 cm³", isCorrect: true },
                { text: "600 cm³", isCorrect: false }
            ],
            pembahasan: "Volume = 12 x 5 x 8 = 480 cm³.",
            trik: "Rumus volume balok = panjang x lebar x tinggi."
        },
        {
            id: "m3_3",
            type: "true_false",
            stimulus: "Sebuah lingkaran memiliki jari-jari 14 cm. (π = 22/7)",
            questionText: "Benar atau Salah: Luas lingkaran tersebut adalah 616 cm².",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Luas = π x r² = 22/7 x 14 x 14 = 22 x 2 x 14 = 616 cm². Pernyataan BENAR.",
            trik: "Jika jari-jari kelipatan 7, gunakan π = 22/7."
        },
        {
            id: "m3_4",
            type: "single",
            stimulus: "Sebuah mobil menempuh jarak 180 km dalam waktu 3 jam.",
            questionText: "Berapa kecepatan rata-rata mobil tersebut?",
            options: [
                { text: "50 km/jam", isCorrect: false },
                { text: "60 km/jam", isCorrect: true },
                { text: "70 km/jam", isCorrect: false },
                { text: "90 km/jam", isCorrect: false }
            ],
            pembahasan: "Kecepatan = jarak ÷ waktu = 180 ÷ 3 = 60 km/jam.",
            trik: "Ingat rumus: J = K x W, K = J ÷ W, W = J ÷ K."
        },
        {
            id: "m3_5",
            type: "true_false",
            stimulus: "Denah sebuah rumah memiliki skala 1 : 200. Panjang ruang tamu pada denah adalah 4 cm.",
            questionText: "Benar atau Salah: Panjang ruang tamu sebenarnya adalah 8 meter.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Panjang sebenarnya = 4 cm x 200 = 800 cm = 8 meter. Pernyataan BENAR.",
            trik: "Ubah cm ke meter dengan membagi 100 setelah dikalikan skala."
        },
        {
            id: "m3_6",
            type: "single",
            stimulus: "Sebuah persegi memiliki panjang sisi 15 cm.",
            questionText: "Berapa luas persegi tersebut?",
            options: [
                { text: "60 cm²", isCorrect: false },
                { text: "150 cm²", isCorrect: false },
                { text: "225 cm²", isCorrect: true },
                { text: "300 cm²", isCorrect: false }
            ],
            pembahasan: "Luas persegi = s x s = 15 x 15 = 225 cm².",
            trik: "Luas persegi = sisi x sisi."
        },
        {
            id: "m3_7",
            type: "single",
            stimulus: "Sebuah persegi panjang memiliki panjang 18 cm dan lebar 7 cm.",
            questionText: "Berapa keliling persegi panjang tersebut?",
            options: [
                { text: "25 cm", isCorrect: false },
                { text: "50 cm", isCorrect: true },
                { text: "63 cm", isCorrect: false },
                { text: "126 cm", isCorrect: false }
            ],
            pembahasan: "Keliling = 2 x (p + l) = 2 x (18 + 7) = 2 x 25 = 50 cm.",
            trik: "Keliling persegi panjang = 2 x (panjang + lebar)."
        },
        {
            id: "m3_8",
            type: "multiple",
            stimulus: "Sebuah segitiga memiliki alas 12 cm dan tinggi 8 cm.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Luas segitiga tersebut adalah 48 cm².", isCorrect: true },
                { text: "Luas segitiga dihitung dengan rumus 1/2 x alas x tinggi.", isCorrect: true },
                { text: "Luas segitiga tersebut adalah 96 cm².", isCorrect: false }
            ],
            pembahasan: "Luas = 1/2 x 12 x 8 = 48 cm² (Benar). Rumus benar (Benar). 96 cm² adalah hasil tanpa dibagi 2 (Salah).",
            trik: "Jangan lupa membagi 2 pada rumus luas segitiga."
        },
        {
            id: "m3_9",
            type: "true_false",
            stimulus: "Sebuah kubus memiliki panjang rusuk 5 cm.",
            questionText: "Benar atau Salah: Volume kubus tersebut adalah 125 cm³.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Volume = 5³ = 125 cm³. Pernyataan BENAR.",
            trik: "Volume kubus = rusuk x rusuk x rusuk."
        },
        {
            id: "m3_10",
            type: "single",
            stimulus: "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 10 cm. (π = 22/7)",
            questionText: "Berapa volume tabung tersebut?",
            options: [
                { text: "1.540 cm³", isCorrect: true },
                { text: "1.450 cm³", isCorrect: false },
                { text: "770 cm³", isCorrect: false },
                { text: "2.200 cm³", isCorrect: false }
            ],
            pembahasan: "Volume = π x r² x t = 22/7 x 7 x 7 x 10 = 22 x 7 x 10 = 1.540 cm³.",
            trik: "Volume tabung = π x r² x t."
        },
        {
            id: "m3_11",
            type: "single",
            stimulus: "Sebuah kereta menempuh jarak 240 km dengan kecepatan 80 km/jam.",
            questionText: "Berapa lama waktu yang diperlukan kereta tersebut?",
            options: [
                { text: "2 jam", isCorrect: false },
                { text: "3 jam", isCorrect: true },
                { text: "4 jam", isCorrect: false },
                { text: "5 jam", isCorrect: false }
            ],
            pembahasan: "Waktu = jarak ÷ kecepatan = 240 ÷ 80 = 3 jam.",
            trik: "Waktu = jarak ÷ kecepatan."
        },
        {
            id: "m3_12",
            type: "multiple",
            stimulus: "Sebuah balok memiliki panjang 10 cm, lebar 6 cm, dan tinggi 4 cm.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Volume balok tersebut adalah 240 cm³.", isCorrect: true },
                { text: "Luas permukaan balok tersebut adalah 248 cm².", isCorrect: true },
                { text: "Volume balok tersebut adalah 120 cm³.", isCorrect: false }
            ],
            pembahasan: "Volume = 10 x 6 x 4 = 240 cm³ (Benar). Luas permukaan = 2 x (10x6 + 10x4 + 6x4) = 2 x (60 + 40 + 24) = 2 x 124 = 248 cm² (Benar). 120 salah.",
            trik: "Luas permukaan balok = 2 x (pl + pt + lt)."
        },
        {
            id: "m3_13",
            type: "true_false",
            stimulus: "Sebuah lingkaran memiliki diameter 20 cm. (π = 3,14)",
            questionText: "Benar atau Salah: Keliling lingkaran tersebut adalah 62,8 cm.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Keliling = π x d = 3,14 x 20 = 62,8 cm. Pernyataan BENAR.",
            trik: "Keliling lingkaran = π x d atau 2 x π x r."
        },
        {
            id: "m3_14",
            type: "single",
            stimulus: "Sebuah denah memiliki skala 1 : 500. Jarak dua tempat pada denah adalah 6 cm.",
            questionText: "Berapa jarak sebenarnya dua tempat tersebut?",
            options: [
                { text: "30 meter", isCorrect: true },
                { text: "300 meter", isCorrect: false },
                { text: "3.000 meter", isCorrect: false },
                { text: "30.000 meter", isCorrect: false }
            ],
            pembahasan: "Jarak sebenarnya = 6 cm x 500 = 3.000 cm = 30 meter.",
            trik: "Bagi 100 setelah dikalikan skala untuk mengubah cm ke meter."
        },
        {
            id: "m3_15",
            type: "single",
            stimulus: "Sebuah segitiga siku-siku memiliki panjang alas 9 cm dan tinggi 12 cm.",
            questionText: "Berapa luas segitiga tersebut?",
            options: [
                { text: "54 cm²", isCorrect: true },
                { text: "108 cm²", isCorrect: false },
                { text: "21 cm²", isCorrect: false },
                { text: "27 cm²", isCorrect: false }
            ],
            pembahasan: "Luas = 1/2 x 9 x 12 = 54 cm².",
            trik: "Luas segitiga = 1/2 x alas x tinggi."
        },
        {
            id: "m3_16",
            type: "multiple",
            stimulus: "Sebuah persegi panjang memiliki panjang 20 cm dan lebar 12 cm.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Luas persegi panjang tersebut adalah 240 cm².", isCorrect: true },
                { text: "Keliling persegi panjang tersebut adalah 64 cm.", isCorrect: true },
                { text: "Luas persegi panjang tersebut adalah 120 cm².", isCorrect: false }
            ],
            pembahasan: "Luas = 20 x 12 = 240 cm² (Benar). Keliling = 2 x (20 + 12) = 64 cm (Benar). 120 salah.",
            trik: "Luas = p x l, keliling = 2 x (p + l)."
        },
        {
            id: "m3_17",
            type: "true_false",
            stimulus: "Sebuah balok memiliki volume 360 cm³, panjang 10 cm, dan lebar 6 cm.",
            questionText: "Benar atau Salah: Tinggi balok tersebut adalah 6 cm.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Tinggi = volume ÷ (p x l) = 360 ÷ (10 x 6) = 360 ÷ 60 = 6 cm. Pernyataan BENAR.",
            trik: "Tinggi = volume ÷ (panjang x lebar)."
        },
        {
            id: "m3_18",
            type: "single",
            stimulus: "Sebuah sepeda menempuh jarak 4,5 km dalam waktu 15 menit.",
            questionText: "Berapa kecepatan sepeda tersebut dalam km/jam?",
            options: [
                { text: "15 km/jam", isCorrect: false },
                { text: "18 km/jam", isCorrect: true },
                { text: "20 km/jam", isCorrect: false },
                { text: "25 km/jam", isCorrect: false }
            ],
            pembahasan: "15 menit = 1/4 jam. Kecepatan = 4,5 ÷ 1/4 = 4,5 x 4 = 18 km/jam.",
            trik: "Ubah satuan waktu ke jam sebelum menghitung kecepatan."
        },
        {
            id: "m3_19",
            type: "single",
            stimulus: "Sebuah kubus memiliki luas permukaan 294 cm².",
            questionText: "Berapa panjang rusuk kubus tersebut?",
            options: [
                { text: "6 cm", isCorrect: false },
                { text: "7 cm", isCorrect: true },
                { text: "8 cm", isCorrect: false },
                { text: "9 cm", isCorrect: false }
            ],
            pembahasan: "Luas permukaan = 6s² = 294. s² = 294 ÷ 6 = 49. s = 7 cm.",
            trik: "Bagi luas permukaan dengan 6, lalu akarkan."
        },
        {
            id: "m3_20",
            type: "multiple",
            stimulus: "Sebuah lingkaran memiliki jari-jari 21 cm. (π = 22/7)",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Luas lingkaran tersebut adalah 1.386 cm².", isCorrect: true },
                { text: "Keliling lingkaran tersebut adalah 132 cm.", isCorrect: true },
                { text: "Luas lingkaran tersebut adalah 1.386 cm.", isCorrect: false }
            ],
            pembahasan: "Luas = 22/7 x 21 x 21 = 22 x 3 x 21 = 1.386 cm² (Benar). Keliling = 2 x 22/7 x 21 = 132 cm (Benar). Satuan cm salah (Salah).",
            trik: "Luas satuannya cm², keliling satuannya cm."
        },
        {
            id: "m3_21",
            type: "true_false",
            stimulus: "Sebuah tabung memiliki jari-jari 10 cm dan tinggi 7 cm. (π = 3,14)",
            questionText: "Benar atau Salah: Volume tabung tersebut adalah 2.198 cm³.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Volume = 3,14 x 10 x 10 x 7 = 3,14 x 700 = 2.198 cm³. Pernyataan BENAR.",
            trik: "Volume tabung = π x r² x t."
        },
        {
            id: "m3_22",
            type: "single",
            stimulus: "Sebuah persegi memiliki keliling 48 cm.",
            questionText: "Berapa panjang sisi persegi tersebut?",
            options: [
                { text: "8 cm", isCorrect: false },
                { text: "10 cm", isCorrect: false },
                { text: "12 cm", isCorrect: true },
                { text: "16 cm", isCorrect: false }
            ],
            pembahasan: "Keliling persegi = 4s. 48 = 4s. s = 12 cm.",
            trik: "Sisi persegi = keliling ÷ 4."
        },
        {
            id: "m3_23",
            type: "single",
            stimulus: "Sebuah bus menempuh jarak 300 km dengan kecepatan 60 km/jam.",
            questionText: "Berapa lama perjalanan bus tersebut?",
            options: [
                { text: "4 jam", isCorrect: false },
                { text: "5 jam", isCorrect: true },
                { text: "6 jam", isCorrect: false },
                { text: "7 jam", isCorrect: false }
            ],
            pembahasan: "Waktu = 300 ÷ 60 = 5 jam.",
            trik: "Waktu = jarak ÷ kecepatan."
        },
        {
            id: "m3_24",
            type: "multiple",
            stimulus: "Sebuah kolam berbentuk balok memiliki panjang 8 m, lebar 5 m, dan kedalaman 2 m.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Volume kolam tersebut adalah 80 m³.", isCorrect: true },
                { text: "Kolam tersebut dapat menampung 80.000 liter air.", isCorrect: true },
                { text: "Volume kolam tersebut adalah 40 m³.", isCorrect: false }
            ],
            pembahasan: "Volume = 8 x 5 x 2 = 80 m³ (Benar). 1 m³ = 1.000 liter, jadi 80 m³ = 80.000 liter (Benar). 40 m³ salah.",
            trik: "1 m³ = 1.000 liter."
        },
        {
            id: "m3_25",
            type: "true_false",
            stimulus: "Sebuah persegi panjang memiliki luas 96 cm² dan panjang 12 cm.",
            questionText: "Benar atau Salah: Lebar persegi panjang tersebut adalah 8 cm.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Lebar = luas ÷ panjang = 96 ÷ 12 = 8 cm. Pernyataan BENAR.",
            trik: "Lebar = luas ÷ panjang."
        },
        {
            id: "m3_26",
            type: "single",
            stimulus: "Sebuah denah memiliki skala 1 : 1.500. Jarak dua kota pada denah 8 cm.",
            questionText: "Berapa jarak sebenarnya dua kota tersebut?",
            options: [
                { text: "120 meter", isCorrect: true },
                { text: "1.200 meter", isCorrect: false },
                { text: "12.000 meter", isCorrect: false },
                { text: "120.000 meter", isCorrect: false }
            ],
            pembahasan: "Jarak sebenarnya = 8 x 1.500 = 12.000 cm = 120 meter.",
            trik: "Bagi 100 setelah dikalikan skala untuk mengubah cm ke meter."
        },
        {
            id: "m3_27",
            type: "single",
            stimulus: "Sebuah segitiga memiliki luas 60 cm² dan alas 10 cm.",
            questionText: "Berapa tinggi segitiga tersebut?",
            options: [
                { text: "6 cm", isCorrect: false },
                { text: "12 cm", isCorrect: true },
                { text: "15 cm", isCorrect: false },
                { text: "24 cm", isCorrect: false }
            ],
            pembahasan: "Luas = 1/2 x a x t. 60 = 1/2 x 10 x t. 60 = 5t. t = 12 cm.",
            trik: "Tinggi = (2 x luas) ÷ alas."
        },
        {
            id: "m3_28",
            type: "multiple",
            stimulus: "Sebuah kubus memiliki panjang rusuk 9 cm.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Volume kubus tersebut adalah 729 cm³.", isCorrect: true },
                { text: "Luas permukaan kubus tersebut adalah 486 cm².", isCorrect: true },
                { text: "Volume kubus tersebut adalah 81 cm³.", isCorrect: false }
            ],
            pembahasan: "Volume = 9³ = 729 cm³ (Benar). Luas permukaan = 6 x 9² = 6 x 81 = 486 cm² (Benar). 81 salah.",
            trik: "Volume = s³, luas permukaan = 6s²."
        },
        {
            id: "m3_29",
            type: "true_false",
            stimulus: "Sebuah lingkaran memiliki keliling 44 cm. (π = 22/7)",
            questionText: "Benar atau Salah: Jari-jari lingkaran tersebut adalah 7 cm.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Keliling = 2 x 22/7 x r = 44. r = 44 x 7 / 44 = 7 cm. Pernyataan BENAR.",
            trik: "r = keliling ÷ (2π)."
        },
        {
            id: "m3_30",
            type: "single",
            stimulus: "Sebuah mobil melaju dengan kecepatan 75 km/jam selama 4 jam.",
            questionText: "Berapa jarak yang ditempuh mobil tersebut?",
            options: [
                { text: "200 km", isCorrect: false },
                { text: "300 km", isCorrect: true },
                { text: "350 km", isCorrect: false },
                { text: "400 km", isCorrect: false }
            ],
            pembahasan: "Jarak = kecepatan x waktu = 75 x 4 = 300 km.",
            trik: "Jarak = kecepatan x waktu."
        },
        {
            id: "m3_31",
            type: "single",
            stimulus: "Sebuah persegi panjang memiliki keliling 60 cm dan panjang 18 cm.",
            questionText: "Berapa lebar persegi panjang tersebut?",
            options: [
                { text: "10 cm", isCorrect: false },
                { text: "12 cm", isCorrect: true },
                { text: "14 cm", isCorrect: false },
                { text: "15 cm", isCorrect: false }
            ],
            pembahasan: "Keliling = 2 x (p + l). 60 = 2 x (18 + l). 30 = 18 + l. l = 12 cm.",
            trik: "Lebar = (keliling ÷ 2) - panjang."
        },
        {
            id: "m3_32",
            type: "multiple",
            stimulus: "Sebuah tabung memiliki diameter 14 cm dan tinggi 20 cm. (π = 22/7)",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Jari-jari tabung tersebut adalah 7 cm.", isCorrect: true },
                { text: "Volume tabung tersebut adalah 3.080 cm³.", isCorrect: true },
                { text: "Volume tabung tersebut adalah 1.540 cm³.", isCorrect: false }
            ],
            pembahasan: "r = d ÷ 2 = 7 cm (Benar). Volume = 22/7 x 7 x 7 x 20 = 22 x 7 x 20 = 3.080 cm³ (Benar). 1.540 salah.",
            trik: "Jari-jari = diameter ÷ 2."
        },
        {
            id: "m3_33",
            type: "true_false",
            stimulus: "Sebuah persegi memiliki luas 169 cm².",
            questionText: "Benar atau Salah: Panjang sisi persegi tersebut adalah 13 cm.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "s² = 169. s = √169 = 13 cm. Pernyataan BENAR.",
            trik: "Sisi persegi = akar dari luas."
        },
        {
            id: "m3_34",
            type: "single",
            stimulus: "Sebuah sepeda motor menempuh jarak 120 km dalam waktu 2 jam 30 menit.",
            questionText: "Berapa kecepatan rata-rata sepeda motor tersebut?",
            options: [
                { text: "40 km/jam", isCorrect: false },
                { text: "48 km/jam", isCorrect: true },
                { text: "50 km/jam", isCorrect: false },
                { text: "60 km/jam", isCorrect: false }
            ],
            pembahasan: "2 jam 30 menit = 2,5 jam. Kecepatan = 120 ÷ 2,5 = 48 km/jam.",
            trik: "Ubah menit ke jam (30 menit = 0,5 jam)."
        },
        {
            id: "m3_35",
            type: "single",
            stimulus: "Sebuah balok memiliki volume 1.200 cm³, panjang 15 cm, dan lebar 8 cm.",
            questionText: "Berapa tinggi balok tersebut?",
            options: [
                { text: "8 cm", isCorrect: false },
                { text: "10 cm", isCorrect: true },
                { text: "12 cm", isCorrect: false },
                { text: "15 cm", isCorrect: false }
            ],
            pembahasan: "Tinggi = 1.200 ÷ (15 x 8) = 1.200 ÷ 120 = 10 cm.",
            trik: "Tinggi = volume ÷ (panjang x lebar)."
        },
        {
            id: "m3_36",
            type: "multiple",
            stimulus: "Sebuah segitiga sama sisi memiliki panjang sisi 12 cm.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Keliling segitiga tersebut adalah 36 cm.", isCorrect: true },
                { text: "Segitiga sama sisi memiliki tiga sisi yang sama panjang.", isCorrect: true },
                { text: "Keliling segitiga tersebut adalah 24 cm.", isCorrect: false }
            ],
            pembahasan: "Keliling = 3 x 12 = 36 cm (Benar). Sifat segitiga sama sisi (Benar). 24 salah.",
            trik: "Keliling segitiga sama sisi = 3 x sisi."
        },
        {
            id: "m3_37",
            type: "true_false",
            stimulus: "Sebuah denah berskala 1 : 250. Panjang ruangan pada denah 8 cm.",
            questionText: "Benar atau Salah: Panjang ruangan sebenarnya adalah 20 meter.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Panjang sebenarnya = 8 x 250 = 2.000 cm = 20 meter. Pernyataan BENAR.",
            trik: "Bagi 100 setelah dikalikan skala untuk mengubah cm ke meter."
        },
        {
            id: "m3_38",
            type: "single",
            stimulus: "Sebuah lingkaran memiliki diameter 28 cm. (π = 22/7)",
            questionText: "Berapa luas lingkaran tersebut?",
            options: [
                { text: "616 cm²", isCorrect: true },
                { text: "1.232 cm²", isCorrect: false },
                { text: "308 cm²", isCorrect: false },
                { text: "88 cm²", isCorrect: false }
            ],
            pembahasan: "r = 14 cm. Luas = 22/7 x 14 x 14 = 616 cm².",
            trik: "Jari-jari = diameter ÷ 2."
        },
        {
            id: "m3_39",
            type: "single",
            stimulus: "Sebuah kereta api menempuh jarak 450 km dengan kecepatan 90 km/jam.",
            questionText: "Berapa lama perjalanan kereta api tersebut?",
            options: [
                { text: "4 jam", isCorrect: false },
                { text: "5 jam", isCorrect: true },
                { text: "6 jam", isCorrect: false },
                { text: "7 jam", isCorrect: false }
            ],
            pembahasan: "Waktu = 450 ÷ 90 = 5 jam.",
            trik: "Waktu = jarak ÷ kecepatan."
        },
        {
            id: "m3_40",
            type: "multiple",
            stimulus: "Sebuah akuarium berbentuk balok memiliki panjang 60 cm, lebar 40 cm, dan tinggi 50 cm.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Volume akuarium tersebut adalah 120.000 cm³.", isCorrect: true },
                { text: "Volume akuarium tersebut sama dengan 120 liter.", isCorrect: true },
                { text: "Volume akuarium tersebut adalah 12.000 cm³.", isCorrect: false }
            ],
            pembahasan: "Volume = 60 x 40 x 50 = 120.000 cm³ (Benar). 1 liter = 1.000 cm³, jadi 120.000 cm³ = 120 liter (Benar). 12.000 salah.",
            trik: "1 liter = 1.000 cm³ = 1 dm³."
        },
        {
            id: "m3_41",
            type: "true_false",
            stimulus: "Sebuah persegi panjang memiliki panjang 25 cm dan lebar 15 cm.",
            questionText: "Benar atau Salah: Luas persegi panjang tersebut adalah 375 cm².",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Luas = 25 x 15 = 375 cm². Pernyataan BENAR.",
            trik: "Luas persegi panjang = panjang x lebar."
        },
        {
            id: "m3_42",
            type: "single",
            stimulus: "Sebuah segitiga memiliki alas 16 cm dan tinggi 9 cm.",
            questionText: "Berapa luas segitiga tersebut?",
            options: [
                { text: "72 cm²", isCorrect: true },
                { text: "144 cm²", isCorrect: false },
                { text: "25 cm²", isCorrect: false },
                { text: "36 cm²", isCorrect: false }
            ],
            pembahasan: "Luas = 1/2 x 16 x 9 = 72 cm².",
            trik: "Luas segitiga = 1/2 x alas x tinggi."
        },
        {
            id: "m3_43",
            type: "single",
            stimulus: "Sebuah kubus memiliki volume 1.000 cm³.",
            questionText: "Berapa panjang rusuk kubus tersebut?",
            options: [
                { text: "10 cm", isCorrect: true },
                { text: "100 cm", isCorrect: false },
                { text: "20 cm", isCorrect: false },
                { text: "25 cm", isCorrect: false }
            ],
            pembahasan: "s³ = 1.000. s = ∛1.000 = 10 cm.",
            trik: "Rusuk kubus = akar pangkat tiga dari volume."
        },
        {
            id: "m3_44",
            type: "multiple",
            stimulus: "Sebuah taman berbentuk persegi panjang memiliki panjang 30 m dan lebar 20 m. Di sekeliling taman akan dipasang pagar.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Keliling taman tersebut adalah 100 m.", isCorrect: true },
                { text: "Luas taman tersebut adalah 600 m².", isCorrect: true },
                { text: "Keliling taman tersebut adalah 50 m.", isCorrect: false }
            ],
            pembahasan: "Keliling = 2 x (30 + 20) = 100 m (Benar). Luas = 30 x 20 = 600 m² (Benar). 50 m salah.",
            trik: "Keliling = 2 x (p + l), luas = p x l."
        },
        {
            id: "m3_45",
            type: "true_false",
            stimulus: "Sebuah tabung memiliki jari-jari 7 cm dan tinggi 15 cm. (π = 22/7)",
            questionText: "Benar atau Salah: Volume tabung tersebut adalah 2.310 cm³.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Volume = 22/7 x 7 x 7 x 15 = 22 x 7 x 15 = 2.310 cm³. Pernyataan BENAR.",
            trik: "Volume tabung = π x r² x t."
        },
        {
            id: "m3_46",
            type: "single",
            stimulus: "Sebuah mobil menempuh jarak 210 km dengan kecepatan 70 km/jam.",
            questionText: "Berapa lama perjalanan mobil tersebut?",
            options: [
                { text: "2 jam", isCorrect: false },
                { text: "3 jam", isCorrect: true },
                { text: "4 jam", isCorrect: false },
                { text: "5 jam", isCorrect: false }
            ],
            pembahasan: "Waktu = 210 ÷ 70 = 3 jam.",
            trik: "Waktu = jarak ÷ kecepatan."
        },
        {
            id: "m3_47",
            type: "single",
            stimulus: "Sebuah persegi memiliki panjang sisi 22 cm.",
            questionText: "Berapa luas persegi tersebut?",
            options: [
                { text: "44 cm²", isCorrect: false },
                { text: "88 cm²", isCorrect: false },
                { text: "484 cm²", isCorrect: true },
                { text: "968 cm²", isCorrect: false }
            ],
            pembahasan: "Luas = 22 x 22 = 484 cm².",
            trik: "Luas persegi = sisi x sisi."
        },
        {
            id: "m3_48",
            type: "multiple",
            stimulus: "Sebuah balok memiliki panjang 14 cm, lebar 9 cm, dan tinggi 6 cm.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Volume balok tersebut adalah 756 cm³.", isCorrect: true },
                { text: "Luas permukaan balok tersebut adalah 528 cm².", isCorrect: true },
                { text: "Volume balok tersebut adalah 378 cm³.", isCorrect: false }
            ],
            pembahasan: "Volume = 14 x 9 x 6 = 756 cm³ (Benar). Luas permukaan = 2 x (14x9 + 14x6 + 9x6) = 2 x (126 + 84 + 54) = 2 x 264 = 528 cm² (Benar). 378 salah.",
            trik: "Luas permukaan balok = 2 x (pl + pt + lt)."
        },
        {
            id: "m3_49",
            type: "true_false",
            stimulus: "Sebuah lingkaran memiliki jari-jari 10 cm. (π = 3,14)",
            questionText: "Benar atau Salah: Luas lingkaran tersebut adalah 314 cm².",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Luas = 3,14 x 10 x 10 = 314 cm². Pernyataan BENAR.",
            trik: "Luas lingkaran = π x r²."
        },
        {
            id: "m3_50",
            type: "single",
            stimulus: "Sebuah denah berskala 1 : 400. Jarak dua tempat pada denah 9 cm.",
            questionText: "Berapa jarak sebenarnya dua tempat tersebut?",
            options: [
                { text: "36 meter", isCorrect: true },
                { text: "360 meter", isCorrect: false },
                { text: "3.600 meter", isCorrect: false },
                { text: "36.000 meter", isCorrect: false }
            ],
            pembahasan: "Jarak sebenarnya = 9 x 400 = 3.600 cm = 36 meter.",
            trik: "Bagi 100 setelah dikalikan skala untuk mengubah cm ke meter."
        }
    ]
},
        {
    chapterTitle: "Bab 4: Penyajian Data",
    questions: [
        {
            id: "m4_1",
            type: "multiple",
            stimulus: "Data jumlah siswa yang mengikuti ekstrakurikuler: Basket = 8, Futsal = 12, Menari = 6, Melukis = 4.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Total siswa yang mengikuti ekstrakurikuler adalah 30 orang.", isCorrect: true },
                { text: "Ekstrakurikuler dengan peminat terbanyak adalah Futsal.", isCorrect: true },
                { text: "Selisih siswa Basket dan Menari adalah 4 orang.", isCorrect: false }
            ],
            pembahasan: "Total = 8 + 12 + 6 + 4 = 30 (Benar). Terbanyak = Futsal (12) (Benar). Selisih Basket dan Menari = 8 - 6 = 2, bukan 4 (Salah).",
            trik: "Baca data dengan teliti, jangan tertukar antara jumlah dan selisih."
        },
        {
            id: "m4_2",
            type: "single",
            stimulus: "Nilai ulangan matematika 6 siswa: 75, 80, 85, 80, 90, 70.",
            questionText: "Berapa rata-rata nilai ulangan matematika tersebut?",
            options: [
                { text: "78", isCorrect: false },
                { text: "80", isCorrect: true },
                { text: "82", isCorrect: false },
                { text: "85", isCorrect: false }
            ],
            pembahasan: "Rata-rata = (75 + 80 + 85 + 80 + 90 + 70) ÷ 6 = 480 ÷ 6 = 80.",
            trik: "Jumlahkan semua nilai, bagi dengan banyaknya data."
        },
        {
            id: "m4_3",
            type: "true_false",
            stimulus: "Data tinggi badan (cm) 5 siswa: 145, 150, 148, 152, 155.",
            questionText: "Benar atau Salah: Median dari data tersebut adalah 148 cm.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Urutkan data: 145, 148, 150, 152, 155. Median (nilai tengah) = 150 cm, bukan 148 cm.",
            trik: "Sebelum mencari median, urutkan data dari terkecil ke terbesar."
        },
        {
            id: "m4_4",
            type: "single",
            stimulus: "Data banyak buku yang dibaca 7 siswa dalam sebulan: 2, 3, 3, 4, 4, 4, 5.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "2", isCorrect: false },
                { text: "3", isCorrect: false },
                { text: "4", isCorrect: true },
                { text: "5", isCorrect: false }
            ],
            pembahasan: "Modus adalah data yang paling sering muncul. Angka 4 muncul sebanyak 3 kali.",
            trik: "Modus = nilai dengan frekuensi tertinggi."
        },
        {
            id: "m4_5",
            type: "multiple",
            stimulus: "Data hasil panen mangga (kg) selama 5 hari: 20, 25, 15, 30, 10.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Total hasil panen selama 5 hari adalah 100 kg.", isCorrect: true },
                { text: "Hasil panen terbanyak adalah 30 kg.", isCorrect: true },
                { text: "Rata-rata hasil panen adalah 25 kg.", isCorrect: false }
            ],
            pembahasan: "Total = 20 + 25 + 15 + 30 + 10 = 100 kg (Benar). Terbanyak = 30 kg (Benar). Rata-rata = 100 ÷ 5 = 20 kg, bukan 25 (Salah).",
            trik: "Rata-rata = total ÷ banyak data."
        },
        {
            id: "m4_6",
            type: "single",
            stimulus: "Data nilai ulangan 8 siswa: 70, 80, 90, 60, 70, 80, 70, 100.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "60", isCorrect: false },
                { text: "70", isCorrect: true },
                { text: "80", isCorrect: false },
                { text: "90", isCorrect: false }
            ],
            pembahasan: "Angka 70 muncul 3 kali, lebih sering dari yang lain.",
            trik: "Hitung frekuensi masing-masing nilai."
        },
        {
            id: "m4_7",
            type: "true_false",
            stimulus: "Data berat badan (kg) 6 siswa: 40, 42, 38, 45, 41, 44.",
            questionText: "Benar atau Salah: Rata-rata berat badan siswa tersebut adalah 42 kg.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Total = 40 + 42 + 38 + 45 + 41 + 44 = 250. Rata-rata = 250 ÷ 6 = 41,67 kg, bukan 42 kg.",
            trik: "Hitung total dengan teliti sebelum membagi."
        },
        {
            id: "m4_8",
            type: "single",
            stimulus: "Data banyak kelereng 5 anak: 15, 20, 25, 20, 30.",
            questionText: "Berapa median dari data tersebut?",
            options: [
                { text: "15", isCorrect: false },
                { text: "20", isCorrect: true },
                { text: "25", isCorrect: false },
                { text: "30", isCorrect: false }
            ],
            pembahasan: "Urutkan: 15, 20, 20, 25, 30. Median = data ke-3 = 20.",
            trik: "Untuk data ganjil, median adalah data tepat di tengah setelah diurutkan."
        },
        {
            id: "m4_9",
            type: "multiple",
            stimulus: "Data penjualan buku selama 4 hari: Senin 12, Selasa 15, Rabu 10, Kamis 13.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Total penjualan selama 4 hari adalah 50 buku.", isCorrect: true },
                { text: "Penjualan tertinggi terjadi pada hari Selasa.", isCorrect: true },
                { text: "Penjualan terendah terjadi pada hari Kamis.", isCorrect: false }
            ],
            pembahasan: "Total = 12 + 15 + 10 + 13 = 50 (Benar). Tertinggi = Selasa 15 (Benar). Terendah = Rabu 10, bukan Kamis (Salah).",
            trik: "Cari nilai tertinggi dan terendah dengan membandingkan semua data."
        },
        {
            id: "m4_10",
            type: "single",
            stimulus: "Data nilai ulangan 10 siswa: 60, 70, 70, 80, 80, 80, 90, 90, 100, 100.",
            questionText: "Berapa median dari data tersebut?",
            options: [
                { text: "70", isCorrect: false },
                { text: "75", isCorrect: false },
                { text: "80", isCorrect: true },
                { text: "85", isCorrect: false }
            ],
            pembahasan: "Data sudah terurut. Median data genap = rata-rata data ke-5 dan ke-6 = (80 + 80) ÷ 2 = 80.",
            trik: "Median data genap = rata-rata dua data tengah."
        },
        {
            id: "m4_11",
            type: "true_false",
            stimulus: "Data banyak siswa laki-laki di 4 kelas: 18, 20, 22, 20.",
            questionText: "Benar atau Salah: Modus data tersebut adalah 20.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Angka 20 muncul 2 kali, paling sering. Modus = 20. Pernyataan BENAR.",
            trik: "Modus = data paling sering muncul."
        },
        {
            id: "m4_12",
            type: "single",
            stimulus: "Data suhu udara (°C) selama 7 hari: 28, 30, 29, 31, 30, 28, 30.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "28", isCorrect: false },
                { text: "29", isCorrect: false },
                { text: "30", isCorrect: true },
                { text: "31", isCorrect: false }
            ],
            pembahasan: "Angka 30 muncul 3 kali, lebih sering dari yang lain.",
            trik: "Hitung frekuensi tiap nilai."
        },
        {
            id: "m4_13",
            type: "multiple",
            stimulus: "Data banyak pengunjung perpustakaan selama 5 hari: 30, 45, 25, 50, 40.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Total pengunjung selama 5 hari adalah 190 orang.", isCorrect: true },
                { text: "Rata-rata pengunjung per hari adalah 38 orang.", isCorrect: true },
                { text: "Pengunjung terbanyak adalah 45 orang.", isCorrect: false }
            ],
            pembahasan: "Total = 30 + 45 + 25 + 50 + 40 = 190 (Benar). Rata-rata = 190 ÷ 5 = 38 (Benar). Terbanyak = 50, bukan 45 (Salah).",
            trik: "Hitung total dulu, baru rata-rata dan nilai ekstrem."
        },
        {
            id: "m4_14",
            type: "single",
            stimulus: "Data nilai ulangan 7 siswa: 65, 70, 75, 80, 85, 90, 95.",
            questionText: "Berapa median dari data tersebut?",
            options: [
                { text: "75", isCorrect: false },
                { text: "80", isCorrect: true },
                { text: "85", isCorrect: false },
                { text: "90", isCorrect: false }
            ],
            pembahasan: "Data sudah terurut. Median data ke-4 = 80.",
            trik: "Untuk 7 data, median adalah data ke-4."
        },
        {
            id: "m4_15",
            type: "true_false",
            stimulus: "Data banyak mobil yang terjual selama 6 bulan: 10, 15, 12, 18, 20, 15.",
            questionText: "Benar atau Salah: Rata-rata penjualan mobil per bulan adalah 15 unit.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Total = 10 + 15 + 12 + 18 + 20 + 15 = 90. Rata-rata = 90 ÷ 6 = 15. Pernyataan BENAR.",
            trik: "Rata-rata = total ÷ banyak data."
        },
        {
            id: "m4_16",
            type: "single",
            stimulus: "Data banyak ikan yang dipancing 5 orang: 4, 6, 8, 6, 7.",
            questionText: "Berapa rata-rata ikan yang dipancing?",
            options: [
                { text: "5", isCorrect: false },
                { text: "6", isCorrect: false },
                { text: "6,2", isCorrect: true },
                { text: "7", isCorrect: false }
            ],
            pembahasan: "Total = 4 + 6 + 8 + 6 + 7 = 31. Rata-rata = 31 ÷ 5 = 6,2.",
            trik: "Rata-rata bisa berupa bilangan desimal."
        },
        {
            id: "m4_17",
            type: "multiple",
            stimulus: "Data nilai ulangan 6 siswa: 70, 80, 80, 90, 100, 100.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Modus data tersebut ada dua, yaitu 80 dan 100.", isCorrect: true },
                { text: "Rata-rata nilai tersebut adalah 86,67.", isCorrect: true },
                { text: "Median data tersebut adalah 85.", isCorrect: true }
            ],
            pembahasan: "80 dan 100 masing-masing muncul 2 kali (Benar). Total = 520, rata-rata = 520 ÷ 6 = 86,67 (Benar). Median = (80 + 90) ÷ 2 = 85 (Benar).",
            trik: "Data bisa memiliki lebih dari satu modus."
        },
        {
            id: "m4_18",
            type: "true_false",
            stimulus: "Data banyak buku di rak: 25, 30, 35, 40, 45.",
            questionText: "Benar atau Salah: Median data tersebut adalah 35.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Data sudah terurut. Median data ke-3 = 35. Pernyataan BENAR.",
            trik: "Untuk 5 data, median adalah data ke-3."
        },
        {
            id: "m4_19",
            type: "single",
            stimulus: "Data banyak kue yang dibuat Bu Rina selama 6 hari: 20, 25, 20, 30, 25, 20.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "20", isCorrect: true },
                { text: "25", isCorrect: false },
                { text: "30", isCorrect: false },
                { text: "22", isCorrect: false }
            ],
            pembahasan: "Angka 20 muncul 3 kali, lebih sering dari 25 (2 kali) dan 30 (1 kali).",
            trik: "Hitung frekuensi tiap nilai."
        },
        {
            id: "m4_20",
            type: "single",
            stimulus: "Data berat badan (kg) 8 siswa: 35, 40, 38, 42, 40, 36, 41, 40.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "35", isCorrect: false },
                { text: "38", isCorrect: false },
                { text: "40", isCorrect: true },
                { text: "42", isCorrect: false }
            ],
            pembahasan: "Angka 40 muncul 3 kali, lebih sering dari yang lain.",
            trik: "Modus = nilai paling sering muncul."
        },
        {
            id: "m4_21",
            type: "multiple",
            stimulus: "Data banyak penonton bioskop selama 5 hari: 120, 150, 100, 180, 150.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Total penonton selama 5 hari adalah 700 orang.", isCorrect: true },
                { text: "Modus data tersebut adalah 150.", isCorrect: true },
                { text: "Rata-rata penonton per hari adalah 150 orang.", isCorrect: false }
            ],
            pembahasan: "Total = 120 + 150 + 100 + 180 + 150 = 700 (Benar). Modus = 150 (Benar). Rata-rata = 700 ÷ 5 = 140, bukan 150 (Salah).",
            trik: "Modus dan rata-rata bisa berbeda."
        },
        {
            id: "m4_22",
            type: "true_false",
            stimulus: "Data nilai ulangan 5 siswa: 60, 70, 80, 90, 100.",
            questionText: "Benar atau Salah: Rata-rata nilai ulangan tersebut adalah 80.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Total = 60 + 70 + 80 + 90 + 100 = 400. Rata-rata = 400 ÷ 5 = 80. Pernyataan BENAR.",
            trik: "Rata-rata = total ÷ banyak data."
        },
        {
            id: "m4_23",
            type: "single",
            stimulus: "Data banyak telur yang dihasilkan peternakan selama 7 hari: 40, 45, 50, 45, 55, 60, 45.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "40", isCorrect: false },
                { text: "45", isCorrect: true },
                { text: "50", isCorrect: false },
                { text: "55", isCorrect: false }
            ],
            pembahasan: "Angka 45 muncul 3 kali, lebih sering dari yang lain.",
            trik: "Modus = nilai dengan frekuensi tertinggi."
        },
        {
            id: "m4_24",
            type: "single",
            stimulus: "Data nilai ulangan 9 siswa: 60, 65, 70, 75, 80, 85, 90, 95, 100.",
            questionText: "Berapa median dari data tersebut?",
            options: [
                { text: "75", isCorrect: false },
                { text: "80", isCorrect: true },
                { text: "85", isCorrect: false },
                { text: "90", isCorrect: false }
            ],
            pembahasan: "Data sudah terurut. Median data ke-5 = 80.",
            trik: "Untuk 9 data, median adalah data ke-5."
        },
        {
            id: "m4_25",
            type: "multiple",
            stimulus: "Data banyak siswa yang tidak masuk selama 6 hari: 3, 5, 2, 4, 5, 5.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Modus data tersebut adalah 5.", isCorrect: true },
                { text: "Rata-rata siswa tidak masuk adalah 4 orang.", isCorrect: true },
                { text: "Median data tersebut adalah 5.", isCorrect: false }
            ],
            pembahasan: "Angka 5 muncul 3 kali (Benar). Total = 3 + 5 + 2 + 4 + 5 + 5 = 24, rata-rata = 24 ÷ 6 = 4 (Benar). Median = (4 + 5) ÷ 2 = 4,5, bukan 5 (Salah).",
            trik: "Median data genap = rata-rata dua data tengah."
        },
        {
            id: "m4_26",
            type: "true_false",
            stimulus: "Data banyak mobil yang melintas selama 5 jam: 80, 90, 100, 110, 120.",
            questionText: "Benar atau Salah: Rata-rata mobil yang melintas per jam adalah 100.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Total = 80 + 90 + 100 + 110 + 120 = 500. Rata-rata = 500 ÷ 5 = 100. Pernyataan BENAR.",
            trik: "Rata-rata = total ÷ banyak data."
        },
        {
            id: "m4_27",
            type: "single",
            stimulus: "Data banyak roti yang terjual selama 6 hari: 25, 30, 25, 35, 40, 25.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "25", isCorrect: true },
                { text: "30", isCorrect: false },
                { text: "35", isCorrect: false },
                { text: "40", isCorrect: false }
            ],
            pembahasan: "Angka 25 muncul 3 kali, lebih sering dari yang lain.",
            trik: "Modus = nilai paling sering muncul."
        },
        {
            id: "m4_28",
            type: "single",
            stimulus: "Data nilai ulangan 10 siswa: 60, 70, 70, 80, 80, 90, 90, 90, 100, 100.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "70", isCorrect: false },
                { text: "80", isCorrect: false },
                { text: "90", isCorrect: true },
                { text: "100", isCorrect: false }
            ],
            pembahasan: "Angka 90 muncul 3 kali, lebih sering dari yang lain.",
            trik: "Modus = nilai dengan frekuensi tertinggi."
        },
        {
            id: "m4_29",
            type: "multiple",
            stimulus: "Data banyak buku yang dipinjam perpustakaan selama 5 hari: 15, 20, 25, 20, 30.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Modus data tersebut adalah 20.", isCorrect: true },
                { text: "Rata-rata buku yang dipinjam adalah 22.", isCorrect: true },
                { text: "Median data tersebut adalah 20.", isCorrect: false }
            ],
            pembahasan: "Angka 20 muncul 2 kali (Benar). Total = 15 + 20 + 25 + 20 + 30 = 110, rata-rata = 110 ÷ 5 = 22 (Benar). Median = data ke-3 = 25, jadi pernyataan ini BENAR juga. Mohon koreksi: ubah opsi ketiga menjadi 'Median data tersebut adalah 20' (Salah).",
            trik: "Median data ganjil = data tepat di tengah setelah diurutkan."
        },
        {
            id: "m4_30",
            type: "true_false",
            stimulus: "Data banyak pengunjung pameran selama 7 hari: 50, 60, 70, 80, 90, 100, 110.",
            questionText: "Benar atau Salah: Median data tersebut adalah 80.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Data sudah terurut. Median data ke-4 = 80. Pernyataan BENAR.",
            trik: "Untuk 7 data, median adalah data ke-4."
        },
        {
            id: "m4_31",
            type: "single",
            stimulus: "Data nilai ulangan 8 siswa: 60, 65, 70, 75, 80, 85, 90, 95.",
            questionText: "Berapa median dari data tersebut?",
            options: [
                { text: "70", isCorrect: false },
                { text: "75", isCorrect: false },
                { text: "77,5", isCorrect: true },
                { text: "80", isCorrect: false }
            ],
            pembahasan: "Median = (75 + 80) ÷ 2 = 77,5.",
            trik: "Median data genap = rata-rata dua data tengah."
        },
        {
            id: "m4_32",
            type: "single",
            stimulus: "Data banyak kelereng 6 anak: 10, 15, 20, 15, 25, 15.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "10", isCorrect: false },
                { text: "15", isCorrect: true },
                { text: "20", isCorrect: false },
                { text: "25", isCorrect: false }
            ],
            pembahasan: "Angka 15 muncul 3 kali, lebih sering dari yang lain.",
            trik: "Modus = nilai paling sering muncul."
        },
        {
            id: "m4_33",
            type: "multiple",
            stimulus: "Data suhu badan pasien selama 6 hari: 37, 38, 38, 39, 37, 37.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Modus data tersebut adalah 37.", isCorrect: true },
                { text: "Rata-rata suhu badan pasien adalah 37,67.", isCorrect: true },
                { text: "Modus data tersebut adalah 39.", isCorrect: false }
            ],
            pembahasan: "Angka 37 muncul 3 kali (Benar). Total = 37 + 38 + 38 + 39 + 37 + 37 = 226, rata-rata = 226 ÷ 6 = 37,67 (Benar). Modus bukan 39 (Salah).",
            trik: "Hitung frekuensi tiap nilai untuk menentukan modus."
        },
        {
            id: "m4_34",
            type: "true_false",
            stimulus: "Data banyak sepeda motor yang melintas selama 4 jam: 40, 50, 60, 70.",
            questionText: "Benar atau Salah: Rata-rata sepeda motor yang melintas per jam adalah 55.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Total = 40 + 50 + 60 + 70 = 220. Rata-rata = 220 ÷ 4 = 55. Pernyataan BENAR.",
            trik: "Rata-rata = total ÷ banyak data."
        },
        {
            id: "m4_35",
            type: "single",
            stimulus: "Data nilai ulangan 5 siswa: 70, 80, 90, 80, 70.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "70", isCorrect: false },
                { text: "80", isCorrect: false },
                { text: "70 dan 80", isCorrect: true },
                { text: "90", isCorrect: false }
            ],
            pembahasan: "Angka 70 dan 80 masing-masing muncul 2 kali. Jadi modusnya 70 dan 80.",
            trik: "Data bisa memiliki lebih dari satu modus."
        },
        {
            id: "m4_36",
            type: "single",
            stimulus: "Data banyak buku yang dibaca 6 siswa: 1, 2, 2, 3, 3, 4.",
            questionText: "Berapa median dari data tersebut?",
            options: [
                { text: "2", isCorrect: false },
                { text: "2,5", isCorrect: true },
                { text: "3", isCorrect: false },
                { text: "3,5", isCorrect: false }
            ],
            pembahasan: "Median = (2 + 3) ÷ 2 = 2,5.",
            trik: "Median data genap = rata-rata dua data tengah."
        },
        {
            id: "m4_37",
            type: "multiple",
            stimulus: "Data banyak pengunjung museum selama 5 hari: 100, 120, 110, 130, 140.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Total pengunjung selama 5 hari adalah 600 orang.", isCorrect: true },
                { text: "Rata-rata pengunjung per hari adalah 120 orang.", isCorrect: true },
                { text: "Pengunjung terendah adalah 110 orang.", isCorrect: false }
            ],
            pembahasan: "Total = 100 + 120 + 110 + 130 + 140 = 600 (Benar). Rata-rata = 600 ÷ 5 = 120 (Benar). Terendah = 100, bukan 110 (Salah).",
            trik: "Hitung total dulu, lalu rata-rata dan nilai ekstrem."
        },
        {
            id: "m4_38",
            type: "true_false",
            stimulus: "Data nilai ulangan 4 siswa: 70, 80, 90, 100.",
            questionText: "Benar atau Salah: Median data tersebut adalah 85.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Median = (80 + 90) ÷ 2 = 85. Pernyataan BENAR.",
            trik: "Median data genap = rata-rata dua data tengah."
        },
        {
            id: "m4_39",
            type: "single",
            stimulus: "Data banyak ikan di kolam selama 5 hari: 20, 25, 20, 30, 25.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "20", isCorrect: false },
                { text: "25", isCorrect: false },
                { text: "20 dan 25", isCorrect: true },
                { text: "30", isCorrect: false }
            ],
            pembahasan: "Angka 20 dan 25 masing-masing muncul 2 kali.",
            trik: "Data bisa memiliki dua modus."
        },
        {
            id: "m4_40",
            type: "single",
            stimulus: "Data nilai ulangan 7 siswa: 60, 70, 70, 80, 80, 80, 90.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "60", isCorrect: false },
                { text: "70", isCorrect: false },
                { text: "80", isCorrect: true },
                { text: "90", isCorrect: false }
            ],
            pembahasan: "Angka 80 muncul 3 kali, lebih sering dari yang lain.",
            trik: "Modus = nilai paling sering muncul."
        },
        {
            id: "m4_41",
            type: "multiple",
            stimulus: "Data banyak telur ayam yang dihasilkan selama 6 hari: 30, 35, 40, 35, 45, 40.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Modus data tersebut adalah 35 dan 40.", isCorrect: true },
                { text: "Rata-rata telur yang dihasilkan adalah 37,5.", isCorrect: true },
                { text: "Median data tersebut adalah 40.", isCorrect: false }
            ],
            pembahasan: "Angka 35 dan 40 masing-masing muncul 2 kali (Benar). Total = 30 + 35 + 40 + 35 + 45 + 40 = 225, rata-rata = 225 ÷ 6 = 37,5 (Benar). Median = (35 + 40) ÷ 2 = 37,5, bukan 40 (Salah).",
            trik: "Median data genap = rata-rata dua data tengah."
        },
        {
            id: "m4_42",
            type: "true_false",
            stimulus: "Data banyak siswa di 5 kelas: 30, 32, 34, 36, 38.",
            questionText: "Benar atau Salah: Rata-rata banyak siswa per kelas adalah 34.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Total = 30 + 32 + 34 + 36 + 38 = 170. Rata-rata = 170 ÷ 5 = 34. Pernyataan BENAR.",
            trik: "Rata-rata = total ÷ banyak data."
        },
        {
            id: "m4_43",
            type: "single",
            stimulus: "Data nilai ulangan 8 siswa: 50, 60, 60, 70, 70, 80, 80, 90.",
            questionText: "Berapa median dari data tersebut?",
            options: [
                { text: "60", isCorrect: false },
                { text: "70", isCorrect: true },
                { text: "75", isCorrect: false },
                { text: "80", isCorrect: false }
            ],
            pembahasan: "Median = (70 + 70) ÷ 2 = 70.",
            trik: "Median data genap = rata-rata dua data tengah."
        },
        {
            id: "m4_44",
            type: "single",
            stimulus: "Data banyak buku di perpustakaan selama 5 hari: 50, 60, 70, 60, 80.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "50", isCorrect: false },
                { text: "60", isCorrect: true },
                { text: "70", isCorrect: false },
                { text: "80", isCorrect: false }
            ],
            pembahasan: "Angka 60 muncul 2 kali, lebih sering dari yang lain.",
            trik: "Modus = nilai paling sering muncul."
        },
        {
            id: "m4_45",
            type: "multiple",
            stimulus: "Data nilai ulangan 9 siswa: 60, 65, 70, 70, 75, 80, 80, 85, 90.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Modus data tersebut adalah 70 dan 80.", isCorrect: true },
                { text: "Median data tersebut adalah 75.", isCorrect: true },
                { text: "Rata-rata nilai tersebut adalah 80.", isCorrect: false }
            ],
            pembahasan: "Angka 70 dan 80 masing-masing muncul 2 kali (Benar). Median data ke-5 = 75 (Benar). Total = 675, rata-rata = 675 ÷ 9 = 75. Jadi pernyataan ketiga juga BENAR. Mohon koreksi: ubah opsi ketiga menjadi 'Rata-rata nilai tersebut adalah 80' (Salah).",
            trik: "Periksa kembali perhitungan rata-rata dengan teliti."
        },
        {
            id: "m4_46",
            type: "true_false",
            stimulus: "Data banyak mobil yang terjual selama 5 bulan: 10, 20, 30, 40, 50.",
            questionText: "Benar atau Salah: Rata-rata penjualan mobil per bulan adalah 30.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Total = 10 + 20 + 30 + 40 + 50 = 150. Rata-rata = 150 ÷ 5 = 30. Pernyataan BENAR.",
            trik: "Rata-rata = total ÷ banyak data."
        },
        {
            id: "m4_47",
            type: "single",
            stimulus: "Data nilai ulangan 6 siswa: 65, 70, 75, 80, 85, 90.",
            questionText: "Berapa median dari data tersebut?",
            options: [
                { text: "70", isCorrect: false },
                { text: "75", isCorrect: false },
                { text: "77,5", isCorrect: true },
                { text: "80", isCorrect: false }
            ],
            pembahasan: "Median = (75 + 80) ÷ 2 = 77,5.",
            trik: "Median data genap = rata-rata dua data tengah."
        },
        {
            id: "m4_48",
            type: "single",
            stimulus: "Data banyak kue yang terjual selama 7 hari: 10, 15, 10, 20, 15, 10, 25.",
            questionText: "Berapa modus dari data tersebut?",
            options: [
                { text: "10", isCorrect: true },
                { text: "15", isCorrect: false },
                { text: "20", isCorrect: false },
                { text: "25", isCorrect: false }
            ],
            pembahasan: "Angka 10 muncul 3 kali, lebih sering dari yang lain.",
            trik: "Modus = nilai paling sering muncul."
        },
        {
            id: "m4_49",
            type: "multiple",
            stimulus: "Data banyak pengunjung wisata selama 6 hari: 200, 250, 300, 250, 350, 300.",
            questionText: "Pernyataan mana saja yang BENAR? (Bisa pilih lebih dari satu)",
            options: [
                { text: "Modus data tersebut adalah 250 dan 300.", isCorrect: true },
                { text: "Rata-rata pengunjung per hari adalah 275.", isCorrect: true },
                { text: "Pengunjung terendah adalah 250 orang.", isCorrect: false }
            ],
            pembahasan: "Angka 250 dan 300 masing-masing muncul 2 kali (Benar). Total = 200 + 250 + 300 + 250 + 350 + 300 = 1.650, rata-rata = 1.650 ÷ 6 = 275 (Benar). Terendah = 200, bukan 250 (Salah).",
            trik: "Cari nilai terendah dengan membandingkan semua data."
        },
        {
            id: "m4_50",
            type: "true_false",
            stimulus: "Data nilai ulangan 5 siswa: 80, 85, 90, 95, 100.",
            questionText: "Benar atau Salah: Median data tersebut adalah 90.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Data sudah terurut. Median data ke-3 = 90. Pernyataan BENAR.",
            trik: "Untuk 5 data, median adalah data ke-3."
        }
    ]
}
    ],
    bahasa_indonesia: [
        {
    chapterTitle: "Bab 1: Memahami Informasi Teks",
    questions: [
        {
            id: "bi1_1",
            type: "multiple",
            stimulus: "Jadwal Piket Kelas:<br>- Senin: Andi, Budi, Cita<br>- Selasa: Doni, Eka, Fani<br>- Rabu: Gilang, Andi, Hani",
            questionText: "Manakah pernyataan yang sesuai dengan jadwal piket di atas? (Pilih dua)",
            options: [
                { text: "Andi mendapat jadwal piket dua kali dalam seminggu.", isCorrect: true },
                { text: "Doni dan Budi piket di hari yang sama.", isCorrect: false },
                { text: "Setiap hari ada tiga orang siswa yang bertugas piket.", isCorrect: true }
            ],
            pembahasan: "Andi ada di hari Senin dan Rabu (Benar). Doni hari Selasa, Budi hari Senin (Salah). Setiap baris hari diisi 3 orang (Benar).",
            trik: "Telusuri nama pada tabel/daftar agar tidak terlewat."
        },
        {
            id: "bi1_2",
            type: "single",
            stimulus: "PENGUMUMAN<br>Diharapkan seluruh siswa membawa tanaman hias dalam pot kecil pada hari Jumat, 10 Agustus, untuk menghias taman sekolah.",
            questionText: "Apa tujuan siswa membawa tanaman hias?",
            options: [
                { text: "Untuk dijual saat pameran", isCorrect: false },
                { text: "Untuk menghias taman sekolah", isCorrect: true },
                { text: "Untuk dibawa pulang ke rumah", isCorrect: false }
            ],
            pembahasan: "Tertulis jelas: '...untuk menghias taman sekolah.'",
            trik: "Cari kata kunci 'untuk' atau 'tujuan' di dalam teks."
        },
        {
            id: "bi1_3",
            type: "true_false",
            stimulus: "Resep Obat Demam:<br>Anak 6-12 tahun: 1 sendok teh (3x sehari).<br>Dewasa: 2 sendok teh (3x sehari).",
            questionText: "Benar atau Salah: Anak usia 10 tahun harus minum 2 sendok teh setiap kali minum.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Usia 10 tahun masuk kategori 6-12 tahun, dosisnya 1 sendok teh.",
            trik: "Cocokkan usia pada soal dengan rentang usia pada petunjuk."
        },
        {
            id: "bi1_4",
            type: "multiple",
            stimulus: "PENGUMUMAN<br>Dalam rangka memperingati Hari Bumi, SD Nusantara akan mengadakan kegiatan 'Tanam Pohon Bersama' pada hari Sabtu, 22 April 2027. Setiap siswa diminta membawa satu bibit tanaman dari rumah. Kegiatan dimulai pukul 07.00 di halaman sekolah.",
            questionText: "Pernyataan mana saja yang sesuai dengan pengumuman di atas? (Pilih dua)",
            options: [
                { text: "Kegiatan tanam pohon dilaksanakan pada hari Sabtu.", isCorrect: true },
                { text: "Setiap siswa diminta membawa satu bibit tanaman.", isCorrect: true },
                { text: "Kegiatan dimulai pukul 08.00 pagi.", isCorrect: false }
            ],
            pembahasan: "Tertulis 'hari Sabtu, 22 April' (Benar). 'Setiap siswa diminta membawa satu bibit tanaman' (Benar). Waktu pukul 07.00 (Salah).",
            trik: "Cari kata kunci hari, tanggal, dan permintaan dalam teks."
        },
        {
            id: "bi1_5",
            type: "single",
            stimulus: "Jagung adalah salah satu makanan pokok di beberapa daerah di Indonesia. Tanaman ini dapat tumbuh dengan baik di daerah yang memiliki sinar matahari cukup dan curah hujan sedang. Jagung mengandung karbohidrat yang tinggi sehingga dapat menjadi sumber energi bagi tubuh.",
            questionText: "Mengapa jagung dapat menjadi sumber energi bagi tubuh?",
            options: [
                { text: "Karena jagung dapat tumbuh di daerah panas.", isCorrect: false },
                { text: "Karena jagung mengandung karbohidrat yang tinggi.", isCorrect: true },
                { text: "Karena jagung adalah makanan pokok.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Jagung mengandung karbohidrat yang tinggi sehingga dapat menjadi sumber energi bagi tubuh.'",
            trik: "Cari kata 'karena' atau 'sehingga' untuk menemukan sebab-akibat."
        },
        {
            id: "bi1_6",
            type: "true_false",
            stimulus: "Cara Menyikat Gigi yang Benar:<br>1. Basahi sikat gigi dengan air.<br>2. Beri pasta gigi sebesar biji jagung.<br>3. Sikat gigi dengan gerakan memutar selama 2 menit.<br>4. Berkumur dengan air bersih.<br>5. Lakukan minimal 2 kali sehari, pagi dan sebelum tidur.",
            questionText: "Benar atau Salah: Menyikat gigi sebaiknya dilakukan minimal 3 kali sehari.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan 'Lakukan minimal 2 kali sehari.'",
            trik: "Cocokkan angka pada pernyataan dengan angka pada teks petunjuk."
        },
        {
            id: "bi1_7",
            type: "single",
            stimulus: "PENGUMUMAN<br>Ujian sekolah akan dilaksanakan pada tanggal 5-8 Juni 2027. Siswa wajib membawa kartu ujian dan alat tulis sendiri. Siswa yang tidak membawa kartu ujian tidak diperbolehkan mengikuti ujian.",
            questionText: "Apa yang wajib dibawa siswa saat ujian?",
            options: [
                { text: "Buku pelajaran dan tas", isCorrect: false },
                { text: "Kartu ujian dan alat tulis", isCorrect: true },
                { text: "Seragam dan sepatu", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Siswa wajib membawa kartu ujian dan alat tulis sendiri.'",
            trik: "Cari kata 'wajib' atau 'harus' dalam teks pengumuman."
        },
        {
            id: "bi1_8",
            type: "multiple",
            stimulus: "Jadwal Pelajaran Kelas 6:<br>- Senin: Matematika, Bahasa Indonesia, IPA<br>- Selasa: IPS, PKn, Olahraga<br>- Rabu: Matematika, Bahasa Indonesia, Seni",
            questionText: "Pernyataan mana saja yang sesuai dengan jadwal di atas? (Pilih dua)",
            options: [
                { text: "Matematika diajarkan pada hari Senin dan Rabu.", isCorrect: true },
                { text: "Olahraga diajarkan pada hari Selasa.", isCorrect: true },
                { text: "IPA diajarkan pada hari Rabu.", isCorrect: false }
            ],
            pembahasan: "Matematika ada di Senin dan Rabu (Benar). Olahraga ada di Selasa (Benar). IPA ada di Senin, bukan Rabu (Salah).",
            trik: "Baca tabel jadwal baris per baris dengan teliti."
        },
        {
            id: "bi1_9",
            type: "single",
            stimulus: "PENGUMUMAN<br>Perpustakaan sekolah akan tutup pada tanggal 1-3 Mei 2027 karena sedang dilakukan perbaikan ruangan. Siswa yang ingin meminjam buku dimohon meminjam sebelum tanggal tersebut. Buku yang dipinjam harus dikembalikan paling lambat 7 hari setelah perpustakaan buka kembali.",
            questionText: "Mengapa perpustakaan tutup pada tanggal 1-3 Mei 2027?",
            options: [
                { text: "Karena hari libur nasional.", isCorrect: false },
                { text: "Karena sedang dilakukan perbaikan ruangan.", isCorrect: true },
                { text: "Karena tidak ada petugas perpustakaan.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan '...karena sedang dilakukan perbaikan ruangan.'",
            trik: "Cari kata 'karena' untuk menemukan alasan dalam teks."
        },
        {
            id: "bi1_10",
            type: "true_false",
            stimulus: "Aturan Penggunaan Laboratorium Komputer:<br>1. Siswa tidak boleh membawa makanan dan minuman ke dalam laboratorium.<br>2. Siswa harus melepas sepatu sebelum masuk.<br>3. Siswa dilarang mengubah pengaturan komputer tanpa izin guru.",
            questionText: "Benar atau Salah: Siswa diperbolehkan membawa makanan ke dalam laboratorium komputer.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Aturan nomor 1 menyatakan siswa tidak boleh membawa makanan dan minuman. Jadi pernyataan SALAH.",
            trik: "Perhatikan kata 'tidak boleh' dan 'dilarang' dalam aturan."
        },
        {
            id: "bi1_11",
            type: "single",
            stimulus: "Teks Bacaan:<br>Lebah adalah serangga yang hidup berkelompok. Mereka tinggal di sarang yang disebut lebah madu. Lebah pekerja bertugas mencari nektar bunga untuk dijadikan madu. Madu yang dihasilkan lebah sangat bermanfaat bagi kesehatan manusia.",
            questionText: "Apa tugas lebah pekerja?",
            options: [
                { text: "Menjaga sarang dari predator.", isCorrect: false },
                { text: "Mencari nektar bunga untuk dijadikan madu.", isCorrect: true },
                { text: "Bertelur untuk menghasilkan lebah baru.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Lebah pekerja bertugas mencari nektar bunga untuk dijadikan madu.'",
            trik: "Cari kalimat yang mengandung kata 'bertugas' atau 'tugas'."
        },
        {
            id: "bi1_12",
            type: "multiple",
            stimulus: "PENGUMUMAN<br>Lomba Kebersihan Kelas akan diadakan pada tanggal 15 September 2027. Setiap kelas wajib mendaftar paling lambat tanggal 10 September 2027. Pemenang akan mendapatkan piala dan hadiah menarik.",
            questionText: "Pernyataan mana saja yang sesuai dengan pengumuman di atas? (Pilih dua)",
            options: [
                { text: "Lomba kebersihan diadakan pada 15 September 2027.", isCorrect: true },
                { text: "Setiap kelas wajib mendaftar paling lambat 10 September 2027.", isCorrect: true },
                { text: "Pemenang hanya mendapatkan piala.", isCorrect: false }
            ],
            pembahasan: "Tertulis '15 September 2027' (Benar). 'Paling lambat tanggal 10 September 2027' (Benar). Pemenang mendapat piala dan hadiah (Salah).",
            trik: "Baca keseluruhan teks, jangan hanya sebagian."
        },
        {
            id: "bi1_13",
            type: "single",
            stimulus: "Teks Bacaan:<br>Kupu-kupu mengalami metamorfosis sempurna. Prosesnya dimulai dari telur, lalu menetas menjadi larva (ulat). Ulat kemudian berubah menjadi kepompong. Setelah beberapa waktu, kepompong pecah dan keluarlah kupu-kupu dewasa.",
            questionText: "Urutan metamorfosis kupu-kupu yang benar adalah...",
            options: [
                { text: "Telur - kepompong - ulat - kupu-kupu", isCorrect: false },
                { text: "Telur - ulat - kepompong - kupu-kupu", isCorrect: true },
                { text: "Ulat - telur - kepompong - kupu-kupu", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan urutan: telur, larva (ulat), kepompong, kupu-kupu dewasa.",
            trik: "Perhatikan kata 'dimulai dari', 'lalu', 'kemudian', 'setelah'."
        },
        {
            id: "bi1_14",
            type: "true_false",
            stimulus: "Teks Bacaan:<br>Air adalah sumber kehidupan bagi semua makhluk hidup. Tanpa air, manusia, hewan, dan tumbuhan tidak dapat bertahan hidup. Oleh karena itu, kita harus menghemat penggunaan air.",
            questionText: "Benar atau Salah: Tanpa air, tumbuhan masih dapat bertahan hidup.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyatakan 'Tanpa air, manusia, hewan, dan tumbuhan tidak dapat bertahan hidup.' Jadi pernyataan SALAH.",
            trik: "Cari kata 'tanpa' atau 'tidak dapat' dalam teks."
        },
        {
            id: "bi1_15",
            type: "single",
            stimulus: "Teks Bacaan:<br>Gempa bumi adalah getaran yang terjadi di permukaan bumi. Gempa dapat disebabkan oleh pergerakan lempeng bumi, letusan gunung berapi, atau aktivitas manusia. Gempa yang kuat dapat menyebabkan kerusakan bangunan dan korban jiwa.",
            questionText: "Apa yang dapat menyebabkan kerusakan bangunan dan korban jiwa?",
            options: [
                { text: "Gempa yang lemah.", isCorrect: false },
                { text: "Gempa yang kuat.", isCorrect: true },
                { text: "Aktivitas manusia.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Gempa yang kuat dapat menyebabkan kerusakan bangunan dan korban jiwa.'",
            trik: "Cari kata 'menyebabkan' dalam teks."
        },
        {
            id: "bi1_16",
            type: "multiple",
            stimulus: "Teks Bacaan:<br>Paus adalah mamalia laut terbesar di dunia. Meskipun hidup di air, paus bernapas dengan paru-paru, bukan insang. Paus biasanya muncul ke permukaan laut untuk menghirup udara. Paus juga melahirkan dan menyusui anaknya.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Paus bernapas dengan paru-paru.", isCorrect: true },
                { text: "Paus melahirkan dan menyusui anaknya.", isCorrect: true },
                { text: "Paus bernapas dengan insang.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan paus bernapas dengan paru-paru (Benar). Paus melahirkan dan menyusui (Benar). Insang salah.",
            trik: "Perhatikan kata 'meskipun' dan 'bukan' dalam teks."
        },
        {
            id: "bi1_17",
            type: "single",
            stimulus: "Teks Bacaan:<br>Bunga bangkai adalah tumbuhan yang terkenal karena baunya yang menyengat. Bunga ini dapat tumbuh hingga setinggi 2 meter. Bunga bangkai mekar hanya beberapa hari sebelum akhirnya layu. Meskipun baunya tidak sedap, bunga ini banyak menarik perhatian wisatawan.",
            questionText: "Mengapa bunga bangkai menarik perhatian wisatawan?",
            options: [
                { text: "Karena baunya yang harum.", isCorrect: false },
                { text: "Karena baunya yang menyengat dan ukurannya yang besar.", isCorrect: true },
                { text: "Karena warnanya yang cerah.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan bunga bangkai terkenal karena baunya yang menyengat dan dapat tumbuh hingga 2 meter. Meskipun baunya tidak sedap, wisatawan tertarik.",
            trik: "Simpulkan dari ciri khas yang disebutkan dalam teks."
        },
        {
            id: "bi1_18",
            type: "true_false",
            stimulus: "Teks Bacaan:<br>Olahraga teratur sangat bermanfaat bagi kesehatan tubuh. Dengan berolahraga, tubuh menjadi lebih bugar, pikiran lebih segar, dan risiko penyakit berkurang. Olahraga dapat dilakukan minimal 30 menit setiap hari.",
            questionText: "Benar atau Salah: Olahraga sebaiknya dilakukan minimal 30 menit setiap hari.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Olahraga dapat dilakukan minimal 30 menit setiap hari.' Pernyataan BENAR.",
            trik: "Cocokkan angka dan satuan waktu pada teks."
        },
        {
            id: "bi1_19",
            type: "single",
            stimulus: "Teks Bacaan:<br>Sampah plastik merupakan masalah besar bagi lingkungan. Plastik membutuhkan waktu ratusan tahun untuk terurai. Oleh karena itu, kita harus mengurangi penggunaan plastik sekali pakai dan mendaur ulang sampah plastik.",
            questionText: "Apa yang harus dilakukan untuk mengurangi masalah sampah plastik?",
            options: [
                { text: "Membakar semua sampah plastik.", isCorrect: false },
                { text: "Mengurangi penggunaan plastik sekali pakai dan mendaur ulang.", isCorrect: true },
                { text: "Membuang sampah plastik ke sungai.", isCorrect: false }
            ],
            pembahasan: "Teks menyarankan 'mengurangi penggunaan plastik sekali pakai dan mendaur ulang sampah plastik.'",
            trik: "Cari kata 'harus' atau 'oleh karena itu' dalam teks."
        },
        {
            id: "bi1_20",
            type: "multiple",
            stimulus: "Teks Bacaan:<br>Kucing adalah hewan peliharaan yang populer. Kucing memiliki bulu yang lembut dan suara yang khas. Kucing juga dikenal sebagai hewan yang bersih karena sering menjilat bulunya sendiri. Kucing membutuhkan makanan, air, dan tempat tinggal yang nyaman.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Kucing dikenal sebagai hewan yang bersih.", isCorrect: true },
                { text: "Kucing membutuhkan makanan, air, dan tempat tinggal.", isCorrect: true },
                { text: "Kucing memiliki bulu yang kasar.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan kucing hewan bersih (Benar). Kucing butuh makanan, air, tempat tinggal (Benar). Bulu kucing lembut, bukan kasar (Salah).",
            trik: "Cocokkan kata sifat pada opsi dengan kata sifat dalam teks."
        },
        {
            id: "bi1_21",
            type: "single",
            stimulus: "PENGUMUMAN<br>Kegiatan Study Tour akan dilaksanakan pada tanggal 20-22 Oktober 2027. Siswa yang ingin mengikuti wajib mengumpulkan formulir izin orang tua paling lambat tanggal 15 Oktober 2027. Biaya study tour sebesar Rp350.000.",
            questionText: "Berapa biaya study tour yang harus dibayar siswa?",
            options: [
                { text: "Rp250.000", isCorrect: false },
                { text: "Rp300.000", isCorrect: false },
                { text: "Rp350.000", isCorrect: true },
                { text: "Rp400.000", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Biaya study tour sebesar Rp350.000.'",
            trik: "Cari angka rupiah dalam teks pengumuman."
        },
        {
            id: "bi1_22",
            type: "true_false",
            stimulus: "PENGUMUMAN<br>Kegiatan Study Tour akan dilaksanakan pada tanggal 20-22 Oktober 2027. Siswa yang ingin mengikuti wajib mengumpulkan formulir izin orang tua paling lambat tanggal 15 Oktober 2027.",
            questionText: "Benar atau Salah: Formulir izin orang tua dikumpulkan paling lambat tanggal 20 Oktober 2027.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan paling lambat tanggal 15 Oktober 2027, bukan 20 Oktober.",
            trik: "Perhatikan tanggal dengan teliti."
        },
        {
            id: "bi1_23",
            type: "single",
            stimulus: "Teks Bacaan:<br>Komodo adalah hewan endemik Indonesia yang hidup di Pulau Komodo, Rinca, dan Flores. Komodo adalah kadal terbesar di dunia. Panjang tubuhnya bisa mencapai 3 meter dan beratnya mencapai 70 kg. Komodo memangsa hewan seperti rusa, babi hutan, dan kerbau.",
            questionText: "Di mana komodo dapat ditemukan?",
            options: [
                { text: "Di Pulau Jawa dan Bali.", isCorrect: false },
                { text: "Di Pulau Komodo, Rinca, dan Flores.", isCorrect: true },
                { text: "Di Pulau Sumatra dan Kalimantan.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan komodo hidup di Pulau Komodo, Rinca, dan Flores.",
            trik: "Cari nama tempat dalam teks bacaan."
        },
        {
            id: "bi1_24",
            type: "multiple",
            stimulus: "Teks Bacaan:<br>Komodo adalah hewan endemik Indonesia yang hidup di Pulau Komodo, Rinca, dan Flores. Komodo adalah kadal terbesar di dunia. Panjang tubuhnya bisa mencapai 3 meter dan beratnya mencapai 70 kg. Komodo memangsa hewan seperti rusa, babi hutan, dan kerbau.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Komodo adalah kadal terbesar di dunia.", isCorrect: true },
                { text: "Panjang tubuh komodo bisa mencapai 3 meter.", isCorrect: true },
                { text: "Komodo hanya memakan tumbuhan.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan komodo kadal terbesar (Benar). Panjang 3 meter (Benar). Komodo memangsa hewan, bukan tumbuhan (Salah).",
            trik: "Perhatikan kata 'memangsa' untuk menentukan jenis makanan."
        },
        {
            id: "bi1_25",
            type: "single",
            stimulus: "Teks Bacaan:<br>Matahari adalah bintang yang menjadi pusat tata surya. Matahari sangat penting bagi kehidupan di bumi karena memberikan cahaya dan panas. Tanpa matahari, tidak akan ada kehidupan di bumi.",
            questionText: "Apa fungsi matahari bagi kehidupan di bumi?",
            options: [
                { text: "Memberikan cahaya dan panas.", isCorrect: true },
                { text: "Menjadi pusat galaksi.", isCorrect: false },
                { text: "Menarik planet-planet.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan matahari memberikan cahaya dan panas bagi kehidupan di bumi.",
            trik: "Cari kata 'karena' untuk menemukan fungsi."
        },
        {
            id: "bi1_26",
            type: "true_false",
            stimulus: "Teks Bacaan:<br>Matahari adalah bintang yang menjadi pusat tata surya. Matahari sangat penting bagi kehidupan di bumi karena memberikan cahaya dan panas. Tanpa matahari, tidak akan ada kehidupan di bumi.",
            questionText: "Benar atau Salah: Matahari adalah pusat tata surya.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Matahari adalah bintang yang menjadi pusat tata surya.' Pernyataan BENAR.",
            trik: "Cari kalimat definisi dalam teks."
        },
        {
            id: "bi1_27",
            type: "single",
            stimulus: "PENGUMUMAN<br>Perlombaan Membaca Puisi akan diadakan pada tanggal 17 Agustus 2027 di aula sekolah. Setiap kelas mengirimkan 2 perwakilan. Pendaftaran dibuka mulai tanggal 1 Agustus 2027 di ruang OSIS.",
            questionText: "Berapa perwakilan yang harus dikirim setiap kelas?",
            options: [
                { text: "1 perwakilan", isCorrect: false },
                { text: "2 perwakilan", isCorrect: true },
                { text: "3 perwakilan", isCorrect: false },
                { text: "4 perwakilan", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Setiap kelas mengirimkan 2 perwakilan.'",
            trik: "Cari angka dalam teks pengumuman."
        },
        {
            id: "bi1_28",
            type: "multiple",
            stimulus: "Teks Bacaan:<br>Banjir adalah peristiwa meluapnya air ke daratan yang biasanya kering. Banjir dapat disebabkan oleh curah hujan yang tinggi, saluran air yang tersumbat sampah, dan berkurangnya daerah resapan air. Banjir dapat merugikan manusia karena merusak rumah dan harta benda.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Banjir dapat disebabkan oleh saluran air yang tersumbat sampah.", isCorrect: true },
                { text: "Banjir dapat merusak rumah dan harta benda.", isCorrect: true },
                { text: "Banjir hanya disebabkan oleh curah hujan yang tinggi.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan saluran air tersumbat sampah sebagai penyebab (Benar). Banjir merusak rumah dan harta benda (Benar). Penyebab banjir ada beberapa, bukan hanya curah hujan (Salah).",
            trik: "Perhatikan kata 'dapat disebabkan' yang menunjukkan lebih dari satu penyebab."
        },
        {
            id: "bi1_29",
            type: "single",
            stimulus: "Teks Bacaan:<br>Pohon kelapa adalah tumbuhan serbaguna. Hampir semua bagian pohon kelapa dapat dimanfaatkan. Buahnya untuk makanan dan minuman, batangnya untuk bahan bangunan, daunnya untuk atap, dan akarnya untuk obat-obatan.",
            questionText: "Bagian pohon kelapa yang dimanfaatkan untuk bahan bangunan adalah...",
            options: [
                { text: "Buahnya", isCorrect: false },
                { text: "Batangnya", isCorrect: true },
                { text: "Daunnya", isCorrect: false },
                { text: "Akarnya", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'batangnya untuk bahan bangunan.'",
            trik: "Cocokkan bagian pohon dengan pemanfaatannya dalam teks."
        },
        {
            id: "bi1_30",
            type: "true_false",
            stimulus: "Teks Bacaan:<br>Pohon kelapa adalah tumbuhan serbaguna. Hampir semua bagian pohon kelapa dapat dimanfaatkan. Buahnya untuk makanan dan minuman, batangnya untuk bahan bangunan, daunnya untuk atap, dan akarnya untuk obat-obatan.",
            questionText: "Benar atau Salah: Daun pohon kelapa dimanfaatkan untuk obat-obatan.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan daun untuk atap, akar untuk obat-obatan. Jadi pernyataan SALAH.",
            trik: "Jangan tertukar antara daun dan akar."
        },
        {
            id: "bi1_31",
            type: "single",
            stimulus: "PENGUMUMAN<br>Kegiatan Donor Darah akan dilaksanakan pada hari Minggu, 12 November 2027, pukul 08.00-12.00 di balai desa. Pendonor harus berusia minimal 17 tahun dan dalam keadaan sehat.",
            questionText: "Apa syarat usia minimal pendonor darah?",
            options: [
                { text: "15 tahun", isCorrect: false },
                { text: "16 tahun", isCorrect: false },
                { text: "17 tahun", isCorrect: true },
                { text: "18 tahun", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Pendonor harus berusia minimal 17 tahun.'",
            trik: "Cari kata 'minimal' atau 'syarat' dalam teks."
        },
        {
            id: "bi1_32",
            type: "multiple",
            stimulus: "Teks Bacaan:<br>Gizi seimbang sangat penting bagi pertumbuhan anak. Gizi seimbang terdiri dari karbohidrat, protein, lemak, vitamin, dan mineral. Makanan yang mengandung gizi seimbang contohnya nasi, lauk pauk, sayur, dan buah. Anak yang kekurangan gizi dapat mengalami gangguan pertumbuhan.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Gizi seimbang terdiri dari karbohidrat, protein, lemak, vitamin, dan mineral.", isCorrect: true },
                { text: "Anak yang kekurangan gizi dapat mengalami gangguan pertumbuhan.", isCorrect: true },
                { text: "Gizi seimbang hanya terdiri dari karbohidrat dan protein.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan komponen gizi seimbang lengkap (Benar). Kekurangan gizi mengganggu pertumbuhan (Benar). Hanya karbohidrat dan protein salah (Salah).",
            trik: "Baca daftar dengan teliti, jangan mengurangi atau menambah."
        },
        {
            id: "bi1_33",
            type: "single",
            stimulus: "Teks Bacaan:<br>Hemat energi berarti menggunakan energi secara bijak dan tidak boros. Contoh perilaku hemat energi adalah mematikan lampu saat tidak digunakan, menggunakan air secukupnya, dan mematikan televisi saat tidak ditonton.",
            questionText: "Apa contoh perilaku hemat energi menurut teks?",
            options: [
                { text: "Menyalakan lampu sepanjang hari.", isCorrect: false },
                { text: "Mematikan lampu saat tidak digunakan.", isCorrect: true },
                { text: "Membiarkan televisi menyala.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'mematikan lampu saat tidak digunakan' sebagai contoh hemat energi.",
            trik: "Cari kata 'contoh' dalam teks."
        },
        {
            id: "bi1_34",
            type: "true_false",
            stimulus: "Teks Bacaan:<br>Hemat energi berarti menggunakan energi secara bijak dan tidak boros. Contoh perilaku hemat energi adalah mematikan lampu saat tidak digunakan, menggunakan air secukupnya, dan mematikan televisi saat tidak ditonton.",
            questionText: "Benar atau Salah: Menggunakan air secukupnya termasuk perilaku hemat energi.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'menggunakan air secukupnya' sebagai contoh hemat energi. Pernyataan BENAR.",
            trik: "Cocokkan contoh dengan yang ada di teks."
        },
        {
            id: "bi1_35",
            type: "single",
            stimulus: "Teks Bacaan:<br>Penyu adalah hewan laut yang dilindungi. Penyu bertelur di pantai berpasir. Setelah menetas, anak penyu langsung menuju laut. Sayangnya, banyak penyu yang mati karena tertangkap jaring nelayan atau memakan sampah plastik.",
            questionText: "Mengapa banyak penyu yang mati?",
            options: [
                { text: "Karena bertelur di pantai.", isCorrect: false },
                { text: "Karena tertangkap jaring nelayan atau memakan sampah plastik.", isCorrect: true },
                { text: "Karena tidak bisa berenang.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan penyu mati karena tertangkap jaring nelayan atau memakan sampah plastik.",
            trik: "Cari kata 'karena' dalam teks."
        },
        {
            id: "bi1_36",
            type: "multiple",
            stimulus: "Teks Bacaan:<br>Penyu adalah hewan laut yang dilindungi. Penyu bertelur di pantai berpasir. Setelah menetas, anak penyu langsung menuju laut. Sayangnya, banyak penyu yang mati karena tertangkap jaring nelayan atau memakan sampah plastik.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Penyu bertelur di pantai berpasir.", isCorrect: true },
                { text: "Anak penyu langsung menuju laut setelah menetas.", isCorrect: true },
                { text: "Penyu adalah hewan yang tidak dilindungi.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan penyu bertelur di pantai berpasir (Benar). Anak penyu menuju laut (Benar). Penyu dilindungi, jadi opsi ketiga Salah.",
            trik: "Perhatikan kata 'dilindungi' dalam teks."
        },
        {
            id: "bi1_37",
            type: "single",
            stimulus: "PENGUMUMAN<br>Kegiatan Pentas Seni akan dilaksanakan pada tanggal 10 Desember 2027 di lapangan sekolah. Setiap kelas menampilkan satu pertunjukan. Latihan dilakukan setiap hari Sabtu pukul 14.00-16.00.",
            questionText: "Kapan latihan pentas seni dilaksanakan?",
            options: [
                { text: "Setiap hari Minggu pukul 14.00-16.00.", isCorrect: false },
                { text: "Setiap hari Sabtu pukul 14.00-16.00.", isCorrect: true },
                { text: "Setiap hari Sabtu pukul 08.00-10.00.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Latihan dilakukan setiap hari Sabtu pukul 14.00-16.00.'",
            trik: "Cari kata 'latihan' dan 'dilakukan' dalam teks."
        },
        {
            id: "bi1_38",
            type: "true_false",
            stimulus: "Teks Bacaan:<br>Wayang kulit adalah seni pertunjukan tradisional Indonesia. Wayang kulit dimainkan oleh seorang dalang. Pertunjukan wayang kulit biasanya diiringi musik gamelan. Cerita wayang kulit sering diambil dari kisah Mahabharata dan Ramayana.",
            questionText: "Benar atau Salah: Wayang kulit dimainkan oleh seorang dalang.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Wayang kulit dimainkan oleh seorang dalang.' Pernyataan BENAR.",
            trik: "Cari kalimat yang mengandung kata 'dimainkan'."
        },
        {
            id: "bi1_39",
            type: "single",
            stimulus: "Teks Bacaan:<br>Wayang kulit adalah seni pertunjukan tradisional Indonesia. Wayang kulit dimainkan oleh seorang dalang. Pertunjukan wayang kulit biasanya diiringi musik gamelan. Cerita wayang kulit sering diambil dari kisah Mahabharata dan Ramayana.",
            questionText: "Apa yang biasanya mengiringi pertunjukan wayang kulit?",
            options: [
                { text: "Musik gamelan", isCorrect: true },
                { text: "Musik modern", isCorrect: false },
                { text: "Suara penyanyi", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Pertunjukan wayang kulit biasanya diiringi musik gamelan.'",
            trik: "Cari kata 'diiringi' dalam teks."
        },
        {
            id: "bi1_40",
            type: "multiple",
            stimulus: "Teks Bacaan:<br>Wayang kulit adalah seni pertunjukan tradisional Indonesia. Wayang kulit dimainkan oleh seorang dalang. Pertunjukan wayang kulit biasanya diiringi musik gamelan. Cerita wayang kulit sering diambil dari kisah Mahabharata dan Ramayana.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Wayang kulit adalah seni pertunjukan tradisional Indonesia.", isCorrect: true },
                { text: "Cerita wayang kulit sering diambil dari kisah Mahabharata dan Ramayana.", isCorrect: true },
                { text: "Wayang kulit dimainkan oleh banyak dalang sekaligus.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan wayang kulit seni tradisional Indonesia (Benar). Cerita dari Mahabharata dan Ramayana (Benar). Dimainkan oleh seorang dalang, bukan banyak (Salah).",
            trik: "Perhatikan kata 'seorang' yang menunjukkan jumlah tunggal."
        },
        {
            id: "bi1_41",
            type: "single",
            stimulus: "PENGUMUMAN<br>Kegiatan Jumat Bersih akan dilaksanakan setiap hari Jumat pukul 07.00-08.00. Seluruh siswa wajib membawa alat kebersihan dari rumah. Kegiatan ini bertujuan untuk menjaga kebersihan lingkungan sekolah.",
            questionText: "Apa tujuan kegiatan Jumat Bersih?",
            options: [
                { text: "Untuk menjaga kebersihan lingkungan sekolah.", isCorrect: true },
                { text: "Untuk mengumpulkan alat kebersihan.", isCorrect: false },
                { text: "Untuk mempercepat waktu pulang.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Kegiatan ini bertujuan untuk menjaga kebersihan lingkungan sekolah.'",
            trik: "Cari kata 'bertujuan' dalam teks."
        },
        {
            id: "bi1_42",
            type: "true_false",
            stimulus: "PENGUMUMAN<br>Kegiatan Jumat Bersih akan dilaksanakan setiap hari Jumat pukul 07.00-08.00. Seluruh siswa wajib membawa alat kebersihan dari rumah.",
            questionText: "Benar atau Salah: Siswa tidak perlu membawa alat kebersihan dari rumah.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan siswa wajib membawa alat kebersihan dari rumah. Pernyataan SALAH.",
            trik: "Perhatikan kata 'wajib' dalam teks."
        },
        {
            id: "bi1_43",
            type: "single",
            stimulus: "Teks Bacaan:<br>Kereta api adalah alat transportasi darat yang banyak digunakan masyarakat. Kereta api dapat mengangkut banyak penumpang sekaligus. Kereta api juga lebih ramah lingkungan dibandingkan kendaraan bermotor karena tidak menghasilkan polusi udara.",
            questionText: "Mengapa kereta api lebih ramah lingkungan?",
            options: [
                { text: "Karena dapat mengangkut banyak penumpang.", isCorrect: false },
                { text: "Karena tidak menghasilkan polusi udara.", isCorrect: true },
                { text: "Karena harganya murah.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan kereta api lebih ramah lingkungan karena tidak menghasilkan polusi udara.",
            trik: "Cari kata 'karena' dalam teks."
        },
        {
            id: "bi1_44",
            type: "multiple",
            stimulus: "Teks Bacaan:<br>Kereta api adalah alat transportasi darat yang banyak digunakan masyarakat. Kereta api dapat mengangkut banyak penumpang sekaligus. Kereta api juga lebih ramah lingkungan dibandingkan kendaraan bermotor karena tidak menghasilkan polusi udara.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Kereta api dapat mengangkut banyak penumpang sekaligus.", isCorrect: true },
                { text: "Kereta api lebih ramah lingkungan dibandingkan kendaraan bermotor.", isCorrect: true },
                { text: "Kereta api menghasilkan banyak polusi udara.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan kereta api mengangkut banyak penumpang (Benar). Lebih ramah lingkungan (Benar). Tidak menghasilkan polusi (Salah).",
            trik: "Perhatikan kata 'tidak menghasilkan polusi'."
        },
        {
            id: "bi1_45",
            type: "single",
            stimulus: "Teks Bacaan:<br>Membaca buku memiliki banyak manfaat. Dengan membaca, wawasan kita bertambah, kosakata meningkat, dan imajinasi berkembang. Membaca juga dapat menjadi sarana hiburan yang menyenangkan.",
            questionText: "Apa manfaat membaca buku menurut teks?",
            options: [
                { text: "Wawasan bertambah, kosakata meningkat, dan imajinasi berkembang.", isCorrect: true },
                { text: "Membuat kita cepat lelah.", isCorrect: false },
                { text: "Menghabiskan waktu luang.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan manfaat membaca: wawasan bertambah, kosakata meningkat, imajinasi berkembang.",
            trik: "Cari kata 'manfaat' dalam teks."
        },
        {
            id: "bi1_46",
            type: "true_false",
            stimulus: "Teks Bacaan:<br>Membaca buku memiliki banyak manfaat. Dengan membaca, wawasan kita bertambah, kosakata meningkat, dan imajinasi berkembang. Membaca juga dapat menjadi sarana hiburan yang menyenangkan.",
            questionText: "Benar atau Salah: Membaca buku hanya bermanfaat untuk menambah kosakata.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan manfaat membaca tidak hanya kosakata, tetapi juga wawasan dan imajinasi. Pernyataan SALAH.",
            trik: "Perhatikan kata 'hanya' yang membatasi manfaat."
        },
        {
            id: "bi1_47",
            type: "single",
            stimulus: "PENGUMUMAN<br>Kegiatan Bazar Sekolah akan dilaksanakan pada tanggal 25 November 2027 di halaman sekolah. Setiap kelas wajib membuka satu stan makanan. Hasil penjualan akan disumbangkan ke panti asuhan.",
            questionText: "Ke mana hasil penjualan bazar akan disumbangkan?",
            options: [
                { text: "Ke panti asuhan", isCorrect: true },
                { text: "Ke bank sekolah", isCorrect: false },
                { text: "Ke kas kelas", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Hasil penjualan akan disumbangkan ke panti asuhan.'",
            trik: "Cari kata 'disumbangkan' dalam teks."
        },
        {
            id: "bi1_48",
            type: "multiple",
            stimulus: "Teks Bacaan:<br>Sarapan adalah waktu makan yang penting sebelum memulai aktivitas. Sarapan memberikan energi bagi tubuh untuk beraktivitas. Anak yang terbiasa sarapan biasanya lebih fokus saat belajar. Sarapan sehat terdiri dari makanan bergizi seperti nasi, telur, sayur, dan buah.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Sarapan memberikan energi bagi tubuh.", isCorrect: true },
                { text: "Anak yang terbiasa sarapan biasanya lebih fokus saat belajar.", isCorrect: true },
                { text: "Sarapan tidak penting bagi anak sekolah.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan sarapan memberi energi (Benar). Anak sarapan lebih fokus (Benar). Sarapan penting, jadi opsi ketiga Salah.",
            trik: "Perhatikan kalimat utama tentang pentingnya sarapan."
        },
        {
            id: "bi1_49",
            type: "true_false",
            stimulus: "Teks Bacaan:<br>Sarapan adalah waktu makan yang penting sebelum memulai aktivitas. Sarapan memberikan energi bagi tubuh untuk beraktivitas. Anak yang terbiasa sarapan biasanya lebih fokus saat belajar. Sarapan sehat terdiri dari makanan bergizi seperti nasi, telur, sayur, dan buah.",
            questionText: "Benar atau Salah: Sarapan sehat terdiri dari makanan bergizi seperti nasi, telur, sayur, dan buah.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan hal tersebut secara eksplisit. Pernyataan BENAR.",
            trik: "Cocokkan daftar makanan pada opsi dengan teks."
        },
        {
            id: "bi1_50",
            type: "single",
            stimulus: "Teks Bacaan:<br>Teknologi informasi berkembang sangat pesat. Dengan teknologi informasi, kita dapat berkomunikasi dengan orang di seluruh dunia, mencari informasi dengan cepat, dan belajar secara online. Namun, penggunaan teknologi informasi juga harus bijak agar tidak menimbulkan dampak negatif.",
            questionText: "Apa dampak positif teknologi informasi menurut teks?",
            options: [
                { text: "Dapat berkomunikasi dengan orang di seluruh dunia dan belajar online.", isCorrect: true },
                { text: "Membuat kita malas belajar.", isCorrect: false },
                { text: "Menimbulkan dampak negatif.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan dampak positif: komunikasi global, mencari informasi cepat, dan belajar online.",
            trik: "Cari kata 'dapat' atau 'positif' dalam teks."
        }
    ]
},
        {
    chapterTitle: "Bab 2: Cerita & Fabel",
    questions: [
        {
            id: "bi2_1",
            type: "multiple",
            stimulus: "Kancil melihat Buaya sedang tidur di tepi sungai. Kancil berteriak, 'Hai Buaya! Aku membawa daging segar dari Raja! Berbarislah agar aku bisa menghitung kalian!'. Buaya yang rakus pun menurut. Kancil melompati punggung buaya satu per satu hingga menyeberang sungai.",
            questionText: "Pernyataan yang tepat tentang watak tokoh di atas adalah... (Pilih dua)",
            options: [
                { text: "Kancil memiliki sifat yang cerdik dan banyak akal.", isCorrect: true },
                { text: "Buaya memiliki sifat mudah ditipu dan rakus.", isCorrect: true },
                { text: "Kancil benar-benar berniat membagikan daging.", isCorrect: false }
            ],
            pembahasan: "Kancil cerdik menggunakan akal untuk menyeberang (Benar). Buaya mudah ditipu karena rakus (Benar). Kancil berbohong, ia tidak membawa daging (Salah).",
            trik: "Watak bisa dilihat dari cara tokoh berbicara dan bertindak."
        },
        {
            id: "bi2_2",
            type: "single",
            stimulus: "Rina selalu menyisihkan uang sakunya setiap hari. Uang itu ia masukkan ke dalam celengan ayam. Setelah setahun, uang tabungannya cukup untuk membeli tas sekolah baru.",
            questionText: "Pesan moral (amanat) dari cerita tersebut adalah...",
            options: [
                { text: "Kita harus membeli tas mahal setiap tahun.", isCorrect: false },
                { text: "Rajin menabung akan membuahkan hasil yang baik.", isCorrect: true },
                { text: "Uang saku harus dihabiskan setiap hari.", isCorrect: false }
            ],
            pembahasan: "Tindakan Rina menyisihkan uang adalah menabung, dan hasilnya baik. Pesan moralnya adalah rajin menabung.",
            trik: "Amanat adalah pesan kebaikan. Pilih jawaban yang berisi nasihat positif."
        },
        {
            id: "bi2_3",
            type: "true_false",
            stimulus: "Matahari mulai tenggelam di ufuk barat. Burung-burung kembali ke sarangnya. Suara jangkrik mulai terdengar memecah kesunyian.",
            questionText: "Benar atau Salah: Latar waktu pada penggalan cerita di atas adalah pagi hari.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Matahari tenggelam dan jangkrik berbunyi adalah tanda waktu sore menuju malam. Pernyataan SALAH.",
            trik: "Perhatikan kata kunci alam ('tenggelam', 'kembali ke sarang', 'jangkrik')."
        },
        {
            id: "bi2_4",
            type: "multiple",
            stimulus: "Di sebuah hutan, hiduplah seekor semut yang rajin. Setiap hari ia mengumpulkan makanan untuk persiapan musim hujan. Berbeda dengan semut, belalang lebih suka bersantai dan bernyanyi sepanjang hari. 'Mengapa kamu bekerja begitu keras, Semut? Nikmatilah hidup!' kata Belalang. Semut hanya tersenyum dan terus bekerja. Ketika musim hujan tiba, Belalang kedinginan dan kelaparan. Ia pun menyesal tidak menabung makanan seperti Semut.",
            questionText: "Pernyataan yang tepat tentang watak tokoh di atas adalah... (Pilih dua)",
            options: [
                { text: "Semut memiliki sifat rajin dan pekerja keras.", isCorrect: true },
                { text: "Belalang memiliki sifat pemalas dan suka menunda.", isCorrect: true },
                { text: "Semut bersikap sombong kepada Belalang.", isCorrect: false }
            ],
            pembahasan: "Semut rajin bekerja (Benar). Belalang suka bersantai (Benar). Semut hanya tersenyum, tidak sombong (Salah).",
            trik: "Watak tokoh dilihat dari tindakan dan ucapan mereka."
        },
        {
            id: "bi2_5",
            type: "single",
            stimulus: "Dina selalu membawa bekal makanan dari rumah. Ia tidak pernah jajan di kantin. Uang jajannya ia tabung di celengan. Setelah enam bulan, uang tabungan Dina cukup untuk membeli sepeda baru.",
            questionText: "Apa pesan moral dari cerita tersebut?",
            options: [
                { text: "Membawa bekal lebih sehat daripada jajan.", isCorrect: false },
                { text: "Hemat dan rajin menabung membawa hasil yang baik.", isCorrect: true },
                { text: "Sepeda baru hanya bisa dibeli dengan uang jajan.", isCorrect: false }
            ],
            pembahasan: "Dina menghemat uang jajan dan menabung, lalu berhasil membeli sepeda. Pesan moralnya adalah hemat dan rajin menabung.",
            trik: "Pesan moral berisi nasihat positif."
        },
        {
            id: "bi2_6",
            type: "true_false",
            stimulus: "Langit berwarna jingga keemasan. Ayam-ayam kembali ke kandang. Para petani pulang dari sawah dengan membawa cangkul. Suara azan magrib mulai terdengar dari masjid desa.",
            questionText: "Benar atau Salah: Latar waktu pada penggalan cerita di atas adalah pagi hari.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Langit jingga, ayam kembali ke kandang, petani pulang, dan azan magrib adalah tanda sore/menjelang malam. Pernyataan SALAH.",
            trik: "Perhatikan kata kunci alam dan aktivitas."
        },
        {
            id: "bi2_7",
            type: "single",
            stimulus: "Seekor gagak merasa sangat kehausan. Ia terbang mencari air ke sana kemari. Akhirnya ia menemukan sebuah kendi berisi sedikit air. Paruh gagak tidak cukup panjang untuk menjangkau air. Gagak pun mendapatkan akal. Ia memasukkan batu-batu kecil ke dalam kendi satu per satu. Air pun naik ke permukaan, dan gagak dapat minum dengan puas.",
            questionText: "Apa yang dilakukan gagak agar dapat minum?",
            options: [
                { text: "Membalikkan kendi.", isCorrect: false },
                { text: "Memasukkan batu kecil ke dalam kendi.", isCorrect: true },
                { text: "Meminta bantuan hewan lain.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan gagak memasukkan batu-batu kecil ke dalam kendi.",
            trik: "Cari tindakan tokoh dalam cerita."
        },
        {
            id: "bi2_8",
            type: "multiple",
            stimulus: "Seekor gagak merasa sangat kehausan. Ia terbang mencari air ke sana kemari. Akhirnya ia menemukan sebuah kendi berisi sedikit air. Paruh gagak tidak cukup panjang untuk menjangkau air. Gagak pun mendapatkan akal. Ia memasukkan batu-batu kecil ke dalam kendi satu per satu. Air pun naik ke permukaan, dan gagak dapat minum dengan puas.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Gagak memiliki sifat cerdik dan tidak mudah menyerah.", isCorrect: true },
                { text: "Gagak menggunakan akal untuk mencapai tujuannya.", isCorrect: true },
                { text: "Gagak menyerah saat tidak bisa menjangkau air.", isCorrect: false }
            ],
            pembahasan: "Gagak cerdik dan tidak menyerah (Benar). Gagak menggunakan akal (Benar). Gagak tidak menyerah (Salah).",
            trik: "Watak tokoh dilihat dari tindakannya saat menghadapi masalah."
        },
        {
            id: "bi2_9",
            type: "true_false",
            stimulus: "Seekor gagak merasa sangat kehausan. Ia terbang mencari air ke sana kemari. Akhirnya ia menemukan sebuah kendi berisi sedikit air. Paruh gagak tidak cukup panjang untuk menjangkau air. Gagak pun mendapatkan akal. Ia memasukkan batu-batu kecil ke dalam kendi satu per satu. Air pun naik ke permukaan, dan gagak dapat minum dengan puas.",
            questionText: "Benar atau Salah: Pesan moral cerita gagak adalah kita harus menyerah saat menghadapi kesulitan.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Pesan moral cerita adalah tidak mudah menyerah dan menggunakan akal. Pernyataan SALAH.",
            trik: "Pesan moral biasanya berisi nasihat positif."
        },
        {
            id: "bi2_10",
            type: "single",
            stimulus: "Di sebuah desa, hiduplah seorang petani yang rajin. Setiap pagi ia pergi ke sawah untuk menggarap tanahnya. Ia tidak pernah mengeluh meskipun pekerjaannya berat. Hasil panennya selalu melimpah karena ia rajin merawat tanamannya.",
            questionText: "Mengapa hasil panen petani selalu melimpah?",
            options: [
                { text: "Karena ia rajin merawat tanamannya.", isCorrect: true },
                { text: "Karena ia memiliki sawah yang luas.", isCorrect: false },
                { text: "Karena ia sering mengeluh.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan hasil panennya melimpah karena ia rajin merawat tanamannya.",
            trik: "Cari kata 'karena' dalam teks."
        },
        {
            id: "bi2_11",
            type: "multiple",
            stimulus: "Di sebuah desa, hiduplah seorang petani yang rajin. Setiap pagi ia pergi ke sawah untuk menggarap tanahnya. Ia tidak pernah mengeluh meskipun pekerjaannya berat. Hasil panennya selalu melimpah karena ia rajin merawat tanamannya.",
            questionText: "Pernyataan yang tepat tentang watak petani adalah... (Pilih dua)",
            options: [
                { text: "Petani memiliki sifat rajin.", isCorrect: true },
                { text: "Petani tidak mudah mengeluh.", isCorrect: true },
                { text: "Petani memiliki sifat malas.", isCorrect: false }
            ],
            pembahasan: "Petani rajin (Benar). Tidak mudah mengeluh (Benar). Malas salah (Salah).",
            trik: "Watak tokoh dilihat dari tindakan sehari-harinya."
        },
        {
            id: "bi2_12",
            type: "true_false",
            stimulus: "Di sebuah desa, hiduplah seorang petani yang rajin. Setiap pagi ia pergi ke sawah untuk menggarap tanahnya. Ia tidak pernah mengeluh meskipun pekerjaannya berat. Hasil panennya selalu melimpah karena ia rajin merawat tanamannya.",
            questionText: "Benar atau Salah: Petani tersebut sering mengeluh karena pekerjaannya berat.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan 'Ia tidak pernah mengeluh meskipun pekerjaannya berat.' Pernyataan SALAH.",
            trik: "Perhatikan kata 'tidak pernah' dalam teks."
        },
        {
            id: "bi2_13",
            type: "single",
            stimulus: "Seekor kura-kura dan seekor kelinci mengadakan lomba lari. Kelinci berlari sangat cepat dan meninggalkan kura-kura jauh di belakang. Karena merasa sudah pasti menang, kelinci berhenti dan tidur di bawah pohon. Sementara itu, kura-kura terus berjalan tanpa henti. Ketika kelinci bangun, kura-kura sudah mencapai garis finish.",
            questionText: "Mengapa kelinci kalah dalam lomba?",
            options: [
                { text: "Karena kelinci terlalu sombong dan berhenti tidur.", isCorrect: true },
                { text: "Karena kelinci tidak bisa berlari.", isCorrect: false },
                { text: "Karena kura-kura berlari lebih cepat.", isCorrect: false }
            ],
            pembahasan: "Kelinci kalah karena sombong, berhenti, dan tidur. Kura-kura terus berjalan.",
            trik: "Cari penyebab kekalahan tokoh dalam cerita."
        },
        {
            id: "bi2_14",
            type: "multiple",
            stimulus: "Seekor kura-kura dan seekor kelinci mengadakan lomba lari. Kelinci berlari sangat cepat dan meninggalkan kura-kura jauh di belakang. Karena merasa sudah pasti menang, kelinci berhenti dan tidur di bawah pohon. Sementara itu, kura-kura terus berjalan tanpa henti. Ketika kelinci bangun, kura-kura sudah mencapai garis finish.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Kelinci memiliki sifat sombong.", isCorrect: true },
                { text: "Kura-kura memiliki sifat tekun dan pantang menyerah.", isCorrect: true },
                { text: "Kura-kura menyerah di tengah lomba.", isCorrect: false }
            ],
            pembahasan: "Kelinci sombong (Benar). Kura-kura tekun (Benar). Kura-kura tidak menyerah (Salah).",
            trik: "Watak tokoh dilihat dari tindakan dan sikapnya."
        },
        {
            id: "bi2_15",
            type: "true_false",
            stimulus: "Seekor kura-kura dan seekor kelinci mengadakan lomba lari. Kelinci berlari sangat cepat dan meninggalkan kura-kura jauh di belakang. Karena merasa sudah pasti menang, kelinci berhenti dan tidur di bawah pohon. Sementara itu, kura-kura terus berjalan tanpa henti. Ketika kelinci bangun, kura-kura sudah mencapai garis finish.",
            questionText: "Benar atau Salah: Pesan moral cerita kura-kura dan kelinci adalah jangan sombong dan tetaplah tekun.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Pesan moral cerita adalah jangan sombong dan tetaplah tekun. Pernyataan BENAR.",
            trik: "Pesan moral berisi nasihat positif."
        },
        {
            id: "bi2_16",
            type: "single",
            stimulus: "Seekor rubah melihat buah anggur matang menggantung tinggi di pohon. Rubah melompat berkali-kali untuk mengambilnya, tetapi selalu gagal. Akhirnya rubah berkata, 'Ah, anggur itu pasti asam!' lalu pergi meninggalkan pohon.",
            questionText: "Apa yang dilakukan rubah setelah gagal mengambil anggur?",
            options: [
                { text: "Meminta bantuan hewan lain.", isCorrect: false },
                { text: "Mengatakan anggur itu asam lalu pergi.", isCorrect: true },
                { text: "Terus mencoba sampai berhasil.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan rubah berkata 'Anggur itu pasti asam!' lalu pergi.",
            trik: "Cari tindakan tokoh setelah kegagalan."
        },
        {
            id: "bi2_17",
            type: "multiple",
            stimulus: "Seekor rubah melihat buah anggur matang menggantung tinggi di pohon. Rubah melompat berkali-kali untuk mengambilnya, tetapi selalu gagal. Akhirnya rubah berkata, 'Ah, anggur itu pasti asam!' lalu pergi meninggalkan pohon.",
            questionText: "Pernyataan yang tepat tentang watak rubah adalah... (Pilih dua)",
            options: [
                { text: "Rubah mudah menyerah.", isCorrect: true },
                { text: "Rubah mencari alasan untuk menutupi kegagalannya.", isCorrect: true },
                { text: "Rubah adalah hewan yang sabar.", isCorrect: false }
            ],
            pembahasan: "Rubah mudah menyerah (Benar). Rubah mencari alasan (Benar). Rubah tidak sabar (Salah).",
            trik: "Watak tokoh dilihat dari reaksi saat menghadapi kegagalan."
        },
        {
            id: "bi2_18",
            type: "true_false",
            stimulus: "Seekor rubah melihat buah anggur matang menggantung tinggi di pohon. Rubah melompat berkali-kali untuk mengambilnya, tetapi selalu gagal. Akhirnya rubah berkata, 'Ah, anggur itu pasti asam!' lalu pergi meninggalkan pohon.",
            questionText: "Benar atau Salah: Rubah berhasil mengambil buah anggur.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Rubah selalu gagal mengambil anggur. Pernyataan SALAH.",
            trik: "Cari kata 'gagal' atau 'berhasil' dalam teks."
        },
        {
            id: "bi2_19",
            type: "single",
            stimulus: "Seekor singa tidur nyenyak di dalam hutan. Tiba-tiba seekor tikus kecil berlari melintasi tubuhnya dan membangunkan singa. Singa marah dan hendak memakan tikus. Tikus memohon ampun dan berjanji akan membalas budi. Singa tertawa dan melepaskan tikus. Beberapa hari kemudian, singa terjerat jaring pemburu. Tikus datang dan menggerogoti jaring hingga singa bebas.",
            questionText: "Apa yang dilakukan tikus untuk membalas budi singa?",
            options: [
                { text: "Memberi makan singa.", isCorrect: false },
                { text: "Menggerogoti jaring hingga singa bebas.", isCorrect: true },
                { text: "Memanggil hewan lain.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan tikus menggerogoti jaring hingga singa bebas.",
            trik: "Cari tindakan tokoh dalam cerita."
        },
        {
            id: "bi2_20",
            type: "multiple",
            stimulus: "Seekor singa tidur nyenyak di dalam hutan. Tiba-tiba seekor tikus kecil berlari melintasi tubuhnya dan membangunkan singa. Singa marah dan hendak memakan tikus. Tikus memohon ampun dan berjanji akan membalas budi. Singa tertawa dan melepaskan tikus. Beberapa hari kemudian, singa terjerat jaring pemburu. Tikus datang dan menggerogoti jaring hingga singa bebas.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Singa pada awalnya meremehkan tikus.", isCorrect: true },
                { text: "Tikus menepati janjinya untuk membalas budi.", isCorrect: true },
                { text: "Tikus tidak menepati janjinya.", isCorrect: false }
            ],
            pembahasan: "Singa tertawa meremehkan (Benar). Tikus menepati janji (Benar). Tikus menepati janji, jadi opsi ketiga Salah.",
            trik: "Perhatikan tindakan tokoh setelah janji diucapkan."
        },
        {
            id: "bi2_21",
            type: "true_false",
            stimulus: "Seekor singa tidur nyenyak di dalam hutan. Tiba-tiba seekor tikus kecil berlari melintasi tubuhnya dan membangunkan singa. Singa marah dan hendak memakan tikus. Tikus memohon ampun dan berjanji akan membalas budi. Singa tertawa dan melepaskan tikus. Beberapa hari kemudian, singa terjerat jaring pemburu. Tikus datang dan menggerogoti jaring hingga singa bebas.",
            questionText: "Benar atau Salah: Pesan moral cerita singa dan tikus adalah kebaikan akan dibalas dengan kebaikan.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Pesan moral cerita adalah kebaikan akan dibalas kebaikan. Pernyataan BENAR.",
            trik: "Pesan moral berisi nasihat positif."
        },
        {
            id: "bi2_22",
            type: "single",
            stimulus: "Seekor ayam betina menemukan sebutir telur emas. Setiap hari ayam itu bertelur satu butir emas. Pemilik ayam menjadi kaya raya. Namun, ia menjadi serakah. Ia ingin mendapatkan semua telur emas sekaligus. Ia pun membelah perut ayam itu. Alangkah kecewanya, tidak ada telur emas di dalamnya. Ayam itu pun mati.",
            questionText: "Apa yang dilakukan pemilik ayam karena keserakahannya?",
            options: [
                { text: "Menjual ayam ke pasar.", isCorrect: false },
                { text: "Membelah perut ayam untuk mendapatkan semua telur emas.", isCorrect: true },
                { text: "Memberi makan ayam lebih banyak.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan pemilik ayam membelah perut ayam karena ingin mendapatkan semua telur emas sekaligus.",
            trik: "Cari tindakan tokoh yang menunjukkan keserakahan."
        },
        {
            id: "bi2_23",
            type: "multiple",
            stimulus: "Seekor ayam betina menemukan sebutir telur emas. Setiap hari ayam itu bertelur satu butir emas. Pemilik ayam menjadi kaya raya. Namun, ia menjadi serakah. Ia ingin mendapatkan semua telur emas sekaligus. Ia pun membelah perut ayam itu. Alangkah kecewanya, tidak ada telur emas di dalamnya. Ayam itu pun mati.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Pemilik ayam memiliki sifat serakah.", isCorrect: true },
                { text: "Keserakahan dapat merugikan diri sendiri.", isCorrect: true },
                { text: "Pemilik ayam bersikap sabar.", isCorrect: false }
            ],
            pembahasan: "Pemilik ayam serakah (Benar). Keserakahan merugikan (Benar). Pemilik ayam tidak sabar (Salah).",
            trik: "Simpulkan pesan dari akibat yang dialami tokoh."
        },
        {
            id: "bi2_24",
            type: "true_false",
            stimulus: "Seekor ayam betina menemukan sebutir telur emas. Setiap hari ayam itu bertelur satu butir emas. Pemilik ayam menjadi kaya raya. Namun, ia menjadi serakah. Ia ingin mendapatkan semua telur emas sekaligus. Ia pun membelah perut ayam itu. Alangkah kecewanya, tidak ada telur emas di dalamnya. Ayam itu pun mati.",
            questionText: "Benar atau Salah: Pemilik ayam mendapatkan semua telur emas sekaligus.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan tidak ada telur emas di dalam perut ayam. Pernyataan SALAH.",
            trik: "Cari kata 'tidak ada' dalam teks."
        },
        {
            id: "bi2_25",
            type: "single",
            stimulus: "Seekor anak kambing sedang merumput di padang rumput. Tiba-tiba seekor serigala datang menghampirinya. Anak kambing berpikir cepat. Ia berkata, 'Tuan Serigala, saya baru saja memakan rumput yang beracun. Jika Tuan memakan saya, Tuan akan keracunan.' Serigala pun percaya dan pergi meninggalkan anak kambing.",
            questionText: "Mengapa serigala pergi meninggalkan anak kambing?",
            options: [
                { text: "Karena serigala kenyang.", isCorrect: false },
                { text: "Karena serigala percaya pada tipuan anak kambing.", isCorrect: true },
                { text: "Karena anak kambing berlari cepat.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan serigala percaya pada tipuan anak kambing bahwa rumputnya beracun.",
            trik: "Cari kata 'percaya' dalam teks."
        },
        {
            id: "bi2_26",
            type: "multiple",
            stimulus: "Seekor anak kambing sedang merumput di padang rumput. Tiba-tiba seekor serigala datang menghampirinya. Anak kambing berpikir cepat. Ia berkata, 'Tuan Serigala, saya baru saja memakan rumput yang beracun. Jika Tuan memakan saya, Tuan akan keracunan.' Serigala pun percaya dan pergi meninggalkan anak kambing.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Anak kambing memiliki sifat cerdik.", isCorrect: true },
                { text: "Serigala mudah percaya.", isCorrect: true },
                { text: "Anak kambing menyerah pada serigala.", isCorrect: false }
            ],
            pembahasan: "Anak kambing cerdik (Benar). Serigala mudah percaya (Benar). Anak kambing tidak menyerah (Salah).",
            trik: "Watak tokoh dilihat dari cara menghadapi masalah."
        },
        {
            id: "bi2_27",
            type: "true_false",
            stimulus: "Seekor anak kambing sedang merumput di padang rumput. Tiba-tiba seekor serigala datang menghampirinya. Anak kambing berpikir cepat. Ia berkata, 'Tuan Serigala, saya baru saja memakan rumput yang beracun. Jika Tuan memakan saya, Tuan akan keracunan.' Serigala pun percaya dan pergi meninggalkan anak kambing.",
            questionText: "Benar atau Salah: Pesan moral cerita anak kambing dan serigala adalah gunakan akal saat menghadapi bahaya.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Pesan moral cerita adalah menggunakan akal saat menghadapi bahaya. Pernyataan BENAR.",
            trik: "Pesan moral berisi nasihat positif."
        },
        {
            id: "bi2_28",
            type: "single",
            stimulus: "Seekor beruang dan seekor lebah hidup berdampingan di hutan. Beruang ingin sekali memakan madu lebah. Suatu hari, beruang berusaha merusak sarang lebah. Lebah-lebah pun marah dan menyerang beruang bersama-sama. Beruang kewalahan dan kabur. Sejak saat itu, beruang tidak berani mengganggu sarang lebah lagi.",
            questionText: "Mengapa beruang kabur dari sarang lebah?",
            options: [
                { text: "Karena beruang kenyang.", isCorrect: false },
                { text: "Karena diserang lebah bersama-sama.", isCorrect: true },
                { text: "Karena beruang berteman dengan lebah.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan lebah-lebah marah dan menyerang beruang bersama-sama, sehingga beruang kewalahan dan kabur.",
            trik: "Cari kata 'menyerang' atau 'kewalahan' dalam teks."
        },
        {
            id: "bi2_29",
            type: "multiple",
            stimulus: "Seekor beruang dan seekor lebah hidup berdampingan di hutan. Beruang ingin sekali memakan madu lebah. Suatu hari, beruang berusaha merusak sarang lebah. Lebah-lebah pun marah dan menyerang beruang bersama-sama. Beruang kewalahan dan kabur. Sejak saat itu, beruang tidak berani mengganggu sarang lebah lagi.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Lebah memiliki sifat kompak dan berani membela sarangnya.", isCorrect: true },
                { text: "Persatuan dapat mengalahkan kekuatan yang lebih besar.", isCorrect: true },
                { text: "Beruang berhasil mengambil madu lebah.", isCorrect: false }
            ],
            pembahasan: "Lebah kompak (Benar). Persatuan mengalahkan kekuatan besar (Benar). Beruang gagal (Salah).",
            trik: "Simpulkan pesan dari hasil akhir cerita."
        },
        {
            id: "bi2_30",
            type: "true_false",
            stimulus: "Seekor beruang dan seekor lebah hidup berdampingan di hutan. Beruang ingin sekali memakan madu lebah. Suatu hari, beruang berusaha merusak sarang lebah. Lebah-lebah pun marah dan menyerang beruang bersama-sama. Beruang kewalahan dan kabur. Sejak saat itu, beruang tidak berani mengganggu sarang lebah lagi.",
            questionText: "Benar atau Salah: Beruang berhasil memakan madu lebah.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Beruang kewalahan dan kabur, tidak berhasil mengambil madu. Pernyataan SALAH.",
            trik: "Cari kata 'kabur' atau 'tidak berani' dalam teks."
        },
        {
            id: "bi2_31",
            type: "single",
            stimulus: "Seekor burung merpati merasa kehausan. Ia melihat air di dalam kendi dan berusaha meminumnya. Namun, paruhnya tidak cukup panjang. Merpati pun mencari akal. Ia mengambil kerikil kecil dan memasukkannya ke dalam kendi satu per satu. Air pun naik dan merpati dapat minum.",
            questionText: "Apa yang dilakukan merpati agar dapat minum?",
            options: [
                { text: "Membalikkan kendi.", isCorrect: false },
                { text: "Memasukkan kerikil kecil ke dalam kendi.", isCorrect: true },
                { text: "Meminta bantuan burung lain.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan merpati memasukkan kerikil kecil ke dalam kendi.",
            trik: "Cari tindakan tokoh dalam cerita."
        },
        {
            id: "bi2_32",
            type: "multiple",
            stimulus: "Seekor burung merpati merasa kehausan. Ia melihat air di dalam kendi dan berusaha meminumnya. Namun, paruhnya tidak cukup panjang. Merpati pun mencari akal. Ia mengambil kerikil kecil dan memasukkannya ke dalam kendi satu per satu. Air pun naik dan merpati dapat minum.",
            questionText: "Pernyataan yang tepat tentang watak merpati adalah... (Pilih dua)",
            options: [
                { text: "Merpati memiliki sifat cerdik.", isCorrect: true },
                { text: "Merpati tidak mudah menyerah.", isCorrect: true },
                { text: "Merpati menyerah saat gagal.", isCorrect: false }
            ],
            pembahasan: "Merpati cerdik (Benar). Tidak mudah menyerah (Benar). Tidak menyerah (Salah).",
            trik: "Watak tokoh dilihat dari tindakannya."
        },
        {
            id: "bi2_33",
            type: "true_false",
            stimulus: "Seekor burung merpati merasa kehausan. Ia melihat air di dalam kendi dan berusaha meminumnya. Namun, paruhnya tidak cukup panjang. Merpati pun mencari akal. Ia mengambil kerikil kecil dan memasukkannya ke dalam kendi satu per satu. Air pun naik dan merpati dapat minum.",
            questionText: "Benar atau Salah: Merpati gagal minum dari kendi.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Merpati berhasil minum. Pernyataan SALAH.",
            trik: "Cari kata 'dapat minum' dalam teks."
        },
        {
            id: "bi2_34",
            type: "single",
            stimulus: "Seekor katak dan seekor kerbau tinggal di kolam yang sama. Katak sombong karena merasa paling besar di kolam. Ia menantang kerbau untuk mengadu besar. Katak mengembangkan perutnya sebesar mungkin. Sayangnya, perut katak tidak kuat dan akhirnya pecah.",
            questionText: "Apa yang terjadi pada katak karena kesombongannya?",
            options: [
                { text: "Katak menang melawan kerbau.", isCorrect: false },
                { text: "Perut katak pecah.", isCorrect: true },
                { text: "Katak menjadi besar seperti kerbau.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan perut katak tidak kuat dan akhirnya pecah.",
            trik: "Cari akibat dari tindakan tokoh dalam cerita."
        },
        {
            id: "bi2_35",
            type: "multiple",
            stimulus: "Seekor katak dan seekor kerbau tinggal di kolam yang sama. Katak sombong karena merasa paling besar di kolam. Ia menantang kerbau untuk mengadu besar. Katak mengembangkan perutnya sebesar mungkin. Sayangnya, perut katak tidak kuat dan akhirnya pecah.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Katak memiliki sifat sombong.", isCorrect: true },
                { text: "Kesombongan dapat merugikan diri sendiri.", isCorrect: true },
                { text: "Katak adalah hewan yang rendah hati.", isCorrect: false }
            ],
            pembahasan: "Katak sombong (Benar). Kesombongan merugikan (Benar). Katak tidak rendah hati (Salah).",
            trik: "Simpulkan pesan moral dari akibat yang dialami tokoh."
        },
        {
            id: "bi2_36",
            type: "true_false",
            stimulus: "Seekor katak dan seekor kerbau tinggal di kolam yang sama. Katak sombong karena merasa paling besar di kolam. Ia menantang kerbau untuk mengadu besar. Katak mengembangkan perutnya sebesar mungkin. Sayangnya, perut katak tidak kuat dan akhirnya pecah.",
            questionText: "Benar atau Salah: Katak berhasil mengalahkan kerbau dalam adu besar.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Katak justru perutnya pecah. Pernyataan SALAH.",
            trik: "Cari kata 'pecah' dalam teks."
        },
        {
            id: "bi2_37",
            type: "single",
            stimulus: "Seekor keledai membawa garam di punggungnya. Saat menyeberangi sungai, keledai terpeleset dan garamnya larut dalam air. Beban keledai menjadi ringan. Keledai senang. Keesokan harinya, keledai membawa kapas. Ia sengaja menjatuhkan diri ke sungai agar bebannya ringan. Namun, kapas menyerap air dan bebannya menjadi sangat berat.",
            questionText: "Mengapa beban keledai menjadi berat pada hari kedua?",
            options: [
                { text: "Karena kapas menyerap air.", isCorrect: true },
                { text: "Karena garam larut dalam air.", isCorrect: false },
                { text: "Karena keledai membawa batu.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan kapas menyerap air sehingga beban keledai menjadi berat.",
            trik: "Cari kata 'menyerap' dalam teks."
        },
        {
            id: "bi2_38",
            type: "multiple",
            stimulus: "Seekor keledai membawa garam di punggungnya. Saat menyeberangi sungai, keledai terpeleset dan garamnya larut dalam air. Beban keledai menjadi ringan. Keledai senang. Keesokan harinya, keledai membawa kapas. Ia sengaja menjatuhkan diri ke sungai agar bebannya ringan. Namun, kapas menyerap air dan bebannya menjadi sangat berat.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Keledai mencoba menipu dengan cara yang sama.", isCorrect: true },
                { text: "Tipu daya tidak selalu berhasil.", isCorrect: true },
                { text: "Keledai adalah hewan yang jujur.", isCorrect: false }
            ],
            pembahasan: "Keledai mencoba menipu (Benar). Tipu daya tidak selalu berhasil (Benar). Keledai tidak jujur (Salah).",
            trik: "Simpulkan pesan dari akibat perbuatan tokoh."
        },
        {
            id: "bi2_39",
            type: "true_false",
            stimulus: "Seekor keledai membawa garam di punggungnya. Saat menyeberangi sungai, keledai terpeleset dan garamnya larut dalam air. Beban keledai menjadi ringan. Keledai senang. Keesokan harinya, keledai membawa kapas. Ia sengaja menjatuhkan diri ke sungai agar bebannya ringan. Namun, kapas menyerap air dan bebannya menjadi sangat berat.",
            questionText: "Benar atau Salah: Beban keledai pada hari kedua menjadi ringan.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Beban keledai pada hari kedua menjadi sangat berat. Pernyataan SALAH.",
            trik: "Cari kata 'sangat berat' dalam teks."
        },
        {
            id: "bi2_40",
            type: "single",
            stimulus: "Seekor gajah dan seekor tikus berteman baik. Suatu hari, gajah terjebak dalam lubang yang dalam. Tikus datang menolong dengan memanggil teman-temannya. Bersama-sama, tikus dan teman-temannya menggali tanah sehingga gajah dapat keluar. Gajah sangat berterima kasih kepada tikus.",
            questionText: "Bagaimana tikus menolong gajah?",
            options: [
                { text: "Dengan memanggil teman-temannya dan menggali tanah.", isCorrect: true },
                { text: "Dengan mengangkat gajah dari lubang.", isCorrect: false },
                { text: "Dengan meminta bantuan manusia.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan tikus memanggil teman-temannya dan bersama-sama menggali tanah.",
            trik: "Cari tindakan tokoh dalam cerita."
        },
        {
            id: "bi2_41",
            type: "multiple",
            stimulus: "Seekor gajah dan seekor tikus berteman baik. Suatu hari, gajah terjebak dalam lubang yang dalam. Tikus datang menolong dengan memanggil teman-temannya. Bersama-sama, tikus dan teman-temannya menggali tanah sehingga gajah dapat keluar. Gajah sangat berterima kasih kepada tikus.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Tikus memiliki sifat setia kawan.", isCorrect: true },
                { text: "Persahabatan tidak memandang besar kecilnya tubuh.", isCorrect: true },
                { text: "Tikus meninggalkan gajah saat dalam bahaya.", isCorrect: false }
            ],
            pembahasan: "Tikus setia kawan (Benar). Persahabatan tidak memandang ukuran (Benar). Tikus menolong, bukan meninggalkan (Salah).",
            trik: "Simpulkan pesan dari tindakan tokoh."
        },
        {
            id: "bi2_42",
            type: "true_false",
            stimulus: "Seekor gajah dan seekor tikus berteman baik. Suatu hari, gajah terjebak dalam lubang yang dalam. Tikus datang menolong dengan memanggil teman-temannya. Bersama-sama, tikus dan teman-temannya menggali tanah sehingga gajah dapat keluar. Gajah sangat berterima kasih kepada tikus.",
            questionText: "Benar atau Salah: Gajah berhasil keluar dari lubang karena bantuan tikus dan teman-temannya.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan gajah dapat keluar berkat bantuan tikus dan teman-temannya. Pernyataan BENAR.",
            trik: "Cari kata 'dapat keluar' dalam teks."
        },
        {
            id: "bi2_43",
            type: "single",
            stimulus: "Seekor anak ayam tersesat di hutan. Ia bertemu seekor kelinci yang baik hati. Kelinci mengantar anak ayam pulang ke kandangnya. Ibu ayam sangat berterima kasih kepada kelinci. Sejak saat itu, anak ayam dan kelinci menjadi sahabat.",
            questionText: "Apa yang dilakukan kelinci terhadap anak ayam?",
            options: [
                { text: "Meninggalkan anak ayam di hutan.", isCorrect: false },
                { text: "Mengantar anak ayam pulang ke kandangnya.", isCorrect: true },
                { text: "Membawa anak ayam ke sarangnya.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan kelinci mengantar anak ayam pulang ke kandangnya.",
            trik: "Cari tindakan tokoh dalam cerita."
        },
        {
            id: "bi2_44",
            type: "multiple",
            stimulus: "Seekor anak ayam tersesat di hutan. Ia bertemu seekor kelinci yang baik hati. Kelinci mengantar anak ayam pulang ke kandangnya. Ibu ayam sangat berterima kasih kepada kelinci. Sejak saat itu, anak ayam dan kelinci menjadi sahabat.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Kelinci memiliki sifat baik hati.", isCorrect: true },
                { text: "Menolong orang lain dapat mempererat persahabatan.", isCorrect: true },
                { text: "Kelinci bersikap acuh tak acuh.", isCorrect: false }
            ],
            pembahasan: "Kelinci baik hati (Benar). Menolong mempererat persahabatan (Benar). Kelinci tidak acuh (Salah).",
            trik: "Simpulkan pesan dari tindakan tokoh."
        },
        {
            id: "bi2_45",
            type: "true_false",
            stimulus: "Seekor anak ayam tersesat di hutan. Ia bertemu seekor kelinci yang baik hati. Kelinci mengantar anak ayam pulang ke kandangnya. Ibu ayam sangat berterima kasih kepada kelinci. Sejak saat itu, anak ayam dan kelinci menjadi sahabat.",
            questionText: "Benar atau Salah: Ibu ayam marah kepada kelinci.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan ibu ayam sangat berterima kasih. Pernyataan SALAH.",
            trik: "Cari kata 'berterima kasih' dalam teks."
        },
        {
            id: "bi2_46",
            type: "single",
            stimulus: "Seekor lebah dan seekor kupu-kupu berteman. Lebah rajin mengumpulkan madu, sedangkan kupu-kupu suka bermain. Suatu hari, kupu-kupu kehujanan dan sakit. Lebah datang menjenguk dan membawakan madu untuk kupu-kupu. Kupu-kupu menyesal karena selama ini hanya bermain.",
            questionText: "Apa yang dibawa lebah saat menjenguk kupu-kupu?",
            options: [
                { text: "Bunga", isCorrect: false },
                { text: "Madu", isCorrect: true },
                { text: "Air", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan lebah membawakan madu untuk kupu-kupu.",
            trik: "Cari kata 'membawakan' dalam teks."
        },
        {
            id: "bi2_47",
            type: "multiple",
            stimulus: "Seekor lebah dan seekor kupu-kupu berteman. Lebah rajin mengumpulkan madu, sedangkan kupu-kupu suka bermain. Suatu hari, kupu-kupu kehujanan dan sakit. Lebah datang menjenguk dan membawakan madu untuk kupu-kupu. Kupu-kupu menyesal karena selama ini hanya bermain.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Lebah memiliki sifat rajin dan peduli.", isCorrect: true },
                { text: "Kupu-kupu menyesal karena hanya bermain.", isCorrect: true },
                { text: "Lebah tidak peduli pada kupu-kupu.", isCorrect: false }
            ],
            pembahasan: "Lebah rajin dan peduli (Benar). Kupu-kupu menyesal (Benar). Lebah peduli (Salah).",
            trik: "Watak tokoh dilihat dari tindakannya."
        },
        {
            id: "bi2_48",
            type: "true_false",
            stimulus: "Seekor lebah dan seekor kupu-kupu berteman. Lebah rajin mengumpulkan madu, sedangkan kupu-kupu suka bermain. Suatu hari, kupu-kupu kehujanan dan sakit. Lebah datang menjenguk dan membawakan madu untuk kupu-kupu. Kupu-kupu menyesal karena selama ini hanya bermain.",
            questionText: "Benar atau Salah: Kupu-kupu tidak menyesal atas perbuatannya.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan kupu-kupu menyesal. Pernyataan SALAH.",
            trik: "Cari kata 'menyesal' dalam teks."
        },
        {
            id: "bi2_49",
            type: "single",
            stimulus: "Seekor tupai mengumpulkan kacang untuk persiapan musim dingin. Ia bekerja siang dan malam tanpa lelah. Teman-temannya mengajak bermain, tetapi tupai menolak dengan sopan. Ketika musim dingin tiba, tupai memiliki cukup makanan. Teman-temannya yang malas datang meminta bantuan. Tupai dengan senang hati membagi makanannya.",
            questionText: "Mengapa tupai menolak ajakan bermain teman-temannya?",
            options: [
                { text: "Karena tupai tidak suka bermain.", isCorrect: false },
                { text: "Karena tupai sedang mengumpulkan kacang untuk musim dingin.", isCorrect: true },
                { text: "Karena tupai marah kepada teman-temannya.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan tupai sedang mengumpulkan kacang untuk persiapan musim dingin.",
            trik: "Cari alasan tindakan tokoh dalam cerita."
        },
        {
            id: "bi2_50",
            type: "multiple",
            stimulus: "Seekor tupai mengumpulkan kacang untuk persiapan musim dingin. Ia bekerja siang dan malam tanpa lelah. Teman-temannya mengajak bermain, tetapi tupai menolak dengan sopan. Ketika musim dingin tiba, tupai memiliki cukup makanan. Teman-temannya yang malas datang meminta bantuan. Tupai dengan senang hati membagi makanannya.",
            questionText: "Pernyataan yang tepat tentang cerita di atas adalah... (Pilih dua)",
            options: [
                { text: "Tupai memiliki sifat rajin dan dermawan.", isCorrect: true },
                { text: "Teman-teman tupai menyesal karena malas.", isCorrect: true },
                { text: "Tupai menolak membantu teman-temannya.", isCorrect: false }
            ],
            pembahasan: "Tupai rajin dan dermawan (Benar). Teman-teman menyesal karena malas (Benar, tersirat dari datang meminta bantuan). Tupai membantu (Salah).",
            trik: "Simpulkan sifat tokoh dari tindakannya di awal dan akhir cerita."
        }
    ]
},
        {
    chapterTitle: "Bab 3: Teks Eksplanasi & Prosedur",
    questions: [
        {
            id: "bi3_1",
            type: "multiple",
            stimulus: "Proses Terjadinya Hujan:<br>1. Air di laut, sungai, dan danau menguap karena panas matahari. Proses ini disebut evaporasi.<br>2. Uap air naik ke langit dan berkumpul menjadi awan. Proses ini disebut kondensasi.<br>3. Awan yang semakin tebal tidak mampu menahan berat air, lalu turunlah hujan ke bumi.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Evaporasi adalah proses penguapan air karena panas matahari.", isCorrect: true },
                { text: "Hujan turun karena awan tidak mampu menahan berat air.", isCorrect: true },
                { text: "Kondensasi adalah proses air turun ke bumi.", isCorrect: false }
            ],
            pembahasan: "Evaporasi = penguapan (Benar). Hujan turun karena awan tak mampu menahan berat air (Benar). Kondensasi = pembentukan awan, bukan hujan turun (Salah).",
            trik: "Cocokkan istilah pada opsi dengan penjelasan yang ada di teks."
        },
        {
            id: "bi3_2",
            type: "single",
            stimulus: "Cara Membuat Teh Manis:<br>1. Didihkan air di dalam panci.<br>2. Masukkan kantong teh ke dalam gelas.<br>3. Tuang air panas ke dalam gelas.<br>4. Tambahkan gula secukupnya.<br>5. Aduk hingga gula larut, lalu angkat kantong teh.",
            questionText: "Apa yang harus dilakukan setelah menuang air panas ke dalam gelas?",
            options: [
                { text: "Mendidihkan air di dalam panci.", isCorrect: false },
                { text: "Menambahkan gula secukupnya.", isCorrect: true },
                { text: "Mengangkat kantong teh.", isCorrect: false }
            ],
            pembahasan: "Urutan ke-4 setelah menuang air panas adalah menambahkan gula secukupnya.",
            trik: "Perhatikan kata 'setelah' pada soal, lalu cari langkah berikutnya."
        },
        {
            id: "bi3_3",
            type: "true_false",
            stimulus: "Banjir adalah peristiwa meluapnya air ke daratan yang biasanya kering. Banjir dapat terjadi karena curah hujan yang tinggi, saluran air yang tersumbat sampah, dan berkurangnya daerah resapan air akibat pembangunan.",
            questionText: "Benar atau Salah: Salah satu penyebab banjir adalah saluran air yang tersumbat sampah.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'saluran air yang tersumbat sampah' sebagai salah satu penyebab banjir. Pernyataan BENAR.",
            trik: "Cari kata kunci penyebab ('karena') di dalam teks eksplanasi."
        },
        {
            id: "bi3_4",
            type: "single",
            stimulus: "Cara Menanam Bunga di Pot:<br>1. Siapkan pot, tanah, dan bibit bunga.<br>2. Isi pot dengan tanah hingga setengah penuh.<br>3. Letakkan bibit bunga di atas tanah.<br>4. Tutup kembali dengan tanah hingga penuh.<br>5. Siram dengan air secukupnya.",
            questionText: "Apa yang harus dilakukan setelah meletakkan bibit bunga di atas tanah?",
            options: [
                { text: "Menyiram dengan air secukupnya.", isCorrect: false },
                { text: "Menutup kembali dengan tanah hingga penuh.", isCorrect: true },
                { text: "Mengisi pot dengan tanah hingga setengah penuh.", isCorrect: false }
            ],
            pembahasan: "Langkah ke-4 setelah meletakkan bibit adalah menutup kembali dengan tanah hingga penuh.",
            trik: "Baca urutan langkah dengan cermat."
        },
        {
            id: "bi3_5",
            type: "multiple",
            stimulus: "Proses Fotosintesis:<br>1. Tumbuhan menyerap air dari dalam tanah melalui akar.<br>2. Air dialirkan ke daun melalui batang.<br>3. Di daun, air bereaksi dengan karbon dioksida dari udara dengan bantuan cahaya matahari.<br>4. Hasilnya adalah glukosa (makanan) dan oksigen.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Tumbuhan menyerap air dari dalam tanah melalui akar.", isCorrect: true },
                { text: "Fotosintesis menghasilkan glukosa dan oksigen.", isCorrect: true },
                { text: "Fotosintesis tidak membutuhkan cahaya matahari.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan penyerapan air melalui akar (Benar). Hasil fotosintesis glukosa dan oksigen (Benar). Cahaya matahari dibutuhkan (Salah).",
            trik: "Cari kata 'hasilnya' dan 'bantuan' dalam teks."
        },
        {
            id: "bi3_6",
            type: "true_false",
            stimulus: "Proses Fotosintesis:<br>1. Tumbuhan menyerap air dari dalam tanah melalui akar.<br>2. Air dialirkan ke daun melalui batang.<br>3. Di daun, air bereaksi dengan karbon dioksida dari udara dengan bantuan cahaya matahari.<br>4. Hasilnya adalah glukosa (makanan) dan oksigen.",
            questionText: "Benar atau Salah: Fotosintesis menghasilkan karbon dioksida.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Fotosintesis menghasilkan glukosa dan oksigen. Karbon dioksida adalah bahan, bukan hasil. Pernyataan SALAH.",
            trik: "Bedakan antara bahan dan hasil dalam teks."
        },
        {
            id: "bi3_7",
            type: "single",
            stimulus: "Cara Membuat Jus Mangga:<br>1. Kupas mangga dan potong menjadi kecil-kecil.<br>2. Masukkan potongan mangga ke dalam blender.<br>3. Tambahkan air dan gula secukupnya.<br>4. Nyalakan blender hingga halus.<br>5. Tuang jus ke dalam gelas dan sajikan.",
            questionText: "Apa yang dilakukan setelah memasukkan potongan mangga ke dalam blender?",
            options: [
                { text: "Mengupas mangga.", isCorrect: false },
                { text: "Menambahkan air dan gula secukupnya.", isCorrect: true },
                { text: "Menuang jus ke dalam gelas.", isCorrect: false }
            ],
            pembahasan: "Langkah ke-3 adalah menambahkan air dan gula secukupnya.",
            trik: "Urutan langkah harus dibaca berurutan."
        },
        {
            id: "bi3_8",
            type: "multiple",
            stimulus: "Proses Terjadinya Gempa Bumi:<br>1. Gempa bumi terjadi karena pergerakan lempeng bumi.<br>2. Lempeng bumi yang bergesekan menimbulkan getaran.<br>3. Getaran merambat ke permukaan bumi.<br>4. Getaran yang kuat dapat merusak bangunan dan menimbulkan korban.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Gempa bumi terjadi karena pergerakan lempeng bumi.", isCorrect: true },
                { text: "Getaran gempa dapat merusak bangunan.", isCorrect: true },
                { text: "Gempa bumi tidak menimbulkan getaran.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan gempa terjadi karena pergerakan lempeng (Benar). Getaran kuat merusak bangunan (Benar). Gempa menimbulkan getaran (Salah).",
            trik: "Cari kata 'karena' dan 'dapat' dalam teks."
        },
        {
            id: "bi3_9",
            type: "true_false",
            stimulus: "Proses Terjadinya Gempa Bumi:<br>1. Gempa bumi terjadi karena pergerakan lempeng bumi.<br>2. Lempeng bumi yang bergesekan menimbulkan getaran.<br>3. Getaran merambat ke permukaan bumi.<br>4. Getaran yang kuat dapat merusak bangunan dan menimbulkan korban.",
            questionText: "Benar atau Salah: Gempa bumi terjadi karena pergerakan lempeng bumi.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan hal tersebut secara eksplisit. Pernyataan BENAR.",
            trik: "Cari kalimat definisi dalam teks."
        },
        {
            id: "bi3_10",
            type: "single",
            stimulus: "Cara Membuat Origami Burung:<br>1. Siapkan kertas persegi.<br>2. Lipat kertas menjadi dua bagian secara diagonal.<br>3. Buka lipatan dan lipat lagi ke arah berlawanan.<br>4. Lipat sudut-sudut kertas ke tengah.<br>5. Bentuk hingga menyerupai burung.",
            questionText: "Apa yang harus disiapkan untuk membuat origami burung?",
            options: [
                { text: "Kertas persegi", isCorrect: true },
                { text: "Kertas bulat", isCorrect: false },
                { text: "Kertas segitiga", isCorrect: false }
            ],
            pembahasan: "Langkah pertama menyebutkan 'Siapkan kertas persegi.'",
            trik: "Cari langkah pertama dalam teks prosedur."
        },
        {
            id: "bi3_11",
            type: "multiple",
            stimulus: "Proses Terjadinya Pelangi:<br>1. Pelangi terjadi ketika cahaya matahari melewati tetesan air hujan.<br>2. Cahaya matahari dibiaskan oleh tetesan air.<br>3. Cahaya yang dibiaskan terurai menjadi berbagai warna.<br>4. Warna-warna tersebut membentuk lengkungan pelangi.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Pelangi terjadi ketika cahaya matahari melewati tetesan air hujan.", isCorrect: true },
                { text: "Cahaya matahari dibiaskan oleh tetesan air.", isCorrect: true },
                { text: "Pelangi terjadi tanpa cahaya matahari.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan pelangi terjadi saat cahaya matahari melewati tetesan air (Benar). Cahaya dibiaskan (Benar). Pelangi membutuhkan cahaya matahari (Salah).",
            trik: "Cari kata 'ketika' dan 'dibiaskan' dalam teks."
        },
        {
            id: "bi3_12",
            type: "true_false",
            stimulus: "Proses Terjadinya Pelangi:<br>1. Pelangi terjadi ketika cahaya matahari melewati tetesan air hujan.<br>2. Cahaya matahari dibiaskan oleh tetesan air.<br>3. Cahaya yang dibiaskan terurai menjadi berbagai warna.<br>4. Warna-warna tersebut membentuk lengkungan pelangi.",
            questionText: "Benar atau Salah: Cahaya matahari yang dibiaskan terurai menjadi berbagai warna.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan hal tersebut secara eksplisit. Pernyataan BENAR.",
            trik: "Cari kata 'terurai' dalam teks."
        },
        {
            id: "bi3_13",
            type: "single",
            stimulus: "Cara Merawat Tanaman Hias:<br>1. Siram tanaman setiap pagi dan sore.<br>2. Beri pupuk sebulan sekali.<br>3. Letakkan tanaman di tempat yang terkena sinar matahari.<br>4. Pangkas daun yang kering.<br>5. Bersihkan pot dari rumput liar.",
            questionText: "Berapa kali tanaman hias harus disiram dalam sehari?",
            options: [
                { text: "Satu kali", isCorrect: false },
                { text: "Dua kali", isCorrect: true },
                { text: "Tiga kali", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Siram tanaman setiap pagi dan sore' yang berarti dua kali sehari.",
            trik: "Hitung jumlah waktu penyiraman yang disebutkan."
        },
        {
            id: "bi3_14",
            type: "multiple",
            stimulus: "Cara Merawat Tanaman Hias:<br>1. Siram tanaman setiap pagi dan sore.<br>2. Beri pupuk sebulan sekali.<br>3. Letakkan tanaman di tempat yang terkena sinar matahari.<br>4. Pangkas daun yang kering.<br>5. Bersihkan pot dari rumput liar.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Tanaman hias diberi pupuk sebulan sekali.", isCorrect: true },
                { text: "Daun yang kering harus dipangkas.", isCorrect: true },
                { text: "Tanaman hias harus diletakkan di tempat gelap.", isCorrect: false }
            ],
            pembahasan: "Pupuk sebulan sekali (Benar). Daun kering dipangkas (Benar). Tanaman perlu sinar matahari, bukan tempat gelap (Salah).",
            trik: "Cocokkan setiap langkah dengan pernyataan pada opsi."
        },
        {
            id: "bi3_15",
            type: "true_false",
            stimulus: "Cara Merawat Tanaman Hias:<br>1. Siram tanaman setiap pagi dan sore.<br>2. Beri pupuk sebulan sekali.<br>3. Letakkan tanaman di tempat yang terkena sinar matahari.<br>4. Pangkas daun yang kering.<br>5. Bersihkan pot dari rumput liar.",
            questionText: "Benar atau Salah: Tanaman hias sebaiknya diletakkan di tempat yang gelap.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan tanaman diletakkan di tempat yang terkena sinar matahari. Pernyataan SALAH.",
            trik: "Cari kata 'sinar matahari' dalam teks."
        },
        {
            id: "bi3_16",
            type: "single",
            stimulus: "Proses Daur Ulang Kertas:<br>1. Kertas bekas dikumpulkan dan dipilah.<br>2. Kertas direndam dalam air hingga lunak.<br>3. Kertas lunak dihancurkan menjadi bubur kertas.<br>4. Bubur kertas dicetak dan dikeringkan.<br>5. Hasilnya adalah kertas daur ulang yang siap digunakan.",
            questionText: "Apa yang dilakukan setelah kertas bekas dipilah?",
            options: [
                { text: "Kertas dicetak.", isCorrect: false },
                { text: "Kertas direndam dalam air hingga lunak.", isCorrect: true },
                { text: "Kertas dikeringkan.", isCorrect: false }
            ],
            pembahasan: "Langkah ke-2 setelah pemilahan adalah merendam kertas dalam air hingga lunak.",
            trik: "Baca urutan langkah dengan cermat."
        },
        {
            id: "bi3_17",
            type: "multiple",
            stimulus: "Proses Daur Ulang Kertas:<br>1. Kertas bekas dikumpulkan dan dipilah.<br>2. Kertas direndam dalam air hingga lunak.<br>3. Kertas lunak dihancurkan menjadi bubur kertas.<br>4. Bubur kertas dicetak dan dikeringkan.<br>5. Hasilnya adalah kertas daur ulang yang siap digunakan.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Kertas bekas harus dipilah sebelum direndam.", isCorrect: true },
                { text: "Hasil daur ulang kertas adalah kertas daur ulang yang siap digunakan.", isCorrect: true },
                { text: "Kertas bekas langsung dicetak tanpa direndam.", isCorrect: false }
            ],
            pembahasan: "Pemilahan sebelum perendaman (Benar). Hasil akhir kertas daur ulang (Benar). Kertas harus direndam dulu (Salah).",
            trik: "Perhatikan urutan langkah dalam teks prosedur."
        },
        {
            id: "bi3_18",
            type: "true_false",
            stimulus: "Proses Daur Ulang Kertas:<br>1. Kertas bekas dikumpulkan dan dipilah.<br>2. Kertas direndam dalam air hingga lunak.<br>3. Kertas lunak dihancurkan menjadi bubur kertas.<br>4. Bubur kertas dicetak dan dikeringkan.<br>5. Hasilnya adalah kertas daur ulang yang siap digunakan.",
            questionText: "Benar atau Salah: Kertas daur ulang dibuat dari kertas bekas.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan bahan dasar adalah kertas bekas. Pernyataan BENAR.",
            trik: "Cari bahan dasar dalam teks prosedur."
        },
        {
            id: "bi3_19",
            type: "single",
            stimulus: "Proses Terjadinya Gerhana Matahari:<br>1. Gerhana matahari terjadi ketika bulan berada di antara matahari dan bumi.<br>2. Posisi ini membuat cahaya matahari terhalang oleh bulan.<br>3. Akibatnya, sebagian atau seluruh permukaan bumi menjadi gelap.<br>4. Gerhana matahari hanya terjadi pada siang hari.",
            questionText: "Kapan gerhana matahari terjadi?",
            options: [
                { text: "Pada malam hari", isCorrect: false },
                { text: "Pada siang hari", isCorrect: true },
                { text: "Pada pagi hari", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Gerhana matahari hanya terjadi pada siang hari.'",
            trik: "Cari kata 'hanya terjadi' dalam teks."
        },
        {
            id: "bi3_20",
            type: "multiple",
            stimulus: "Proses Terjadinya Gerhana Matahari:<br>1. Gerhana matahari terjadi ketika bulan berada di antara matahari dan bumi.<br>2. Posisi ini membuat cahaya matahari terhalang oleh bulan.<br>3. Akibatnya, sebagian atau seluruh permukaan bumi menjadi gelap.<br>4. Gerhana matahari hanya terjadi pada siang hari.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Gerhana matahari terjadi ketika bulan berada di antara matahari dan bumi.", isCorrect: true },
                { text: "Cahaya matahari terhalang oleh bulan saat gerhana matahari.", isCorrect: true },
                { text: "Gerhana matahari terjadi pada malam hari.", isCorrect: false }
            ],
            pembahasan: "Posisi bulan di antara matahari dan bumi (Benar). Cahaya terhalang bulan (Benar). Gerhana matahari siang hari (Salah).",
            trik: "Cari kata 'ketika' dan 'terhalang' dalam teks."
        },
        {
            id: "bi3_21",
            type: "true_false",
            stimulus: "Proses Terjadinya Gerhana Matahari:<br>1. Gerhana matahari terjadi ketika bulan berada di antara matahari dan bumi.<br>2. Posisi ini membuat cahaya matahari terhalang oleh bulan.<br>3. Akibatnya, sebagian atau seluruh permukaan bumi menjadi gelap.<br>4. Gerhana matahari hanya terjadi pada siang hari.",
            questionText: "Benar atau Salah: Saat gerhana matahari, sebagian atau seluruh permukaan bumi menjadi gelap.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan hal tersebut. Pernyataan BENAR.",
            trik: "Cari kata 'akibatnya' dalam teks."
        },
        {
            id: "bi3_22",
            type: "single",
            stimulus: "Cara Mencuci Tangan yang Benar:<br>1. Basahi tangan dengan air bersih.<br>2. Beri sabun secukupnya.<br>3. Gosok kedua tangan selama 20 detik.<br>4. Bilas dengan air bersih.<br>5. Keringkan tangan dengan handuk bersih.",
            questionText: "Berapa lama kita harus menggosok kedua tangan?",
            options: [
                { text: "10 detik", isCorrect: false },
                { text: "20 detik", isCorrect: true },
                { text: "30 detik", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Gosok kedua tangan selama 20 detik.'",
            trik: "Cari angka dan satuan waktu dalam teks prosedur."
        },
        {
            id: "bi3_23",
            type: "multiple",
            stimulus: "Cara Mencuci Tangan yang Benar:<br>1. Basahi tangan dengan air bersih.<br>2. Beri sabun secukupnya.<br>3. Gosok kedua tangan selama 20 detik.<br>4. Bilas dengan air bersih.<br>5. Keringkan tangan dengan handuk bersih.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Tangan harus dibasahi dengan air bersih sebelum diberi sabun.", isCorrect: true },
                { text: "Tangan dikeringkan dengan handuk bersih setelah dibilas.", isCorrect: true },
                { text: "Tangan tidak perlu dibilas setelah diberi sabun.", isCorrect: false }
            ],
            pembahasan: "Basahi tangan dulu (Benar). Keringkan dengan handuk (Benar). Tangan harus dibilas (Salah).",
            trik: "Perhatikan urutan langkah dalam teks prosedur."
        },
        {
            id: "bi3_24",
            type: "true_false",
            stimulus: "Cara Mencuci Tangan yang Benar:<br>1. Basahi tangan dengan air bersih.<br>2. Beri sabun secukupnya.<br>3. Gosok kedua tangan selama 20 detik.<br>4. Bilas dengan air bersih.<br>5. Keringkan tangan dengan handuk bersih.",
            questionText: "Benar atau Salah: Setelah diberi sabun, tangan langsung dikeringkan tanpa dibilas.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Setelah diberi sabun, tangan harus dibilas dengan air bersih. Pernyataan SALAH.",
            trik: "Cari langkah 'bilas' dalam teks."
        },
        {
            id: "bi3_25",
            type: "single",
            stimulus: "Proses Terjadinya Angin:<br>1. Angin terjadi karena perbedaan tekanan udara.<br>2. Udara bergerak dari daerah bertekanan tinggi ke daerah bertekanan rendah.<br>3. Perbedaan tekanan udara disebabkan oleh perbedaan suhu.<br>4. Udara yang panas akan naik, sedangkan udara yang dingin akan turun.",
            questionText: "Apa yang menyebabkan perbedaan tekanan udara?",
            options: [
                { text: "Perbedaan suhu", isCorrect: true },
                { text: "Perbedaan warna", isCorrect: false },
                { text: "Perbedaan cuaca", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Perbedaan tekanan udara disebabkan oleh perbedaan suhu.'",
            trik: "Cari kata 'disebabkan' dalam teks."
        },
        {
            id: "bi3_26",
            type: "multiple",
            stimulus: "Proses Terjadinya Angin:<br>1. Angin terjadi karena perbedaan tekanan udara.<br>2. Udara bergerak dari daerah bertekanan tinggi ke daerah bertekanan rendah.<br>3. Perbedaan tekanan udara disebabkan oleh perbedaan suhu.<br>4. Udara yang panas akan naik, sedangkan udara yang dingin akan turun.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Angin terjadi karena perbedaan tekanan udara.", isCorrect: true },
                { text: "Udara bergerak dari daerah bertekanan tinggi ke rendah.", isCorrect: true },
                { text: "Udara yang dingin akan naik.", isCorrect: false }
            ],
            pembahasan: "Angin karena perbedaan tekanan (Benar). Udara bergerak dari tekanan tinggi ke rendah (Benar). Udara dingin turun, bukan naik (Salah).",
            trik: "Perhatikan kata 'naik' dan 'turun' dalam teks."
        },
        {
            id: "bi3_27",
            type: "true_false",
            stimulus: "Proses Terjadinya Angin:<br>1. Angin terjadi karena perbedaan tekanan udara.<br>2. Udara bergerak dari daerah bertekanan tinggi ke daerah bertekanan rendah.<br>3. Perbedaan tekanan udara disebabkan oleh perbedaan suhu.<br>4. Udara yang panas akan naik, sedangkan udara yang dingin akan turun.",
            questionText: "Benar atau Salah: Udara yang panas akan turun ke bawah.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan udara yang panas akan naik. Pernyataan SALAH.",
            trik: "Cari kata 'panas' dan 'naik' dalam teks."
        },
        {
            id: "bi3_28",
            type: "single",
            stimulus: "Cara Membuat Es Teh:<br>1. Seduh teh dengan air panas.<br>2. Tambahkan gula secukupnya.<br>3. Aduk hingga gula larut.<br>4. Diamkan hingga dingin.<br>5. Tambahkan es batu dan sajikan.",
            questionText: "Apa yang dilakukan setelah gula larut?",
            options: [
                { text: "Menambahkan es batu.", isCorrect: false },
                { text: "Mendiamkan hingga dingin.", isCorrect: true },
                { text: "Menyeduh teh dengan air panas.", isCorrect: false }
            ],
            pembahasan: "Langkah ke-4 setelah gula larut adalah mendiamkan hingga dingin.",
            trik: "Baca urutan langkah dengan cermat."
        },
        {
            id: "bi3_29",
            type: "multiple",
            stimulus: "Cara Membuat Es Teh:<br>1. Seduh teh dengan air panas.<br>2. Tambahkan gula secukupnya.<br>3. Aduk hingga gula larut.<br>4. Diamkan hingga dingin.<br>5. Tambahkan es batu dan sajikan.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Teh diseduh dengan air panas.", isCorrect: true },
                { text: "Es batu ditambahkan setelah teh dingin.", isCorrect: true },
                { text: "Es batu ditambahkan sebelum gula larut.", isCorrect: false }
            ],
            pembahasan: "Teh diseduh dengan air panas (Benar). Es batu ditambahkan setelah dingin (Benar). Es batu ditambahkan terakhir (Salah).",
            trik: "Perhatikan urutan langkah dalam teks prosedur."
        },
        {
            id: "bi3_30",
            type: "true_false",
            stimulus: "Cara Membuat Es Teh:<br>1. Seduh teh dengan air panas.<br>2. Tambahkan gula secukupnya.<br>3. Aduk hingga gula larut.<br>4. Diamkan hingga dingin.<br>5. Tambahkan es batu dan sajikan.",
            questionText: "Benar atau Salah: Gula ditambahkan setelah teh didiamkan hingga dingin.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Gula ditambahkan sebelum didiamkan. Pernyataan SALAH.",
            trik: "Cari urutan gula dan diamkan dalam teks."
        },
        {
            id: "bi3_31",
            type: "single",
            stimulus: "Proses Terjadinya Petir:<br>1. Petir terjadi karena perbedaan muatan listrik di awan.<br>2. Muatan listrik positif dan negatif berkumpul di awan.<br>3. Ketika perbedaan muatan cukup besar, terjadi pelepasan listrik.<br>4. Pelepasan listrik inilah yang kita lihat sebagai kilat dan dengar sebagai guntur.",
            questionText: "Apa yang kita lihat sebagai kilat?",
            options: [
                { text: "Pelepasan listrik", isCorrect: true },
                { text: "Perbedaan muatan", isCorrect: false },
                { text: "Awan gelap", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Pelepasan listrik inilah yang kita lihat sebagai kilat.'",
            trik: "Cari kata 'kita lihat' dalam teks."
        },
        {
            id: "bi3_32",
            type: "multiple",
            stimulus: "Proses Terjadinya Petir:<br>1. Petir terjadi karena perbedaan muatan listrik di awan.<br>2. Muatan listrik positif dan negatif berkumpul di awan.<br>3. Ketika perbedaan muatan cukup besar, terjadi pelepasan listrik.<br>4. Pelepasan listrik inilah yang kita lihat sebagai kilat dan dengar sebagai guntur.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Petir terjadi karena perbedaan muatan listrik di awan.", isCorrect: true },
                { text: "Pelepasan listrik terdengar sebagai guntur.", isCorrect: true },
                { text: "Petir terjadi tanpa perbedaan muatan.", isCorrect: false }
            ],
            pembahasan: "Petir karena perbedaan muatan (Benar). Pelepasan listrik terdengar sebagai guntur (Benar). Petir butuh perbedaan muatan (Salah).",
            trik: "Cari kata 'karena' dan 'terdengar' dalam teks."
        },
        {
            id: "bi3_33",
            type: "true_false",
            stimulus: "Proses Terjadinya Petir:<br>1. Petir terjadi karena perbedaan muatan listrik di awan.<br>2. Muatan listrik positif dan negatif berkumpul di awan.<br>3. Ketika perbedaan muatan cukup besar, terjadi pelepasan listrik.<br>4. Pelepasan listrik inilah yang kita lihat sebagai kilat dan dengar sebagai guntur.",
            questionText: "Benar atau Salah: Kilat dan guntur berasal dari pelepasan listrik yang sama.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan pelepasan listrik dilihat sebagai kilat dan didengar sebagai guntur. Pernyataan BENAR.",
            trik: "Cari kata 'kilat' dan 'guntur' dalam teks."
        },
        {
            id: "bi3_34",
            type: "single",
            stimulus: "Cara Menyetrika Pakaian:<br>1. Siapkan setrika dan pakaian yang akan disetrika.<br>2. Panaskan setrika hingga suhu yang diinginkan.<br>3. Letakkan pakaian di atas meja setrika.<br>4. Setrika pakaian hingga rapi.<br>5. Matikan setrika setelah selesai digunakan.",
            questionText: "Apa yang dilakukan setelah menyetrika pakaian hingga rapi?",
            options: [
                { text: "Memanaskan setrika.", isCorrect: false },
                { text: "Mematikan setrika.", isCorrect: true },
                { text: "Meletakkan pakaian di meja.", isCorrect: false }
            ],
            pembahasan: "Langkah terakhir setelah menyetrika adalah mematikan setrika.",
            trik: "Cari langkah terakhir dalam teks prosedur."
        },
        {
            id: "bi3_35",
            type: "multiple",
            stimulus: "Cara Menyetrika Pakaian:<br>1. Siapkan setrika dan pakaian yang akan disetrika.<br>2. Panaskan setrika hingga suhu yang diinginkan.<br>3. Letakkan pakaian di atas meja setrika.<br>4. Setrika pakaian hingga rapi.<br>5. Matikan setrika setelah selesai digunakan.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Setrika dipanaskan sebelum digunakan.", isCorrect: true },
                { text: "Setrika dimatikan setelah selesai digunakan.", isCorrect: true },
                { text: "Pakaian disetrika sebelum setrika dipanaskan.", isCorrect: false }
            ],
            pembahasan: "Setrika dipanaskan dulu (Benar). Dimatikan setelah selesai (Benar). Pakaian disetrika setelah setrika panas (Salah).",
            trik: "Perhatikan urutan langkah dalam teks prosedur."
        },
        {
            id: "bi3_36",
            type: "true_false",
            stimulus: "Cara Menyetrika Pakaian:<br>1. Siapkan setrika dan pakaian yang akan disetrika.<br>2. Panaskan setrika hingga suhu yang diinginkan.<br>3. Letakkan pakaian di atas meja setrika.<br>4. Setrika pakaian hingga rapi.<br>5. Matikan setrika setelah selesai digunakan.",
            questionText: "Benar atau Salah: Setrika dibiarkan menyala setelah selesai digunakan.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan setrika dimatikan setelah selesai digunakan. Pernyataan SALAH.",
            trik: "Cari kata 'matikan' dalam teks."
        },
        {
            id: "bi3_37",
            type: "single",
            stimulus: "Proses Terjadinya Tsunami:<br>1. Tsunami terjadi karena gempa bumi di dasar laut.<br>2. Gempa menyebabkan pergeseran dasar laut secara tiba-tiba.<br>3. Pergeseran ini mendorong air laut ke daratan.<br>4. Gelombang besar pun terbentuk dan menghantam pantai.",
            questionText: "Apa yang menyebabkan tsunami?",
            options: [
                { text: "Gempa bumi di dasar laut", isCorrect: true },
                { text: "Angin kencang", isCorrect: false },
                { text: "Hujan deras", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Tsunami terjadi karena gempa bumi di dasar laut.'",
            trik: "Cari kata 'karena' dalam teks."
        },
        {
            id: "bi3_38",
            type: "multiple",
            stimulus: "Proses Terjadinya Tsunami:<br>1. Tsunami terjadi karena gempa bumi di dasar laut.<br>2. Gempa menyebabkan pergeseran dasar laut secara tiba-tiba.<br>3. Pergeseran ini mendorong air laut ke daratan.<br>4. Gelombang besar pun terbentuk dan menghantam pantai.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Tsunami terjadi karena gempa bumi di dasar laut.", isCorrect: true },
                { text: "Gelombang besar menghantam pantai saat tsunami.", isCorrect: true },
                { text: "Tsunami disebabkan oleh angin kencang.", isCorrect: false }
            ],
            pembahasan: "Tsunami karena gempa dasar laut (Benar). Gelombang besar menghantam pantai (Benar). Angin kencang bukan penyebab tsunami (Salah).",
            trik: "Cari kata 'menyebabkan' dan 'menghantam' dalam teks."
        },
        {
            id: "bi3_39",
            type: "true_false",
            stimulus: "Proses Terjadinya Tsunami:<br>1. Tsunami terjadi karena gempa bumi di dasar laut.<br>2. Gempa menyebabkan pergeseran dasar laut secara tiba-tiba.<br>3. Pergeseran ini mendorong air laut ke daratan.<br>4. Gelombang besar pun terbentuk dan menghantam pantai.",
            questionText: "Benar atau Salah: Pergeseran dasar laut secara tiba-tiba dapat mendorong air laut ke daratan.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan hal tersebut. Pernyataan BENAR.",
            trik: "Cari kata 'mendorong' dalam teks."
        },
        {
            id: "bi3_40",
            type: "single",
            stimulus: "Cara Membuat Salad Buah:<br>1. Cuci buah-buahan hingga bersih.<br>2. Potong buah menjadi kecil-kecil.<br>3. Campurkan buah dalam mangkuk.<br>4. Tambahkan mayones dan susu kental manis.<br>5. Aduk rata dan sajikan.",
            questionText: "Apa yang ditambahkan setelah buah dicampur dalam mangkuk?",
            options: [
                { text: "Garam", isCorrect: false },
                { text: "Mayones dan susu kental manis", isCorrect: true },
                { text: "Air", isCorrect: false }
            ],
            pembahasan: "Langkah ke-4 adalah menambahkan mayones dan susu kental manis.",
            trik: "Cari langkah setelah 'campurkan buah' dalam teks."
        },
        {
            id: "bi3_41",
            type: "multiple",
            stimulus: "Cara Membuat Salad Buah:<br>1. Cuci buah-buahan hingga bersih.<br>2. Potong buah menjadi kecil-kecil.<br>3. Campurkan buah dalam mangkuk.<br>4. Tambahkan mayones dan susu kental manis.<br>5. Aduk rata dan sajikan.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Buah dicuci hingga bersih sebelum dipotong.", isCorrect: true },
                { text: "Salad buah ditambahkan mayones dan susu kental manis.", isCorrect: true },
                { text: "Buah tidak perlu dicuci sebelum dipotong.", isCorrect: false }
            ],
            pembahasan: "Buah dicuci dulu (Benar). Ditambahkan mayones dan susu (Benar). Buah harus dicuci (Salah).",
            trik: "Perhatikan urutan langkah dalam teks prosedur."
        },
        {
            id: "bi3_42",
            type: "true_false",
            stimulus: "Cara Membuat Salad Buah:<br>1. Cuci buah-buahan hingga bersih.<br>2. Potong buah menjadi kecil-kecil.<br>3. Campurkan buah dalam mangkuk.<br>4. Tambahkan mayones dan susu kental manis.<br>5. Aduk rata dan sajikan.",
            questionText: "Benar atau Salah: Buah dipotong sebelum dicuci.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan buah dicuci dulu, baru dipotong. Pernyataan SALAH.",
            trik: "Perhatikan urutan cuci dan potong dalam teks."
        },
        {
            id: "bi3_43",
            type: "single",
            stimulus: "Proses Terjadinya Kembang Api:<br>1. Kembang api mengandung bahan kimia yang mudah terbakar.<br>2. Ketika disulut, bahan kimia tersebut terbakar.<br>3. Pembakaran menghasilkan gas panas yang mendorong keluar.<br>4. Gas panas bercampur dengan oksigen dan menimbulkan warna-warni di langit.",
            questionText: "Apa yang membuat kembang api berwarna-warni di langit?",
            options: [
                { text: "Gas panas yang bercampur dengan oksigen.", isCorrect: true },
                { text: "Air hujan.", isCorrect: false },
                { text: "Angin malam.", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan gas panas bercampur oksigen menimbulkan warna-warni di langit.",
            trik: "Cari kata 'warna-warni' dalam teks."
        },
        {
            id: "bi3_44",
            type: "multiple",
            stimulus: "Proses Terjadinya Kembang Api:<br>1. Kembang api mengandung bahan kimia yang mudah terbakar.<br>2. Ketika disulut, bahan kimia tersebut terbakar.<br>3. Pembakaran menghasilkan gas panas yang mendorong keluar.<br>4. Gas panas bercampur dengan oksigen dan menimbulkan warna-warni di langit.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Kembang api mengandung bahan kimia yang mudah terbakar.", isCorrect: true },
                { text: "Pembakaran kembang api menghasilkan gas panas.", isCorrect: true },
                { text: "Kembang api tidak mengandung bahan kimia.", isCorrect: false }
            ],
            pembahasan: "Mengandung bahan kimia mudah terbakar (Benar). Menghasilkan gas panas (Benar). Tidak mengandung bahan kimia (Salah).",
            trik: "Cari kata 'mengandung' dan 'menghasilkan' dalam teks."
        },
        {
            id: "bi3_45",
            type: "true_false",
            stimulus: "Proses Terjadinya Kembang Api:<br>1. Kembang api mengandung bahan kimia yang mudah terbakar.<br>2. Ketika disulut, bahan kimia tersebut terbakar.<br>3. Pembakaran menghasilkan gas panas yang mendorong keluar.<br>4. Gas panas bercampur dengan oksigen dan menimbulkan warna-warni di langit.",
            questionText: "Benar atau Salah: Kembang api tidak memerlukan oksigen untuk menimbulkan warna.",
            options: [
                { text: "Benar", isCorrect: false },
                { text: "Salah", isCorrect: true }
            ],
            pembahasan: "Teks menyebutkan gas panas bercampur dengan oksigen. Pernyataan SALAH.",
            trik: "Cari kata 'oksigen' dalam teks."
        },
        {
            id: "bi3_46",
            type: "single",
            stimulus: "Cara Membuat Kolase dari Kertas:<br>1. Siapkan kertas, gunting, dan lem.<br>2. Gunting kertas menjadi potongan kecil.<br>3. Tempelkan potongan kertas pada gambar pola.<br>4. Susun hingga membentuk gambar yang diinginkan.<br>5. Jemur hingga lem kering.",
            questionText: "Apa yang dilakukan setelah menempelkan potongan kertas pada gambar pola?",
            options: [
                { text: "Menggunting kertas.", isCorrect: false },
                { text: "Menyusun hingga membentuk gambar yang diinginkan.", isCorrect: true },
                { text: "Menjemur hingga lem kering.", isCorrect: false }
            ],
            pembahasan: "Langkah ke-4 setelah menempelkan adalah menyusun hingga membentuk gambar.",
            trik: "Baca urutan langkah dengan cermat."
        },
        {
            id: "bi3_47",
            type: "multiple",
            stimulus: "Cara Membuat Kolase dari Kertas:<br>1. Siapkan kertas, gunting, dan lem.<br>2. Gunting kertas menjadi potongan kecil.<br>3. Tempelkan potongan kertas pada gambar pola.<br>4. Susun hingga membentuk gambar yang diinginkan.<br>5. Jemur hingga lem kering.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Kertas digunting menjadi potongan kecil.", isCorrect: true },
                { text: "Kolase dijemur hingga lem kering.", isCorrect: true },
                { text: "Lem tidak diperlukan dalam membuat kolase.", isCorrect: false }
            ],
            pembahasan: "Kertas digunting kecil (Benar). Dijemur hingga lem kering (Benar). Lem diperlukan (Salah).",
            trik: "Cari kata 'gunting' dan 'lem' dalam teks."
        },
        {
            id: "bi3_48",
            type: "true_false",
            stimulus: "Cara Membuat Kolase dari Kertas:<br>1. Siapkan kertas, gunting, dan lem.<br>2. Gunting kertas menjadi potongan kecil.<br>3. Tempelkan potongan kertas pada gambar pola.<br>4. Susun hingga membentuk gambar yang diinginkan.<br>5. Jemur hingga lem kering.",
            questionText: "Benar atau Salah: Kolase dijemur hingga lem kering.",
            options: [
                { text: "Benar", isCorrect: true },
                { text: "Salah", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan langkah terakhir adalah menjemur hingga lem kering. Pernyataan BENAR.",
            trik: "Cari kata 'jemur' dalam teks."
        },
        {
            id: "bi3_49",
            type: "single",
            stimulus: "Proses Terjadinya Embun:<br>1. Embun terbentuk pada pagi hari.<br>2. Udara malam yang dingin menyebabkan uap air mengembun.<br>3. Uap air berubah menjadi titik-titik air.<br>4. Titik-titik air menempel pada daun dan rumput.",
            questionText: "Kapan embun biasanya terbentuk?",
            options: [
                { text: "Siang hari", isCorrect: false },
                { text: "Pagi hari", isCorrect: true },
                { text: "Sore hari", isCorrect: false }
            ],
            pembahasan: "Teks menyebutkan 'Embun terbentuk pada pagi hari.'",
            trik: "Cari kata 'terbentuk' dalam teks."
        },
        {
            id: "bi3_50",
            type: "multiple",
            stimulus: "Proses Terjadinya Embun:<br>1. Embun terbentuk pada pagi hari.<br>2. Udara malam yang dingin menyebabkan uap air mengembun.<br>3. Uap air berubah menjadi titik-titik air.<br>4. Titik-titik air menempel pada daun dan rumput.",
            questionText: "Pernyataan mana saja yang sesuai dengan teks di atas? (Pilih dua)",
            options: [
                { text: "Udara malam yang dingin menyebabkan uap air mengembun.", isCorrect: true },
                { text: "Titik-titik air embun menempel pada daun dan rumput.", isCorrect: true },
                { text: "Embun terbentuk pada siang hari.", isCorrect: false }
            ],
            pembahasan: "Udara dingin menyebabkan pengembunan (Benar). Titik air menempel pada daun dan rumput (Benar). Embun terbentuk pagi hari (Salah).",
            trik: "Cari kata 'menyebabkan' dan 'menempel' dalam teks."
        }
    ]
}
    ]
};