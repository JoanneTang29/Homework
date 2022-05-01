const colors = ['#f6bd60', '#d90429', '#118ab2', 'white'];
let counter = 0;

function changeColor(){
    let gridItem = document.getElementsByClassName("gridItem");
    for (let i=0; i<gridItem.length; i++) {
        console.log(gridItem.length)
    gridItem[i].style.backgroundColor = colors[counter];
    }
    counter++;
    if (counter > 3) {
        counter = 0;
    }
}
