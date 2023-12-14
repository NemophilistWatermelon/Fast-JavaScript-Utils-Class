class StorageFactory {
  constructor() {

  }

  static new(...args) {
    return new this(...args);
  }

  set(key, value) {
    window.localStorage.setItem(key, value);
  }

  get(key) {
    return window.localStorage.getItem(key)
  }

  /**
   * 获取对象字符串并转换为对象
   * @param key
   * @returns {any}
   */
  parseGetObj(key) {
    return JSON.parse(window.localStorage.getItem(key))
  }

  /**
   * 设置对象转换为对象字符串
   * @param key
   * @param value
   */
  stringifySetObj(key, value) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  /**
   * 获取所有localStorage 对象长度
   * @returns {number}
   */
  length() {
    return Object.keys(window.localStorage).length
  }

  /**
   * 获取所有的localStorage 对象内容
   * @returns {{}}
   */
  allStorage() {
    let allData = window.localStorage
    let res = {}
    for (const allDataKey in allData) {
      try {
        let v = allData[allDataKey]
        if (JSON.parse(v)) {
          res[allDataKey] = JSON.parse(v)
        } else {
          res[allDataKey] = v
        }
      } catch (e) {
        continue
      }
    }
    return res
  }
}
