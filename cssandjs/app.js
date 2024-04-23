// Image logo 
const logoim = [
    {
        id:1,
        image : "/image/buyshop.png",
    }
]
var text ="";
for(let i in logoim){
    text +=`
    <img src="${logoim[i]['image']}" width="50px" alt="">
    `;
    document.getElementsByClassName("imgeslogo")[0].innerHTML =text;
}
// // menubar
const menubar = [
    {
        id : 1,
        namea : "Home",
        url :"/screens/index.html",
    },
    {
        id : 2,
        namea : "Womenswear",
        url :"/screens/womanswear.html",
    },
    {
        id : 3,
        namea : "Menswear",
        url :"#",
    },
    {
        id : 4,
        namea : "Kidswear",
        url :"#",
    },
    {
        id : 5,
        namea : "Jewelry",
        url :"/screens/jewelery.html",
    },
    {
        id : 6,
        namea : "Computer",
        url :"/screens/electronics.html",
    },
]
var text ="";
for(let i in menubar){
    text +=`
        <li class="nav-item">
            <a class="nav-link" href="${menubar[i]['url']}">${menubar[i]['namea']}</a>
        </li>
    `;
    document.getElementsByClassName("ullimenu")[0].innerHTML =text;
}

//menubarInimage
const menubarInimage = [
    {
        id : 1,
        menuinimg : "Women's Clothes",
        url :"",
    },
    {
        id : 2,
        menuinimg : "men's Clothes",
        url :"",
    },
    {
        id : 3,
        menuinimg : "Kid's Clothes",
        url :"",
    },
    {
        id : 4,
        menuinimg : "Popular's Clothes",
        url :"",
    },
    {
        id : 5,
        menuinimg : "New Product",
        url :"",
    },
]
var text ="";
for(let i in menubarInimage){
    text +=`
        <li><a href="${''}">${menubarInimage[i]['menuinimg']}</a></li>
    `;
    document.getElementsByClassName("ulliInimage")[0].innerHTML =text;
}

//footermenubarl
const footerMenubarl = [
    {
        id : 1,
        menufooterl : "Womenswear",
        url :"",
    },
    {
        id : 2,
        menufooterl : "Wonswear",
        url :"",
    },
    {
        id : 3,
        menufooterl : "Kidswear",
        url :"",
    },
    {
        id : 4,
        menufooterl : "Homeswear",
        url :"",
    },
    {
        id : 5,
        menufooterl : "Beauty",
        url :"",
    },
    {
        id : 6,
        menufooterl : "Hobbies",
        url :"",
    },
]
var text ="";
for(let i in footerMenubarl){
    text +=`
        <li>${footerMenubarl[i]['menufooterl']}</li>
        `;
    document.getElementsByClassName("menuullifooterl")[0].innerHTML =text;
}
//footermenubarr
const footerMenubarr = [
    {
        id : 1,
        menufooterr : "Women's Clothes",
        url :"",
    },
    {
        id : 2,
        menufooterr : "Wom's Clothes",
        url :"",
    },
    {
        id : 3,
        menufooterr : "Kid's Clothes",
        url :"",
    },
    {
        id : 4,
        menufooterr : "Popular's Clothes",
        url :"",
    },
    {
        id : 5,
        menufooterr : "New Product",
        url :"",
    },
]
var text ="";
for(let i in footerMenubarr){
    text +=`
        <li>${footerMenubarr[i]['menufooterr']}</li>
        `;
    document.getElementsByClassName("menuullifooterr")[0].innerHTML =text;
}

//Locationicon 
const locationicon = [
    {
        id : 1,
        locationicon : "/image/red-facebook-tile-clipart-xl.png",
        url :"",
    },
    {
        id : 2,
        locationicon : "/image/social-clipart-xl.png",
        url :"",
    },
    {
        id : 3,
        locationicon : "/image/twitter-clipart-xl.png",
        url :"",
    },
    {
        id : 4,
        locationicon : "/image/whatsapp-icon-clipart-lg.png",
        url :"",
    },
]
var text ="";
for(let i in locationicon){
    text +=`
        <img src="${locationicon[i]['locationicon']}" alt="">
        `;
    document.getElementsByClassName("logol")[0].innerHTML =text;
}

// connect with api 1
// https://fakestoreapi.com/products?limit=5
const urlall ="https://fakestoreapi.com/products";
fetch(urlall)
.then(function async(response){
   return  response.json();
})
.then(function await (products){
   let placeholder = document.querySelector("#data-output");
   let out = "";
   for(let product of products){
      out += `
        <div class="col-sm-12 col-md-3 col-xl-3 col-xxl-3 cardbody p-0">
            <div class="priceitem">
                <h5>${product.price}$</h5>
            </div>
            <div class="boximage">
                <img src="${product.image}" alt="">
            </div>
            <div class="boxtitle">
                <h5>${product.title}</h5>
            </div>
            <div class="boxdescription">
                <p class="">${product.description}</p>
            </div>
            <div class="boxbuy">
                <div class="boxbuyin">
                <a href="#">
                    <img src="/image/buyshop.png" alt="">
                </a>
                </div>        
            </div>
        </div>           
      `;
   }   
 
   placeholder.innerHTML = out;
});


