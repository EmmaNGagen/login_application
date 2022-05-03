export function loggedIn() {
  let myValues = window.location.search;
  let urlParams = new URLSearchParams(myValues);

  let paramName = urlParams.get("name");
  console.log("username:", paramName);
}
