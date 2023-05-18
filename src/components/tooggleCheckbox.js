export default function toggleCheckbox(e) {
  const checkbox = e.target.previousSibling;
  checkbox.checked = !checkbox.checked;
  if (checkbox.checked) {
    this.classList.add('completed');
  } else {
    this.classList.remove('completed');
  }
}