

   
   var hod = 0;

    document.getElementById('game').onclick = function (event) {
        console.log(event);
        if(event.target.className == 'block'){
            if(hod % 2 == 0){
                event.target.innerHTML = 'x';
            }
            else{
                event.target.innerHTML = '0';
            }
            hod++;
            checkWinner();
        }
    }   


 
    function checkWinner(){
        var allBlcok = document.getElementsByClassName('block');
        if(allBlcok[0].innerHTML == 'x' && allBlcok[1].innerHTML == 'x' && allBlcok[2].innerHTML == 'x') alert("Победили крестики!"); 
        if(allBlcok[3].innerHTML == 'x' && allBlcok[4].innerHTML == 'x' && allBlcok[5].innerHTML == 'x') alert("Победили крестики!");
        if(allBlcok[6].innerHTML == 'x' && allBlcok[7].innerHTML == 'x' && allBlcok[8].innerHTML == 'x') alert("Победили крестики!");
        
        if(allBlcok[0].innerHTML == 'x' && allBlcok[3].innerHTML == 'x' && allBlcok[6].innerHTML == 'x') alert("Победили крестики!");
        if(allBlcok[1].innerHTML == 'x' && allBlcok[4].innerHTML == 'x' && allBlcok[7].innerHTML == 'x') alert("Победили крестики!");
        if(allBlcok[2].innerHTML == 'x' && allBlcok[5].innerHTML == 'x' && allBlcok[8].innerHTML == 'x') alert("Победили крестики!");
        
        if(allBlcok[0].innerHTML == 'x' && allBlcok[4].innerHTML == 'x' && allBlcok[8].innerHTML == 'x') alert("Победили крестики!");
        if(allBlcok[2].innerHTML == 'x' && allBlcok[4].innerHTML == 'x' && allBlcok[6].innerHTML == 'x') alert("Победили крестики!");
        
        //Нолики
        
        if(allBlcok[0].innerHTML == '0' && allBlcok[1].innerHTML == '0' && allBlcok[2].innerHTML == '0') alert("Победили нолики!");
        if(allBlcok[3].innerHTML == '0' && allBlcok[4].innerHTML == '0' && allBlcok[5].innerHTML == '0') alert("Победили нолики!");
        if(allBlcok[6].innerHTML == '0' && allBlcok[7].innerHTML == '0' && allBlcok[8].innerHTML == '0') alert("Победили нолики!");
        
        if(allBlcok[0].innerHTML == '0' && allBlcok[3].innerHTML == '0' && allBlcok[6].innerHTML == '0') alert("Победили нолики!");
        if(allBlcok[1].innerHTML == '0' && allBlcok[4].innerHTML == '0' && allBlcok[7].innerHTML == '0') alert("Победили нолики!");
        if(allBlcok[2].innerHTML == '0' && allBlcok[5].innerHTML == '0' && allBlcok[8].innerHTML == '0') alert("Победили нолики!");
        
        if(allBlcok[0].innerHTML == '0' && allBlcok[4].innerHTML == '0' && allBlcok[8].innerHTML == '0') alert("Победили нолики!");
        if(allBlcok[2].innerHTML == '0' && allBlcok[4].innerHTML == '0' && allBlcok[6].innerHTML == '0') alert("Победили нолики!");
        
      
    }

document.getElementById('butt').onclick = function (){     
    location.reload();    
}
