displayCheck = () => {

    let data = JSON.parse(localStorage.getItem('order'));
    let items = document.getElementById('checkoutOrder');
    let totalArea = document.getElementById('totalOut');

    items.innerHTML = "";

    let checkTotal = 0;

    for(let i = 0; i < data.length; i++){

        let name = data[i].subName;
        let bread = data[i].subBread;
        let sauce = data[i].subSauce;
        let toppings = data[i].subToppings;
        let price = data[i].subPrice; 

        checkTotal += price;

        items.innerHTML += `
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${name}</h5>
                <p class="card-text"><strong>Bread:</strong> ${bread}</p>
                <p class="card-text"><strong>Sauce:</strong> ${sauce}</p>
                <p class="card-text"><strong>Toppings:</strong> ${toppings.join(', ')}</p>
                <p class="card-text"><strong>Cost:</strong> R${price}.00</p>
            </div>
        </div>`

        totalArea.innerHTML = "R" + checkTotal + ".00"
    } 
}

    function applyCoupon()  {
        const couponCode = document.getElementById("coupon-code").value;
        const couponPercentage = couponPercentage(couponCode);

    }

resetReturn = () => {
    localStorage.removeItem('order')
    window.location.href = '../build a sub.html'
}