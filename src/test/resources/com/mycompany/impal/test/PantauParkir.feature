# language: id

Fitur: Pemantauan spot parkir 
        Mengetahui kondisi kendaraan melalui kamera

	@Normal
        Skenario: Validasi Id parkir user benar
		Dengan pengecekan data transaksi parkir dan data inputan berupa id user ditemukan	
		Ketika data hasil pengecekan sama( benar ) 
		Maka user parkir bisa melakukan pemantauan kendaraan 
                Maka menampilkan "visualisasi dari pemantauan kendaraan"
		
	
        @Sekunder
        Skenario: Validasi Id parkir user salah
		Dengan pengecekan data transaksi parkir dan data inputan berupa id user tidak ditemukan	
                Ketika data hasil pengecekan tidak ditemukan id transaksi user( salah ) 
		Maka user tidak bisa melakukan pemantauan kendaraan 
                Maka akan tampil notofikasi "id yang di inputkan salah"
		
