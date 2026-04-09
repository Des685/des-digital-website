const form = document.getElementById("contactForm");
const successMessage = document.getElementById("successMessage");

form.addEventListener("submit", async function(e) {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(form.action, {
    method: "POST",
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  });

  if (response.ok) {
  form.reset();
  window.location.href = "thankyou.html";
  
  } else {
    alert("Something went wrong. Please try again.");
  }
});

document.getElementById('basic').addEventListener('click', function() {
  document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('standard').addEventListener('click', function() {
  document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('premium').addEventListener('click', function() {
  document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
});