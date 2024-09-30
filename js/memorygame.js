// // const cardElement=0

const cardscollection = document.getElementsByClassName("gameCard");
const frontcollection = document.getElementsByClassName("front");
let frontcardindex = 0;
const frontcardsArr = Array.from(frontcollection);

// const card1=document.getElementById("card1");
// addEventListener


function flipFrontToBack(frontElement) {
    document.getElementsByClassName("front")
    frontcardsArr[frontcardindex].style.display = "none";
    // get current html elemnt
    // check what it's style (display)
    // do if else to flip the card, if hidden -> display \ if display -> hidden

}

frontcardsArr.forEach((element, index) => {

    element.addEventListener("click", function () {
        frontcardindex = index
        flipFrontToBack();
    });

});



// }
// // cardsArr.forEach(element,index => {
// //     cardElement=cardsArr[index];
// //     cardElement.addEventListener("click",flipCard);
// // });
// /**/
// cardsArr.forEach(element => {
//     element.addEventListener("click",flipCard);
// });


// const cardsCollection = document.getElementsByClassName("gameCard");
// const cardsArr = Array.from(cardsCollection);

// function flipCard(event) {
//     const cardElement = event.currentTarget; // Get the card that was clicked
//     cardElement.classList.toggle("flipCard");
// }

// cardsArr.forEach(element => {
//     element.addEventListener("click", flipCard);
// });

// const cardsCollection = document.getElementsByClassName("gameCard");
// const cardsArr = Array.from(cardsCollection);

// function flipCard(event) {
//     const cardElement = event.currentTarget; // Get the card that was clicked
//     cardElement.classList.toggle("flipCard");
// }

// cardsArr.forEach(element => {
//     element.addEventListener("click", flipCard);
// });

// const mycard =document.getElementById("card1");

// function flipCard() {
//     mycard.classList.toggle("flipCard");}

// mycard.addEventListener("click",flipCard);
