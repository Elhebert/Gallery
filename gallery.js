import {Iterator} from './lib/Iterator.js';
import {Modal} from './lib/Modal.js';

class Gallery {

  constructor (media = [], options = {}) {
    this.media = new Iterator(media);
    this.modal = new Modal();

    let defaults = {
    };

    this.options = this.setOptions(defaults, options);
  }

  load () {
    let prev = document.querySelector('[data-gallery-prev]');
    let next = document.querySelector('[data-gallery-next]');

    prev.addEventListener('click', () => {
      this.media.prev();
      this.modal.setContent(this.media.getValue());
    });
    next.addEventListener('click', () => {
      this.media.next();
      this.modal.setContent(this.media.getValue());
    });
  }

  open (event) {
    let element = event.currentTarget;
    let image = element.getElementByTagName('img');

    this.modal.setContent(image.getAttribute('src'));
    this.modal.show();
  }

  close () {
    this.modal.hide();
  }

  setOptions(defaults, properties) {
    for (let property in properties) {
      if (properties.hasOwnProperty(property)) {
        defaults[property] = properties[property];
      }
    }

    return defaults;
  }
}