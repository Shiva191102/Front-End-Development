const inputBox = document.getElementById("inputBox");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value ===''){
        alert("You Must Write Something!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value="";
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagname==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagname==="SPAN"){
        e.target.parentElement.remove();
    }

},false)