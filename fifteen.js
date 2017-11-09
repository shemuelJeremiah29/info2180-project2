window.onload= function () {

var puzzlearea= document.getElementById("puzzlearea");
var puzzlekids= puzzlearea.children;
var puzzleimage = document.getElementById("puzzlearea");


function changeAtrPuzKids (){

    for (pz=0; pz< puzzlekids.length; pz++) {
      puzzlekids[pz].classList.add("puzzlepiece");
      }

  }


function positPuzKids(){

       var topVal = 0;
       var lfVal=0;

        //loop through the child elements of the parent
        //puzzlearea div.
        for(po =0; po<puzzlekids.length; po++){

          puzzlekids[po].style.top= (topVal)+"px";
          puzzlekids[po].style.left=(lfVal)+"px";
          lfVal+=100;

                //First row of the puzzle
               if(lfVal==400 && topVal==0)
               {
                lfVal=0;
                topVal=100;
                }

               //Second row of the puzzle
               if(lfVal==400 && topVal==100)
               {
                lfVal=0;
                topVal=200;
               }

               //Third row of the puzzle
               if(lfVal==400 && topVal==200)
               {
                lfVal=0;
                topVal=300;
               }
             
             puzzlekids[po].style.backgroundPosition= "-"+puzzlekids[po].style.left+" -"+puzzlekids[po].style.top;  
              
        
        }
        }



  


   function movepuzKids (){ 
         
       var pe; 
        for(pe=0; pe<puzzlekids.length; pe++){
             puzzlekids[pe].addEventListener("click", myPositPuz);  


               function myPositPuz(){  
                        
                        var tarval=event.target.value;  
                        console.log(tarval);   

                        var clickTop= puzzlekids[pe].style.top; 
                        var clickLeft=puzzlekids[pe].style.left; 

// document.getElementsByClassName('puzzlepiece')[0].style.top;
// "0px"
// document.getElementsByClassName('puzzlepiece')[11].style.top;
// "200px"
        
                        var emptySpotTop= puzzlearea.style.top="400px"; 
                        var emptySpotLeft=puzzlearea.style.left="400px"; 

                        var swapTop1 = clickTop; 
                        var swapLeft1= clickLeft; 

                        clickTop=emptySpotTop; 
                        clickLeft=emptySpotLeft;  

                        emptySpotTop=swapTop1; 
                        emptySpotLeft=swapLeft1;   

      }

  }

   }

      changeAtrPuzKids();
      positPuzKids();
      movepuzKids();
  }
