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
    let inputValue: HTMLParagraphElement = document.getElementById(
      "userInput"
    ) as HTMLParagraphElement;
    let userInputValue = JSON.stringify(e.target.value);
    window.localStorage.setItem("loginName", userInputValue);
  }

  function handleLogin() {
    let inputData = window.localStorage.getItem("loginName");
    console.log(inputData);
    let inputText: HTMLParagraphElement = document.getElementById(
      "valueInput"
    ) as HTMLParagraphElement;
    inputText.innerHTML = inputData;

    document.getElementById("theLoginButton").onclick = function () {};
  }

  function closeClick() {
    modal.style.display = "none";
  }
}
