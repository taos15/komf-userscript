const elements = document.querySelectorAll(".v-card__subtitle.pa-2.pb-1.text--primary");
const regex = /Chapter\s(\w+)/;

for (const element of elements) {
  const text = element.innerHTML;
  const match = text.match(regex);
  if (match) {
    element.innerHTML = match[0];
  }
}