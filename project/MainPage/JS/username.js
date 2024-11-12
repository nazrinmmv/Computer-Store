document.addEventListener('DOMContentLoaded', function () {
    const storedUsers = JSON.parse(localStorage.getItem('users'));

    if (storedUsers && storedUsers.length > 0) {
        document.getElementById('loginButton').style.display = 'none';
        document.getElementById('logoutButton').style.display = '';
        document.getElementById('myComputersButton').style.display = '';

        const lastUser = storedUsers[storedUsers.length - 1];
        const storedUsername = lastUser.istifadeciAdi;
        document.getElementById('username').textContent = "İstifadəçi adı: " + storedUsername;
        document.getElementById('logoutButton').addEventListener('click', function () {
            localStorage.removeItem('users');
            document.getElementById('username').textContent = "İstifadəçi adı:";
            document.getElementById('loginButton').style.display = '';
            document.getElementById('logoutButton').style.display = 'none';
            document.getElementById('myComputersButton').style.display = 'none';
        });
    } else {
        document.getElementById('loginButton').style.display = '';
        document.getElementById('logoutButton').style.display = 'none';
        document.getElementById('myComputersButton').style.display = 'none';
    }
});



function comp(){
    window.location.href="../../MainPage/HTML/computers.html"
}


function galary(){
    window.location.href="../../MainPage/HTML/comp-galary.html"
}



