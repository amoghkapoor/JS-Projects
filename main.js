var reviews = [
    {
        id: 0,
        img: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Brown&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light",
        name: "Harry Potter",
        title: "The Main Character",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eveniet ad tempore consequatur sint delectus illum sunt quisquam culpa earum vel pariatur dicta quo minima accusamus architecto voluptates aspernatur ut minus aliquid error, omnis nesciunt? Delectus recusandae neque dolor maiores."
    },
    {
        id: 1,
        img: "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortCurly&accessoriesType=Blank&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Overall&clotheColor=Gray02&eyeType=Squint&eyebrowType=RaisedExcited&mouthType=Twinkle&skinColor=Tanned",
        name: "Ron Weasley",
        title: "The Friend",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eveniet ad tempore consequatur sint delectus illum sunt quisquam culpa earum vel pariatur dicta quo minima accusamus architecto voluptates aspernatur ut minus aliquid error, omnis nesciunt? Delectus recusandae neque dolor maiores."

    },
    {
        id: 2,
        img: 'https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Wayfarers&hairColor=Auburn&facialHairType=BeardLight&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=White&eyeType=Cry&eyebrowType=Default&mouthType=Smile&skinColor=Brown',
        name: "Albus Dumbledore",
        title: "The Friend",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eveniet ad tempore consequatur sint delectus illum sunt quisquam culpa earum vel pariatur dicta quo minima accusamus architecto voluptates aspernatur ut minus aliquid error, omnis nesciunt? Delectus recusandae neque dolor maiores."
    },
    {
        id: 3,
        img: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=Auburn&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=PastelRed&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Twinkle&skinColor=Light",
        name: "Hermione Granger ",
        title: "The Boss",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eveniet ad tempore consequatur sint delectus illum sunt quisquam culpa earum vel pariatur dicta quo minima accusamus architecto voluptates aspernatur ut minus aliquid error, omnis nesciunt? Delectus recusandae neque dolor maiores."
    },
    {
        id: 4,
        img: "https://avataaars.io/?avatarStyle=Circle&topType=Hat&accessoriesType=Sunglasses&facialHairType=BeardLight&facialHairColor=Blonde&clotheType=BlazerShirt&clotheColor=PastelGreen&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Serious&skinColor=Tanned",
        name: "George",
        title: "Developer",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eveniet ad tempore consequatur sint delectus illum sunt quisquam culpa earum vel pariatur dicta quo minima accusamus architecto voluptates aspernatur ut minus aliquid error, omnis nesciunt? Delectus recusandae neque dolor maiores."
    },
    {
        id: 5,
        img: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Round&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=Gray01&eyeType=Side&eyebrowType=FlatNatural&mouthType=Default&skinColor=Brown",
        name: "Elizabeth",
        title: "Friend",
        content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia eveniet ad tempore consequatur sint delectus illum sunt quisquam culpa earum vel pariatur dicta quo minima accusamus architecto voluptates aspernatur ut minus aliquid error, omnis nesciunt? Delectus recusandae neque dolor maiores."
    }
]

var personImg = document.querySelector(".profileImg")
var personName = document.querySelector(".name")
var personTitle = document.querySelector(".title")
var personContent = document.querySelector(".content")

var nextBtn = document.getElementById("rightBtn")
var prevBtn = document.getElementById("leftBtn")

var currentItem = 0

window.addEventListener("DOMContentLoaded", function () {
    showPerson(currentItem)
})

function showPerson(person) {
    var item = reviews[person]
    personImg.src = item.img
    personName.textContent = item.name
    personTitle.textContent = item.title
    personContent.textContent = item.content
}

nextBtn.addEventListener("click", function () {
    currentItem++
    if (currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
})

prevBtn.addEventListener("click", function () {
    currentItem--
    if (currentItem < 0) {
        currentItem = reviews.length - 1
    }
    showPerson(currentItem)
})