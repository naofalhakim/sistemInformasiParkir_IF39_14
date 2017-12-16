# language: id
<<<<<<< HEAD
=======

>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
Fitur: Pemantauan spot parkir 
        Mengetahui kondisi kendaraan melalui kamera

	@Normal
        Skenario: Validasi Id parkir user benar
		Dengan pengecekan data transaksi parkir dan data inputan berupa id user ditemukan	
		Ketika data hasil pengecekan sama( benar ) 
<<<<<<< HEAD
                Maka respone pantau berhasil "munculkan visualisasi dari pemantauan kendaraan"
=======
		Maka user parkir bisa melakukan pemantauan kendaraan 
                Maka menampilkan "visualisasi dari pemantauan kendaraan"
		
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
	
        @Sekunder
        Skenario: Validasi Id parkir user salah
		Dengan pengecekan data transaksi parkir dan data inputan berupa id user tidak ditemukan	
                Ketika data hasil pengecekan tidak ditemukan id transaksi user( salah ) 
<<<<<<< HEAD
                Maka respone pantau gagal "tidak bisa melakukan pemantauan kendaraan, id yang di inputkan salah"
=======
		Maka user tidak bisa melakukan pemantauan kendaraan 
                Maka akan tampil notofikasi "id yang di inputkan salah"
		
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
