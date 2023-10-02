let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
let expenseToUpdate = null;
let expenseToUpdateIndex = null;

let amount = document.getElementById("amounts");
let category = document.getElementById("categories");
let date = document.getElementById("dates");

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
  amount.value = "";
  category.value = "";
  date.value = "";

  if (expenseToUpdateIndex !== null) {
    expenses[expenseToUpdateIndex] = { Amount, Category, Date };
    expenseToUpdateIndex = null;
  } else {
    expenses.push({ Amount, Category, Date });
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

    amountCell.textContent = expense.Amount; // Corrected property name
    categoryCell.textContent = expense.Category; // Corrected property name
    transactionDateCell.textContent = expense.Date; // Corrected property name

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

      document.getElementById("save-btn").textContent = "Update";
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
  amount.value = "";
  category.value = "";
  date.value = "";
}
updateExpenseTable();
