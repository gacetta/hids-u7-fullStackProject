// create event listener for button
const button = document.querySelector('.button');
button.addEventListener('click', async () => {
  const response = await fetch('http://localhost:3000/hello');
  const jsonResponse = await response.json();
  
  // create new element to add to dom
  const fetchResponse = document.createElement('p');
  fetchResponse.textContent = jsonResponse;
  fetchResponse.classList.add('fetchResponse');
  
  // add that new element to dom
  const mainBody = document.querySelector('.main');
  mainBody.innerHTML = '';
  mainBody.append(fetchResponse);

  return;
})