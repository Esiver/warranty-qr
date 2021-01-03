
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


function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 

docReady(function() {
    var resultContainer = document.getElementById('qr-reader-results');
    var lastResult, countResults = 0;
    
    var html5QrcodeScanner = new Html5QrcodeScanner(
        "qr-reader", { fps: 10, qrbox: 250 });
    
    function onScanSuccess(qrCodeMessage) {
        if (qrCodeMessage !== lastResult) {
            ++countResults;
            lastResult = qrCodeMessage;
            resultContainer.innerHTML += `<div>[${countResults}] - ${qrCodeMessage}</div>`;
            
            // Optional: To close the QR code scannign after the result is found
            html5QrcodeScanner.clear();
        }
    }
    
    // Optional callback for error, can be ignored.
    function onScanError(qrCodeError) {
        // This callback would be called in case of qr code scan error or setup error.
        // You can avoid this callback completely, as it can be very verbose in nature.
    }
    
    html5QrcodeScanner.render(onScanSuccess, onScanError);

 
});

function downloadDiv() {

    var node = document.getElementById('paper');

    domtoimage.toPng(node)
        .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
        })
        .catch(function (error) {
            console.error('oops, something went wrong!', error);
        });

}