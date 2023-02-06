const element = document.querySelector("#app > div.v-application--wrap > div > main > div > div:nth-child(3) > div > div.v-item-group.theme--dark > div > div > span > div:nth-child(1) > div > a > div");
const text = element.innerText;
const regex = /Chapter\s(\w+)/;
const match = text.match(regex);
if (match) {
  element.innerText = match[0];
}