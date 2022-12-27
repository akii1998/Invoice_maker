
let addItem = document.getElementById("addItem");



//take a empty array for  push all the data in list 

let data = [];

// this is logic for append the data 

addItem.addEventListener("click", (e) => {
  e.preventDefault();
  let productName = document.getElementById("name").value;
  let productPrice = document.getElementById("price").value;
  let productQuatity = document.getElementById("quantity").value;


 //check the all box are fill or not 

  if (!productName || !productPrice || !productQuatity) {
    alert("Please fill the all boxes");
    return;
  }

  //make a object from push the array 

  let objectData = {
    productName,
    productPrice,
    productQuatity,
  };

  data.push(objectData);

//   print the data for check data is push or not 

  console.log(data);

  let displaydetails = document.getElementById("data_body");

//   make the new row for append the data 

// map the  data in table 

  let newRow = document.createElement("tr");
  data.map((ele) => {
    newRow.innerHTML = `<td>
    ${ele.productName}</td><td>${ele.productPrice}</td> <td>${ele.productQuatity}</td>`;
  });
  displaydetails.append(newRow);

  //after append the data we have to clear the input box 

  document.getElementById("name").value = "";
  document.getElementById("price").value = "";
  document.getElementById("quantity").value = "";
});


//for print the table we have used inbuilt function 

function printList() {
  window.print();
}
