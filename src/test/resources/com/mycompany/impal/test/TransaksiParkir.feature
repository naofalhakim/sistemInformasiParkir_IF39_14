# language: id

Fitur: Perhitungan Lama Parkir User
        Mengetahui biaya dan lama parkir user

	@Normal
        Skenario: Mengecek User Pesan Spot 
		Dengan pengecekan data transaksi pemesanan spot parkir dan data user parkir
		Ketika data hasil pengecekan sama( benar ) 
		Maka user parkir bisa parkir sesuai dengan tempet yang dipesan
		Ketika data hasil pengecekan tidak ditemukan( salah ) 
		Maka user parkir berdasarkan spot tempat parkir yang di tentukan

        @Normal
	Skenario: Perhitungan waktu user
		Dengan data parkir user masuk dengan status parkir di sistem dan tidak duplikat
		Ketika data sudah masuk ke sistem, maka countup akan di mulai
		Ketika countup sudah mulai menghitung
		Maka respon "user mulai parkir" dan akan mulai dihitung juga untuk biaya parkir user 
        
        @Normal
	Skenario: Perhitungan biaya parkir
		Dengan data durasi parkir, pada data parkir
		Ketika data durasi user lebih dari 1 detik ( biaya parkir awal )
		Maka perhitungan biaya parkir = 2000
		Ketika data durasi parkir user lebih dari 1 jam
		Maka biaya parkir menjadi biaya parkir awal + n( biaya parkir tiap jam ) x 1000	