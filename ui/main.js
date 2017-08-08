console.log('Loaded!');
var element = document.getElementById('main-text');
element.onclick = function(){
element.innerHTML = 'NEW VALUE';
};

var img = document.getElementById('madi');
marginLeft = 0;
marginRight = 0;
var moveRight = function(){
        marginLeft = marginLeft + 10;
        if(marginLeft<500)
        {
    img.style.marginLeft = marginLeft+'px';
            
        }
        else if (marginLeft >= 500 )
        {
            img.style.marginLeft = 0;
            
        }
        
  
    
};

img.onclick = function(){
 
    var interval = setInterval(moveRight, 10); 

};

