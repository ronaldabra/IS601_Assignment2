getInput = document.getElementById("input").value;
document.querySelector("button").onclick = palindrome(getInput);

function palindrome(str){
    var arr = []
    for(var i = 0; i < str.length; i++){
        arr[arr.length] = str[i]
    }

    var first = ""
    var second = ""

    for(var i = 0; i < arr.length/2; i++){
        first += arr[i]
    }
    for(var i = arr.length-1; i > (arr.length/2)-1; i--){
        second += arr[i]
    }    

    if(first === second){
        output.innerHTML = "It is a palindrome"
        output.style.color = "green";
        output.style.fontWeight = "bold"
    }
    else{
        output.innerHTML = "It is not a palindrome"
        output.style.color = "red";
    }

}