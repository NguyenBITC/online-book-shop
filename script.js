
searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle("active");
}

document.querySelector('.signup-form-container').onclick = ()=>{
    signUpForm.classList.toggle("active");
}
document.querySelector('#close-login-btn').onclick = ()=>{
    loginForm.classList.remove("active");
}




let loginForm = document.querySelector('.login-form-container');
let signUpForm = document.querySelector('.signup-form-container');
let signupLink = document.querySelector('#signup-link');
let signinLink = document.querySelector('#signin-link');

document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}

document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}

signupLink.onclick = () => {
    loginForm.classList.remove('active');
    signUpForm.classList.add('active');
}

signinLink.onclick = () => {
    signUpForm.classList.remove('active');
    loginForm.classList.add('active');
}







// let loginForm =document.querySelector('.login-form-container');
// document.querySelector('#login-btn').onclick = ()=>{
//     loginForm.classList.toggle("active");
// }
// document.querySelector('#close-login-btn').onclick = ()=>{
//     loginForm.classList.remove("active");
// }
// let signUpForm =document.querySelector('.login');






window.onscroll = () => {
    searchForm.classList.remove('active');
    if(window.scrollY >80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
}
window.onload = () => {
    if(window.scrollY >80){
        document.querySelector('.header .header-2').classList.add('active');
    }else{
        document.querySelector('.header .header-2').classList.remove('active');
    }
    fadeOut();
}

// function loader(){
//   document.querySelector('.loader-container').classList.add('active');
// }
// function fadeOut(){
//   setTimeout(loader, 2000);
// }



var swiper = new Swiper(".books-slider", {
   loop:true,
   centeredSlides: true,
   autoplay:{
    delay:9500,
    disableOnInteraction:false,
   },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay:{
     delay:9500,
     disableOnInteraction:false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
     breakpoints: {
       0: {
         slidesPerView: 1,
       },
       450: {
        slidesPerView: 2,
      },
       768: {
         slidesPerView: 3,
       },
       1024: {
         slidesPerView: 4,
       },
     },
   });
   
   var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10, 
    
    loop:true,
    centeredSlides: true,
    autoplay:{
     delay:9500,
     disableOnInteraction:false,
    },

     breakpoints: {
       0: {
         slidesPerView: 1,
       },
     
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
     },
   });

 var swiper = new Swiper(".review-slider", {
    spaceBetween: 10,
    loop:true,
    grabCursor:true,
    centeredSlides: true,
    autoplay:{
     delay:9500,
     disableOnInteraction:false,
    },

     breakpoints: {
       0: {
         slidesPerView: 1,
       },
     
       768: {
         slidesPerView: 2,
       },
       1024: {
         slidesPerView: 3,
       },
     },
   });

  
   


































const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

// Gán sự kiện click cho mỗi nút
btn1.addEventListener('click', () => {
    window.location.href = 'page1.html'; // Thay đổi URL của trang khi nhấp vào nút 1
});

btn2.addEventListener('click', () => {
    window.location.href = 'page2.html'; // Thay đổi URL của trang khi nhấp vào nút 2
});

btn3.addEventListener('click', () => {
    window.location.href = 'page3.html'; // Thay đổi URL của trang khi nhấp vào nút 3
});









let count =0;
const counter = document.getElementById('counter');
document.getElementById('animated').addEventListener('click', Event =>{
  const cl = counter.classList;
  const c = 'animated-counter';
  count++;
  counter.innerText = count;
  cl.remove(c, cl.contains(c));
  setTimeout(()=>
  counter.classList.add('animated-counter'),1) 
} )

var cartbtn = document.querySelector('#addtocart');
cartbtn.addEventListener('click' ,function(){

})
function addtocart(){
  window.location.href = 'cart.html';
}