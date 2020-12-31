

const input = document.querySelector('dealer');
const log = document.getElementById("dealerFill");

input.addEventListener('change', updateVal);

function updateVal(e) {
    log.textContent = e.target.value();
}

$function(){
function lol() {
    console.log(" I work");
    let dealer = document.getElementById("dealer").value;
    let tel = document.getElementById("tel").value;
    let store = document.getElementById("store").value;
    let model = document.getElementById("model").value;

    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;
    let date = document.getElementById("date").value;
    let serial = document.getElementById("serial").value;
    
   document.getElementById("dealerFill").innerHTML = ""+dealer;
   document.getElementById("telFill").innerHTML = tel;
   document.getElementById("storeFill").innerHTML = store;
   document.getElementById("modelFill").innerHTML = model;
   
   document.getElementById("addressFill").innerHTML = address;
   document.getElementById("emailFill").innerHTML = email;
   document.getElementById("dateFill").innerHTML = date;
   document.getElementById("serialFill").innerHTML = serial;

}
}