const box1 = document.querySelector(`.box-1`);
const box2 = document.querySelector(`.box-2`);
const box3 = document.querySelector(`.box-3`);
const box4 = document.querySelector(`.box-4`);
const box5 = document.querySelector(`.box-5`);
const box6 = document.querySelector(`.box-6`);
const box7 = document.querySelector(`.box-7`);



box1.addEventListener(`mouseover`, function(){
    this.style.transform = `translateY(-100px)`;
})  
box1.addEventListener(`mouseleave`, function(){
    this.style.transform = `translateY(0)`;
})  



box2.addEventListener(`mouseover`, function(){
    this.style.transform = `translateY(100px)`;
})  
box2.addEventListener(`mouseleave`, function(){
    this.style.transform = `translateY(0)`;
})  


box3.addEventListener(`mouseover`, function(){
    this.style.transform = `scale(0.5)`;
})  
box3.addEventListener(`mouseleave`, function(){
    this.style.transform = `scale(1)`;
})  


box4.addEventListener(`mouseover`, function(){
    this.style.transform = `scale(2)`;
})
box4.addEventListener(`mouseleave`, function(){
    this.style.transform = `scale(1)`;
})   


box5.addEventListener(`mouseover`, function(){
    this.style.backgroundColor = `red`;
})
box5.addEventListener(`mouseleave`, function(){
    this.style.backgroundColor = `blue`;
})


box6.addEventListener(`mouseover`, function(){
    this.style.transform = `rotate(360deg)`;
})
box6.addEventListener(`mouseleave`, function(){
    this.style.transform = `rotate(0deg)`;
})


box7.addEventListener(`mouseover`, function(){
    this.style.transform = `skew(45deg)`;
})
box7.addEventListener(`mouseleave`, function(){
    this.style.transform = `skew(0deg)`;
})




