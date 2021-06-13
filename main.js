var cards = document.querySelectorAll(".card")


cards.forEach(card => {

    var cardHeader = card.querySelector(".card-header")

    cardHeader.addEventListener("click", function () {
        cards.forEach(function (item) {
            if (item !== card) {
                item.querySelector(".card-content").classList.remove("show")
                item.querySelector(".btn").innerHTML = '<i class = "far fa-plus-square"></i>'
            }
        })

        var button = card.querySelector(".btn")

        var cardContent = card.querySelector(".card-content")
        cardContent.classList.toggle("show")

        if (cardContent.classList.contains("show")) {
            button.innerHTML = '<i class = "far fa-minus-square"></i>'
        }
        else {
            button.innerHTML = '<i class = "far fa-plus-square"></i>'
        }
    })
})


