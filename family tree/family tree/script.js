
function showGematria(name, lbl) {

    let gematria = document.getElementById(lbl)
    let hebArray = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י", "כ", "ך", "ל", "מ", "ם", "נ", "ן", "ס", "ע", "פ", "ף", "צ", "ץ", "ק", "ר", "ש", "ת", " "];
    let gemArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 20, 30, 40, 40, 50, 50, 60, 70, 80, 80, 90, 90, 100, 200, 300, 400, 0]
    let notHebLetters = /[^ אבגדהוזחטיכלמנסעפצקרשתךםןףץ]/g
    // Selecting the input element and get its value
    let rawInput = document.getElementById(name).value;
    let hebInput = rawInput.replace(notHebLetters, '');

    let gemSum = 0;
    for (let n = 0; n < hebInput.length; n++) {
        arrInd = hebArray.indexOf(hebInput[n]);
        gemSum += gemArray[arrInd];
    }
    gematria.innerHTML = gemSum
}


const phoneInput = document.getElementById("phone");

phoneInput.addEventListener("input", function (e) {
    // Remove any non-numeric characters
    phoneInput.value = phoneInput.value.replace(/\D/g, '');
});

//קשור לאימייל, בודק אם האימייל תקין
const emailInput = document.getElementById("email");
const emailForm = document.getElementById("emailForm");
const errorMessage = document.getElementById("errorMessage");

emailForm.addEventListener("submit", function (e) {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email validation regex

    if (!emailRegex.test(email)) {
        e.preventDefault(); // Prevent form submission
        errorMessage.style.display = "block"; // Show error message
    } else {
        errorMessage.style.display = "none"; // Hide error message
        alert("Email is valid!");
    }
});