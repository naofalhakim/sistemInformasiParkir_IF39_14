$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("com/mycompany/impal/test/DataUser.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Mengelola User Akun",
  "description": "      Megelola Data User",
  "id": "mengelola-user-akun",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Memasukan Data User",
  "description": "",
  "id": "mengelola-user-akun;memasukan-data-user",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Data user baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "Memasukan data user baru",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "Data baru user sudah benar",
  "keyword": "Dan "
});
formatter.step({
  "line": 11,
  "name": "respon \"register berhasil\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "DemoContext.data_user_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 8363621,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.memasukan_data_user_baru()"
});
formatter.result({
  "duration": 39715,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_baru_user_sudah_benar()"
});
formatter.result({
  "duration": 58902,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register berhasil",
      "offset": 8
    }
  ],
  "location": "DemoContext.respon(String)"
});
formatter.result({
  "duration": 1306550,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Mengedit Data User",
  "description": "",
  "id": "mengelola-user-akun;mengedit-data-user",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 13,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Data user yang sudah ada di dalam sistem dan data user tidak sesuai",
  "keyword": "Dengan "
});
formatter.step({
  "line": 16,
  "name": "memasukkan data edit user yang baru",
  "keyword": "Ketika "
});
formatter.step({
  "line": 17,
  "name": "data edit user yang baru sudah benar",
  "keyword": "Dan "
});
formatter.step({
  "line": 18,
  "name": "responUpdate \"update berhasil\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "DemoContext.data_user_yang_sudah_ada_di_dalam_sistem_dan_data_user_tidak_sesuai()"
});
formatter.result({
  "duration": 52655,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.memasukkan_data_edit_user_yang_baru()"
});
formatter.result({
  "duration": 22311,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_edit_user_yang_baru_sudah_benar()"
});
formatter.result({
  "duration": 30343,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "update berhasil",
      "offset": 14
    }
  ],
  "location": "DemoContext.responupdate(String)"
});
formatter.result({
  "duration": 100401,
  "status": "passed"
});
formatter.uri("com/mycompany/impal/test/PantauParkir.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Pemantauan spot parkir",
  "description": "      Mengetahui kondisi kendaraan melalui kamera",
  "id": "pemantauan-spot-parkir",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Validasi Id parkir user benar",
  "description": "",
  "id": "pemantauan-spot-parkir;validasi-id-parkir-user-benar",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "pengecekan data transaksi parkir dan data inputan berupa id user ditemukan",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "data hasil pengecekan sama( benar )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "respone pantau berhasil \"munculkan visualisasi dari pemantauan kendaraan\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PantauParkirContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_ditemukan()"
});
formatter.result({
  "duration": 649706,
  "status": "passed"
});
formatter.match({
  "location": "PantauParkirContext.data_hasil_pengecekan_sama_benar()"
});
formatter.result({
  "duration": 395356,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003ctrue\u003e but was:\u003cpaijo@gmail.com\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:86)\r\n\tat com.mycompany.impal.test.PantauParkirContext.data_hasil_pengecekan_sama_benar(PantauParkirContext.java:48)\r\n\tat ✽.Ketika data hasil pengecekan sama( benar )(com/mycompany/impal/test/PantauParkir.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "munculkan visualisasi dari pemantauan kendaraan",
      "offset": 25
    }
  ],
  "location": "PantauParkirContext.respone_pantau_berhasil(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Validasi Id parkir user salah",
  "description": "",
  "id": "pemantauan-spot-parkir;validasi-id-parkir-user-salah",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sekunder"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "pengecekan data transaksi parkir dan data inputan berupa id user tidak ditemukan",
  "keyword": "Dengan "
});
formatter.step({
  "line": 16,
  "name": "data hasil pengecekan tidak ditemukan id transaksi user( salah )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 17,
  "name": "respone pantau gagal \"tidak bisa melakukan pemantauan kendaraan, id yang di inputkan salah\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PantauParkirContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_tidak_ditemukan()"
});
formatter.result({
  "duration": 91030,
  "status": "passed"
});
formatter.match({
  "location": "PantauParkirContext.data_hasil_pengecekan_tidak_ditemukan_id_transaksi_user_salah()"
});
formatter.result({
  "duration": 37483,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tidak bisa melakukan pemantauan kendaraan, id yang di inputkan salah",
      "offset": 22
    }
  ],
  "location": "PantauParkirContext.respone_pantau_gagal(String)"
});
formatter.result({
  "duration": 84783,
  "status": "passed"
});
formatter.uri("com/mycompany/impal/test/PesanSpotParkir.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Pesan Spot Parkir",
  "description": "      Memesan Spot parkir",
  "id": "pesan-spot-parkir",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Memasukan Data Pemesanan Spot Parkir Berhasil",
  "description": "",
  "id": "pesan-spot-parkir;memasukan-data-pemesanan-spot-parkir-berhasil",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "Data user, dan Data Pemesanana baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "Memasukan data pemesanan",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "Data baru pemesanan sudah benar",
  "keyword": "Dan "
});
formatter.step({
  "line": 11,
  "name": "respon pesan berhasil \"pemesanan spot parkir berhasil\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PesanSpotParkirContext.data_user_dan_Data_Pemesanana_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 62918,
  "status": "passed"
});
formatter.match({
  "location": "PesanSpotParkirContext.memasukan_data_pemesanan()"
});
formatter.result({
  "duration": 74966,
  "status": "passed"
});
formatter.match({
  "location": "PesanSpotParkirContext.data_baru_pemesanan_sudah_benar()"
});
formatter.result({
  "duration": 36144,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pemesanan spot parkir berhasil",
      "offset": 23
    }
  ],
  "location": "PesanSpotParkirContext.respon_pesan_berhasil(String)"
});
formatter.result({
  "duration": 93708,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Memasukan Data Pemesanan Spot Parkir Gagal",
  "description": "",
  "id": "pesan-spot-parkir;memasukan-data-pemesanan-spot-parkir-gagal",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sekunder"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Data user, dan Data Pemesanana baru dimasukan dan duplikat dengan data yang sudah ada di sistem",
  "keyword": "Dengan "
});
formatter.step({
  "line": 16,
  "name": "Memasukan data pemesanan",
  "keyword": "Ketika "
});
formatter.step({
  "line": 17,
  "name": "Data baru pemesanan duplikat",
  "keyword": "Dan "
});
formatter.step({
  "line": 18,
  "name": "respon pesan gagal \"pemesanan spot parkir gagal\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PesanSpotParkirContext.data_user_dan_Data_Pemesanana_baru_dimasukan_dan_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 70057,
  "status": "passed"
});
formatter.match({
  "location": "PesanSpotParkirContext.memasukan_data_pemesanan()"
});
formatter.result({
  "duration": 32575,
  "status": "passed"
});
formatter.match({
  "location": "PesanSpotParkirContext.data_baru_pemesanan_duplikat()"
});
formatter.result({
  "duration": 43284,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pemesanan spot parkir gagal",
      "offset": 20
    }
  ],
  "location": "PesanSpotParkirContext.respon_pesan_gagal(String)"
});
formatter.result({
  "duration": 96385,
  "status": "passed"
});
formatter.uri("com/mycompany/impal/test/Register.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Register Pengendara",
  "description": "      Pendataan dan Pengolahan Data Pengendara",
  "id": "register-pengendara",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Memasukan Data User Benar",
  "description": "",
  "id": "register-pengendara;memasukan-data-user-benar",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "pengecekan data user baru dimasukan dan tidak duplikat dengan data yang sudah ada di sistem",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "Memasukan data user baru ke dalam sistem",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "Data baru user sudah benar",
  "keyword": "Dan "
});
formatter.step({
  "line": 11,
  "name": "respon register berhasil \"register berhasil\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "RegisterContext.pengecekan_data_user_baru_dimasukan_dan_tidak_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 59794,
  "status": "passed"
});
formatter.match({
  "location": "RegisterContext.memasukan_data_user_baru_ke_dalam_sistem()"
});
formatter.result({
  "duration": 37929,
  "status": "passed"
});
formatter.match({
  "location": "DemoContext.data_baru_user_sudah_benar()"
});
formatter.result({
  "duration": 51763,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register berhasil",
      "offset": 26
    }
  ],
  "location": "RegisterContext.respon_register_berhasil(String)"
});
formatter.result({
  "duration": 95492,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Memasukkan Data User Salah",
  "description": "",
  "id": "register-pengendara;memasukkan-data-user-salah",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 13,
      "name": "@Sekunder"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Pengecekan data baru dimasukan dan terdapat duplikat dengan data yang sudah ada di sistem",
  "keyword": "Dengan "
});
formatter.step({
  "line": 16,
  "name": "Memasukan data user baru ke dalam sistem",
  "keyword": "Ketika "
});
formatter.step({
  "line": 17,
  "name": "Data baru user sudah benar tetap terdapat duplikasi",
  "keyword": "Dan "
});
formatter.step({
  "line": 18,
  "name": "respon register gagal \"register gagal, username sudah pernah terdaftar\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "RegisterContext.pengecekan_data_baru_dimasukan_dan_terdapat_duplikat_dengan_data_yang_sudah_ada_di_sistem()"
});
formatter.result({
  "duration": 59794,
  "status": "passed"
});
formatter.match({
  "location": "RegisterContext.memasukan_data_user_baru_ke_dalam_sistem()"
});
formatter.result({
  "duration": 27220,
  "status": "passed"
});
formatter.match({
  "location": "RegisterContext.data_baru_user_sudah_benar_tetap_terdapat_duplikasi()"
});
formatter.result({
  "duration": 31236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "register gagal, username sudah pernah terdaftar",
      "offset": 23
    }
  ],
  "location": "RegisterContext.respon_register_gagal(String)"
});
formatter.result({
  "duration": 82552,
  "status": "passed"
});
formatter.uri("com/mycompany/impal/test/RekapAreaParkir.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Rekap Transaksi Parkir",
  "description": "      Mengetahui tempat kendaraan melalui kamera",
  "id": "rekap-transaksi-parkir",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Validasi Id parkir user benar",
  "description": "",
  "id": "rekap-transaksi-parkir;validasi-id-parkir-user-benar",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "pengecekan data transaksi parkir dan data inputan berupa id user ditemukan",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "data hasil pengecekan ditemukan atau sama( benar )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "respon berhasil menampilkan \"lokasi spot kendaraan\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PantauParkirContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_ditemukan()"
});
formatter.result({
  "duration": 61133,
  "status": "passed"
});
formatter.match({
  "location": "RekapAreaParkirContext.data_hasil_pengecekan_ditemukan_atau_sama_benar()"
});
formatter.result({
  "duration": 61133,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lokasi spot kendaraan",
      "offset": 29
    }
  ],
  "location": "RekapAreaParkirContext.respon_berhasil_menampilkan(String)"
});
formatter.result({
  "duration": 100848,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Validasi Id parkir user salah",
  "description": "",
  "id": "rekap-transaksi-parkir;validasi-id-parkir-user-salah",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 12,
      "name": "@Sekunder"
    }
  ]
});
formatter.step({
  "line": 14,
  "name": "pengecekan data transaksi parkir dan data inputan berupa id user tidak ditemukan",
  "keyword": "Dengan "
});
formatter.step({
  "line": 15,
  "name": "data hasil pengecekan tidak ditemukan id transaksi user( salah )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 16,
  "name": "respon rekap spot gagal menampilkan \"id yang di inputkan salah\"",
  "keyword": "Maka "
});
formatter.match({
  "location": "PantauParkirContext.pengecekan_data_transaksi_parkir_dan_data_inputan_berupa_id_user_tidak_ditemukan()"
});
formatter.result({
  "duration": 89691,
  "status": "passed"
});
formatter.match({
  "location": "PantauParkirContext.data_hasil_pengecekan_tidak_ditemukan_id_transaksi_user_salah()"
});
formatter.result({
  "duration": 38821,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "id yang di inputkan salah",
      "offset": 37
    }
  ],
  "location": "RekapAreaParkirContext.respon_rekap_spot_gagal_menampilkan(String)"
});
formatter.result({
  "duration": 152163,
  "status": "passed"
});
formatter.uri("com/mycompany/impal/test/TransaksiParkir.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: id"
    }
  ],
  "line": 3,
  "name": "Perhitungan Lama Parkir User",
  "description": "      Mengetahui biaya dan lama parkir user",
  "id": "perhitungan-lama-parkir-user",
  "keyword": "Fitur"
});
formatter.scenario({
  "line": 7,
  "name": "Mengecek User Pesan Spot",
  "description": "",
  "id": "perhitungan-lama-parkir-user;mengecek-user-pesan-spot",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 6,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "pengecekan data transaksi pemesanan spot parkir dan data user parkir",
  "keyword": "Dengan "
});
formatter.step({
  "line": 9,
  "name": "data hasil pengecekan sama( benar )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 10,
  "name": "user parkir bisa parkir sesuai dengan tempet yang dipesan",
  "keyword": "Maka "
});
formatter.step({
  "line": 11,
  "name": "data hasil pengecekan tidak ditemukan( salah )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 12,
  "name": "user parkir berdasarkan spot tempat parkir yang di tentukan",
  "keyword": "Maka "
});
formatter.match({
  "location": "TransaksiParkirContext.pengecekan_data_transaksi_pemesanan_spot_parkir_dan_data_user_parkir()"
});
formatter.result({
  "duration": 67380,
  "status": "passed"
});
formatter.match({
  "location": "PantauParkirContext.data_hasil_pengecekan_sama_benar()"
});
formatter.result({
  "duration": 377061,
  "error_message": "junit.framework.AssertionFailedError: expected:\u003ctrue\u003e but was:\u003cpaijo@gmail.com\u003e\r\n\tat junit.framework.Assert.fail(Assert.java:57)\r\n\tat junit.framework.Assert.failNotEquals(Assert.java:329)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:78)\r\n\tat junit.framework.Assert.assertEquals(Assert.java:86)\r\n\tat com.mycompany.impal.test.PantauParkirContext.data_hasil_pengecekan_sama_benar(PantauParkirContext.java:48)\r\n\tat ✽.Ketika data hasil pengecekan sama( benar )(com/mycompany/impal/test/TransaksiParkir.feature:9)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "TransaksiParkirContext.user_parkir_bisa_parkir_sesuai_dengan_tempet_yang_dipesan()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TransaksiParkirContext.data_hasil_pengecekan_tidak_ditemukan_salah()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TransaksiParkirContext.user_parkir_berdasarkan_spot_tempat_parkir_yang_di_tentukan()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Perhitungan waktu user",
  "description": "",
  "id": "perhitungan-lama-parkir-user;perhitungan-waktu-user",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 14,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 16,
  "name": "data parkir user masuk dengan status parkir di sistem dan tidak duplikat",
  "keyword": "Dengan "
});
formatter.step({
  "line": 17,
  "name": "data sudah masuk ke sistem, maka countup akan di mulai",
  "keyword": "Ketika "
});
formatter.step({
  "line": 18,
  "name": "countup sudah mulai menghitung",
  "keyword": "Ketika "
});
formatter.step({
  "line": 19,
  "name": "respon \"user mulai parkir\" dan akan mulai dihitung juga untuk biaya parkir user",
  "keyword": "Maka "
});
formatter.match({
  "location": "TransaksiParkirContext.data_parkir_user_masuk_dengan_status_parkir_di_sistem_dan_tidak_duplikat()"
});
formatter.result({
  "duration": 53101,
  "status": "passed"
});
formatter.match({
  "location": "TransaksiParkirContext.data_sudah_masuk_ke_sistem_maka_countup_akan_di_mulai()"
});
formatter.result({
  "duration": 166889,
  "status": "passed"
});
formatter.match({
  "location": "TransaksiParkirContext.countup_sudah_mulai_menghitung()"
});
formatter.result({
  "duration": 29004,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user mulai parkir",
      "offset": 8
    }
  ],
  "location": "TransaksiParkirContext.respon_dan_akan_mulai_dihitung_juga_untuk_biaya_parkir_user(String)"
});
formatter.result({
  "duration": 96831,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Perhitungan biaya parkir",
  "description": "",
  "id": "perhitungan-lama-parkir-user;perhitungan-biaya-parkir",
  "type": "scenario",
  "keyword": "Skenario",
  "tags": [
    {
      "line": 21,
      "name": "@Normal"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "data durasi parkir, pada data parkir",
  "keyword": "Dengan "
});
formatter.step({
  "line": 24,
  "name": "data durasi user lebih dari 1 detik ( biaya parkir awal )",
  "keyword": "Ketika "
});
formatter.step({
  "line": 25,
  "name": "perhitungan biaya parkir \u003d 2000",
  "keyword": "Maka "
});
formatter.step({
  "line": 26,
  "name": "data durasi parkir user lebih dari 1 jam",
  "keyword": "Ketika "
});
formatter.step({
  "line": 27,
  "name": "biaya parkir menjadi biaya parkir awal + n( biaya parkir tiap jam ) x 1000",
  "keyword": "Maka "
});
formatter.match({
  "location": "TransaksiParkirContext.data_durasi_parkir_pada_data_parkir()"
});
formatter.result({
  "duration": 103525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 28
    }
  ],
  "location": "TransaksiParkirContext.data_durasi_user_lebih_dari_detik_biaya_parkir_awal(int)"
});
formatter.result({
  "duration": 633641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2000",
      "offset": 27
    }
  ],
  "location": "TransaksiParkirContext.perhitungan_biaya_parkir(int)"
});
formatter.result({
  "duration": 359212,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 35
    }
  ],
  "location": "TransaksiParkirContext.data_durasi_parkir_user_lebih_dari_jam(int)"
});
formatter.result({
  "duration": 200356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 70
    }
  ],
  "location": "TransaksiParkirContext.biaya_parkir_menjadi_biaya_parkir_awal_n_biaya_parkir_tiap_jam_x(int)"
});
formatter.result({
  "duration": 160196,
  "status": "passed"
});
});