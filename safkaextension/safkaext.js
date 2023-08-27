
var kontti = document.createElement("div");
    kontti.innerHTML="";
    kontti.id="kontti";

var sisalto = document.createElement("div");
    sisalto.innerHTML="";
    sisalto.id="sisalto";

var logo = document.createElement("div");
    logo.innerHTML="<a href='https://safka.online/'>Safka.<br>Online</a>";
    logo.id="safkalogo";

var text = document.createElement("div");
    text.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const footer = document.querySelector('footer.margin-top-bottom');

var favicon = document.createElement("img");
    favicon.src="https://safka.online/favicon.png"

document.querySelector("#qrcode-popover > span").replaceWith(favicon)

if (footer) {
    document.querySelector('body > footer > img').replaceWith(kontti)
    document.querySelector("#kontti").appendChild(logo)
    document.querySelector("#kontti").appendChild(sisalto)
    fetch("https://api.safka.online/v2/menu/").then(res => res.json()).then(body => {
        const days = [ "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai" ]
        for (let i=0;i <= 4;i++) {
            var ruoka = body.days[i].menu.map(e => e.names).join(", ")
            var day = document.createElement("div")
            day.className="day"
            day.innerHTML=`<h1>${days[i]}</h1><p>${ruoka}</p>`
            day.style.marginLeft = i + 3 + "%"; 
            document.querySelector("#sisalto").appendChild(day)
        }
    })
};

