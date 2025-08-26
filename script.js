const scriptURL = 'https://script.google.com/macros/s/AKfycbwntjCcAiBlAkSbJ9J7BauGZ_uG6jjNirXB-YxGirgvr_JCDRF1eyKxNw-2zLyOsod6/exec';

document.getElementById('attendanceForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = e.target;

  const data = {
    name: form.name.value,
    email: form.email.value,
    class: form.class.value,
    section: form.section.value,
    roll: form.roll.value,
    date: form.date.value
  };

  fetch(scriptURL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(res => {
    document.getElementById('responseMsg').textContent = res.message || 'Form submitted successfully!';
    form.reset();
  })
  .catch(error => {
    document.getElementById('responseMsg').textContent = 'Error submitting the form.';
    console.error(error);
  });
});
