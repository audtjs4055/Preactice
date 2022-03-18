const editbtn1 = document.getElementById('btn1');
const editable1 = document.getElementById('pwd');

const editbtn2 = document.getElementById('btn2');
const editable2 = document.getElementById('phone');

const editbtn3 = document.getElementById('btn4');
const editable3 = document.getElementById('address');

editbtn1.addEventListener('click',function(){
if(!editable1.isContentEditable){
    
    editable1.contentEditable='true';
    editable1.style.background='white';
    editbtn1.innerHTML="저장";
    // editable1.style.border="solid 1px black";
    editbtn1.style.background='linear-gradient(45deg, Violet, Orange)';
  
}
else{
    editable1.contentEditable='false';
    editbtn1.innerHTML="수정하기";
    // editable1.style.border="solid 0px black";
    editbtn1.style.background='white';
    editable1.style.background='none';
}

});

editbtn1.addEventListener('click',function(){
if(!editable2.isContentEditable){
    editable2.style.background='white';
    editable2.contentEditable='true';
    editbtn2.innerHTML="저장";
    editbtn2.style.background='linear-gradient(45deg, Violet, Orange)';
  
}
else{
    editable2.contentEditable='false';
    editbtn1.innerHTML="수정하기";
    editbtn1.style.background='white';
    editable2.style.background='none';
}

});

editbtn1.addEventListener('click',function(){
if(!editable3.isContentEditable){
    editable3.style.background='white';
    editable3.contentEditable='true';
    editbtn3.innerHTML="저장";
    editbtn3.style.background='linear-gradient(45deg, Violet, Orange)';
  
}
else{
    editable3.contentEditable='false';
    editbtn1.innerHTML="수정하기";
    editbtn1.style.background='white';
    editable3.style.background='none';
}

});

var check = document.getElementById("check");
var img = document.getElementById("img");
var C = document.getElementById("C");
var btn = document.getElementById("btn");
var tr= document.getElementById("tr");


btn.addEventListener("click",function(){
if(check.checked){
    tr.style.display="none";
    
}

})