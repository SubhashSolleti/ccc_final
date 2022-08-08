import {foodItem} from './menu_items.js'



function displayItems(){
    var biryani= document.getElementById('biryani');
    var paneer=  document.getElementById('paneer');;
    var chicken=  document.getElementById('chicken');
    var vegetable=  document.getElementById('vegetable');
    var chinese=  document.getElementById('chinese');
    var southIndian=  document.getElementById('south-indian');

    

    var biryaniData= foodItem.filter((item)=>item.category=='biryani');
    const chickenData= foodItem.filter((item)=>item.category=='chicken');
    const PaneerData= foodItem.filter((item)=>item.category=='paneer');
    const vegetableData= foodItem.filter((item)=>item.category=='vegetable');
    const chineseData= foodItem.filter((item)=>item.category=='chinese');
    const southData= foodItem.filter((item)=>item.category=='south indian');
    biryaniData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.className='card';

        var itemCardImg= document.createElement('img');
        itemCardImg.src= item.img;
        itemCardImg.className='card__image';

        var card_content= document.createElement('div');
        card_content.className='card__content';

        var title= document.createElement('h1');
        title.innerHTML= item.name;

        var description= document.createElement('p');
        description.innerHTML= '⭐️⭐️⭐️⭐️';

        var price= document.createElement('p');
        var priceText= document.createElement('h2');
        priceText.innerHTML= '$'+item.price;

        var info= document.createElement('div');
        info.className='card__info';

        var icon= document.createElement('div');
        var icon_span= document.createElement('span');
        icon_span.className='iconify';
        icon_span.setAttribute('data-icon','flat-color-icons:like');
        icon_span.style.fontSize='20px';
        icon_span.style.color='black';

        var order_div= document.createElement('div');
        var order_btn= document.createElement('button');
        order_btn.className='btn add-to-cart';
        order_btn.innerHTML='Add to Cart';
        // order_btn.onclick=renderItemModal(item.name,item.price,item.img);

        icon.appendChild(icon_span);
        order_div.appendChild(order_btn);
        info.appendChild(icon);
        info.appendChild(order_div);

        price.appendChild(priceText);
        
        card_content.appendChild(title);
        card_content.appendChild(description);
        card_content.appendChild(price);


        itemCard.appendChild(itemCardImg);
        itemCard.appendChild(card_content);
        itemCard.appendChild(info);

        biryani.appendChild(itemCard);


    })


    chickenData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.className='card';

        var itemCardImg= document.createElement('img');
        itemCardImg.src= item.img;
        itemCardImg.className='card__image';

        var card_content= document.createElement('div');
        card_content.className='card__content';

        var title= document.createElement('h1');
        title.innerHTML= item.name;

        var description= document.createElement('p');
        description.innerHTML= '⭐️⭐️⭐️⭐️';

        var price= document.createElement('p');
        var priceText= document.createElement('h2');
        priceText.innerHTML= '$'+item.price;

        var info= document.createElement('div');
        info.className='card__info';

        var icon= document.createElement('div');
        var icon_span= document.createElement('span');
        icon_span.className='iconify';
        icon_span.setAttribute('data-icon','flat-color-icons:like');
        icon_span.style.fontSize='20px';
        icon_span.style.color='black';

        var order_div= document.createElement('div');
        var order_btn= document.createElement('button');
        order_btn.innerHTML='Add to Cart';
        order_btn.className='btn add-to-cart';

        icon.appendChild(icon_span);
        order_div.appendChild(order_btn);
        info.appendChild(icon);
        info.appendChild(order_div);

        price.appendChild(priceText);
        
        card_content.appendChild(title);
        card_content.appendChild(description);
        card_content.appendChild(price);


        itemCard.appendChild(itemCardImg);
        itemCard.appendChild(card_content);
        itemCard.appendChild(info);

        chicken.appendChild(itemCard);

    })

    PaneerData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.className='card';

        var itemCardImg= document.createElement('img');
        itemCardImg.src= item.img;
        itemCardImg.className='card__image';

        var card_content= document.createElement('div');
        card_content.className='card__content';

        var title= document.createElement('h1');
        title.innerHTML= item.name;

        var description= document.createElement('p');
        description.innerHTML= '⭐️⭐️⭐️⭐️';

        var price= document.createElement('p');
        var priceText= document.createElement('h2');
        priceText.innerHTML= '$'+item.price;

        var info= document.createElement('div');
        info.className='card__info';

        var icon= document.createElement('div');
        var icon_span= document.createElement('span');
        icon_span.className='iconify';
        icon_span.setAttribute('data-icon','flat-color-icons:like');
        icon_span.style.fontSize='20px';
        icon_span.style.color='black';

        var order_div= document.createElement('div');
        var order_btn= document.createElement('button');
        order_btn.innerHTML='Add to Cart';
        order_btn.className='btn add-to-cart';

        icon.appendChild(icon_span);
        order_div.appendChild(order_btn);
        info.appendChild(icon);
        info.appendChild(order_div);

        price.appendChild(priceText);
        
        card_content.appendChild(title);
        card_content.appendChild(description);
        card_content.appendChild(price);


        itemCard.appendChild(itemCardImg);
        itemCard.appendChild(card_content);
        itemCard.appendChild(info);

        
        paneer.appendChild(itemCard)

    })

    vegetableData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.className='card';

        var itemCardImg= document.createElement('img');
        itemCardImg.src= item.img;
        itemCardImg.className='card__image';

        var card_content= document.createElement('div');
        card_content.className='card__content';

        var title= document.createElement('h1');
        title.innerHTML= item.name;

        var description= document.createElement('p');
        description.innerHTML= '⭐️⭐️⭐️⭐️';

        var price= document.createElement('p');
        var priceText= document.createElement('h2');
        priceText.innerHTML= '$'+item.price;

        var info= document.createElement('div');
        info.className='card__info';

        var icon= document.createElement('div');
        var icon_span= document.createElement('span');
        icon_span.className='iconify';
        icon_span.setAttribute('data-icon','flat-color-icons:like');
        icon_span.style.fontSize='20px';
        icon_span.style.color='black';

        var order_div= document.createElement('div');
        var order_btn= document.createElement('button');
        order_btn.innerHTML='Add to Cart';
        order_btn.className='btn add-to-cart';

        icon.appendChild(icon_span);
        order_div.appendChild(order_btn);
        info.appendChild(icon);
        info.appendChild(order_div);

        price.appendChild(priceText);
        
        card_content.appendChild(title);
        card_content.appendChild(description);
        card_content.appendChild(price);


        itemCard.appendChild(itemCardImg);
        itemCard.appendChild(card_content);
        itemCard.appendChild(info);

        
        vegetable.appendChild(itemCard)
    
    })

    chineseData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.className='card';

        var itemCardImg= document.createElement('img');
        itemCardImg.src= item.img;
        itemCardImg.className='card__image';

        var card_content= document.createElement('div');
        card_content.className='card__content';

        var title= document.createElement('h1');
        title.innerHTML= item.name;

        var description= document.createElement('p');
        description.innerHTML= '⭐️⭐️⭐️⭐️';

        var price= document.createElement('p');
        var priceText= document.createElement('h2');
        priceText.innerHTML= '$'+item.price;

        var info= document.createElement('div');
        info.className='card__info';

        var icon= document.createElement('div');
        var icon_span= document.createElement('span');
        icon_span.className='iconify';
        icon_span.setAttribute('data-icon','flat-color-icons:like');
        icon_span.style.fontSize='20px';
        icon_span.style.color='black';

        var order_div= document.createElement('div');
        var order_btn= document.createElement('button');
        order_btn.innerHTML='Add to Cart';
        order_btn.className='btn add-to-cart';

        icon.appendChild(icon_span);
        order_div.appendChild(order_btn);
        info.appendChild(icon);
        info.appendChild(order_div);

        price.appendChild(priceText);
        
        card_content.appendChild(title);
        card_content.appendChild(description);
        card_content.appendChild(price);


        itemCard.appendChild(itemCardImg);
        itemCard.appendChild(card_content);
        itemCard.appendChild(info);

        
        chinese.appendChild(itemCard)
        
    })

    southData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.className='card';

        var itemCardImg= document.createElement('img');
        itemCardImg.src= item.img;
        itemCardImg.className='card__image';

        var card_content= document.createElement('div');
        card_content.className='card__content';

        var title= document.createElement('h1');
        title.innerHTML= item.name;

        var description= document.createElement('p');
        description.innerHTML= '⭐️⭐️⭐️⭐️';

        var price= document.createElement('p');
        var priceText= document.createElement('h2');
        priceText.innerHTML= '$'+item.price;

        var info= document.createElement('div');
        info.className='card__info';

        var icon= document.createElement('div');
        var icon_span= document.createElement('span');
        icon_span.className='iconify';
        icon_span.setAttribute('data-icon','flat-color-icons:like');
        icon_span.style.fontSize='20px';
        icon_span.style.color='black';

        var order_div= document.createElement('div');
        var order_btn= document.createElement('button');
        order_btn.innerHTML='Add to Cart';
        order_btn.className='btn add-to-cart';

        icon.appendChild(icon_span);
        order_div.appendChild(order_btn);
        info.appendChild(icon);
        info.appendChild(order_div);

        price.appendChild(priceText);
        
        card_content.appendChild(title);
        card_content.appendChild(description);
        card_content.appendChild(price);


        itemCard.appendChild(itemCardImg);
        itemCard.appendChild(card_content);
        itemCard.appendChild(info);
        southIndian.appendChild(itemCard)

    })
}
displayItems();

var flag=0;
let data=[];
var cart=document.getElementById('cart-toggle');
cart.addEventListener('click',function(){
    console.log('Cart toggle clicked');
    if(data.length==0){
        alert('Cart is empty');
    }
    else{
        console.log(data);
    sessionStorage.setItem('cart_items',JSON.stringify(data));
    window.location.href='cart.html';
    }
});

var cart_data=[];

var add_cart_btn= document.querySelectorAll('.add-to-cart');
add_cart_btn.forEach(function(btn){
    btn.addEventListener('click',function(){
        this.innerHTML='Added to Cart';
        console.log('Add to Cart clicked');
        var item_name=this.parentNode.parentNode.previousSibling.firstChild.innerText;
        console.log(item_name);
        var item_obj=foodItem.find(item=>item.name===item_name);
        console.log(item_obj);
        cart_data.push(item_obj);
        data=cart_data;
        console.log(cart_data);
        cart_items();
    }
    )
})

function cart_items(){
  
}

