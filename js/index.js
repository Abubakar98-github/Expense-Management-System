let expenses = [];
// let totalAmount = 0;

let amount = document.getElementById("amounts");
let category = document.getElementById("categories");
let date = document.getElementById("dates");

// let radioButton = document.getElementById("radio-button");
// let eventText = document.getElementById("event-text");
// let startEndDate = document.getElementById("start-end-date");
// let descriptionText = document.getElementById("description-text");
// let file = document.getElementById("file");

let submitData = document.getElementById("submit-data");
let expenseTableBody = document.getElementById("expense-table-body");

submitData.addEventListener("click", function () {
  let Amount = amount.value;
  let Category = category.value;
  let Date = date.value;
  console.log(Category);
  // let radioButton = radioButton.value;
  // let eventText = eventText.value;
  // let startEndDate = startEndDate.value;
  // let descriptionText = descriptionText.value;
  // let file = file.value;

  if (Amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  if (Category == "") {
    alert("Please select a category");
    return;
  }
  if (Date == "") {
    alert("Please select a date");
    return;
  }
  // if (radioButton == "") {
  //   alert("Please select a radio button");
  //   return;
  // }
  // if (eventText == "") {
  //   alert("Please enter a text");
  //   return;
  // }
  // if (startEndDate == "") {
  //   alert("Please select a dates");
  //   return;
  // }
  // if (descriptionText == "") {
  //   alert("Please select a text");
  //   return;
  // }
  // if (file == "") {
  //   alert("Please upload a file");
  //   return;
  // }

  // expenses.push({
  //   amount,
  //   category,
  //   date,
  //   // radioButton,
  //   // eventText,
  //   // startEndDate,
  //   // descriptionText,
  //   // file,
  // });

  amount.value = "";
  category.value = "";
  date.value = "";

  expenses.push({
    amount: Amount,
    category: Category,
    date: Date,
  });

  
  let newRow = expenseTableBody.insertRow();

  let amountCell = newRow.insertCell();
  let categoryCell = newRow.insertCell();
  let dateCell = newRow.insertCell();
  // let radioButtonCell = newRow.insertCell();
  // let eventTextCell = newRow.insertCell();
  // let startEndDateCell = newRow.insertCell();
  // let descriptionTextCell = newRow.insertCell();
  // let fileCell = newRow.insertCell();
  let deleteCell = newRow.insertCell();
  let deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", function () {
    expenses.splice(expenses.indexOf(expense), 1);

    expenseTableBody.removeChild(newRow);
  });

  let expense = expenses[expenses.length - 1];

  amountCell.textContent = expense.amount;
  categoryCell.textContent = expense.category;
  dateCell.textContent = expense.date;
  // radioButtonCell.textContent = expense.radioButton;
  // eventTextCell.textContent = expense.eventText;
  // startEndDateCell.textContent = expense.startEndDate;
  // descriptionTextCell.textContent = expense.descriptionText;
  // fileCell.textContent = expense.file;
  deleteCell.appendChild(deleteButton);
});

for (let expense of expenses) {
  let newRow = expenseTableBody.insertRow();
  let amountCell = newRow.insertCell();
  let categoryCell = newRow.insertCell();
  let dateCell = newRow.insertCell();
  // let radioButtonCell = newRow.insertCell();
  // let eventTextCell = newRow.insertCell();
  // let startEndDateCell = newRow.insertCell();
  // let descriptionTextCell = newRow.insertCell();
  // let fileCell = newRow.insertCell();
  let deleteCell = newRow.insertCell();
  let deleteButton = document.createElement("button");

  deleteButton.textContent = "Delete";
  deleteButton.classList.add("deleteButton");
  deleteButton.addEventListener("click", function () {
    expense.splice(expense.indexOf(expense), 1);

    expenseTableBody.removeChild(newRow);
  });

  amountCell.textContent = expense.amount;
  categoryCell.textContent = expense.category;
  dateCell.textContent = expense.date;
  // radioButtonCell.textContent = expense.radioButton;
  // eventTextCell.textContent = expense.eventText;
  // startEndDateCell.textContent = expense.startEndDate;
  // descriptionTextCell.textContent = expense.descriptionText;
  // fileCell.textContent = expense.file;
  deleteCell.appendChild(deleteButton);
}
