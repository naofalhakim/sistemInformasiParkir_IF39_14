# language: id

Fitur: Register Pengendara
        Pendataan dan Pengolahan Data Pengendara

        @Normal
	Skenario: Memasukan Data User Benar
		Dengan pengecekan data user baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem
                Ketika Memasukan data user baru ke dalam sistem
                Dan Data baru user sudah benar
<<<<<<< HEAD
                Maka respon register berhasil "register berhasil"
=======
                Maka respon "register berhasil"
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288

	@Sekunder
	Skenario: Memasukkan Data User Salah
                Dengan Pengecekan data baru dimasukan dan terdapat duplikat dengan data yang sudah ada di sistem
                Ketika Memasukan data user baru ke dalam sistem
                Dan Data baru user sudah benar tetap terdapat duplikasi
<<<<<<< HEAD
                Maka respon register gagal "register gagal, username sudah pernah terdaftar"
=======
                Maka respon "register gagal, username sudah pernah terdaftarr"

        

        
        
>>>>>>> 690e67925e7b6ceaee7cf0b5954abced99646288
