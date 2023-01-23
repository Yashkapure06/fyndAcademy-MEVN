function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_joke')
      .then(response => response.json())
      .then(data => {
        let setup = data.setup;
        console.log(setup);

        let punchline = data.punchline;
        console.log(punchline);
        
        document.getElementById("setup").innerHTML = setup;
        document.getElementById("punchline").innerHTML = punchline;
      })
      .catch(error => console.log(error));
  }
  

function getPublicEntries(){
    fetch('https://api.publicapis.org/entries')
    .then(response => response.json())
    .then(data => {
        let entries = data.entries;
        console.log(entries);
        let output = '';
        entries.forEach(function(entry){
            output += `
            <div style="grid-area:card1|card2; margin-top:10px; border:1px solid #252525;width:100%">
                    <h3>${entry.API}</h3>
                    <p>${entry.Description}</p>
                    <p>Category: ${entry.Category}</p>
                    <a href="${entry.Link}">Link</a>
            </div>
            `;
        });
        document.getElementById('entries').innerHTML = output;
    })
    .catch(error => console.log(error));
}