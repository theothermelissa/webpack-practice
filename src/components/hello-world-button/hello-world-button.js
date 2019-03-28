import './hello-world-button.scss';


class HelloWorldButton {
  buttonCssClass = 'hello-world-button';

  render() {
    const button = document.createElement('button');
    button.innerHTML = 'Hello world';
    const body = document.querySelector('body');
    button.onclick = function() {
      const p = document.createElement('p');
      p.innerHTML = 'Hello world';
      p.classList.add('hello-world-text');
      body.appendChild(p);
    }
    button.classList.add(this.hello-world-button );
    body.appendChild(button);
  }
};

export default HelloWorldButton;