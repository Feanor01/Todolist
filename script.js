let its = document.getElementById("todo");
its.style.backgroundColor = "yellow";
butn = document.getElementsByClassName("favorite");
let bottom = document.getElementsByClassName("bottom");
butn[0].onclick = ()=>{
console.log(its.value);
        const textnode = document.createTextNode(its.value);   const newdiv = document.createElement("div");
    newdiv.appendChild(textnode);
    bottom[0].appendChild(newdiv);
its.value=null;
}









//e.preventdefault use this function 
//onsubmit
