async function PortfolioHeader() {
  console.log("در حال برقراری ارتباط با سرور گیت‌هاب... ⏳");

  let response = await fetch("https://api.github.com/users/hoseinoori");

  let githubData = await response.json();

  if (response.ok) {
    const dev_name = githubData.name.value;
  }
  return (
    <header>
      <h1 id="tg-1">{dev_name}</h1>
      <button id="tem" type="button" class="animate__animated animate__bounce">
        تغیر تم
      </button>
      <nav>
        <ul>
          <li>
            <a href="/home" class="my-link">
              خانه
            </a>
          </li>
          <li>
            <a href="/link" class="my-link">
              لينك ها
            </a>
          </li>
          <li>
            <a href="/tamrin" class="my-link">
              تمرين ها
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
