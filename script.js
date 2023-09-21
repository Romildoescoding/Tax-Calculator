tax_calculation = (event) => {
    event.preventDefault();
    let basesalary = parseFloat(document.getElementById("basesal").value);
    let hra = parseFloat(document.getElementById("hra").value);
    let da = parseFloat(document.getElementById("da").value);
    let ta = parseFloat(document.getElementById("ta").value);

    let gender = document.querySelector('input[name="gender"]:checked');

    let incometax = 0;

    if (basesalary < 300000) {
        incometax = 0;
    } else if (basesalary >= 300000 && basesalary < 600000) {
        incometax = (5 * basesalary) / 100;
    } else if (basesalary >= 600000 && basesalary < 900000) {
        incometax = (10 * basesalary) / 100;
    } else if (basesalary >= 900000 && basesalary < 1200000) {
        incometax = (15 * basesalary) / 100;
    } else if (basesalary >= 1200000 && basesalary < 1500000) {
        incometax = (20 * basesalary) / 100;
    } else {
        incometax = (30 * basesalary) / 100;
    }

    let netsalary = 0;

    if (gender && gender.value === "female" && basesalary >= 300000) {
        incometax = incometax - (5 * basesalary) / 100;
    }

    let hra_val = (hra * basesalary) / 100;
    let da_val = (da * basesalary) / 100;
    let ta_val = (ta * basesalary) / 100;

    let grosssalary = basesalary + hra_val + da_val + ta_val;

    netsalary = grosssalary - incometax;

    document.getElementById("result").innerHTML = `<p>Your Net Salary is : ${netsalary}</p>
    <p>Tax to be paid is : ${incometax}</p>`;

    setTimeout(() => {
        document.querySelector(".taxform").reset(); // Reset the form
        document.getElementById("result").innerHTML = ""; // Clear the result
    }, 5000);
};
