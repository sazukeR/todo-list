export default function toggleTask(e) {
  const label = e.target.nextSibling;
  if (this.checked) {
    label.classList.add('completed');
  } else {
    label.classList.remove('completed');
  }
}