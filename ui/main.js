console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'NEW VALUE';

var img = document.getElementById('madi');
marginLeft = 0;
var moveRight = function(){
    for(i = 0;i<10; i++)
    {
        marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft+'px';
    return marginLeft;
    }
    
};
img.onclick = function(){
    var interval = setInterval(moveRight, 50); 
  img.style.marginLeft = '1px';
  
};
