alert('test') // use in every js, makes sure no errors, will load when ok

// all HTML elements
// make 5 variables for 3 carts, subtotal, and total

var blueCart = document.getElementById('blueCart');
var pinkCart = document.getElementById('pinkCart');
var orangeCart = document.getElementById('orangeCart');
var subtotal = document.getElementById('subtotal');
var total = document.getElementById('total');

var isBlueInCart = false;
var isPinkInCart = false;
var isOrangeInCart = false;
var subtotaljs = 0;
var totaljs = subtotaljs * 1.065;

function calculateTotal(subtotal) {
	return subtotal * 1.065;
}								// replaces: totaljs = subtotaljs * 1.065;

// copy for pink and orange Carts 
blueCart.addEventListener('click',function(){

	if(isBlueInCart === false) {
		subtotaljs = subtotaljs + 29;
		totaljs = calculateTotal(subtotaljs);
		isBlueInCart = true;
	}
	else {	
		subtotaljs = subtotaljs - 29;
		totaljs = calculateTotal(subtotaljs);
		isBlueInCart = false;
	}

	subtotal.innerHTML=subtotaljs;
	total.innerHTML=totaljs.toFixed(2);  // will limit decimals to 2
})
// end of copy

pinkCart.addEventListener('click',function(){

	if(isPinkInCart === false) {
		subtotaljs = subtotaljs + 19;
		totaljs = calculateTotal(subtotaljs);
		isPinkInCart = true;
	}
	else {	
		subtotaljs = subtotaljs - 19;
		totaljs = calculateTotal(subtotaljs);
		isPinkInCart = false;
	}

	subtotal.innerHTML=subtotaljs;
	total.innerHTML=totaljs.toFixed(2);  // will limit decimals to 2
})

orangeCart.addEventListener('click',function(){

	if(isOrangeInCart === false) {
		subtotaljs = subtotaljs + 39;
		totaljs = calculateTotal(subtotaljs);
		isOrangeInCart = true;
	}
	else {	
		subtotaljs = subtotaljs - 39;
		totaljs = calculateTotal(subtotaljs);
		isOrangeInCart = false;
	}

	subtotal.innerHTML=subtotaljs;
	total.innerHTML=totaljs.toFixed(2);  // will limit decimals to 2
})