// Your code goes here

// 1 == Load Event
let test = document.querySelector(".intro h2");
window.addEventListener('load', (event) => {
    test.style.transform = "rotate(360deg)";
    test.style.transition = "1.2s";
  });

// 2 == MouseOver Event
 let Para = document.querySelectorAll("p");
  Para[0].addEventListener("mouseover", (event) =>{   
    event.target.style.background = "orange";
  });

  Para[1].addEventListener("mouseover", (event) => {   
    event.target.style.background = "orange";
  });

  Para[2].addEventListener("mouseover", (event) => {   
    event.target.style.background = "orange";
  });

  // 3 == MouseOut Event
  Para[0].addEventListener("mouseout", (event) => {   
    event.target.style.background = "";
  })

  Para[1].addEventListener("mouseout", (event) => {   
    event.target.style.background = "";
  })

  Para[2].addEventListener("mouseout", (event) => {   
    event.target.style.background = "";
  })


// 4 == DoubleClick Event
let btnClick = document.querySelector("#btn1");
btnClick.addEventListener("dblclick", (events)=>{
   let contPara = document.querySelector('.destination p');
   contPara.textContent = "Congratulations! You just won a bonus FREE FUN IN THE SUN WEEKEND STAY in Blinx Hotels!!!";

   setTimeout(function() {
    contPara.textContent = "Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.";
  }, 1500);
} )


// 5 == Click Event & PreventDefault
let navBar = document.querySelector("nav");
navBar.addEventListener("click", (event)=>{
window.alert("Default link has been Prevented");
event.preventDefault();
})
  

// 6 == ContextMenu Event
Context = document.querySelectorAll('.img-content');
Context[0].addEventListener('contextmenu', e => {
  window.alert("Warning, You are not to copy this image without due consent of the content owner!");
});


// 7 == Keydown Event
document.addEventListener('keydown', e =>{
    if(e.keyCode === 13){
        window.alert(`You just hit the ${e.code} key`);
    }else{
        false;
    }
})

// 8 == Resize Event
const width = document.querySelector('h1');
window.addEventListener('resize', (e)=>{
    width.textContent = `Window Width: ${window.innerWidth}`;

    setTimeout(()=>{
        width.textContent = "Fun Bus";  
    },1500)
})

// 9 == Copy Event
Para[0].addEventListener('copy', (event) => {
    alert("Warning, This content is copyright protected!")
    event.preventDefault();
});

Para[1].addEventListener('copy', (event) => {
    alert("Warning, This content is copyright protected!")
    event.preventDefault();
});

Para[2].addEventListener('copy', (event) => {
    alert("Warning, This content is copyright protected!")
    event.preventDefault();
});

// 10 ==Keypress Event
document.addEventListener('keypress', (e)=> {
    if (e.keyCode === 32){
        alert(`You just hit the ${e.code} key`);
    }else{
        false;
    }
})

// Stop Propagation Along with Click Event

let div = document.querySelector(".content-destination");
let midPar = document.querySelector(".content-destination p");
midPar.addEventListener('click', (ev)=>{
    div.addEventListener('click', (eve)=>{
        div.style.background = "pink";  
        console.log("inside div");  
    })

    midPar.textContent = "I got clicked, and stopped propagation!";
    ev.stopPropagation();

    setTimeout(function() {
        midPar.textContent = "Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.";
        div.style.background = "";  
    }, 1500);
})