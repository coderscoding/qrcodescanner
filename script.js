var qrcode = new QRCode(document.getElementById('qrcode'));
var qrdata = document.getElementById('qr-data');

function generateQR() {
    // For Counting Text in TextArea -- STARTING
    s = document.getElementById("qr-data").value;
    s = s.replace(/(^\s*)|(\s*$)/gi, "");
    s = s.replace(/[ ]{2,}/gi, " ");
    s = s.replace(/\n /, "\n");
    var countingTheText = s.split(' ').length;
    // For Counting Text in TextArea -- ENDING     
    if (300 == countingTheText || 300 <= countingTheText) {
        var textForConfirmBox = "It may Generate with errors, because it is more that 300 words. Are You sure to continue?";
        if (confirm(textForConfirmBox)) {
            makeData()
        }
    } else {
        makeData()
    }
}

function widthChanged() {
    var width = document.getElementById("widthArea");
    var qrBox = document.getElementById("qrcode");
    widthchange = width.value + "px";
    qrBox.style.width = widthchange;
    // .style.width = "0px"
}


function heightChanged() {
    var height = document.getElementById("heightArea");
    var qrBox = document.getElementById("qrcode");
    height = height.value + "px";
    qrBox.style.height = height;
}

function makeData() {
    var data = qrdata.value;
    qrcode.clear();
    qrcode.makeCode(data);
}
