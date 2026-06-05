document.getElementById('registerForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Username diatur statis menjadi "heri"
    const usernameInput = "heri";
    
    // Email tetap mengambil nilai dinamis dari formulir input
    const emailInput = document.getElementById('email').value;
    
    // Password diatur statis menjadi "123"
    const passwordInput = "123";
    
    const msg = document.getElementById('message');

    try {
        const response = await fetch('https://herisusanta.my.id/javalogin/api/register.php', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: usernameInput, email: emailInput, password: passwordInput })
        });
        const data = await response.json();

        if (data.status === 'success' || data.message === 'Registrasi berhasil') {
            msg.style.display = 'block';
            msg.style.backgroundColor = '#28a745'; // Warna hijau kalau sukses
            msg.style.color = '#ffffff';
            msg.style.borderColor = '#1e7e34';
            msg.innerText = 'Registrasi Berhasil! Mengalihkan ke halaman login...';
            setTimeout(() => { window.location.href = 'index.html'; }, 1500);
        } else {
            msg.style.display = 'block';
            msg.style.backgroundColor = '#f8d7da'; // Warna merah kalau gagal
            msg.style.color = '#721c24';
            msg.innerText = data.message || 'Username atau email sudah digunakan!';
        }
    } catch (error) {
        msg.style.display = 'block';
        msg.style.backgroundColor = '#f8d7da';
        msg.style.color = '#721c24';
        msg.innerText = 'Gagal terhubung ke server API registrasi!';
    }
});
