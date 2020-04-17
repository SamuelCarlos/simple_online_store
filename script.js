$('.carousel').carousel({
    interval: false
})

let quantity = 0
let itemid = 0
let qttItems = [[],[]]

const addProduct = () => {
    let items = document.getElementById("itemsrow")
    let temp = items.innerHTML

    items.innerHTML = `
            <div id="products" class=" col-xl-3 col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div class="card" style="width: 18rem;">
                <div id="carouselExampleIndicators${itemid}" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                        <li data-target="#carouselExampleIndicators${itemid}" data-slide-to="0" class="active"></li>
                        <li data-target="#carouselExampleIndicators${itemid}" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators${itemid}" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="images/m4howl.png" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="images/howl2.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="images/howl3.jpg" alt="Third slide">
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators${itemid}" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators${itemid}" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
                <div class="card-body">
                    <h5 class="card-title">M4-A4 Howl | Factory New ${itemid}</h5>
                    <p class="card-text">Such a rare weapon skin, dude.</p>
                    <a href="#" id="n${itemid}" class="btn btn-primary" onclick="itemqtt(id)">SPEND MONEY</a>
                    <span>$15.000</span>
                </div>
            </div>
        </div>
    ` + temp
    itemid++
}

const itemqtt = (id) => {
    let itemid = id.split('n').join('')
    Number(itemid)
    if(quantity == 0) {
        let show = document.getElementById("qttnotification")
        show.style.opacity = "100%"
    }
    quantity++
    let items = document.getElementById("qttitems")
    items.innerText = quantity
    if(qttItems[0].indexOf(itemid) == -1){
        qttItems[0].push(itemid)
        qttItems[1].push(1)
    }else{
        let temp = qttItems[0].indexOf(itemid)
        qttItems[1][temp]++
    }
} 

const showproducts = () => {
    if(quantity == 0){
        let content = document.getElementById("dropdownshow")
        content.innerHTML = `
        <a class="dropdown-item" href="#">Your cart is empty.</a>
        `
    }else{
        let content = document.getElementById("dropdownshow")
        content.innerHTML = ``
        for (let i = 0; i < qttItems[0].length; i++){
            content.innerHTML += `
            <a class="dropdown-item" href="#">ID= ${qttItems[0][i]} | Amount= ${qttItems[1][i]}</a>
            `
        }
    }
}
