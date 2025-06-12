const empName = document.getElementById("name");
const empProfession = document.getElementById("profession");
const empAge = document.getElementById("age");
const btnSubmit = document.querySelector(".btn-submit");

const employeeContainer = document.getElementById("employeeContainer");
const noData = document.getElementById("noData");
const errorMessage = document.getElementById("errorMessage");
const successMessage = document.getElementById("successMessage");

btnSubmit.addEventListener("click", addEmployee);

function addEmployee(e) {
  e.preventDefault();

  const name = empName.value.trim();
  const profession = empProfession.value.trim();
  const age = empAge.value.trim();

  if (!name || !profession || !age) {
    errorMessage.style.display = "block";
    successMessage.style.display = "none";
    return;
  }

  errorMessage.style.display = "none";
  successMessage.style.display = "block";

  // Hide success message after 3 seconds
  setTimeout(() => {
    successMessage.style.display = "none";
  }, 3000);

  noData.style.display = "none";

  // Insert employee using insertAdjacentHTML
  employeeContainer.insertAdjacentHTML(
    "beforeend",
    `
    <li class="employee-wrapper">
      <div class="employee-card">
        <span class="emp-name">${name}</span>
        <span class="emp-profession">${profession}</span>
        <span class="emp-age">Age: ${age}</span>
      </div>
      <button class="btn-delete">Delete</button>
    </li>
  `
  );

  empName.value = "";
  empProfession.value = "";
  empAge.value = "";
}

// Delete using event delegation
employeeContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-delete")) {
    const li = e.target.closest("li");
    if (li) {
      li.remove();
    }
    if (employeeContainer.children.length === 0) {
      noData.style.display = "block";
    }
  }
});
