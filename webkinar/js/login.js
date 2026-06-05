document.getElementById('loginForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;
    const alertBox = document.getElementById('alertBox');

    try {
        const response = await fetch('https://herisusanta.my.id/javalogin/api/login.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usernameInput, password: passwordInput })
        });
        const data = await response.json();

        if (data.status === 'success' || data.message === 'Login berhasil') {
            localStorage.setItem('username', usernameInput);
            alertBox.style.display = 'block';
            alertBox.style.background = '#28a745';
            alertBox.innerText = 'Login Berhasil!';
            setTimeout(() => { window.location.href = '../index.html'; }, 1500);
        } else {
            alertBox.style.display = 'block';
            alertBox.style.background = '#e44e4e';
            alertBox.innerText = 'Username atau Password Salah!';
        }
    } catch (error) {
        alertBox.style.display = 'block';
        alertBox.style.background = '#e44e4e';
        alertBox.innerText = 'Gagal terhubung ke server API!';
    }
});
