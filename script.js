$('.carousel').carousel({
    interval: false
})

let quantity = 0
let itemId = 0
let qttItems = [[],[]]
let toPay

const adm = {
    login: "admin",
    password: "admin"
};

const submitForm = () => {
    let checkBox = document.getElementById("gridCheck")
    let productName = document.getElementById("inputItemName").value
    let productDescription = document.getElementById("inputDescription").value
    let productPrice = document.getElementById("inputPrice").value

    if(checkBox.checked == true && productName != '' && productDescription != '' && productPrice != ''){
        createProduct(productName, productDescription, productPrice, "no_image.png", "no_image.png", "no_image.png", itemId)
        vanishForm()
    } else {
        let itemplaceholder = document.getElementById("additemplaceholder")
        itemplaceholder.innerHTML += `
        <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Oh no!</strong> You should fill all the fields and mark the box!
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`
        document.getElementById("inputItemName").value = productName
        document.getElementById("inputDescription").value = productDescription
        document.getElementById("inputPrice").value = productPrice
    }
}

const createProduct = (productName, productDescription, productPrice, productImage1, productImage2, productImage3, productId) => {
    let productsObject = {
        name: productName,
        description: productDescription,
        price: productPrice,
        img1: productImage1,
        img2: productImage2,
        img3: productImage3,
        id: productId
    };

    qttItems[0].push(productsObject)
    qttItems[1].push(0)
    addProduct()
}

const addProduct = () => {
    let items = document.getElementById("itemsrow")
    let temp = items.innerHTML

    items.innerHTML = `
            <div id="products" class=" col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="card" style="width: 18rem;">
                <div id="carouselExampleIndicators${itemId}" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators${itemId}" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators${itemId}" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators${itemId}" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block imgCarousel" src="images/${qttItems[0][itemId].img1}" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block imgCarousel" src="images/${qttItems[0][itemId].img2}" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block imgCarousel" src="images/${qttItems[0][itemId].img3}" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators${itemId}" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators${itemId}" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">${qttItems[0][itemId].name}</h5>
                    <p class="card-text">${qttItems[0][itemId].description}</p>
                    <a href="#" id="n${itemId}" class="btn btn-primary" onclick="itemQtt(id)">SPEND MONEY</a>
                    <span>$${qttItems[0][itemId].price}</span>
                </div>
            </div>
        </div>
    ` + temp
    itemId++
}

const itemQtt = (id) => {
    let item = id.split('n').join('')
    Number(item)
    if(quantity == 0) {
        let show = document.getElementById("qttnotification")
        show.style.opacity = "100%"
    }
    quantity++
    let items = document.getElementById("qttitems")
    items.innerText = quantity
    
    qttItems[1][item]++
    
} 

const showProducts = () => {
    toPay = 0

    if(quantity == 0){
        let content = document.getElementById("dropdownshow")
        content.innerHTML = `
        <a class="dropdown-item" href="#">Your cart is empty.</a>
        `
    }else{
        let content = document.getElementById("dropdownshow")
        content.innerHTML = ``
        for (let i = 0; i < qttItems[0].length; i++){
            if(qttItems[1][i] != 0){
                content.innerHTML += `
                <a class="dropdown-item" href="#">Item Name= <strong>${qttItems[0][i].name}</strong> | Amount= <strong>${qttItems[1][i]}</strong></a>
                `
                toPay += Number(qttItems[0][i].price) * qttItems[1][i]
            }
        }
        content.innerHTML += `
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" style="color: green;">Value:  $${toPay}</a>
            `
    }
}

const getLogin = () => {
    const loginText = document.getElementById("inputLogin").value
    const passwordText = document.getElementById("inputPassword").value

    if(loginText == adm.login && passwordText == adm.password){
        loggedIn()
    }
}

