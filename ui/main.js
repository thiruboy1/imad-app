console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'NEW VALUE';

var img = document.getElementById('madi');
marginLeft = 0;
var moveRight = function(){
        marginLeft = marginLeft + 10;
        if(marginLeft<100)
        {
    img.style.marginLeft = marginLeft+'px';
            
        }
  
    
};
img.onclick = function(){
 
    var interval = setInterval(moveRight, 50); 
    
  img.style.marginLeft = '1px';
  
};
