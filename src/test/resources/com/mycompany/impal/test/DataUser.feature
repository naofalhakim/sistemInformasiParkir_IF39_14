# language: id

Fitur: Mengelola User Akun
        Megelola Data User

    @Normal
    Skenario: Memasukan Data User
    Dengan Data user baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem
    Ketika Memasukan data user baru
    Dan Data baru user sudah benar
    Maka respon "register berhasil"
 
    @Normal
    Skenario: Mengedit Data User
    Dengan Data user yang sudah ada di dalam sistem dan data user tidak sesuai
    Ketika memasukkan data edit user yang baru
    Dan data edit user yang baru sudah benar
    Maka respon "update berhasil"
