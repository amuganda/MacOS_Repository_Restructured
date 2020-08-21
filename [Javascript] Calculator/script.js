function clear(){
    document.form.textview.value="";
   }

function insert(num){
    if(temp==1){
     document.form.textview.value="";
     document.form.textview.value=document.form.textview.value + num
     temp=0;
    }
    else{
     document.form.textview.value=document.form.textview.value + num
    }
   }

  function equal(){
    var exp=document.form.textview.value;
    if(exp){
    document.form.textview.value=eval(exp)
    temp=1;
    }
   }
