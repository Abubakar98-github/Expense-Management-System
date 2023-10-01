let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let expenseToUpdate = null;
let expenseToUpdateIndex = null;
let amountInput = document.getElementById("Amount");
let categorySelect = document.getElementById("category");
let transactiondate = document.getElementById("transactionDate");
const saveBtn = document.getElementById("save-btn");
const expenseTableBody = document.getElementById("expense-table-body");

function saveExpensesToLocalStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
function removeExpenseFromLocalStorage(expenseIndex) {
  expenses.splice(expenseIndex, 1);
  saveExpensesToLocalStorage();
}
saveBtn.addEventListener("click", function () {
  const amount = amountInput.value;
  const category = categorySelect.value;
  const transactionDate = transactiondate.value;

  if (amount == "" || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }
  if (category == "") {
    alert("Please select a category");
    return;
  }
  if (transactionDate == "") {
    alert("Please select a date");
    return;
  }
  amountInput.value = "";
  categorySelect.value = "";
  transactiondate.value = "";
  if (expenseToUpdateIndex !== null) {
    expenses[expenseToUpdateIndex] = { amount, category, transactionDate };
    expenseToUpdateIndex = null;
  } else {
    expenses.push({ amount, category, transactionDate });
  }
  saveExpensesToLocalStorage();
  updateExpenseTable();
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
    amountCell.textContent = expense.amount;
    categoryCell.textContent = expense.category;
    transactionDateCell.textContent = expense.transactionDate;


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
    deleteBtn.addEventListener("click", function () {
      removeExpenseFromLocalStorage(index);
      updateExpenseTable();
    });



    updateBtn.addEventListener("click", function () {
      amountInput.value = expense.amount;
      categorySelect.value = expense.category;
      transactiondate.value = expense.transactionDate;
      expenseToUpdateIndex = index;
      saveBtn.textContent = "Update";
      $("#exampleModal").modal("show");
    });
    deleteCell.appendChild(deleteBtn);
    updateCell.appendChild(updateBtn);
  });
}
const logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", function () {
  localStorage.removeItem("email1");
  localStorage.removeItem("password1");
  window.location.href = "/login.html";
});
const createBtn = document.querySelector('[data-bs-target="#exampleModal"]');
createBtn.addEventListener("click", function () {
  clearInputFields();
  saveBtn.textContent = "Submit";
  expenseToUpdateIndex = null;
});


function clearInputFields() {
  amountInput.value = "";
  categorySelect.value = "";
  transactiondate.value = "";
}
updateExpenseTable();