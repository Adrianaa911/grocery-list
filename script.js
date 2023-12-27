const valueInput = document.getElementById('valueInput');
const submitBtn = document.getElementById('submitBtn');
const outputItems = document.getElementById('outputItems');
const clearItems = document.getElementById('clearItems');

//Code for adding items
function saveToLocalStorage() {
  let value = document.getElementById('valueInput').value;
  let key = `input ${Math.floor(Math.random()* 80)}`
  console.log(value);
console.log(key);
console.log("test");
  if (value) {
    localStorage.setItem( key, value);
    valueInput.value = "";
  }

  let storageValues = Object.values(localStorage);
  console.log(storageValues);
  outputItems.innerHTML = "";

  for (item in storageValues) {
    outputItems.innerHTML += `<h4>${storageValues[item]}</h4>`
  }
}
 
//Embeding adding items function for submit button
submitBtn.addEventListener ('click', saveToLocalStorage);


//Code for the clear button
const clearLocalStorage = () => {
  localStorage.clear ();
  location.reload();
}
//Clear items button
clearItems.addEventListener('click', clearLocalStorage);
