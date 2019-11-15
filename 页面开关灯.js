(function(){
    var btn = document.getElementById('btn');
    var body = document.body;
   var status = true;
   btn.onclick = function(){
     if(status){
         body.style.backgroundColor = '#000';
         status = false;
     }else {
         body.style.backgroundColor = '';
         status = true;
     }
    }
   })();