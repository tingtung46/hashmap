export default class HashMap {
  constructor() {
    this.table = new Array(16).fill([]);
    this.loadFactor = 0.75;
    this.capacity = this.table.length;
    this.occupied = 0;
  }

  hash(key) {
    let hashCode = 0;

    const primeNum = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNum * hashCode + key.charCodeAt(i)) % this.capacity;
    }

    return hashCode;
  }

  resize() {
    const oldTable = this.table;
    this.capacity *= 1.5;
    this.table = new Array(this.capacity).fill([]);
    this.occupied = 0;

    //Re-hashed key
    oldTable.forEach((bucket) => {
      if (bucket.length !== 0) {
        let cur = bucket;
        this.set(cur.key, cur.value);
      }
    });
  }

  set(key, value) {
    if (this.occupied / this.capacity >= this.loadFactor) {
      this.resize();
    }

    let bucIdx = this.hash(key);
    let table = this.table;

    if (table[bucIdx].length === 0) {
      this.occupied += 1;
      table[bucIdx] = { key, value };
      return;
    }

    //If bucket is not empty & has a different key
    if (table[bucIdx].length !== 0 && !this.has(key)) {
      for (let i = 0; i < this.capacity; i++) {
        bucIdx = (bucIdx + i * i) % this.capacity;

        if (bucIdx < 0 || bucIdx >= this.capacity) {
          throw new Error("Trying to access index out of bound");
        }

        if (table[bucIdx].length === 0) {
          this.occupied += 1;
          table[bucIdx] = { key, value };
          return;
        }
      }
    } else {
      table[bucIdx].value = value;
      return;
    }
  }

  get(key) {
    let bucIdx = this.hash(key);
    let table = this.table;

    if (table[bucIdx] && !this.has(key)) {
      table.forEach((bucket) => {
        if (this.has(key)) return bucket.value;
      });
    } else {
      return table[bucIdx].value;
    }

    return null;
  }

  has(key) {
    let table = this.table;

    for (let bucket of table) {
      if (bucket.key === key) return true;
    }

    return false;
  }

  remove(key) {
    let bucIdx = this.hash(key);
    let table = this.table;

    if (table[bucIdx] && !this.has(key)) {
      table.forEach((bucket) => {
        if (this.has(key)) {
          bucket = [];
          this.occupied -= 1;
          return true;
        }
      });
    } else {
      table[bucIdx] = [];
      this.occupied -= 1;
      return true;
    }

    return false;
  }

  length() {
    let table = this.table;
    let total = 0;

    table.forEach((bucket) => {
      if (bucket.length !== 0) total += 1;
    });

    return total;
  }

  clear() {
    this.table = new Array(16).fill([]);
    this.occupied = 0;
  }

  keys() {
    let table = this.table;
    let keyArray = [];

    table.forEach((bucket) => {
      if (bucket.length !== 0) keyArray.push(bucket.key);
    });

    return keyArray;
  }

  values() {
    let table = this.table;
    let valueArray = [];

    table.forEach((bucket) => {
      if (bucket.length !== 0) valueArray.push(bucket.value);
    });

    return valueArray;
  }

  entries() {
    let table = this.table;
    let entryArray = [];

    table.forEach((bucket) => {
      if (bucket.length !== 0) entryArray.push([bucket.key, bucket.value]);
    });

    return entryArray;
  }
}
