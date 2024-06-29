document.getElementById('age-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const day = document.getElementById('day').value;
  const month = document.getElementById('month').value;
  const year = document.getElementById('year').value;

  let isValid = true;

  const validateField = (field, min, max) => {
    const value = field.value;
    const label = field.previousElementSibling;
    const requiredError = field.nextElementSibling;
    const invalidError = requiredError.nextElementSibling;

    if (!value) {
      field.style.border = "1px solid red";
      requiredError.style.display = "block";
      invalidError.style.display = "none";
      label.style.color = "red";
      isValid = false;
    } else if (value < min || value > max) {
      field.style.border = "1px solid red";
      requiredError.style.display = "none";
      invalidError.style.display = "block";
      label.style.color = "red";
      isValid = false;
    } else {
      field.style.border = "";
      requiredError.style.display = "none";
      invalidError.style.display = "none";
      label.style.color = "";
    }
  };

  validateField(document.getElementById('day'), 1, 31);
  validateField(document.getElementById('month'), 1, 12);
  validateField(document.getElementById('year'), 1800, new Date().getFullYear());

  if (isValid) {
    const birthDate = new Date(year, month - 1, day);
    const currentDate = new Date();

    let ageYears = currentDate.getFullYear() - birthDate.getFullYear();
    let ageMonths = currentDate.getMonth() - birthDate.getMonth();
    let ageDays = currentDate.getDate() - birthDate.getDate();

    if (ageDays < 0) {
      ageMonths--;
      ageDays += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (ageMonths < 0) {
      ageYears--;
      ageMonths += 12;
    }

    document.getElementById('result-Y').textContent = ageYears;
    document.getElementById('result-M').textContent = ageMonths;
    document.getElementById('result-D').textContent = ageDays;
  }
});

