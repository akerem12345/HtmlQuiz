function GetResult() {
  let sum = 0;
  let index = 1;

  while (true) {
    const radios = document.getElementsByName(`soru${index}`);
    if (radios.length === 0) break;

    for (const radio of radios) {
      if (radio.checked) {
        sum += parseInt(radio.value);
        break;
      }
    }

    index++;
  }

  let resultNum = Math.floor((sum - 13) / 3) + 1;

  resultNum = Math.min(Math.max(resultNum, 1), 13);
  window.location.href = `result_${resultNum}.html`;
}



function checkAllAnswered() {
  let index = 1;

  while (true) {
    const radios = document.getElementsByName(`soru${index}`);
    if (radios.length === 0) break;

    const isAnswered = Array.from(radios).some(r => r.checked);
    if (!isAnswered) {
      document.getElementById("submitBtn").disabled = true;
      return;
    }

    index++;
  }

  // If all are answered
  document.getElementById("submitBtn").disabled = false;
}

function ToMain() {
  window.location.href = "main.html";
}
