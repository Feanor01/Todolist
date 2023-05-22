let its = document.getElementById("todo");
its.style.backgroundColor = "yellow";
butn = document.getElementsByClassName("favorite");
let bottom = document.getElementsByClassName("bottom");
butn[0].onclick = ()=>{
console.log(its.value);
	const date = new Date();
	function formatAMPM(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? '0'+minutes : minutes;
  let strTime = hours + ':' + minutes + ' ' + ampm;
  return strTime;
}

console.log(formatAMPM(new Date));
        const textnode = document.createTextNode(its.value+" "+formatAMPM(date)); 
	const newdiv = document.createElement("div");
    newdiv.appendChild(textnode);
    bottom[0].appendChild(newdiv);
its.value=null;

setInterval(myTimer, 1000);
function myTimer() {
  const d = new Date();
  document.getElementsByClassName("timer")[0].innerHTML = d.toLocaleTimeString();
}
}









//e.preventdefault use this function 
//onsubmit
