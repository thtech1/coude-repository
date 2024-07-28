document.getElementById('form').addEventListener('submit', function (event) {
  event.preventDefault();
  const enterprise = document.getElementById('enterprise').value;
  const documentNumber = document.getElementById('documentNumber').value;
  const email = document.getElementById('email').value;
  const description = document.getElementById('description').value;

  const sector = document.getElementById('sector').value;

  const impact = document.querySelectorAll('[name="impact"]:checked').value;
  const frequency1 = document.querySelector('#frequency1').value;
  const frequency2 = document.querySelector('#frequency2').value;
  const frequency3 = document.querySelector('#frequency3').value;

  const payload = { enterprise, sector, documentNumber, email, description, impact, frequency1, frequency2, frequency3 }
  console.log(JSON.stringify(payload))
  handleSubmit(payload)
})


const handleSubmit = (item) => {
  fetch('https://66a58c755dc27a3c190baab2.mockapi.io/form/register-answer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
    .then(() => {
      alert('enviou');
      document.getElementById('form').value = '';
    })
    .catch(error => {
      console.error('Erro:', error);
    });
}