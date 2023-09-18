// let expenses = [];
// let expenseToUpdate = null;
// let expenseToUpdateIndex = null;

// let amount = document.getElementById("amounts");
// let category = document.getElementById("categories");
// let date = document.getElementById("dates");

// // let radioButton = document.getElementById("radio-button");
// // let eventText = document.getElementById("event-text");
// // let startEndDate = document.getElementById("start-end-date");
// // let descriptionText = document.getElementById("description-text");
// // let file = document.getElementById("file");

// let submitData = document.getElementById("submit-data");
// let expenseTableBody = document.getElementById("expense-table-body");

// submitData.addEventListener("click", function () {
//   let Amount = amount.value;
//   let Category = category.value;
//   let Date = date.value;
//   // let radioButton = radioButton.value;
//   // let eventText = eventText.value;
//   // let startEndDate = startEndDate.value;
//   // let descriptionText = descriptionText.value;
//   // let file = file.value;

//   if (Amount <= 0) {
//     alert("Please enter a valid amount");
//     return;
//   }
//   if (Category == "") {
//     alert("Please select a category");
//     return;
//   }
//   if (Date == "") {
//     alert("Please select a date");
//     return;
//   }
//   // if (radioButton == "") {
//   //   alert("Please select a radio button");
//   //   return;
//   // }
//   // if (eventText == "") {
//   //   alert("Please enter a text");
//   //   return;
//   // }
//   // if (startEndDate == "") {
//   //   alert("Please select a dates");
//   //   return;
//   // }
//   // if (descriptionText == "") {
//   //   alert("Please select a text");
//   //   return;
//   // }
//   // if (file == "") {
//   //   alert("Please upload a file");
//   //   return;
//   // }

//   // expenses.push({
//   //   amount,
//   //   category,
//   //   date,
//   //   // radioButton,
//   //   // eventText,
//   //   // startEndDate,
//   //   // descriptionText,
//   //   // file,
//   // });

//   amount.value = "";
//   category.value = "";
//   date.value = "";

//   if (expenseToUpdateIndex !== null) {
//     // Update the existing expense by replacing its values
//     expenses[expenseToUpdateIndex] = { amount, category, transactionDate };
//     // Clear the expenseToUpdateIndex variable
//     expenseToUpdateIndex = null;
//   } else {
//     // Create a new expense and add it to the array
//     expenses.push({ amount, category, transactionDate });
//   }

//   // expenses.push({
//   //   amount: Amount,
//   //   category: Category,
//   //   date: Date,
//   // });

//   let newRow = expenseTableBody.insertRow();

//   let amountCell = newRow.insertCell();
//   let categoryCell = newRow.insertCell();
//   let dateCell = newRow.insertCell();
//   // let radioButtonCell = newRow.insertCell();
//   // let eventTextCell = newRow.insertCell();
//   // let startEndDateCell = newRow.insertCell();
//   // let descriptionTextCell = newRow.insertCell();
//   // let fileCell = newRow.insertCell();
//   let deleteCell = newRow.insertCell();
//   let updateCell = newRow.insertCell();
//   // creation button
//   let deleteButton = document.createElement("button");
//   // button css
//   // deleteButton.style.backgroundColor = "rgb(90, 229, 176)";
//   deleteButton.style.backgroundColor = "#dc3455";
//   deleteButton.style.color = "#fff";
//   deleteButton.style.border = "none";
//   deleteButton.style.padding = "3px 7px";
//   deleteButton.style.borderRadius = "5px";

//   let updateButton = document.createElement("button");
//   updateButton.style.backgroundColor = "#6ec787";
//   updateButton.style.color = "#fff";
//   updateButton.style.border = "none";
//   updateButton.style.padding = "4px 7px";
//   updateButton.style.marginLeft = "7px";
//   updateButton.style.borderRadius = "5px";

//   deleteButton.textContent = "Delete";
//   updateButton.textContent = "Update";

//   updateButton.addEventListener("click", function () {
//     // Populate the modal fields with the data from the selected expense
//     // amount.value = expense.amount;
//     // category.value = expense.category;
//     // date.value = expense.transactionDate;
//     // // Show the modal for editing
//     // $("#exampleModal").modal("show");
//   });

//   deleteButton.classList.add("deleteButton");
//   updateButton.classList.add("updateButton");
//   deleteButton.addEventListener("click", function () {
//     expenses.splice(expenses.indexOf(expense), 1);

//     expenseTableBody.removeChild(newRow);
//   });

//   let expense = expenses[expenses.length - 1];

//   amountCell.textContent = expense.amount;
//   categoryCell.textContent = expense.category;
//   dateCell.textContent = expense.date;
//   // radioButtonCell.textContent = expense.radioButton;
//   // eventTextCell.textContent = expense.eventText;
//   // startEndDateCell.textContent = expense.startEndDate;
//   // descriptionTextCell.textContent = expense.descriptionText;
//   // fileCell.textContent = expense.file;
//   deleteCell.appendChild(deleteButton);
//   deleteCell.appendChild(updateButton);
// });

