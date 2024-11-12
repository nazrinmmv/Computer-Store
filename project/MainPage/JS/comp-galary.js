document.addEventListener('DOMContentLoaded', function () {
    const savedDataJson = localStorage.getItem('formData');
    const savedPhoneNumber = localStorage.getItem('newKey');

    if (savedDataJson) {
        const savedData = JSON.parse(savedDataJson);
        const cardsContainer = document.getElementById('cardsContainer');
        
        savedData.forEach(function (product) {
            const cardHtml = `
                <div class="col-3 mb-4 animate__animated animate__fadeIn">
                    <div class="card">
                        <img src="${product.image}" class="card-img-top" alt="${product.ad}">
                        <div class="card-body">
                            <p class="card-text">Ad: ${product.ad}</p>
                            <p class="card-text">Təsvir: ${product.description}</p>
                            <p class="card-text">Telefon: ${savedPhoneNumber}</p> <!-- Вставляем номер телефона -->
                            <p class="card-text">${product.price} AZN</p>
                            <button class="btn btn-primary">Купить</button>
                        </div>
                    </div>
                </div>
            `;
            cardsContainer.insertAdjacentHTML('beforeend', cardHtml);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    var brandLinks = document.querySelectorAll('.list-group-item');

    brandLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); 
            var selectedBrand = this.dataset.brand;
            var cards = document.querySelectorAll('.col-3');

            cards.forEach(function (card) {
                if (card.dataset.brand === selectedBrand || selectedBrand === "all") {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
});

const listItems = document.querySelectorAll('.list-group-item');

listItems.forEach(item => {
    item.addEventListener('click', function() {
        listItems.forEach(li => li.classList.remove('active'));
        this.classList.add('active');
    });
});

$(document).ready(function(){
    $('.open-modal').click(function(){
        $('#myModal').modal('show');
    });
});
