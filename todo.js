changeThisPageFunc=function(){
  
  var input=document.getElementById("todo").value;
  var myUl = document.querySelector(“#tasklist”);
  var myLitext = document.createTextNode(input);
  
  var myPriority = document.querySelector(“#priority”);
  var myLi = document.createElement("li");
  
  var myInput = document.createElement(“INPUT”);
  myInput.type = “checkbox”;
  
  myLi.classList.add(myPriority.value);
  myUl.appendChild(myLi);
  myLi.appendChild(myLitext);
  
  myInput = document.createElement(“INPUT”);
  myInput.type = “checkbox”;
  
}


doneTask=function(){
   if ( this.checked ) {
   this.parentNode.classList.add("done");
   } else{
       this.parentNode.classList.remove("done");
   }

}

