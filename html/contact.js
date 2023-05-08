let id = ["mail", "inst", "lin"]
function copy(index) {
  let copyText = document.getElementById(id[index]);
  navigator.clipboard.writeText(copyText.innerHTML);
}