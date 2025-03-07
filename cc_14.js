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

// Task 4: Support Ticket Resolution with Event Bubbling

document.getElementById("ticketContainer").addEventListener("click", function(event) {
  if (event.target.classList.contains("ticket")) {
      console.log("Support ticket clicked");
  }
});

// Task 5: Inline Editing for Support Tickets

document.getElementById("ticketContainer").addEventListener("dblclick", function(event) {
  const ticket = event.target.closest(".ticket");
  if (!ticket) return;

  const nameElem = ticket.querySelector("h3");
  const issueElem = ticket.querySelector("p");
  const priorityElem = ticket.querySelector("span");

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.value = nameElem.textContent;

  const issueInput = document.createElement("input");
  issueInput.type = "text";
  issueInput.value = issueElem.textContent;

  const priorityInput = document.createElement("input");
  priorityInput.type = "text";
  priorityInput.value = priorityElem.textContent.replace("Priority: ", "");

  const saveBtn = document.createElement("button");
  saveBtn.textContent = "Save";
  saveBtn.addEventListener("click", function() {
      nameElem.textContent = nameInput.value;
      issueElem.textContent = issueInput.value;
      priorityElem.textContent = `Priority: ${priorityInput.value}`;
      ticket.replaceChild(nameElem, nameInput);
      ticket.replaceChild(issueElem, issueInput);
      ticket.replaceChild(priorityElem, priorityInput);
      ticket.removeChild(saveBtn);
  });

  ticket.replaceChild(nameInput, nameElem);
  ticket.replaceChild(issueInput, issueElem);
  ticket.replaceChild(priorityInput, priorityElem);
  ticket.appendChild(saveBtn);
});


