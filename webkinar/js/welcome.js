document.addEventListener("DOMContentLoaded", function() {
    const authArea = document.getElementById('authArea');
    const userStorage = localStorage.getItem('username');

    // Jika user sudah berhasil login (namanya ada di memori browser)
    if (userStorage) {
        if (authArea) {
            authArea.innerHTML = `
                <span id="userInfo" style="margin-right: 15px; color: #fff; font-weight: 600;">Halo, ${userStorage}</span>
                <button onclick="logout()" class="btn btn-danger btn-sm" style="border-radius: 5px;">LOGOUT</button>
            `;
        }
    }
});

function logout() {
    localStorage.removeItem('username');
    window.location.reload(); // Refresh halaman biar tulisannya balik jadi LOGIN
}

function goLogin() {
    window.location.href = 'login/index.html'; // Mengarahkan ke halaman login kamu
}
