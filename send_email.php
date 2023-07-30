<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nama = $_POST['nama'];
  $email = $_POST['email'];
  $pesan = $_POST['pesan'];

  $to = 'massurtimin@gmail.com'; // Ganti dengan alamat email penerima
  $subject = 'Pesan dari ' . $nama;
  $message = 'Nama: ' . $nama . "\r\n" . 'Email: ' . $email . "\r\n" . 'Pesan: ' . $pesan;
  $headers = 'From: ' . $email;

  if (mail($to, $subject, $message, $headers)) {
    echo 'Email berhasil dikirim!';
  } else {
    echo 'Email gagal dikirim.';
  }
}
?>
