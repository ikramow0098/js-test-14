// Task 2: Add Support Tickets Dynamically

document.getElementById("addTicketBtn").addEventListener("click", function() {
  addTicket("Alice Smith", "Cannot log in", "High");
});

function addTicket(name, issue, priority) {
  const ticketContainer = document.getElementById("ticketContainer");
  const ticket = document.createElement("div");
  ticket.classList.add("ticket");

  if (priority === "High") {
      ticket.classList.add("high-priority");
  }

  const nameElem = document.createElement("h3");
  nameElem.textContent = name;

  const issueElem = document.createElement("p");
  issueElem.textContent = issue;

  const priorityElem = document.createElement("span");
  priorityElem.textContent = `Priority: ${priority}`;

  const resolveBtn = document.createElement("button");
  resolveBtn.textContent = "Resolve";
  resolveBtn.addEventListener("click", function(event) {
      event.stopPropagation();
      ticketContainer.removeChild(ticket);
  });

  ticket.appendChild(nameElem);
  ticket.appendChild(issueElem);
  ticket.appendChild(priorityElem);
  ticket.appendChild(resolveBtn);
  ticketContainer.appendChild(ticket);
}

// Task 3: Highlighting High Priority Tickets

document.getElementById("highlightHighPriorityBtn").addEventListener("click", function() {
  const highPriorityTickets = Array.from(document.querySelectorAll(".high-priority"));
  highPriorityTickets.forEach(ticket => {
      ticket.style.backgroundColor = "#f8d7da";  // Highlighting high-priority tickets
      ticket.style.border = "2px solid #dc3545";
  });
});