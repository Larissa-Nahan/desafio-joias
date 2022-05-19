function constructInformativesTop(json) {
  const $wrapper = document.querySelector(".header__informatives-wrapper");

  for (completeText of json) {
    $wrapper.innerHTML += `<span class="header__informatives-top--text">
        ${completeText.text}
        <strong class="header__informatives-top--text-strong">
            ${completeText.bold}
        </strong>
    </span>`;
  }
}

function informativeTop() {
  fetch("./mocks/INFORMATIVES__TOP.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      constructInformativesTop(json);
    });
}

informativeTop();
