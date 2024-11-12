function getDataFromLocalStorage() {
    const data = JSON.parse(localStorage.getItem('formData')) || [];
    return data;
}

function saveDataToLocalStorage(data) {
    localStorage.setItem('formData', JSON.stringify(data));
    location.reload()
}

   
function updatePreviewImage() {
    const imageInput = document.getElementById('image');
    const previewImage = document.getElementById('previewImage');
    const imageUrl = imageInput.value;
    previewImage.src = imageUrl;
}

document.getElementById('image').addEventListener('input', updatePreviewImage);
function renderData(data) {
    const tableBody = document.getElementById('tableBody');
    tableBody.innerHTML = '';
    data.forEach((product, index) => {
        const row = `
            <tr>
                <td>${index}</td>
                <td>${product.ad}</td>
                <td><img src="${product.image}" alt="${product.ad}" style="max-width: 100px;"></td>
                <td>${product.price}</td>
                <td>
                    <button class="btn btn-danger btn-sm" onclick="deleteProduct(${index})">Sil</button>
                    <button class="btn btn-primary btn-sm" onclick="editProduct(${index})">Redakta</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

function deleteProduct(index) {
    if (confirm("Вы уверены, что хотите удалить этот товар?")) {
        const formData = getDataFromLocalStorage();
        formData.splice(index, 1);
        saveDataToLocalStorage(formData);
        renderData(formData);
    }
}

function editProduct(index) {
    const formData = getDataFromLocalStorage();
    const productToEdit = formData[index];
    document.getElementById('ad').value = productToEdit.ad;
    document.getElementById('image').value = productToEdit.image;
    document.getElementById('price').value = productToEdit.price;
    document.getElementById('description').value = productToEdit.description;
    document.getElementById('isNew').checked = productToEdit.isNew;



    document.getElementById('cpu').checked = productToEdit.cpu;
    document.getElementById('ram').checked = productToEdit.ram;
    document.getElementById('storage').checked = productToEdit.storage;
    document.getElementById('storageType').checked = productToEdit.storageType;
    


    document.getElementById('editIndex').value = index;
    updatePreviewImage(); 
    const editModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    editModal.show();
   
}

function saveFormData() {
    const ad = document.getElementById('ad').value;
    const image = document.getElementById('image').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const isNew = document.getElementById('isNew').checked;
    const index = document.getElementById('editIndex').value;

    const formData = getDataFromLocalStorage();

    if (index !== '') {
        const existingProductIndex = parseInt(index);
        formData[existingProductIndex] = {
            ad: ad,
            image: image,
            price: price,
            description: description,
            isNew: isNew
        };
    } else {
        const newProduct = {
            ad: ad,
            image: image,
            price: price,
            description: description,
            isNew: isNew
        };
        formData.push(newProduct);
    }

    saveDataToLocalStorage(formData);
    renderData(formData);
    const editModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    editModal.hide();
}

document.getElementById('editForm').addEventListener('submit', function (event) {
    event.preventDefault();
    saveFormData();
});

renderData(getDataFromLocalStorage());


var userData = JSON.parse(localStorage.getItem('users'));

if (userData && userData.length > 0) {
    var item = userData[0];
    
    if (item) {
        localStorage.setItem('newKey', item.telefon);
    }
}