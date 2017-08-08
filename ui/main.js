console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'NEW VALUE';

var img = document.getElementById('madi');
marginLeft = 0;
marginRight = 0;
var moveRight = function(){
        marginLeft = marginLeft + 10;
        if(marginLeft<500)
        {
    img.style.marginLeft = marginLeft+'px';
            
        }
  
    
};
var moveLeft = function(){
        marginRight = marginRight + 10;
        if(marginRight<500)
        {
    img.style.marginRight = margiRight+'px';
            
        }
  
    
};
img.onclick = function(){
 
    var interval = setInterval(moveRight, 10); 
    var interval1 = setInterval(moveLeft, 10); 
    
  img.style.marginLeft = '1px';
  
};
