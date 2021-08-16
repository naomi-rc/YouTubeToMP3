const serverURL = `http://localhost:8000`

var convertBtn = document.querySelector(".convertButton");
var urlInput = document.querySelector(".URLinput");

convertBtn.addEventListener("click", () => {
    console.log(`URL: ${urlInput.value}`);
    sendURL(urlInput.value);

});

function sendURL(url){    
   window.location.href = `${serverURL}/download?URL=${url}`;
}