// for (let expense of expenses) {
//   let newRow = expenseTableBody.insertRow();
//   let amountCell = newRow.insertCell();
//   let categoryCell = newRow.insertCell();
//   let dateCell = newRow.insertCell();
//   // let radioButtonCell = newRow.insertCell();
//   // let eventTextCell = newRow.insertCell();
//   // let startEndDateCell = newRow.insertCell();
//   // let descriptionTextCell = newRow.insertCell();
//   // let fileCell = newRow.insertCell();
//   let deleteCell = newRow.insertCell();
//   let deleteButton = document.createElement("button");

//   deleteButton.textContent = "Delete";
//   deleteButton.classList.add("deleteButton");
//   deleteButton.addEventListener("click", function () {
//     expense.splice(expense.indexOf(expense), 1);

//     expenseTableBody.removeChild(newRow);
//   });
//   // / Fucntion for clear Inputs fields

//   let btnClear = document.getElementById("btnClear");
//   let inputs = document.querySelectorAll("input");
//   btnClear.addEventListener("click", () => {
//     inputs.forEach((input) => (input.value = ""));
//   });

//   let btnCross = document.getElementById("btnCross");
//   let Inputs = document.querySelectorAll("input");
//   btnCross.addEventListener("click", () => {
//     inputs.forEach((input) => (input.value = ""));
//   });

//   amountCell.textContent = expense.amount;
//   categoryCell.textContent = expense.category;
//   dateCell.textContent = expense.date;
//   // radioButtonCell.textContent = expense.radioButton;
//   // eventTextCell.textContent = expense.eventText;
//   // startEndDateCell.textContent = expense.startEndDate;
//   // descriptionTextCell.textContent = expense.descriptionText;
//   // fileCell.textContent = expense.file;
//   deleteCell.appendChild(deleteButton);
// }

let expenses = [];
let expenseToUpdate = null;
let expenseToUpdateIndex = null; // Add this variable to store the index of the expense being edited
let amount = document.getElementById("amounts");
let category = document.getElementById("categories");
let date = document.getElementById("dates");
const saveBtn = document.getElementById("save-btn");
const expenseTableBody = document.getElementById("expense-table-body");
saveBtn.addEventListener("click", function () {
  const Amount = amount.value;
  const Category = category.value;
  const Date = date.value;
  if (amount == "" || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  if (category == "") {
    alert("Please select a category");
    return;
  }
  if (date == "") {
    alert("Please select a date");
    return;
  }
  amount.value = "";
  category.value = "";
  date.value = "";

  if (expenseToUpdateIndex !== null) {
    // Update the existing expense by replacing its values
    expenses[expenseToUpdateIndex] = { amount, category, date };
    // Clear the expenseToUpdateIndex variable
    expenseToUpdateIndex = null;
  } else {
    // Create a new expense and add it to the array
    expenses.push({ Amount, Category, Date });
  }
  // Refresh the table
  updateExpenseTable();
  // Close the modal
  $("#exampleModal").modal("hide");
});
function updateExpenseTable() {
  // Clear the table body
  expenseTableBody.innerHTML = "";
  // Loop through the expenses and update the table
  expenses.forEach(function (expense, index) {
    const newRow = expenseTableBody.insertRow();
    newRow.dataset.expenseId = index; // Set a custom data attribute to store the index
    const amountCell = newRow.insertCell();
    const categoryCell = newRow.insertCell();
    const transactionDateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const updateCell = newRow.insertCell();

    amountCell.textContent = expense.Amount;
    categoryCell.textContent = expense.Category;
    transactionDateCell.textContent = expense.Date;

    // Create Buttton
    const deleteBtn = document.createElement("button");
    deleteBtn.style.color = "#fff";
    deleteBtn.style.backgroundColor = "#DC3455";
    deleteBtn.style.border = "none";
    deleteBtn.style.padding = "3px 7px";
    deleteBtn.style.borderRadius = "5px";

    const updateBtn = document.createElement("button");
    updateBtn.style.backgroundColor = "#6EC787";
    updateBtn.style.color = "#fff";
    updateBtn.style.border = "none";
    updateBtn.style.padding = "4px 7px";
    updateBtn.style.marginLeft = "7px";
    updateBtn.style.borderRadius = "5px";
    updateBtn.style.marginLeft = "-65%";

    deleteBtn.textContent = "Delete";
    updateBtn.textContent = "Update";
    deleteBtn.classList.add("delete-btn");
    updateBtn.classList.add("update-btn");
    updateBtn.b;
    deleteBtn.addEventListener("click", function () {
      expenses.splice(index, 1);
      updateExpenseTable();
    });
    updateBtn.addEventListener("click", function () {
      // Populate the form with the data from the selected expense
      amount.value = expense.Amount;
      category.value = expense.Category;
      date.value = expense.Date;

      // Set the expenseToUpdateIndex to the current index
      expenseToUpdateIndex = index;
      // Show the modal for editing
      $("#exampleModal").modal("show");
    });
    deleteCell.appendChild(deleteBtn);
    updateCell.appendChild(updateBtn);
  });
}
// Initial update of the expense table
updateExpenseTable();
// Function to clear input fields
function clearInputFields() {
  amount.value = "";
  category.value = "";
  date.value = "";
}
// Event listener to clear input fields when the "Close" button is clicked
let btnClear = document.getElementById("btnClear");
btnClear.addEventListener("click", clearInputFields);
let btnCross = document.getElementById("btnCross");
btnCross.addEventListener("click", clearInputFields);
