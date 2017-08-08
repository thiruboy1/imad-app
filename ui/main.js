

var button = document.getElementById('counter');

var request = XMLHttpRequest();
request.httpRequest.onreadystatechange = function()
{
    // Process the server response here.
   if (request.readyState === XMLHttpRequest.DONE) 
   {
       if (httpRequest.status === 200)
       {
          var counter = request.responseText; 
          var span = document.getElementById('count');
          span.innerHTML = counter.toString();
       }
        
    }
};

button.onclick = function(){
    
 httpRequest.open('GET', 'http://thiruboy1.imad.hasura-app.io/counter',true);
 httpRequest.send();




};




