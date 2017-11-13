window.onload= function () {

var puzzlearea= document.getElementById("puzzlearea");
var puzzlekids= puzzlearea.children;



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
<<<<<<< HEAD
     var emptySpotLeft="300px"; 
     var emptySpotRight="300px"; 
     var emptySpotBott="300px";  
=======
     var emptySpotLeft="300px";  

     for(pm=0; pm<puzzlekids.length; pm++){
              puzzlekids[pm].addEventListener("mouseover", function(){ 
                if(ifmoveable (this.style.top,this.style.left,emptySpotTop, emptySpotLeft)){
                  this.classList.add("movablepiece"); 
                }
              });
>>>>>>> master

              puzzlekids[pm].addEventListener("mouseleave",function(){
                this.className = 'puzzlepiece';
              }); 
               
                    puzzlekids[pm].addEventListener("click", function (){  
                      
                          
                        var clickTop= this.style.top;  
                        var clickLeft= this.style.left;  

                        
<<<<<<< HEAD
                        if(ifmoveable(this.style.top,this.style.left, this.style.right, this.style.bottom, emptySpotTop, emptySpotLeft, emptySpotRight,emptySpotBott)==true){       
                       
                                    var swapTop1 = clickTop; 
=======
                        
                                if(ifmoveable (this.style.top,this.style.left,emptySpotTop, emptySpotLeft)){
                                   
                                      var swapTop1 = clickTop; 
>>>>>>> master
                                    var swapLeft1= clickLeft; 
                                    
                                    this.style.top=emptySpotTop; 
                                    this.style.left=emptySpotLeft;   
                                  
                                    emptySpotTop=swapTop1; 
                                    emptySpotLeft=swapLeft1;  
                                    
                                }
                              });          
                                    
      

  } 

   }  



    function ifmoveable(coordTop, coordLeft, coordright, coordbottom, emptySpotTop, emptySpotLeft, emptySpotRight,emptySpotBott){  
                  var top=parseInt(coordTop);  
                  var left=parseInt(coordLeft); 
                  var empTop=parseInt(emptySpotTop); 
                  var empLf=parseInt(emptySpotLeft);  
                  var right=parseInt(coordright); 
                  var bottom= parseInt(coordbottom);   
                  var empbott=parseInt(emptySpotBott); 
                  var empright=parseInt(emptySpotRight);

                  console.log("Empty Top",empTop,"Top coordinate",top);
<<<<<<< HEAD
                  if(((empTop-top)<=100) && ((empLf-left)<=100) || ((left-empLf)>=100)&&((empbott-bottom)<=100) && ((bottom-empbott)>=100) && ((empright-right)<=100 && (right-empright)>=100)){
                      return true; 
=======
                  if((top-100)==empTop&& left == empLf || (top+100)==empTop && left == empLf || top == empTop && left+100 == empLf || top == empTop && left-100 == empLf ){
                      return true;  

>>>>>>> master
                }else{ 
                      return false; 
                } 
              }
                        
<<<<<<< HEAD
      
    // function puzzleshuffle(){ 

=======
      // function shufflepuzzle(){ 


      // }
>>>>>>> master

    // } 

      changeAtrPuzKids();
      positPuzKids();
      movepuzKids();
  }
