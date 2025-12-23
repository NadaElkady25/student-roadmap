const tableBody = document.querySelector("#planTable tbody");

function addPlan() {
  const subject = document.getElementById("subject").value;
  const hours = document.getElementById("hours").value;
  const deadline = document.getElementById("deadline").value;
  const priority = document.getElementById("priority").value;

  if (!subject || !hours || !deadline) {
    alert("Please fill all fields");
    return;
  }

  const row = document.createElement("tr");
  row.innerHTML = `
    <td>${subject}</td>
    <td>${hours}</td>
    <td>${deadline}</td>
    <td class="${priority.toLowerCase()}">${priority}</td>
    <td><button onclick="this.parentElement.parentElement.remove()">Delete</button></td>
  `;

  tableBody.appendChild(row);

  document.getElementById("subject").value = "";
  document.getElementById("hours").value = "";
  document.getElementById("deadline").value = "";
}
