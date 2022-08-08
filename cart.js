var data=sessionStorage.getItem("cart_items");
var cart_items=JSON.parse(data);
console.log(cart_items);

var body=document.getElementById("items");
console.log(cart_items[0].name);
console.log(cart_items[1].name);
cart_items.map(item => {
    // var box=document.createElement("div");
    // box.setAttribute("id","box");

    // var img_box=document.createElement("div");
    // img_box.setAttribute("id","image");

    // var img=document.createElement("img");
    // img.setAttribute("src",item.img);
    // img_box.appendChild(img);

    // var name_box=document.createElement("div");
    // name_box.setAttribute("id","name");

    // var name=document.createElement("p");
    // name.innerHTML=item.name;



    // name_box.appendChild(name);

    // var price_box=document.createElement("div");
    // price_box.setAttribute("id","money");

    // var price=document.createElement("p");
    // p.setAttribute("id","discount");

    // var i_price=document.createElement("i");
    // i.setAttribute("class","fa-solid fa-indian-rupee-sign");
    // i.setAttribute("id","rupee1");
    // price.innerHTML=item.price;
    // price.appendChild(i_price);
    // price_box.appendChild(price);

    // var btn_box=document.createElement("div");
    // btn_box.setAttribute("id","buttons");

    // var remove_btn=document.createElement("button");
    // remove_btn.setAttribute("id","bt1");
    // remove_btn.innerHTML="Remove";

    // var save_btn=document.createElement("button");
    // save_btn.setAttribute("id","bt2");
    // save_btn.innerHTML="Save for later";

    // btn_box.appendChild(remove_btn);
    // btn_box.appendChild(save_btn);

    // box.appendChild(img_box);
    // box.appendChild(name_box);
    // box.appendChild(price_box);
    // box.appendChild(btn_box);

    // body.appendChild(box);


});
var i=0;
var price_total=0;
cart_items.forEach(function(item){
    var obj=cart_items[i];
    console.log(obj.price);
    var box=document.createElement("div");
    box.setAttribute("class","box");

    var img_box=document.createElement("div");
    img_box.setAttribute("class","image");

    var img=document.createElement("img");
    img.setAttribute("src",item.img);
    img_box.appendChild(img);

    var name_box=document.createElement("div");
    name_box.setAttribute("class","name");

    var name=document.createElement("p");
    name.innerHTML=item.name;

    name_box.appendChild(name);

    var price_box=document.createElement("div");
    price_box.setAttribute("class","money");

    var price=document.createElement("p");
    price.setAttribute("class","discount");

    var i_price=document.createElement("i");
    i_price.setAttribute("class","fa-solid fa-indian-rupee-sign rupee1");
    price.innerHTML=item.price;
    price_total=price_total+parseInt(item.price);

    price.appendChild(i_price);
    price_box.appendChild(price);

    var btn_box=document.createElement("div");
    btn_box.setAttribute("class","buttons");

    var remove_btn=document.createElement("button");
    remove_btn.setAttribute("class","bt1");
    remove_btn.innerHTML="Remove";

    var save_btn=document.createElement("button");
    save_btn.setAttribute("class","bt2");
    save_btn.innerHTML="Save for later";

    btn_box.appendChild(remove_btn);
    btn_box.appendChild(save_btn);

    box.appendChild(img_box);
    box.appendChild(name_box);
    box.appendChild(price_box);
    box.appendChild(btn_box);

    body.appendChild(box);

    i++;
});

var price_shown=document.getElementById("price");
price_shown.innerHTML=price_total;

var discount=document.getElementById("discount");
discount.innerHTML="-"+price_total*0.1;

var total=document.getElementById("total_amount");
total.innerHTML=price_total-price_total*0.1+20;