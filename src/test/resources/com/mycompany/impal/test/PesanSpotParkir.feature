# language: id

Fitur: Pesan Spot Parkir
        Memesan Spot parkir
        
        @Normal
	Skenario: Memasukan Data Pemesanan Spot Parkir Berhasil
		Dengan Data user, dan Data Pemesanana baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem
		Ketika Memasukan data pemesanan
		Dan Data baru pemesanan sudah benar
		Maka respon pesan berhasil "pemesanan spot parkir berhasil"

        @Sekunder
	Skenario: Memasukan Data Pemesanan Spot Parkir Gagal
		Dengan Data user, dan Data Pemesanana baru dimasukan dan duplikat dengan data yang sudah ada di sistem
		Ketika Memasukan data pemesanan
		Dan Data baru pemesanan duplikat
		Maka respon pesan gagal "pemesanan spot parkir gagal"
