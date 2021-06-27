let shoppingArr = [];
let theSubbutton = document.getElementById("submit-button");
let buttonOfClearing = document.querySelector("#clear-button");


    if(shoppingArr.length < 1){
        buttonOfClearing.style.display = "none"
    } else {
        buttonOfClearing.style.display = "block"
    }




theSubbutton.addEventListener("click", item => {
    let the_ul_element = document.getElementById("the-only-ul");    
    let li = document.createElement("LI");
    let input_text = document.getElementById("input-text");
    let emptyError = document.querySelector(".empty-value-error");
    

    if( input_text.value === "" || input_text.value === null){
        emptyError.style.display = "block";
        return    
    } else {
        emptyError.style.display = "none";
        shoppingArr.push(input_text.value);  
        li.appendChild(document.createTextNode(input_text.value));
        li.classList.add("all-li-elements");
        the_ul_element.appendChild(li);
        input_text.value = "";
        
    }

    console.log(shoppingArr);    

})





















