function submitform() {
    const nama = document.getElementById('nama').value;
    const tanggal = document.getElementById('tanggal').value;
    const pesan = document.getElementById('pesan').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const currenttime = new date(".currentTime").textContent =
        "Current time -" + currenttime;

    const submittedData = document.querySelector('.submitted-data');
    submittedData.innerHTML = `
    <strong>Nama:</strong> ${nama} <br>
    <strong>Tanggal Lahir:</strong> ${tanggal}
    <strong>Jenis Kelamin:</strong> ${gender}
    <strong>Pesan:</strong> ${pesan}
    `;
}
