# language: id

Fitur: Register Pengendara
        Pendataan dan Pengolahan Data Pengendara

        @Normal
	Skenario: Memasukan Data User Benar
		Dengan pengecekan data user baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem
                Ketika Memasukan data user baru ke dalam sistem
                Dan Data baru user sudah benar
                Maka respon register berhasil "register berhasil"

	@Sekunder
	Skenario: Memasukkan Data User Salah
                Dengan Pengecekan data baru dimasukan dan terdapat duplikat dengan data yang sudah ada di sistem
                Ketika Memasukan data user baru ke dalam sistem
                Dan Data baru user sudah benar tetap terdapat duplikasi
                Maka respon register gagal "register gagal, username sudah pernah terdaftar"
       