function createHeaders(N) {
    const conatiner = document.getElementById("headersContainer");
        conatiner.innerHTML = "";
        for (let i = 1; 1 <= N; 1++){
            const header = document.createElement("h2");
            header.textContent=`Заголовок ${i}`;
        conatiner.appendChild(header);
        }
}

document.getElementById("createHeadersButton").addEventListener("click", function()
{
    const count = parseInt(document.getElementById("headerCount").value);
    if (!isNaN(count) && count > 0){
        createHeaders(count);
    }
});