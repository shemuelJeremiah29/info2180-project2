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
        }            
        } 


  
   function positimage (){
    
   var pzi = puzzleimage.style.backgroundImage="url(https://i.pinimg.com/736x/63/aa/28/63aa288bc879bd2428a241b0bbe132f8--christian-paintings-christian-artwork.jpg)"; 
     puzzleimage.style.backgroundSize= "cover";  
    // puzzleimage.style.width="400px"; 
    // puzzleimage.style.height="400px";  
  
    var top= 0;
    var lf= 0;   

  
    
    for (var pi=0; pi<puzzlekids.length; pi++) 
    {     
      // puzzlekids[pi].style.background = "url(https://i.pinimg.com/736x/63/aa/28/63aa288bc879bd2428a241b0bbe132f8--christian-paintings-christian-artwork.jpg"; 
      puzzlekids[pi].style.backgroundPosition = (top+"px")+""+(lf+"px"); 
     
            //first loop for top elements in puzzle area to assign parts of the image to it
            if(top == 0 && lf == 400){ 

                top = 100; 
                lf = 0;  
            }  

            if(top == 100 && lf ==400){

              top = 200; 
              lf= 0; 
            }  

            if(top == 200 && lf == 400){ 

              top = 300; 
              lf = 0; 
            }
    }
   }    


   function movepuzKids (event){ 
    var kid = puzzlekids.addEventListener("click", function (event){ 

             


    });

   }

      changeAtrPuzKids();
      positPuzKids();
      positimage();

  }
