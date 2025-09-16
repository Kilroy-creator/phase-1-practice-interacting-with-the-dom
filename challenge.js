let counter = document.getElementById("counter");
let count = 0;
let timer = setInterval(() => {
  count++;
  counter.textContent = count;
}, 1000);
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

plusBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

minusBtn.addEventListener("click", () => {
  count--;
  counter.textContent = count;
});
const heartBtn = document.getElementById("heart");
const likesList = document.querySelector(".likes");
const likes = {}; // store count of likes per number

heartBtn.addEventListener("click", () => {
  if (likes[count]) {
    likes[count]++;
    const li = document.getElementById(`like-${count}`);
    li.textContent = `${count} has been liked ${likes[count]} times`;
  } else {
    likes[count] = 1;
    const li = document.createElement("li");
    li.id = `like-${count}`;
    li.textContent = `${count} has been liked 1 time`;
    likesList.appendChild(li);
  }
});
const pauseBtn = document.getElementById("pause");
let paused = false;

pauseBtn.addEventListener("click", () => {
  if (!paused) {
    clearInterval(timer);
    paused = true;
    pauseBtn.textContent = "resume";
    plusBtn.disabled = true;
    minusBtn.disabled = true;
    heartBtn.disabled = true;
  } else {
    timer = setInterval(() => {
      count++;
      counter.textContent = count;
    }, 1000);
    paused = false;
    pauseBtn.textContent = "pause";
    plusBtn.disabled = false;
    minusBtn.disabled = false;
    heartBtn.disabled = false;
  }
});
const commentForm = document.getElementById("comment-form");
const commentList = document.getElementById("list");

commentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = e.target.querySelector("input");
  const li = document.createElement("li");
  li.textContent = input.value;
  commentList.appendChild(li);
  input.value = "";
});
