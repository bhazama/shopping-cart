var shoppingList = [{product: "Finger Toothbrush", description: "A helping hand to a nicer smile.", price: 1.11}, {product: "Barry Manilow's Greatest Hits Collection Vol 1", description: "Music the way it should be! Reminisce the past glory as your ship to happiness has sailed.", price: 39.57}, {product: "Ramen Oreos", description: "The overly used cliche 'East Meets West' comes to life as Nabisco has infused the savory flavors of the Far East sandwiched between two chocolate wafers. Dip that in your sake.", price: 8.88}, {product: "Woof Washer 360", description: "Wash your dirty stinky mutt in minutes! Water and dog not included." , price: 9.29}, {product: "Sauna Pants", description: "Is it hot in here? Indeed. It's my pants. Look cool while losing weight.", price: 2.33}, {product: "Hug Me Pillow", description: "No more lonely nights as you snuggle with your best friend. And it will never walk out on you.", price: 599.99}];

 

for(var i = 0; i<shoppingList.length; i++){
  console.log(shoppingList[i]);


  /***************************************************
  ITEM 1
  ****************************************************/
  
  var prod1Name = document.getElementById("title1");
  prod1Name.innerHTML = shoppingList[0].product;

  var prod1Description = document.getElementById("description1");
  prod1Description.innerHTML = shoppingList[0].description;

  var prod1Price = document.getElementById("price1");
  prod1Price.innerHTML = shoppingList[0].price;


  /***************************************************
  ITEM 2
  ****************************************************/


  var prod1Name = document.getElementById("title2");
  prod1Name.innerHTML = shoppingList[1].product;

  var prod1Description = document.getElementById("description2");
  prod1Description.innerHTML = shoppingList[1].description;

  var prod1Price = document.getElementById("price2");
  prod1Price.innerHTML = shoppingList[1].price;

  
  /***************************************************
  ITEM 3
  ****************************************************/
  

  var prod1Name = document.getElementById("title3");
  prod1Name.innerHTML = shoppingList[2].product;

  var prod1Description = document.getElementById("description3");
  prod1Description.innerHTML = shoppingList[2].description;

  var prod1Price = document.getElementById("price3");
  prod1Price.innerHTML = shoppingList[2].price;

  

   /***************************************************
  ITEM 4
  ****************************************************/


  var prod1Name = document.getElementById("title4");
  prod1Name.innerHTML = shoppingList[3].product;

  var prod1Description = document.getElementById("description4");
  prod1Description.innerHTML = shoppingList[3].description;

  var prod1Price = document.getElementById("price4");
  prod1Price.innerHTML = shoppingList[3].price;


   /***************************************************
  ITEM 5
  ****************************************************/

  var prod1Name = document.getElementById("title5");
  prod1Name.innerHTML = shoppingList[4].product;

  var prod1Description = document.getElementById("description5");
  prod1Description.innerHTML = shoppingList[4].description;

  var prod1Price = document.getElementById("price5");
  prod1Price.innerHTML = shoppingList[4].price;

 
 /***************************************************
  ITEM 6
  ****************************************************/


  var prod1Name = document.getElementById("title6");
  prod1Name.innerHTML = shoppingList[5].product;

  var prod1Description = document.getElementById("description6");
  prod1Description.innerHTML = shoppingList[5].description;

  var prod1Price = document.getElementById("price6");
  prod1Price.innerHTML = shoppingList[5].price;
   
}

   /***************************************************
  ITEM 5
  ****************************************************/

for(var i = 0; i<shoppingList[i].price;i++){
  console.log(shoppingList[i].price);
  total = 0;
  total += shoppingList[i].price;
  console.log(total);
 

var newSub = document.getElementById("subPrice");
newSub.innerHTML = total;

}







  


