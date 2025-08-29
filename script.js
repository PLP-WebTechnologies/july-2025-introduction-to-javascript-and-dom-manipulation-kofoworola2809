// 🎯 Part 1: Variables, Conditionals, Input/Output
function checkAge() {
  let age = document.getElementById("userAge").value;
  let result = "";

  if (age >= 18) {
    result = "✅ You are eligible to vote!";
  } else {
    result = "❌ Sorry, you are too young to vote.";
  }

  document.getElementById("ageResult").textContent = result;
}

// ❤️ Part 2: Functions
function showGreeting(name) {
  let message = `Hello, ${name}! 👋 Welcome to JavaScript learning.`;
  document.getElementById("greeting").textContent = message;
}

function calculateSquare(num) {
  return num * num;
}
console.log("Square of 4 is:", calculateSquare(4));

// 🔁 Part 3: Loops
function listNumbers() {
  let list = document.getElementById("numberList");
  list.innerHTML = ""; // clear old list

  for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
}

// 🌐 Part 4: DOM Manipulation
document.getElementById("toggleBtn").addEventListener("click", function() {
  let text = document.getElementById("domText");
  text.classList.toggle("highlight");
});

// Another DOM Example
let intro = document.getElementById("intro");
intro.addEventListener("mouseover", function() {
  intro.textContent = "🎉 You hovered over me!";
});
intro.addEventListener("mouseout", function() {
  intro.textContent = "Welcome! Let’s test some JavaScript basics.";
});
