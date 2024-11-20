
document.getElementById('bg-change-btn').addEventListener('click', () => {
    const randomColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    document.body.style.backgroundColor = randomColor;
  });
  
 
  document.getElementById('create-item-btn').addEventListener('click', () => {
    const newItem = document.createElement('div');
    newItem.classList.add('dynamic-item');
    newItem.textContent = `Item ${document.querySelectorAll('.dynamic-item').length + 1}`;
    newItem.style.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.getElementById('dynamic-content').appendChild(newItem);
  });
  
 
  document.getElementById('hide-show-btn').addEventListener('click', () => {
    const contentArea = document.getElementById('dynamic-content');
    contentArea.style.display = contentArea.style.display === 'none' ? 'block' : 'none';
  });
  

  document.getElementById('move-box-btn').addEventListener('click', () => {
    const box = document.querySelector('.box');
    box.style.transform = `translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px)`;
  });
  
  
  document.getElementById('get-info-btn').addEventListener('click', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/2');
    const data = await response.json();
    const infoElement = document.createElement('p');
    infoElement.style.fontStyle = 'Roman';
    document.getElementById('dynamic-content').appendChild(infoElement);
  });
  