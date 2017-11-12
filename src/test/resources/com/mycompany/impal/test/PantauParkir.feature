# language: id

Fitur: Pemantauan spot parkir 
        Mengetahui kondisi kendaraan melalui kamera

	@Normal
        Skenario: Validasi Id parkir user
		Dengan pengecekan data	transaksi parkir dan data inputan berupa id user	
		Ketika data hasil pengecekan sama( benar ) 
		Maka user parkir bisa melakukan pemantauan kendaraan
		Dan menampilkan visualisasi dari pemantauan kendaraan
		Ketika data hasil pengecekan tidak ditemukan id transaksi user( salah ) 
		Maka user tidak bisa melakukan pemantauan kendaraan
		Dan akan tampil notofikasi id yang di inputkan salah
