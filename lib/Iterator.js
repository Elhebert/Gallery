export class Iterator {
  constructor(collection = [], currentIndex = 0) {
    this.collection = collection;
    this.currentIndex = currentIndex;
  }

  next () {
    this.currentIndex++;
    if (this.isOutOfRange()) {
      this.currentIndex = this.getMaxLength();
    }
  }

  prev () {
    this.currentIndex--;
    if (this.isOutOfRange()) {
      this.currentIndex = 0;
    }
  }

  add (element) {
    this.collection.push(element);
  }

  getValue () {
    return this.collection[this.currentIndex];
  }

  isOutOfRange () {
    return !(this.currentIndex >= 0 && this.currentIndex <= this.getMaxLength());
  }

  getMaxLength () {
    return this.collection.length - 1;
  }
}