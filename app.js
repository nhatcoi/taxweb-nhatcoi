document.getElementById("calculateButton").addEventListener("click", 
  function () {
    const income = parseFloat(document.getElementById("monthlyIncome").value)
    const depend = parseFloat(document.getElementById("dependents").value)

    const tax = calTax(income, depend)
    document.getElementById("result").innerHTML = `Thuế là : ${tax} VND`;
  }
)
  function calTax(income, depend) {
    const gtt = 11000000, ptt = 4400000
    var TNTT = income - gtt - depend * ptt
    var tax, m = 1000000
    if(TNTT <= 0) {
      tax = 0
    }
    if (TNTT <= 5*m) {
      tax = TNTT * 0.05
    } else if(TNTT <= 10*m) {
      tax = TNTT * 0.1 - (0.25*m)
    } else if(TNTT <= 18*m) {
      tax = TNTT * 0.15 - (0.75*m)
    } else if(TNTT <= 32*m) {
      tax = TNTT * 0.2 - (1.65*m)
    } else if(TNTT <= 52*m) {
      tax = TNTT * 0.25 - (3.12*m)
    } else if(TNTT <= 80) {
      tax = TNTT * 0.3 - (5.85*m)
    } else {
      tax = TNTT * 0.35 - (9.85*m)
    }
    return tax > 0 ? tax : 0;
  }
