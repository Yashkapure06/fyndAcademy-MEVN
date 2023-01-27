const australiaTime = () => {
    let date = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney", hour: "numeric", minute: "numeric", second: "numeric"});
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
      imageUrl: "https://www.bhg.com.au/media/28207/grilled-barramundi.jpg?width=720&center=0.0,0.0"
    },
    {
      name: "Food 2",
      imageUrl: "https://travelfoodatlas.com/wp-content/uploads/2022/05/Barramundi.jpg.webp"
    },
    {
      name: "Food 3",
      imageUrl: "https://nomadsworld.com/wp-content/uploads/2017/08/barramundi-commons.jpg"
    },
    {
        name: "Food 4",
        imageUrl:"https://blog.pssremovals.com/wp-content/uploads/2022/09/Barramundi_at_Boardwalk_Bistro_on_Hastings_Noosa_Heads.jpg"
    },
    {
        name: "Food 5",
        imageUrl:"https://images.unsplash.com/photo-1529928520614-7c76e2d99740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXVzdHJhbGlhbiUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
        name: "Food 6",
        imageUrl:"https://miro.medium.com/max/1400/1*6T7kUjkdEnvwc_UxluPCTg.jpeg"
    },
    {
        name: "Food 7",
        imageUrl:"https://content.skyscnr.com/m/3e2caa4d3044192f/original/GettyImages-467416674.jpg?resize=1800px:1800px&quality=100"
    },
    {
        name: "Food 8",
        imageUrl:"https://content.skyscnr.com/m/173ffa1bfd0e4966/original/chicken-parmigiana.jpg?resize=1800px:1800px&quality=100"
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

