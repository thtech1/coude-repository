document.getElementById('form').addEventListener('submit',function(event){
    event.preventDefault();
    const enterprise = document.getElementById('empresa').value;
    const sector = document.getElementById('seguimento').value;
    const documentNumber = document.getElementById('cnpj').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('descricao').value;

    const payload = {enterprise,sector,documentNumber,email,description }
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
    document.getElementById('form').value='';
})
  .catch(error => {
    console.error('Erro:', error);
  });
}