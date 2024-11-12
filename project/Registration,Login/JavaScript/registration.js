document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var ad = document.getElementById('ad').value;
    var telefon = document.getElementById('telefon').value;
    var istifadeciAdi = document.getElementById('istifadeci-adi').value;
    var sifre = document.getElementById('sifre').value;

    var users = JSON.parse(localStorage.getItem('users')) || [];

    var existingUser = users.find(function (user) {
        return user.istifadeciAdi === istifadeciAdi;
    });

    var alertDiv = document.getElementById('registrationAlert');

    if (existingUser) {
        alertDiv.classList.add('alert-danger');
        alertDiv.innerHTML = '<strong>Eyni adlı istifadəçi artıq mövcuddur!</strong>';
        alertDiv.style.display = 'block';
    } else {
        var newUser = { ad: ad, telefon: telefon, istifadeciAdi: istifadeciAdi, sifre: sifre };
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));

        alertDiv.classList.add('alert-success');
        alertDiv.innerHTML = '<strong>Qeydiyyat uğurla başa çatdı!</strong>';
        alertDiv.style.display = 'block';

        setTimeout(function () {
            window.location.href = '../HTML/login.html'
        }, 1500);
        
    }

    setTimeout(function () {
        alertDiv.style.display = 'none';
        alertDiv.classList.remove('alert-success');
        alertDiv.classList.remove('alert-danger');
    }, 1300);
});
