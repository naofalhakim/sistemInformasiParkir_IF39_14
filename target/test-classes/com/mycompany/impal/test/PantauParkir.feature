# language: id
Fitur: Pemantauan spot parkir 
        Mengetahui kondisi kendaraan melalui kamera

	@Normal
        Skenario: Validasi Id parkir user benar
		Dengan pengecekan data transaksi parkir dan data inputan berupa id user ditemukan	
		Ketika data hasil pengecekan sama( benar ) 
                Maka respone pantau berhasil "munculkan visualisasi dari pemantauan kendaraan"
	
        @Sekunder
        Skenario: Validasi Id parkir user salah
		Dengan pengecekan data transaksi parkir dan data inputan berupa id user tidak ditemukan	
                Ketika data hasil pengecekan tidak ditemukan id transaksi user( salah ) 
                Maka respone pantau gagal "tidak bisa melakukan pemantauan kendaraan, id yang di inputkan salah"