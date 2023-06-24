import React from 'react'
import "../style/style.scss"

const ShipStore = () => {

    async function renderStarships() {

        try {
            const response = await fetch("/api/v1.0/items/get-starship");
            const data = await response.json()
        
            if(data.ok === true) {
                const starshipsArray = data.starships
                const carouselInner = document.querySelector(".carousel-inner")
                let itemClass = "item active"
                if (!carouselInner) throw new Error("Corousel Error!")
    
                if (starshipsArray.length > 0) {
                    for (let i = 0 ; i<starshipsArray.length ; i++){
                        if (i != 0){
                            itemClass="item"
                        }
                        carouselInner.insertAdjacentHTML("beforeend", `<div class="${itemClass}">
                        <video class="spaceshipVideo" onmouseover="this.play()" onmouseout="this.pause()" loop src="${starshipsArray[i].starshipModel}" ></video>
                        <div class="carousel-caption">
                            <h3>${starshipsArray[i].starshipName}</h3>
                            <p>${starshipsArray[i].starshipDescription}</p>
                            <p>Price: ${starshipsArray[i].starshipPrice}$</p>
                            <button id="${starshipsArray[i]._id}" onclick="addItemToCart(this)" class="spaceshipBtn">Add to cart</button>
                        </div>
                    </div>`)
                    }
                }
    
                
            }
        } catch (error) {
            console.error(error)
        }
    }

    function openAddDialog() {
        try {
            const body = document.querySelector('body')
    
            if (!body) throw new Error("body Error!")
    
            body.insertAdjacentHTML("beforeend", '<div class="addStarshipContainer"><div class="addStarshipSubContainer"><form onsubmit=addStarship(event)><input class="input" required type="text" name="itemName" placeholder="Starship Name"><input class="input" required type="text" name="itemModel" placeholder="Starship Model"><input class="input" required type="number" name="itemPrice" placeholder="Starship Price"><input class="input" required type="text" name="starshipDescription" placeholder="Starship Description"><input type="submit" value="Add"></form></div></div>')
        } catch (error) {
            console.error(error)
        }
    }

    function openShop(){
        try {
            const videoContainer:any = document.querySelector(".video_container")
            const sliderContainer:any = document.querySelector(".sliderContainer")
            if (videoContainer && sliderContainer){
                renderStarships()
                videoContainer.remove()
        
                sliderContainer.style.display = "flex"
            }
        } catch (error) {
            console.error(error)
        }
    }

    async function renderCartItems(){
        try {
            let itemsCardHtml = ""
            let itemsQuantityNumber = 0
            const cartItems = document.querySelector(".cartItems")
            const itemsQuantity:any = document.querySelector(".itemsQuantity")
            if (!cartItems) throw new Error("Can't catch cart!")
            if (!itemsQuantity) throw new Error("Can't catch quantity!")
    
            const response = await fetch("/api/v1.0/cart/get-cart-items")
            const data = await response.json()
            const cartItemsArray = data.cartItemsArray
    
            for (let i = 0 ; i < cartItemsArray.length ; i++){
                itemsQuantityNumber+=cartItemsArray[i].quantity
                itemsCardHtml += `<div class="item">
                <p>Name: ${cartItemsArray[i].product.starshipName}</p>
                <p>Price: ${cartItemsArray[i].product.starshipPrice}$</p>
                <p>Quantity: ${cartItemsArray[i].quantity}</p>
                <p>Type: ${cartItemsArray[i].product.itemType}</p>
                <button id="${cartItemsArray[i]._id}" onclick="deleteItemFromCart(this)">Delete</button>
            </div>`
            }
            itemsQuantity.innerText=`${itemsQuantityNumber}`
    
            cartItems.innerHTML = itemsCardHtml
    
            
    
    
        } catch (error) {
            console.error(error)
        }
    }

  return (
    <>
    <div className="main_container">
        <h1>Starship Store</h1>
        <div className="video_container">
            <div className="enterShop">Enter</div>
            <div className="darken"></div>
            {/* <video onClick={openShop} id="spaceshipShopEntrance" onMouseOver={this.play()} onMouseOut={this.pause()} loop src="/src/assets/images/animated/Untitled design (54).mp4"></video> */}
        </div>
    </div>
    <div className="backgroundSides">
        <div className="backgroundAnimation">
            <img src="/src/assets/images/background/left.png"></img>
            <img src="/src/assets/images/background/right.png"></img>
        </div>
        <div className="backgroundAnimation">
            <img src="/src/assets/images/background/left2.png"></img>
            <img src="/src/assets/images/background/right2.png"></img>
        </div>
    </div>

    <div className="container sliderContainer">
        <h2>Space Ships</h2>
        <div id="myCarousel" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
            <li data-target="#myCarousel" data-slide-to="3"></li>
            <li data-target="#myCarousel" data-slide-to="4"></li>
            <li data-target="#myCarousel" data-slide-to="5"></li>
            <li data-target="#myCarousel" data-slide-to="6"></li>
            <li data-target="#myCarousel" data-slide-to="7"></li>
            <li data-target="#myCarousel" data-slide-to="8"></li>
            <li data-target="#myCarousel" data-slide-to="9"></li>
          </ol>
      
          <div className="carousel-inner">
      
          </div>
      
          <a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <button onClick={openAddDialog} id="openAddDialog">Add Starship</button>
    </>
  )
}

export default ShipStore