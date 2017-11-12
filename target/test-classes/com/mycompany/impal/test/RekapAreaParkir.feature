# language: id

Fitur: Rekap Transaksi Parkir
        Mengetahui tempat kendaraan melalui kamera

        @Normal
	Skenario: Validasi Id parkir user
		Dengan pengecekan data transaksi parkir dan data inputan berupa id user	
		Ketika data hasil pengecekan sama( benar ) 
		Maka bisa melakukan cek spot kendaraan
		Dan menampilkan lokasi spot kendaraan
		Ketika data hasil pengecekan tidak ditemukan id transaksi user( salah ) 
		Maka akan tampil notifikasi id yang di inputkan salah