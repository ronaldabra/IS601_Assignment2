getInput = document.getElementById("input").value;
document.getElementById("button").onclick = reverse(getInput);

function reverse(str){
    var arr = []
    for(var i = 0; i < str.length; i++){
        arr[arr.length] = str[i]
    }
    // [a,b,c]
    var reverseString = ""
    for(var i = arr.length-1; i > -1; i--){
        
        reverseString += arr[i]
    }
    document.getElementById("output").innerHTML = reverseString;
}