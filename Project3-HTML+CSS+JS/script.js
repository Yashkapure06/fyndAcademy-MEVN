
var india = document.getElementById("india");
var australia = document.getElementById("australia");
var japan = document.getElementById("japan");
var china = document.getElementById("china");
var displayTime = document.getElementById("time");

var interval; // variable to store the id returned by setInterval
var timeZone = "en-IN"; // default selected locale


india.addEventListener("click", function(event){
    updateTime(event);
});
australia.addEventListener("click", function(event){
    updateTime(event);
});
japan.addEventListener("click", function(event){
    updateTime(event);
});
china.addEventListener("click", function(event){
    updateTime(event);
});



function updateTime(event) {
    if(event && event.target){
        // event && event.target means if event is not null and event.target is not null
        var target = event.target;        
        switch(target.id){
            case 'india':
                selectedTimeZone='Asia/Kolkata';
                shortForm='IN';
                break;
            case 'australia':
                selectedTimeZone= 'Australia/Sydney';
                shortForm='AU';
                break;
            case 'japan':
                selectedTimeZone= 'Asia/Tokyo';
                shortForm='JP';
                break;
            case 'china':
                selectedTimeZone= 'Asia/Shanghai';
                shortForm='CH';
                break;
        }
    }
    //* reffered: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
    var currentTime = new Date();
    // const indianTime = () => {
        // document.getElementById("indianTime").innerHTML = new Date().toLocaleString(
        //     "en-US", 
        //     {
        //         timeZone: "Asia/Kolkata",
        //         timeStyle:'medium', 
        //         hourCycle:"h12"
        //     }
        // );
    // }
    // indianTime()
    // setInterval(indianTime,1000);
    var timeString = new Intl.DateTimeFormat(timeZone, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
        timeZone:selectedTimeZone
    }).format(currentTime);
    displayTime.innerHTML = timeString+" <strong>"+shortForm+"</strong>";
    clearInterval(interval);
    interval = setInterval(updateTime, 1000);
}
updateTime();

