
const arr = [  '', 'phone lite', 'headset one', 'HP Spectre x360 15', 'another phone', 'laptop', 'clean shoe', 'airplane headset', 'yellow shoe']
const price = [null, '$200', '$300', '$350', '$70', '$1000', '$908', '$323', '$1223','$400']
 const loading = ()=>{
    let slider = document.querySelector('.slider')
    let counter = 1;
    
    for(let i = 9; i > counter; i--){
    slider.innerHTML +=  `
        <div class="card">

            <div class="card-content">
                <img src="images/${i}.png" alt="" class="card-img">
                <h1 class="card-title">${arr[i]}</h1>
                <div class="card-body">
                    <div class="card-star">
                        <span class="rating-value">4.5</span>
                        <span class="star">&#9733;</span>
                    </div>
                    <p class="card-price">${price[i]}</p>
                </div>
                <div class="card-footer">
                    <button class="btn btn-success">Buy Now</button>
                    <button class="btn btn-border add-to-cart">Add To Cart</button>
                </div>
            </div>
        </div>
        `
      
    }
}

loading()
