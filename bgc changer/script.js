function changeBg(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementaryByClassName("text");
    if(color == "#000000"){
for(let elm of txt){
    elm.style.color = "white";
}
}else{
    for(let elm of txt){
        elm.style.color = "black";
    }
}
    }