// content two 
const urltwos ="https://fakestoreapi.com/products/category/jewelery";
fetch(urltwos)
.then(function async(response){
   return  response.json();
})
.then(function await (jewelerys){
   let placeholder = document.querySelector("#data-outputtwo");
   let out = "";

   for(let jewelery of jewelerys){
      out += `
        <div class="col-sm-12 col-md-3 col-xl-3 col-xxl-3 cardbody p-0">
        <div class="priceitem">
                <h5>${jewelery.price}$</h5>
            </div>
        <div class="boximagetwo">
            <img src="${jewelery.image}" alt="">
        </div>
        <div class="boxtitletwo">
            <h5>${jewelery.title}</h5>
        </div>
        <div class="boxdescriptiontwo">
            <p class="">${jewelery.description}</p>
        </div>
        <div class="boxbuytwo">
            <div class="boxbuyintwo">
            <a href="#">
                <img src="/image/buyshop.png" alt="">
            </a>
            </div>
    
        </div>
        </div>
      `;
   }   
 
   placeholder.innerHTML = out;
});



// connect with api jewelery
const urljewelery ="https://fakestoreapi.com/products/category/jewelery";
fetch(urljewelery)
.then(function async(response){
   return  response.json();
})
.then(function await (jewelerys){
   let placeholder = document.querySelector("#outputJewelery");
   let outs = "";
   for(let jewelery of jewelerys){
      outs += `
        <div class="col-sm-12 col-md-3 col-xl-3 col-xxl-3 cardbody p-0">
        <div class="priceitem">
            <h5>${jewelery.price}$</h5>
        </div>
        <div class="boximagetwo">
            <img src="${jewelery.image}" alt="">
        </div>
        <div class="boxtitletwo">
            <h5>${jewelery.title}</h5>
        </div>
        <div class="boxdescriptiontwo">
            <p class="">${jewelery.description}</p>    
        </div>
        <div class="boxbuytwo">
            <div class="boxbuyintwo">
            <a href="#">
                <img src="/image/buyshop.png" alt="">
            </a>
            </div>
    
        </div>
        </div>
      `;
   }   
 
   placeholder.innerHTML = outs;
});

// connect with api women's clothing
const urlwoman ="https://fakestoreapi.com/products/category/men's clothing";
fetch(urlwoman)
.then(function async(response){
   return  response.json();
})
.then(function await (menclothings){
   let placeholder = document.querySelector("#outputWomenswear");
   let out = "";
   for(let menclothing of menclothings){
      out += `
        <div class="col-sm-12 col-md-3 col-xl-3 col-xxl-3 cardbody p-0">
        <div class="priceitem">
            <h5>${menclothing.price}$</h5>
        </div>
        <div class="boximagetwo">
            <img src="${menclothing.image}" alt="">
        </div>
        <div class="boxtitletwo">
            <h5>${menclothing.title}</h5>
        </div>
        <div class="boxdescriptiontwo">
            <p class="">${menclothing.description}</p>  
        </div>
        <div class="boxbuytwo">
            <div class="boxbuyintwo">
            <a href="#">
                <img src="/image/buyshop.png" alt="">
            </a>
            </div>
    
        </div>
        </div>
      `;
   }   
 
   placeholder.innerHTML = out;
});


// connect with api eletronics
const urleletronic ="https://fakestoreapi.com/products/category/electronics";
fetch(urleletronic)
.then(function async(response){
   return  response.json();
})
.then(function await (electronics){
   let placeholder = document.querySelector("#outputelectronics");
   let out = "";
   for(let electronic of electronics){
      out += `
        <div class="col-sm-12 col-md-3 col-xl-3 col-xxl-3 cardbody p-0">
        <div class="priceitem">
                <h5>${electronic.price}$</h5>
            </div>
        <div class="boximagetwo">
            <img src="${electronic.image}" alt="">
        </div>
        <div class="boxtitletwo">
            <h5>${electronic.title}</h5>
        </div>
        <div class="boxdescriptiontwo">
            <p class="">${electronic.description}</p>  
        </div>
        <div class="boxbuytwo">
            <div class="boxbuyintwo">
            <a href="#">
                <img src="/image/buyshop.png" alt="">
            </a>
            </div>
    
        </div>
        </div>
      `;
   }   
 
   placeholder.innerHTML = out;
});