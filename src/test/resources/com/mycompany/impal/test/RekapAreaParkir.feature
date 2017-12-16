# language: id

Fitur: Rekap Transaksi Parkir
        Mengetahui tempat kendaraan melalui kamera

        @Normal
	Skenario: Validasi Id parkir user benar
		Dengan pengecekan data transaksi parkir dan data inputan berupa id user ditemukan
		Ketika data hasil pengecekan ditemukan atau sama( benar ) 
<<<<<<< HEAD
		Maka respon berhasil menampilkan "lokasi spot kendaraan"
=======
		Maka bisa melakukan cek spot kendaraan dan menampilkan "lokasi spot kendaraan"
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288

	@Sekunder
	Skenario: Validasi Id parkir user salah
                Dengan pengecekan data transaksi parkir dan data inputan berupa id user tidak ditemukan
		Ketika data hasil pengecekan tidak ditemukan id transaksi user( salah ) 
<<<<<<< HEAD
		Maka respon rekap spot gagal menampilkan "id yang di inputkan salah"
=======
		Maka akan tampil notifikasi "id yang di inputkan salah"
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
