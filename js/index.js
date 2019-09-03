// Your code goes here

let test = document.querySelector(".intro h2");
window.addEventListener('load', (event) => {
    test.style.transform = "rotate(360deg)";
    test.style.transition = "1.2s";
  });


 let Para = document.querySelectorAll("p");
  Para[0].addEventListener("mouseover", (event) =>{   
    event.target.style.background = "orange";
  });

  Para[0].addEventListener("mouseout", (event) => {   
    event.target.style.background = "";
  })


  Para[1].addEventListener("mouseover", (event) => {   
    event.target.style.background = "orange";
  });

  Para[1].addEventListener("mouseout", (event) => {   
    event.target.style.background = "";
  })


  Para[2].addEventListener("mouseover", (event) => {   
    event.target.style.background = "orange";
  });

  Para[2].addEventListener("mouseout", (event) => {   
    event.target.style.background = "";
  })


let btnClick = document.querySelector("#btn1");
btnClick.addEventListener("dblclick", (events)=>{
   let contPara = document.querySelector('.destination p');
   contPara.textContent = "Congratulations! You just won a bonus FREE WEEKEND STAY in Blinx Hotels!!!";

   setTimeout(function() {
    contPara.textContent = "Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.";
  }, 1500);
} )

let navBar = document.querySelector("nav");
navBar.addEventListener("click", (event)=>{
window.alert("Default link has been Prevented");
event.preventDefault();
})
  
Context = document.querySelectorAll('.img-content');
Context[0].addEventListener('contextmenu', e => {
  window.alert("Warning, You are not to copy this image without due consent of the content owner!");
});

document.addEventListener('keydown', e =>{
    if(e.keyCode === 13){
        window.alert(`You just hit the ${e.code} key`);
    }else if (e.keyCode === 32){
        alert(`You just hit the ${e.code} key`);
    }else{
        false;
    }
})

const width = document.querySelector('h1');
window.addEventListener('resize', (e)=>{
    width.textContent = `Window Width: ${window.innerWidth}`;

    setTimeout(()=>{
        width.textContent = "Fun Bus";  
    },1500)
})
