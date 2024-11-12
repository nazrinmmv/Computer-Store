document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];
    var foundUser = users.find(function (user) {
        return user.istifadeciAdi === username && user.sifre === password;
    });

    var alertDiv = document.createElement('div');
    alertDiv.classList.add('alert', 'mt-3', 'alert-dismissible', 'fade', 'show');

    if (foundUser) {
        alertDiv.classList.add('alert-success');
        alertDiv.innerHTML = '<strong>Giriş uğurlu oldu!</strong>';
        window.location.href = '../../MainPage/HTML/index.html'
    } else {
        alertDiv.classList.add('alert-danger');
        alertDiv.innerHTML = '<strong>İstifadəçi adı və ya şifrə yanlışdır!</strong>';
    }

    var container = document.querySelector('.container');
    container.insertBefore(alertDiv, container.firstChild);

    setTimeout(function () {
        alertDiv.remove();
    }, 1000);
});


