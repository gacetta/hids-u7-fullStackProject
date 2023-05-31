console.log('client side js');

const button = document.querySelector('.button');
button.addEventListener('click', async () => {
  const response = await fetch('http://localhost:3000/hello');
  const jsonResponse = await response.json();
  
  // create p to add to dom
  const fetchResponse = document.createElement('p');
  fetchResponse.textContent = jsonResponse;
  fetchResponse.classList.add('fetchResponse');

  const mainBody = document.querySelector('.main');
  mainBody.innerHTML = '';
  mainBody.append(fetchResponse);

  return;
})