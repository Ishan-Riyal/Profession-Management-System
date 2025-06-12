const empName = document.getElementById("name");
const empProfession = document.getElementById("profession");
const empAge = document.getElementById("age");
const btnSubmit = document.querySelector(".btn-submit");

const employeeContainer = document.getElementById("employeeContainer");
const noData = document.getElementById("noData");
const errorMessage = document.getElementById("errorMessage");

btnSubmit.addEventListener("click", addEmployee);

function addEmployee(e) {
  e.preventDefault();

  // Validation
  if (!empName.value || !empProfession.value || !empAge.value) {
    errorMessage.style.display = "block";
    return;
  }

  errorMessage.style.display = "none";
  successMessage.style.display = "block";

  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);

  if (noData) {
    noData.style.display = "none";
  }

  // Create <li> wrapper
  const employeeWrapper = document.createElement("li");
  employeeWrapper.classList.add("employee-wrapper");

  // Create card
  const employeeCard = document.createElement("div");
  employeeCard.classList.add("employee-card");

  employeeCard.innerHTML = `
    <span class="emp-name">${empName.value}</span>
    <span class="emp-profession">${empProfession.value}</span>
    <span class="emp-age">${empAge.value}</span>
  `;

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("btn-delete");
  deleteBtn.textContent = "Delete";

  // Delete functionality
  deleteBtn.addEventListener("click", () => {
    employeeContainer.removeChild(employeeWrapper);

    if (employeeContainer.children.length === 0) {
      noData.style.display = "block";
    }
  });

  // Assemble and append
  employeeWrapper.appendChild(employeeCard);
  employeeWrapper.appendChild(deleteBtn);
  employeeContainer.appendChild(employeeWrapper);

  // Reset form
  empName.value = "";
  empProfession.value = "";
  empAge.value = "";
}
