let student = {
  user: "hoseinoori",
  age: 18,
  scores: [12, 20, 18, 13.75, 11.9, 19.25],
};

const paiam = document.querySelector("#p_button");

function checkInput(input1, input2) {
  paiam.classList.remove("hidden");
  if (input1 == "" || input2 == "") {
    paiam.innerText = "لطفا کادر را پر کنید";
    paiam.style.color = "red";
    setTimeout(function () {
      paiam.classList.add("hidden");
    }, 3000);
    return;
  }
  paiam.innerText = "اطلاعات ذخیره شد";
  paiam.style.color = "#000000";
  setTimeout(function () {
    paiam.classList.add("hidden");
  }, 3000);
  return;
}

function sayHello(number) {
  while (number > 0) {
    console.log("Hello!");
    number--;
  }
  return;
}

function pass(av) {
  if (av >= 10) {
    return "good";
  }
  return "bad";
}

function avrig(sco) {
  let sum = 0;
  for (let i = 0; i < sco.length; i++) {
    sum += sco[i];
  }
  let avrig = sum / sco.length;
  return pass(avrig);
}

student.scores.push(16, 15.5);

console.log(avrig(student.scores));

for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

sayHello(3);

const mainHeader = document.querySelector("#tg-1");

mainHeader.innerText = "به پورتفولیوی مهندس حسین نوری خوش آمدید!";

const linkdin_butten = document.querySelector(".but");
linkdin_butten.addEventListener("click", function () {
  console.log("کاربر به لینکدین هدایت شد");
});

const userNameInput = document.querySelector("#username");
const pasInput = document.querySelector("#pas");
const info_butten = document.querySelector("#info");
info_butten.addEventListener("click", function () {
  checkInput(pasInput.value, userNameInput.value);
});

const tem_button = document.querySelector("#tem");
tem_button.addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

const form_tabel = document.getElementById("form-tabel");
document.getElementById("B-work").addEventListener("click", (e) => {
  e.preventDefault();

  const text_work = document.getElementById("work").value;

  if (text_work == "") {
    console.log("ER!");
  } else {
    const div = document.createElement("div");
    div.className = "list-work";
    div.innerHTML = `<p>${text_work}</p>`;
    form_tabel.appendChild(div);
    document.getElementById("work").value = "";
  }
});

async function fetchGithubProfile() {
  console.log("در حال برقراری ارتباط با سرور گیت‌هاب... ⏳");
  
  let response = await fetch("https://api.github.com/users/hoseinoori");
  
  let githubData = await response.json();
  
  if (response.ok) {
    mainHeader.innerText = githubData.name
  } 
}

fetchGithubProfile();