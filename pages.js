let loadProducts = 0
let navMain = document.getElementById("navMain")
let navProducts = document.getElementById("navProducts")
let navContact = document.getElementById("navContact")

/*const mainPage = () => {
    loadProducts = 0
    navMain.classList.add("active");
    navProducts.classList.remove("active");
    navContact.classList.remove("active");
    navMain.innerHTML = `<a class="nav-link" href="#" onclick="mainPage()">Home<span class="sr-only">(current)</span></a>`
    navProducts.innerHTML = `<a class="nav-link" href="#" onclick="innitialProducts()">Products</a>`
    navContact.innerHTML = `<a class="nav-link" href="#" onclick="contactPage()">Contact</a>`
    let body = document.getElementById("pageBody")
    body.innerHTML = ``
}*/

const productsPage = () => {
    
        navMain.classList.remove("active");
        navProducts.classList.add("active");
        navContact.classList.remove("active");
        navMain.innerHTML = `<a class="nav-link" href="#" onclick="mainPage()">Home</a>`
        navProducts.innerHTML = `<a class="nav-link" href="#" onclick="innitialProducts()">Products<span class="sr-only">(current)</span></a>`
        navContact.innerHTML = `<a class="nav-link" href="#" onclick="contactPage()">Contact</a>`
        let body = document.getElementById("pageBody")
        body.innerHTML = `
                <div class="container-fluid col-12" id="items-background" >
                    <div class="row justify-content-center" id="itemsrow">
                        <div id="products" class=" col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
                            <div class="card" style="width: 18rem; display: none;" id="additemplaceholder">
                                
                            </div>
                        </div>
                    </div>
                </div>`
        
    
}

/*const contactPage = () => {

}

const cartPage = () => {

}*/

