# language: id

Fitur: Rekap Transaksi Parkir
        Mengetahui tempat kendaraan melalui kamera

        @Normal
	Skenario: Validasi Id parkir user benar
		Dengan pengecekan data transaksi parkir dan data inputan berupa id user ditemukan
		Ketika data hasil pengecekan ditemukan atau sama( benar ) 
		Maka bisa melakukan cek spot kendaraan dan menampilkan "lokasi spot kendaraan"

	@Sekunder
	Skenario: Validasi Id parkir user salah
                Dengan pengecekan data transaksi parkir dan data inputan berupa id user tidak ditemukan
		Ketika data hasil pengecekan tidak ditemukan id transaksi user( salah ) 
		Maka akan tampil notifikasi "id yang di inputkan salah"