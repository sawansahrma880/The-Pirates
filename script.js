 
  
  score = 0;

  cross = true;

  audio = new Audio('main.mp3')
  audiogo = new Audio('gameover.wav')

  setTimeout(()=>{
    audio.play()
},1000);
   

  document.onkeydown = function(e){
    console.log("the key is :", e.keyCode)
    if(e.keyCode==32){
        thif = document.querySelector('.chor');
        thif.classList.add('animateThif');
        setTimeout(()=>{
             thif.classList.remove('animateThif')
        },700);
        }
        
        if(e.keyCode==39){
          chor = document.querySelector('.chor');
          chorx = parseInt(window.getComputedStyle(chor, null).getPropertyValue('left'));
          chor.style.left= chorx + 112 + "px";
          }

          if(e.keyCode==37){
            chor = document.querySelector('.chor');
            chorx = parseInt(window.getComputedStyle(chor, null).getPropertyValue('left'));
            chor.style.left= (chorx - 112 )+ "px";
            }
  }

  setInterval (( )=>{
            chor = document.querySelector('.chor');

            gameover = document.querySelector('.gameover');

            polic = document.querySelector('.polic');

            tx= parseInt(window.getComputedStyle(chor, null).getPropertyValue('left'));
            ty= parseInt(window.getComputedStyle(chor, null).getPropertyValue('top'));

            px= parseInt(window.getComputedStyle(polic, null).getPropertyValue('left'));
            py= parseInt(window.getComputedStyle(polic, null).getPropertyValue('top'));

            offsetx = Math.abs(tx-px);
            offsety = Math.abs(ty-py);

            if(offsetx<70 && offsety<50){
              gameover.innerHTML = "Game Over - Relod to Restart"
              polic.classList.remove('policAni')

              audiogo.play();
              setTimeout(()=>{
                audio.pause();
            },1000);
            }

            else if(offsetx < 145 && cross){
              score +=1
              Updatescore(score);

              cross = false; 

              setTimeout(()=>{
                cross= true;
           },1000);

           setTimeout(()=>{
            anitime = parseFloat(window.getComputedStyle(polic, null).getPropertyValue('animation-duration'));
           newtime = anitime- 0.1;

           polic.style.animationDuration = newtime + 's';
       },700);
             
           

            }

  },100);

  function Updatescore (){
        scoreCONT.innerHTML = "YOUR SCORE : " + score
  }