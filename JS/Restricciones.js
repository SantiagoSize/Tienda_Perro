
document.getElementById("correo").addEventListener("input", function () {
    const correo = this.value;
    const errorMsg = document.getElementById("correoError");

    if (!correo.includes("@")) {
        errorMsg.textContent = "El correo debe contener '@'.";
        errorMsg.style.color = "red";
    } else {
        errorMsg.textContent = "";
    }
});


document.getElementById("contraseña").addEventListener("input", function () {
    const contraseña = this.value;
    const errorMsg = document.getElementById("contraseñaError");

    if (clave.length < 8) {
        errorMsg.textContent = "La clave debe tener al menos 8 caracteres.";
        errorMsg.style.color = "red";
    } else {
        errorMsg.textContent = "";
    }
});


document.getElementById("loginForm").addEventListener("submit", function (e) {
    const correo = document.getElementById("correo").value;
    const clave = document.getElementById("contraseña").value;

    if (!correo.includes("@") || clave.length < 8) {
        e.preventDefault(); // Evita el envío
        alert("Por favor, corrige los errores antes de continuar.");
    }
});
