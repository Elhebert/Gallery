export class Modal {
  /**
   * Create a modal
   * @param {string} data - The data to put inside the modal.
   */

  constructor (content = '') {
    this.overlay = null;
    this.content = null;
    this.box = null;

    /**
     * Is the modal in the DOM ?
     */
    this.added = false;

    this.buidl();
    this.setContent(content);
  }

  /**
   * Crete the modal if necessary, show the modal.
   */
  show () {
    if (this.added === false) {
      this.add();
    }

    this.overlay.classList.remove('modal__hidden');
    this.box.classList.add('modal__hidden');
  }

  /**
   * Hide the modal.
   */
  hide () {
    this.overlay.classList.add('modal__hidden');
    this.box.classList.add('modal__hidden');
  }

  /**
   * Remove the modal from the DOM.
   */
  remove () {
    let parentNode = this.overlay.parentNode;
    parentNode.contains(this.box) && parentNode.removeChild(this.box);
    parentNode.contains(this.overlay) && parentNode.removeChild(this.overlay);

    this.added = false;
  }

  /**
   * Add the modal in the DOM (inside the <body> tag).
   */
  add () {
    let body = document.body;

    body.childNodes.push(this.overlay);
    body.childNodes.push(this.box);

    this.added = true;
  }

  /**
   * Create the different HTMLElement of the modal.
   */
  build () {
    this.overlay = document.createElement('div');
    this.overlay.classList.add('modal__overlay');
    this.overlay.classList.add('modal__hidden');

    this.content = document.createElement('div');
    this.content.classList.add('modal__content');

    this.box = document.createElement('div');
    this.box.classList.add('modal__box');
    this.box.classList.add('modal__hidden');
    this.box.childNodes.push(this.content);
  }

  /**
   * Set the content of the modal.
   * @param {string} content - The content to put inside the modal.
   */
  setContent (content) {
    this.content.innerHTML = content;
  }
}