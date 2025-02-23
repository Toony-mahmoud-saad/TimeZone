let heart = document.getElementById("heart");
let click = 0;
heart.onclick = ()=> {
  click++;
  if( click % 2 != 0){
    heart.style.color = 'red'
  }else{
    heart.style.color = 'black'
  }
  console.log(click);
  
}



