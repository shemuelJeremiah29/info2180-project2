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
         
     var emptySpotTop= "300px"; 
     var emptySpotLeft="300px"; 

        for(pe=0; pe<puzzlekids.length; pe++){
             puzzlekids[pe].addEventListener("click", function (){  
               
            
                        var clickTop= this.style.top;  
                        var clickLeft= this.style.left; 
                        
                        if(ifmoveable(this.style.top,this.style.left,emptySpotTop, emptySpotLeft)==true){       
                       
                                    var swapTop1 = clickTop; 
                                    var swapLeft1= clickLeft; 
                                    
                                    this.style.top=emptySpotTop; 
                                    this.style.left=emptySpotLeft;   
                                  
                                    emptySpotTop=swapTop1; 
                                    emptySpotLeft=swapLeft1;  
                        
                        }else{ 

                            this.style.borderColor= "red"; 

                        }

       });                  

  }

   } 

    function ifmoveable(coordTop, coordLeft, emptySpotTop, emptySpotLeft){  
                  var top= parseInt(coordTop); 
                  var left=parseInt(coordLeft); 
                  var empTop=parseInt(emptySpotTop); 
                  var empLf=parseInt(emptySpotLeft);   

                  console.log("Empty Top",empTop,"Top coordinate",coordTop);
                  // if(){ 

                  // }
                  // if(coordTop.value> empTop.value && ){


                  // } 

                  return false; 
                }
                        
      


      changeAtrPuzKids();
      positPuzKids();
      movepuzKids();
  }
