
function fillForm() {
    const userProfile = new Object();
    userProfile.dealer = document.getElementById("dealer").value;
    userProfile.tel = document.getElementById("tel").value;
    userProfile.store = document.getElementById("store").value;
    userProfile.model = document.getElementById("model").value;

    userProfile.address = document.getElementById("address").value;
    userProfile.email = document.getElementById("email").value;
    userProfile.date = document.getElementById("date").value;
    userProfile.serial = document.getElementById("serial").value;

   document.getElementById("dealerFill").innerHTML = userProfile.dealer;
   document.getElementById("telFill").innerHTML = userProfile.tel;
   document.getElementById("storeFill").innerHTML = userProfile.store;
   document.getElementById("modelFill").innerHTML = userProfile.model;

   document.getElementById("addressFill").innerHTML = userProfile.address;
   document.getElementById("emailFill").innerHTML = userProfile.email;
   document.getElementById("dateFill").innerHTML = userProfile.date;
   document.getElementById("serialFill").innerHTML = userProfile.serial;
   
   userJson = JSON.stringify(userProfile);
   
   let qrcode = new QRCode(document.querySelector("#qrcode"), {
    text: userJson,
    width: 300,
    height: 300,
    colorDark : "#000000",
    colorLight : "#ffffff",
    correctLevel : QRCode.CorrectLevel.M
});

}


