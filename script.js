function sendData() {
  const formData = new FormData();
  const nama = document.getElementById('nama').value;
  const email = document.getElementById('email').value;

  formData.append('nama', nama);
  formData.append('email', email);

  // Menggunakan XMLHttpRequest untuk mengirim data
  const xhr = new XMLHttpRequest();
  const url = 'mailto:massurtimin@gmail.com'; // Ganti URL_SERVER_ANDA dengan URL server tujuan
  xhr.open('POST', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log('Data terkirim!'); // Tindakan setelah data terkirim berhasil
    }
  };
  xhr.send(formData);
}
