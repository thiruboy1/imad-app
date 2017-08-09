

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

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    
    var names = [name1,name2,name3,name4];
    var list = '';
    for(i=0;i<names.length;i++){
        list += '<li>'+ names[i] +'</li>';
        console.log(list[i]);
    }
       var ul = document.getElementById('namelist');
    
    ul.innerHTML = list;
    
};



