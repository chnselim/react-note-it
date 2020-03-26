export default class Storage {
  static prefix = '';

  static setItem(key, value) {
    localStorage.setItem(this._generateKey(key), JSON.stringify(value));
  }

  static getItem(key) {
    return JSON.parse(localStorage.getItem(this._generateKey(key)));
  }

  static _generateKey(key) {
    return `${this.prefix}_${key}`;
  }
}
