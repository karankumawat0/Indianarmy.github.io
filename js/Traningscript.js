function submitTrainingForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const experience = document.getElementById('experience').value;

    // You can add further logic here, such as sending data to a server or processing it locally.
    console.log(`Training form submitted:
        Name: ${name}
        Email: ${email}
        Age: ${age}
        Military Experience: ${experience}
    `);
    var responseMessage = document.getElementById("responseMessage");
    responseMessage.textContent = `Thank you, ${name}! Your application has been submitted. We will contact you shortly.`;

}
