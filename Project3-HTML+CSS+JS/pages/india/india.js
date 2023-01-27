const indianTime = () => {
  let currentTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata", hour: "numeric", minute: "numeric", second: "numeric"}).toString();
  
  let message = "";
  if (currentTime >= "8:00:00 AM" && currentTime <= "10:30:00 PM") {
    message = `<strong>Opened</strong>`;
  } else {
    message = `<strong>Closed</strong>`;
  }
  document.getElementById("time").innerHTML = currentTime +" "+ message;
}
indianTime();
setInterval(indianTime, 1000);


  

let menuItems = [
    {
      name: "Food 1",
      imageUrl: "http://d27k8xmh3cuzik.cloudfront.net/wp-content/uploads/2018/02/FotoJetcoverindianrest.jpg"
    },
    {
      name: "Food 2",
      imageUrl: "https://assets.cntraveller.in/photos/60ba1ff3e1b212c19a817db5/master/pass/Arbi-leaves-1366x768.jpg"
    },
    {
      name: "Food 3",
      imageUrl: "https://live.staticflickr.com/3284/3569499547_9b8bd7a8aa_b.jpg"
    },
    {
        name: "Food 4",
        imageUrl:"https://media.istockphoto.com/id/942325550/photo/jalebi-indian-sweet.jpg?s=170667a&w=0&k=20&c=cCyIkDgXqOsdV9z1A57kzYrhXx5jjBDcqX9Rigfrg9w="
    },
    {
        name: "Food 5",
        imageUrl:"https://i0.wp.com/vegecravings.com/wp-content/uploads/2016/08/kadai-paneer-gravy-recipe-step-by-step-instructions.jpg?fit=806%2C720&quality=65&strip=all&ssl=1"
    },
    {
        name: "Food 6",
        imageUrl:"https://c4.wallpaperflare.com/wallpaper/93/821/247/cuisine-food-india-indian-wallpaper-preview.jpg"
    },
    {
        name: "Food 7",
        imageUrl:"https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg"
    },
    {
        name: "Food 8",
        imageUrl:"https://glebekitchen.com/wp-content/uploads/2019/12/chickenbiryanibowltop.jpg"
    },
];

let menuContainer = document.getElementsByClassName("menu_cards")[0];

let menuCards = menuItems.map(function(item) {
    return `
        <div class="menu_card">
            <img src="${item.imageUrl}" alt="" class="menu_image">
            <h1>${item.name}</h1>
            <br />
            <br />
        </div>
    `;
});

menuContainer.innerHTML = menuCards.join("");



