let expenses = [];
let expenseToUpdate = null;
let expenseToUpdateIndex = null;
let amount = document.getElementById("amounts");
let category = document.getElementById("categories");
let date = document.getElementById("dates");
const saveBtn = document.getElementById("save-btn");
const expenseTableBody = document.getElementById("expense-table-body");

saveBtn.addEventListener("click", function () {
  const Amount = amount.value;
  const Category = category.value;
  const Date = date.value;

  if (Amount === "" || Amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  if (Category === "") {
    alert("Please select a category");
    return;
  }

  if (Date === "") {
    alert("Please select a date");
    return;
  }

  // Clear input fields
  clearInputFields();

  if (expenseToUpdateIndex !== null) {
    expenses[expenseToUpdateIndex] = { Amount, Category, Date };
    expenseToUpdateIndex = null;
  } else {
    expenses.push({ Amount, Category, Date });
  }

  // Refresh the table
  updateExpenseTable();

  // Close the modal
  $("#exampleModal").modal("hide");
});

function updateExpenseTable() {
  expenseTableBody.innerHTML = "";
  expenses.forEach(function (expense, index) {
    const newRow = expenseTableBody.insertRow();
    newRow.dataset.expenseId = index;
    const amountCell = newRow.insertCell();
    const categoryCell = newRow.insertCell();
    const transactionDateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();
    const updateCell = newRow.insertCell();

    amountCell.textContent = expense.Amount;
    categoryCell.textContent = expense.Category;
    transactionDateCell.textContent = expense.Date;

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
    updateBtn.style.borderRadius = "5px";
    updateBtn.style.marginLeft = "-65%";

    deleteBtn.textContent = "Delete";
    updateBtn.textContent = "Update";
    deleteBtn.classList.add("delete-btn");
    updateBtn.classList.add("update-btn");

    deleteBtn.addEventListener("click", function () {
      expenses.splice(index, 1);
      updateExpenseTable();
    });

    updateBtn.addEventListener("click", function () {
      amount.value = expense.Amount;
      category.value = expense.Category;
      date.value = expense.Date;

      expenseToUpdateIndex = index;
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
