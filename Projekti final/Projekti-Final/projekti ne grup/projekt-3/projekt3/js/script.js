
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const emriInput = document.getElementById("emri");
    const emailInput = document.getElementById("email");
    const telefoniInput = document.getElementById("telefoni");
    const adresaInput = document.getElementById("adresa");

   
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let errors = [];

       
        const emri = emriInput.value.trim();
        const email = emailInput.value.trim();
        const telefoni = telefoniInput.value.trim();
        const adresa = adresaInput.value.trim();

       
        if (!/^[A-Za-zëËçÇ\s]{3,}$/.test(emri)) {
            errors.push("Emri dhe mbiemri nuk duhet të përmbajnë numra.");
            emriInput.style.border = "2px solid red";
        } else {
            emriInput.style.border = "2px solid green";
        }

        if (!email.includes("@") || !email.includes(".")) {
            errors.push("Email i pavlefshëm.");
            emailInput.style.border = "2px solid red";
        } else {
            emailInput.style.border = "2px solid green";
        }

        if (!/^[0-9]{7,15}$/.test(telefoni)) {
            errors.push("Numri i telefonit duhet të ketë vetëm numra.");
            telefoniInput.style.border = "2px solid red";
        } else {
            telefoniInput.style.border = "2px solid green";
        }

        if (adresa.length < 5) {
            errors.push("Adresa është shumë e shkurtër.");
            adresaInput.style.border = "2px solid red";
        } else {
            adresaInput.style.border = "2px solid green";
        }

        
        if (errors.length > 0) {
            alert("Gabime në formë:\n" + errors.join("\n"));
        } else {
           
            const porosia = [emri, email, telefoni, adresa];
            console.log("Porosia u dërgua: ", porosia);

          
            $(".order-form-container").animate({
                opacity: 0.3
            }, 400).animate({
                opacity: 1
            }, 400);

            alert("Faleminderit për porosinë! ✅");

            form.reset();
            emriInput.style.border = "";
            emailInput.style.border = "";
            telefoniInput.style.border = "";
            adresaInput.style.border = "";
        }
    });
});
