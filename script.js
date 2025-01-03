//get signup modal
let modal2=document.getElementById("modal2");
//get button that opens modal
let btn2= document.querySelector(".modal-trigger2");
//get span element that closes the modal
let span=document.querySelector(".close");
//when user  clicks on the button, open the modal
btn2.onclick = function(){
    modal2.style.display="block";
}
//when user clicks on <span>, close the modal
span.onclick= function(){
    modal2.style.display="none";
}
//when user clicks anywhere outside of the modal, close it.
window.onclick=  function(event1)
{
    if(event1.target == modal2)
    {
        modal2.style.display="none";
    }
}




//get login modal
let modal1=document.getElementById("modal1");
//get button that opens modal
let btn1= document.querySelector(".modal-trigger1");

// get span element that closes the modal
let spanhehe=document.querySelector(".closehehe");

//when user  clicks on the button, open the modal
btn1.onclick = function(){
    modal1.style.display="block";
}

//when user clicks on <span>, close the modal
spanhehe.onclick= function(){
    modal1.style.display="none";
}

//when user clicks anywhere outside of the modal, close it.
window.onclick=  function(event)
{
    if(event.target == modal1)
    {
        modal1.style.display="none";
    }
}




// let logOutBttn = document.querySelector(".logOuttt");
// logOutBttn.onclick= () => {
//     console.log("logout pressed");
// };




//NOW-

//Out of Focus function
let focusHatao = document.querySelector(".outOfFocusWarning");
let wordss = document.querySelector("#words");
document.querySelector("main").onclick= ()=>{
    console.log("blur removal in prog");
    document.querySelector(".blurred").style.opacity="0.65";
    document.querySelector(".blurred").style.filter="blur(0px)";
    document.querySelector("#cursor").style.display="block";
    focusHatao.style.display="none";
    focusHatao.style.zIndex="0";
    document.querySelector("#words").style.zIndex = "999";

}

//Capslock
let capsl=document.querySelector("#capsWarning");
document.addEventListener('keydown', (e) =>{
    if (e.getModifierState('CapsLock'))
    {
        capsl.style.display="block";
        capsl.style.zIndex="3";
    }
    else
        {
            capsl.style.display="none";
        }
})







