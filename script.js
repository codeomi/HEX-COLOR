const colorBtn = document.getElementById("chnge-colo-btn")
let hexId = document.getElementById("hex-id")
const backgroundColor = document.getElementById("color")

colorBtn.addEventListener("enter", function() {
    let colorId =   '#' + Math.random().toString(16).substring(2, 8);
    hexId.textContent = ` HEX id:- ${colorId}`
    document.body.style.backgroundColor = colorId;
    // colorBtn.style.backgroundColor = colorId
    console.log(opaqueColor)
})

