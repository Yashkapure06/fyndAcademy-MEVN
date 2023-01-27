const australiaTime = () => {
    let date = new Date().toLocaleString("en-US", {timeZone: "Asia/Tokyo", hour: "numeric", minute: "numeric", second: "numeric"});
    let time = date.split(' , ')[1];
    let message = "";
    if (time >= "8:00 AM" && time <= "10:30 PM") {
      message = `${date} <strong>Closed</strong>`;
    } else {
      message = `${date} <strong>Opened</strong>`;
    }
    document.getElementById("time").innerHTML = message;
  }
  australiaTime();
  setInterval(australiaTime, 1000);
  

let menuItems = [
    {
      name: "Food 1",
      imageUrl: "https://media.istockphoto.com/id/502514722/photo/traditional-japanese-food.jpg?s=612x612&w=0&k=20&c=2cUOfIi4vwalZqdbdTPUGCgIPghxVHzjckX5XgfiO_4="
    },
    {
      name: "Food 2",
      imageUrl: "https://media.istockphoto.com/id/688006056/photo/japanese-cuisine.jpg?s=612x612&w=0&k=20&c=MOHSpXQ9EFfprrdMaOv9bPn3W9yS10hnhJs791wL6Rc="
    },
    {
      name: "Food 3",
      imageUrl: "https://rockgroupkwt.com/public/CuisineLogo/1622592017.jpeg"
    },
    {
        name: "Food 4",
        imageUrl:"https://watermark.lovepik.com/photo/20211123/large/lovepik-japanese-cuisine-gourmet-food-sushi-picture_500876577.jpg"
    },
    {
        name: "Food 5",
        imageUrl:"https://p4.wallpaperbetter.com/wallpaper/700/944/907/rolls-sushi-sushi-rolls-wallpaper-preview.jpg"
    },
    {
        name: "Food 6",
        imageUrl:"https://img.freepik.com/free-photo/japanese-food-bowl-rice-boiled-white-fish-wakame-chuka-seaweed-salad-top-view-flat-lay_2829-17318.jpg?w=360"
    },
    {
        name: "Food 7",
        imageUrl:"https://img.theculturetrip.com/450x/smart/wp-content/uploads/2019/08/cb3c0x-2.jpg"
    },
    {
        name: "Food 8",
        imageUrl:"https://www.falstaff.com/fileadmin/_processed_/e/8/csm_shutterstock_1382799524_368b558395.jpg"
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

