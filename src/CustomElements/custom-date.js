function getMonth(givenMonth) {
  const months = {
    0: "January",
    1: "February",
    2: "March",
    3: "April",
    4: "May",
    5: "June",
    6: "July",
    7: "August",
    8: "September",
    9: "October",
    10: "November",
    11: "December"
  };
  return months[givenMonth];
}

class CustomDate extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });
    let elm = document.createElement("div");
    const date = this.hasAttribute("date") ? this.getAttribute("date") : "";
    if (this.hasAttribute("date") && Number(date)) {
      const stamp = new Date(Number(date) * 1000);
      elm.innerHTML = `${stamp.getDate()} ${getMonth(
        stamp.getMonth()
      )} ${stamp.getFullYear()}`;
      elm.style.color = "#716f6f";
      elm.style.fontSize = "0.6rem";
    }
    shadow.appendChild(elm);
  }
}

customElements.define("custom-date", CustomDate);
