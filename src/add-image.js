import ShockedPikachu from './shockedpikachu.jpg';

function addImage() {
  const img = document.createElement('img');
    img.alt = 'ShockedPikachu';
    img.width = 300;
    img.src = ShockedPikachu;

    const body = document.querySelector('body');
    body.appendChild(img);
}

export default addImage;