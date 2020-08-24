var myDropzone = new FileDropzone({
    target: '#box',
    fileHoverClass: 'entered',
    clickable: true,
    multiple: false,
    forceReplace: true,
    accept: 'text/html',
    onChange: function () {
        var files = this.getFiles()
        var elem = this.element.find('.files')
        elem.empty()
        files.forEach(function (item) {
            elem.append('<div class="file-name" data-id="' + item.id + '">' + item.name + '</div>')
        })
    }
});

var decHtmlP1 = 
    "<script>" + cryptoJSsrc + "</script>\n" +
    "<script>\n" +
    "    var base64Encrypted=\"";
var decHtmlP2 = "\";\n" +
    "        try {\n" +
    "            var html = CryptoJS.AES.decrypt(base64Encrypted, \"\").toString(CryptoJS.enc.Utf8);\n" +
    "            document.write(html);\n" +
    "            document.dispatchEvent(new Event('DOMContentLoaded'));\n\n" +
    "        } catch (e) {\n" +
    "            console.error(e);\n" +
    "            alert(e);\n" +
    "        }\n" +
    "</script>\n" +
    "</html>";

function encrypt() {
    myDropzone.getFiles().forEach(function (file) {
        var reader = new FileReader();
        reader.onload = function() {
            var html = reader.result;
            var base64Enc = CryptoJS.AES.encrypt(html, "").toString();
            var html = decHtmlP1 +  base64Enc + decHtmlP2;
            saveAs(new Blob([html],{type: 'text/html'}), 'encrypted.html');
            alert("Your HTML have been converted and downloaded in your Storage");
        };
        reader.readAsText(file);
    });
}
