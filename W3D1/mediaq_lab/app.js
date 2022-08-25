// const image = document.querySelector(".image-small")
// console.log(image);
// image.setAttribute("src", "https://media0.giphy.com/media/jurcfxao8M3yzHmCjS/giphy.gif?cid=ecf05e471kt0o6zhfng5ely2bbw3e2y07uk20okxe94klb40&rid=giphy.gif&ct=g")

const exploreTextL = () => {
    let exploreScreen = document.querySelector(".explore-screen-lg");
    let text =
        " To explore more check out IMDB"
    exploreScreen.innerHTML = text;
    exploreScreen.style.display = "block";
};
const exploreTextM = () => {
    let exploreScreen = document.querySelector(".explore-screen-mid");
    let text =
        " To explore more check out Netflix"
    exploreScreen.innerHTML = text;
    exploreScreen.style.display = "block";
};
const exploreTextS = () => {
    let exploreScreen = document.querySelector(".explore-screen-small");
    let text =
        " To explore more check out AmazonMovies"
    exploreScreen.innerHTML = text;
    exploreScreen.style.display = "block";
};
const hideTextL = () => {
    let exploreScreen = document.querySelector(".explore-screen-lg");
    let text =
        ""
    exploreScreen.innerHTML = text;
    exploreScreen.style.display = "none";
};
const hideTextM = () => {
    let exploreScreen = document.querySelector(".explore-screen-mid");
    let text =
        ""
    exploreScreen.innerHTML = text;
    exploreScreen.style.display = "none";
};
const hideTextS = () => {
    let exploreScreen = document.querySelector(".explore-screen-small");
    let text =
        ""
    exploreScreen.innerHTML = text;
    exploreScreen.style.display = "none";
};
