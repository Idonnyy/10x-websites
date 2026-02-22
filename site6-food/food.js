const foodName = document.getElementById("foodName");
const foodOrigin = document.getElementById("foodOrigin");
const foodImage = document.getElementById("foodImage");
const foodDecription = document.getElementById("foodDecription");
const foodIngredient = document.getElementById("foodIngredient");
const foodList = document.getElementById("foodList");

const foods = [
  {
    name: "Hamburger",
    origin: "United States",
    image: "images/hamburger.jpg",
    description: "A grilled beef patty served inside a bun with various toppings.",
    ingredients: ["Beef Patty", "Bun", "Lettuce", "Tomato", "Cheese"]
  },
  {
    name: "Hot Dog",
    origin: "United States",
    image: "images/hotdog.jpg",
    description: "A sausage served in a sliced bun, often topped with mustard or ketchup.",
    ingredients: ["Sausage", "Bun", "Mustard", "Ketchup"]
  },
  {
    name: "BBQ Ribs",
    origin: "United States",
    image: "images/ribs.jpg",
    description: "Slow-cooked pork ribs coated in barbecue sauce.",
    ingredients: ["Pork Ribs", "BBQ Sauce", "Spices"]
  },
  {
    name: "Fried Chicken",
    origin: "United States",
    image: "images/friedchicken.jpg",
    description: "Chicken pieces seasoned, battered, and deep-fried.",
    ingredients: ["Chicken", "Flour", "Seasoning", "Oil"]
  },
  {
    name: "Apple Pie",
    origin: "United States",
    image: "images/applepie.jpg",
    description: "A baked dessert filled with spiced apples inside a flaky crust.",
    ingredients: ["Apples", "Pie Crust", "Sugar", "Cinnamon"]
  },
  {
    name: "Mac and Cheese",
    origin: "United States",
    image: "images/macandcheese.jpg",
    description: "Elbow pasta mixed with a creamy cheese sauce.",
    ingredients: ["Pasta", "Cheese", "Milk", "Butter"]
  }
];

if(foodList){
    foods.forEach(food => {
        const li = document.createElement("li");
        const a = document.createElement("a");
        
        a.textContent = food.name;
        a.href = "food.html?name=" + food.name.replaceAll(" ", "");

        li.appendChild(a);
        foodList.append(li);
    })
}


const params = new URLSearchParams(window.location.search);
const foodkey = params.get("name")?.toLowerCase().replaceAll(" ", "");
const foodData = foods.find(food => 
    food.name.toLowerCase().replaceAll(" ", "") === foodkey
    );


if(foodData) {

    if(foodName) foodName.textContent = foodData.name;
    if(foodOrigin) foodOrigin.textContent = foodData.origin + "'s " + foodData.name + "s ";
    if(foodImage) foodImage.textContent = foodData.image;
    if(foodDecription) foodDecription.textContent = foodData.description;

    if(foodIngredient) {
        foodIngredient.innerHTML = "";
        foodData.ingredients.forEach(intredient => {
            const li = document.createElement("li");
            li.textContent = intredient;
            foodIngredient.appendChild(li);
        })
       
    }
}