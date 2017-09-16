const numbersInput = document.getElementById("to-sort");
const numbersSelected = document.getElementById("inserted-numbers");
const numbersSorted = document.getElementById("sorted-numbers");

var numbersToSort = [];

numbersInput.onkeypress = function(ev){
    if(ev.keyCode == 13){
        numbersToSort.push(this.value);
        numbersInput.value="";
        displayArray(numbersToSort);
    }
}

var displayArray = function(arr){
    numbersSelected.value = arr;
}