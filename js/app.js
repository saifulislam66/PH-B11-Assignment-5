const now = new Date();

const date = now.getDate();
const year = now.getFullYear();
const currentDay = now.toLocaleDateString("en-US", { weekday: "long" });
const currenMont = now.toLocaleDateString("en-US", { month: "long" });

document.getElementById("day").innerText = currentDay;
document.getElementById("date").innerText = `${currenMont} ${date} ${year}`;

// tasks==================================================

const tasks = document.querySelectorAll(".task");
const allTasks = tasks.length;
let counter = allTasks;
document.getElementById("count").innerText = allTasks;

let gems = 100;
document.getElementById("gems").innerText = gems;

// show all tasks items
for (const task of tasks) {
  // click event add to complete button
  const completeButton = task.querySelector(".Complete");
  // console.log(completeButton);
  if (completeButton) {
    completeButton.addEventListener("click", function () {
      counter--;
      // counter
      document.getElementById("count").innerText = counter;
      // add gems
      document.getElementById("gems").innerText = gems += 10;
      this.style.background = "gray";
      this.disabled = true;
      const taskTitle = task.querySelector(".task-title").innerText;

      // add history
      const history = document.getElementById("History");

      const p = `<p class=" task-history p-5 bg-[#F4F7FF] rounded-xl text-4 mb-5">${taskTitle}</p>`;

      history.innerHTML += p;
    });
  }
}

document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("History").innerHTML = "";
  for (const task of tasks) {
    const completeButton = task.querySelector(".Complete");
    completeButton.style.background = "blue";
    completeButton.disabled = false;
  }
});
