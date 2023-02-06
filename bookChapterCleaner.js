const elements = document.querySelectorAll(".v-card__subtitle.pa-2.pb-1.text--primary");
const regex = /Chapter\s(\w+)/;

for (const element of elements) {
  modifyElement(element);
}

const observer = new MutationObserver(mutations => {
  mutations.forEach(mutation => {
    Array.from(mutation.addedNodes).forEach(node => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const elements = node.querySelectorAll(".v-card__subtitle.pa-2.pb-1.text--primary");
        for (const element of elements) {
          modifyElement(element);
        }
      }
    });
  });
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

function modifyElement(element) {
  const text = element.innerHTML;
  const match = text.match(regex);
  if (match) {
    element.innerHTML = match[0];
  }
}