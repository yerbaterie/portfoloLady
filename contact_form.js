document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");
    const recipientEmail = "carlosforero@gmail.com"; // Aquí reemplaza con el correo del destinatario

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevenir que el formulario se envíe

        // Sanitizar la entrada del formulario
        const name = sanitizeInput(form.name.value);
        const email = sanitizeInput(form.email.value);
        const subject = sanitizeInput(form.subject.value);
        const message = sanitizeInput(form.message.value);

        // Realizar alguna acción con los datos sanitizados, por ejemplo, enviarlos por correo electrónico
        sendEmail(name, email, subject, message);

        // Limpiar los campos del formulario después de enviar
        form.reset();
    });

    // Función para sanitizar la entrada
    function sanitizeInput(input) {
        // Utilizando una expresión regular simple para eliminar caracteres potencialmente peligrosos
        return input.replace(/[<>&"']/g, ''); // Reemplazar caracteres < > & " '
    }

    // Función para enviar correo electrónico
    function sendEmail(name, email, subject, message) {
        // Aquí puedes implementar la lógica para enviar el correo electrónico
        // Por ejemplo, utilizando servicios como SendGrid, Nodemailer, etc.
        // Para este ejemplo, solo imprimiremos los datos en la consola del navegador
        console.log("Enviando correo electrónico a:", recipientEmail);
        console.log("Nombre:", name);
        console.log("Correo electrónico:", email);
        console.log("Asunto:", subject);
        console.log("Mensaje:", message);
    }
});
