export function loginModal() {
  let modal: HTMLElement = document.getElementById("theLogin");
  let button: HTMLButtonElement = document.getElementById(
    "loginBtn"
  ) as HTMLButtonElement;
  let close: HTMLImageElement = document.getElementById(
    "closeBtn"
  ) as HTMLImageElement;
  let theLoginButton = document.getElementById("theLoginButton");

  button.addEventListener("click", handleClick);
  close.addEventListener("click", closeClick);
  theLoginButton.addEventListener("click", handleLogin);

  function handleClick() {
    modal.style.display = "block";
    document
      .getElementById("userInput")
      .addEventListener("keyup", handleChange);
  }
  function handleChange(e) {
    let inputValue = JSON.stringify(e.target.value);
    localStorage.setItem("loginName", inputValue);
  }

  function handleLogin() {
    let inputData = localStorage.getItem("loginName");
    console.log(inputData);
    let inputText: HTMLParagraphElement = document.getElementById(
      "valueInput"
    ) as HTMLParagraphElement;

    inputText.innerHTML = "Du är inloggad som " + inputData;

    modal.style.display = "none";
    button.innerHTML = "Logga ut";
  }

  function closeClick() {
    modal.style.display = "none";
  }
}
