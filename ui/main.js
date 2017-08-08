console.log('Loaded!');
var element = document.getElementById('main-text');

element.innerHTML = 'NEW VALUE';

var img = document.getElementById('madi');

var moveRight = function(){
    for(marginLeft = 0;marginLeft<100; marginLeft++)
    {
    img.style.marginLeft = marginLeft+'px';
    }
    
};
img.onclick = function(){
    var interval = setInterval(moveRight, 50); 
  img.style.marginLeft = '100px';
  
};
