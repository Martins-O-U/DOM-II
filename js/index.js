// Your code goes here

let test = document.querySelector(".intro h2");
window.addEventListener('load', (event) => {
    test.style.transform = "rotate(360deg)";
    test.style.transition = "1.2s";
  });


 let Para = document.querySelectorAll("p");
  Para[0].addEventListener("mouseover", function( event ) {   
    event.target.style.background = "orange";
  });

  Para[0].addEventListener("mouseout", function( event ) {   
    event.target.style.background = "";
  })


  Para[1].addEventListener("mouseover", function( event ) {   
    event.target.style.background = "orange";
  });

  Para[1].addEventListener("mouseout", function( event ) {   
    event.target.style.background = "";
  })


  Para[2].addEventListener("mouseover", function( event ) {   
    event.target.style.background = "orange";
  });

  Para[2].addEventListener("mouseout", function( event ) {   
    event.target.style.background = "";
  })


let btnClick = document.querySelector("#btn1");
btnClick.addEventListener("click", (events)=>{
   let contPara = document.querySelector('.destination p');
   console.log(contPara);
   contPara.textContent = "Congratulations! You just won a bonus FREE WEEKEND STAY in Blinx Hotels!!!";

   setTimeout(function() {
    contPara.textContent = "Expedition excursion design excursion fun, clean simple organized WordPress Travel colorful webdesign. Traveler blogger website design expedition clean excursion traveling.";
  }, 1500);
} )