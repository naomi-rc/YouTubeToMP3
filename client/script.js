var convertBtn = document.querySelector(".convertButton");
var urlInput = document.querySelector(".URLinput");

convertBtn.addEventListener("click", () => {
    console.log(`URL: ${urlInput.value}`);
    sendURL(urlInput.value);

});

function sendURL(url){    
   window.location.href = `http://localhost:4000/download?URL=${url}`;
}