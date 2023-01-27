const chinaTime = () => {
    let date = new Date().toLocaleString("en-US", {timeZone: "Asia/Shanghai", hour: "numeric", minute: "numeric", second: "numeric"});
    let time = date.split(' , ')[1];
    let message = "";
    if (time >= "8:00 AM" && time <= "10:30 PM") {
      message = `${date} <strong>Closed</strong>`;
    } else {
      message = `${date} <strong>Opened</strong>`;
    }
    document.getElementById("time").innerHTML = message;
  }
chinaTime();
setInterval(chinaTime, 1000);
  