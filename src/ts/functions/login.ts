export function loginModal() {
  let modal: HTMLElement = document.getElementById("theLogin");
  let button: HTMLButtonElement = document.getElementById(
    "loginBtn"
  ) as HTMLButtonElement;
  let close: HTMLImageElement = document.getElementById(
    "closeBtn"
  ) as HTMLImageElement;

  button.addEventListener("click", handleClick);
  close.addEventListener("click", closeClick);

  function handleClick() {
    modal.style.display = "block";
    document
      .getElementById("userInput")
      .addEventListener("keyup", handleChange);
  }
  function handleChange(e) {
    let inputValue: HTMLParagraphElement = document.getElementById(
      "valueInput"
    ) as HTMLParagraphElement;
    inputValue.innerHTML = e.target.value;
  }

  function closeClick() {
    modal.style.display = "none";
  }
}
