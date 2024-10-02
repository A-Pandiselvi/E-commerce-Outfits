var sidenavbar = document.querySelector(".side-navbar")

// show navbar
function shownav() {
    sidenavbar.style.left = "0"
}

// close navbar 
function closenav() {
    sidenavbar.style.left = "-60%"
}


// collection page 

var productcontainer = document.getElementById("product")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener('keyup', function (event) {
    var entervalue = event.target.value.toUpperCase()

    for (count = 0; count < productlist.length; count = count + 1) {

        var productname = productlist[count].querySelector("p").textContent

        if (productname.toUpperCase().indexOf(entervalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"

        }
    }
})


//register page