const loggedIn = () => {
    let userDropdown = document.getElementById("userDropdown")
    userDropdown.innerHTML = `
    <img src="images/admin.jpeg" alt="user image" id="userImg"><span style="color: white;">Admin</span>`
    let cardPlaceholder = document.getElementById("additemplaceholder")
    cardPlaceholder.style.display = "block"
    cardPlaceholder.innerHTML = `
                            <button id="createNew" onclick="vanishButton()">Create New Item</button>
                                <form id="newItemForm">
                                    <div class="form-group">
                                        <label for="inputItemName">
                                            Name
                                        </label>
                                        <input type="text" class="form-control" id="inputItemName" placeholder="Your Item Name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputDescription">
                                            Description
                                        </label>
                                        <input type="text" class="form-control" id="inputDescription" placeholder="Your Item Description" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="inputPrice">
                                            Price
                                        </label>
                                        <input type="number" min="0" max="100000" step="0.01" class="form-control" id="inputPrice" placeholder="Your Item Price" required>
                                    </div>

                                    <div class="form-row">
                                        <div class="form-group col-md-8">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" id="gridCheck">
                                                <label class="form-check-label" for="gridCheck">
                                                Check me out
                                                </label>
                                            </div>
                                        </div>
                                        <div class="form-group col-md-4">
                                            <button type="submit" class="btn btn-primary" data-dismiss="alert" id="formButton" onclick="submitForm()">Submit</button>
                                        </div>
                                    </div>
                                </form>`
}

const vanishButton = () => {
    let button = document.getElementById("createNew")
    let formulary = document.getElementById("newItemForm")
    button.style.display = 'none'
    formulary.style.display = 'block'
}

const vanishForm = () => {
    let button = document.getElementById("createNew")
    let formulary = document.getElementById("newItemForm")
    button.style.display = 'block'
    formulary.style.display = 'none'
}

const innitialProducts = (firstTimeLoading) => {
    if (firstTimeLoading == true){
        firstTimeLoading = false

        productsPage()
    
        let someProducts = [] 
        someProducts[0] = {
            name: "Smartphone LG K8 Plus Platinum 16GB 2GB de RAM Tela 5 Dual Chip Camera Traseira de 8MP",
            description: "<ul><li>Câmera traseira 8mp</li><li>Câmera de selfie 5mp</li><li>Botão google assistente</li><li>Bateria 3.000mah</li><li>Resistência militar</li></ul>",
            price: "589.00",
            img1: "k8_1.jpg",
            img2: "k8_2.jpg",
            img3: "k8_3.jpg",
            id: 0
        }
        someProducts[1] = {
            name: "Smartphone Xiaomi Redmi Note 8 4RAM 64GB Tela 6.3 LTE Dual Azul",
            description: "<ul><li>Azul Versão Global</li><li>Sistema operacional: MIUI 10</li><li>RAM: 4GB ROM: 64GB</li><li>Tela 6.3</li></ul>",
            price: "1499.00",
            img1: "note8_1.jpg",
            img2: "note8_2.jpg",
            img3: "note8_3.jpg",
            id: 1
        }
        someProducts[2] = {
            name: "Smartphone LG K50S Azul 32GB",
            description: "<ul><li>Octa core 2.0Ghz</li><li>Selfie de 13MP</li><li>Câmera Tripla</li><li>Azul</li></ul>",
            price: "769.00",
            img1: "k50s_1.jpg",
            img2: "k50s_2.jpg",
            img3: "k50s_3.jpg",
            id: 2
        }
        someProducts[3] = {
            name: "Smartphone Xiaomi Mi A3",
            description: "<ul><li>Tela Touchscreen de 6.08 polegadas</li><li>LTE 4G</li><li>Leitor multimídia, videoconferência e bluetooth</li><li>Memória interna de 128 GB</li></ul>",
            price: "1699.99",
            img1: "mia3_1.jpg",
            img2: "mia3_2.jpg",
            img3: "mia3_3.jpg",
            id: 3
        };

        for (let i = 0; i < someProducts.length; i++) {
            createProduct(someProducts[i].name, someProducts[i].description, someProducts[i].price, someProducts[i].img1, someProducts[i].img2, someProducts[i].img3, someProducts[i].id)
            console.log(someProducts[i])
        }
    }
    
} 