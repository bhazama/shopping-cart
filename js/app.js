var shoppingList = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

 

for(var i = 0; i<shoppingList.length; i++){
  console.log(shoppingList[i]);


  /***************************************************
  ITEM 1
  ****************************************************/
  
  
  var product = document.getElementById("title1");
  title1.innerHTML = shoppingList[0].product;
  
  var prod1Description = document.getElementById("description1");
  prod1Description.innerHTML= shoppingList[0].description;

  var prod1Price = document.getElementById("price1");
  prod1Price.innerHTML = shoppingList[0].price;

  var prod1Img = document.getElementById("img1");
  prod1Img.innerHTML = "<img src=images/fingerbrush.jpg>";


  /***************************************************
  ITEM 2
  ****************************************************/


  var prod2Name = document.getElementById("title2");
  prod2Name.innerHTML = shoppingList[1].product;

  var prod2Description = document.getElementById("description2");
  prod2Description.innerHTML = shoppingList[1].description;

  var prod2Price = document.getElementById("price2");
  prod2Price.innerHTML = shoppingList[1].price;

  var prod2Img = document.getElementById("img2");
  prod2Img.innerHTML = "<img src=https://images-na.ssl-images-amazon.com/images/I/41KB1X0G6QL.jpg>";
  

  
  /***************************************************
  ITEM 3
  ****************************************************/
  

  var prod3Name = document.getElementById("title3");
  prod3Name.innerHTML = shoppingList[2].product;

  var prod3Description = document.getElementById("description3");
  prod3Description.innerHTML = shoppingList[2].description;

  var prod3Price = document.getElementById("price3");
  prod3Price.innerHTML = shoppingList[2].price;

  var prod3Img = document.getElementById("img3");
  prod3Img.innerHTML = "<img src = http://cdn.trendhunterstatic.com/phpthumbnails/253/253437/253437_1_230c.jpeg>";

  

   /***************************************************
  ITEM 4
  ****************************************************/


  var prod4Name = document.getElementById("title4");
  prod4Name.innerHTML = shoppingList[3].product;

  var prod4Description = document.getElementById("description4");
  prod4Description.innerHTML = shoppingList[3].description;

  var prod4Price = document.getElementById("price4");
  prod4Price.innerHTML = shoppingList[3].price;

  var prod4Img = document.getElementById("img4");
  prod4Img.innerHTML = "<img src = http://www.asseenontvandbeyond.com/thumbnail.asp?file=assets/images/woof-washer-360.jpg&maxx=300&maxy=0>";


   /***************************************************
  ITEM 5
  ****************************************************/

  
  var prod5Name = document.getElementById("title5");
  prod5Name.innerHTML = shoppingList[4].product;

  var prod5Description = document.getElementById("description5");
  prod5Description.innerHTML = shoppingList[4].description;

  var prod5Price = document.getElementById("price5");
  prod5Price.innerHTML = shoppingList[4].price;

  var prod5Img = document.getElementById("img5");
  prod5Img.innerHTML = "<img src = http://ep.yimg.com/ay/yhst-136372476553304/verseo-sauna-pants-sauna-shorts-13.png>";

 
 /***************************************************
  ITEM 6
  ****************************************************/


  var prod6Name = document.getElementById("title6");
  prod6Name.innerHTML = shoppingList[5].product;

  var prod6Description = document.getElementById("description6");
  prod6Description.innerHTML = shoppingList[5].description;

  var prod6Price = document.getElementById("price6");
  prod6Price.innerHTML = shoppingList[5].price;

  var prod6Img = document.getElementById("img6");
  prod6Img.innerHTML = "<img src = https://ak1.ostkcdn.com/images/products/P10048158.jpg>";
   
}

   /***************************************************
  SUBTOTAL
  ****************************************************/


var total = 0;
for(var j = 0; j<shoppingList.length;j++){
  console.log(shoppingList[j].price);
  total += shoppingList[j].price;

}
console.log(total);

var newTotal = document.getElementById("subPrice");
newTotal.innerHTML = total;


var classElem = document.getElementById("itemInfo");
for (var i = 0; i<classElem.length; i++){
  classElem[i].addEventListener("click",  toggleSwitch);
}

function toggleSwitch(){
  var descElem = querySelectorAll(".desc")[0];
  if(descElem.style.display === "none"){
    descElem.style.display = "block";
  }else{
    descElem.style.display = "block";
  }
}



  
 









  


