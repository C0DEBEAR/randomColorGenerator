const colors = [
  "green",
  "red",
  "blue",
  "yellow",
  "#FFFFFF",
  "#800080",
  "#F0F8FF",
  "#FF7F50",
  "	#B22222",
  "#FF69B4",
  "#FFFACD",
  "#FFBD33",
  "#DBFF33",
  "#DBFF33",
  "#33FF57",
  "#0A498C",
  "#4682C3",
  "#8DB6E3",
  "#818E9C",
  "#A3E292",
  "#7BE060",
  "#49DC21",
  "#3DF70B",
  "#0BF7E8",
  "#48CBC3",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  //   console.log(randomNumber);
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
