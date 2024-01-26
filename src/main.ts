import "./style.css";

function searchHandler() {
  let text: string;
  let input = (document.querySelector("#ask") as HTMLInputElement)?.value;
  let emptyAway = input?.toLowerCase().replaceAll(" ", "");
  let toArray = emptyAway?.split("");
  let toReverse = toArray?.reverse();
  let palindrome = toReverse?.join("");
  if (input == "") {
    return "";
  } else if (emptyAway == palindrome) {
    text = "The given word/number/phrase is a palindrome.";
  } else {
    text = "The given word/number/phrase is not a palindrome.";
  }
  let result = document.querySelector("#result");
  if (result) {
    result.textContent = text;
  }
}

let ask = document.querySelector("#ask") as HTMLInputElement;
if (ask instanceof HTMLElement) {
  ask.addEventListener("input", searchHandler);
}
