

var button = document.getElementById('counter');

button.onclick = function(){
var request = new XMLHttpRequest();


request.onreadystatechange = function()
{
    // Process the server response here.
   if (request.readyState === XMLHttpRequest.DONE) 
   {
       if (request.status === 200)
       {
          var counter = request.responseText; 
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
       }
        
    }
};



    
 request.open('GET', 'http://thiruboy1.imad.hasura-app.io/counter',true);
 request.send(null);




};

var submitbtn = documnet.getElementById('submit-btn');
submitbtn.onclick = function(){
    
    var names = [name11,name2,name3,name5];
    var list = '';
    for(i=0;i<names.length;i++){
        list += '<li>'+ names[i] +'</li>';
    }
       var ul = document.getElementById('namelist');
    
    ul.innerHTML = list;
    
};



