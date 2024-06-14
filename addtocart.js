const product = [
    {
        id: 0,
        image: 'alaskalowfat.jpg',
        title: 'Alaska Low Fat 1L',
        price: 77,
    },
    {
        id: 0,
        image: 'alaskalowfat.jpg',
        title: 'Alaska Low Fat 1L Buy 1 Take 1', 
        price: 150,
    },
    {
        id: 1,
        image: 'fota.png',
        title: 'Fita Tubular 80g',
        price: 60,
    },
    {
        id: 1,
        image: 'fries.jpg',
        title: 'Frozen Fries 1kl',
        price: 70,
    },
    {
        id: 1,
        image: 'CHIPS.JPG',
        title: 'Sweet Chili Potato Chips 40g',
        price: 20,
    },
    {
        id: 1,
        image: 'CHIPS.JPG',
        title: 'Ready Salted Potato Chips 40g',
        price: 20,
    },
    {
        id: 1,
        image: 'CHIPS.JPG',
        title: 'BBQ Potato Chips 40g',
        price: 20,
    },
    {
        id: 2,
        image: 'POTATO.jpg',
        title: 'Russet Potato (1kl)',
        price: 75,
    },
    {
        id: 2,
        image: 'zest-o-apple.jpg',
        title: 'ZestO Apple 1 box (12 x 250mL)',
        price: 75,
    },
    {
        id: 3,
        image: 'fibiscochoco.jpg',
        title: 'Fibisco Chocolate Chip 200g',
        price: 95,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}