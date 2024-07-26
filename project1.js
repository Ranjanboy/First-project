var statas=document.querySelector("h5");
var addFriend=document.querySelector("#add");
// var remove=document.querySelector("#rem");

value=0;

addFriend.addEventListener("click", function(){
    if(value==0){
        statas.innerHTML="Friends";
        statas.style.color="green";
        addFriend.innerHTML="Remove"
        addFriend.style.backgroundColor="#bababa";
        value=1;
    }else{
        statas.innerHTML="Stranger";
        statas.style.color="red";
        addFriend.innerHTML='Add Friend'
        addFriend.style.backgroundColor='chocolate'
        value=0;
    }
    
});


// remove.addEventListener("click",function(){
//     statas.innerHTML="Stranger";
//     statas.style.color="red";

// });


// alert('hello')