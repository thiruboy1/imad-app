

var button = document.getElementById('counter');

button.onclick = function(){
var request = XMLHttpRequest();
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




