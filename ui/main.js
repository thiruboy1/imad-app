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

img.onclick = function(){
 
    var interval = setInterval(moveRight, 10); 

};
img.style.marginLeft = 0;
