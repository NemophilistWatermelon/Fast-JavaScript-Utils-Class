let storage = StorageFactory.new();

storage.stringifySetObj('这是键', [{abc: 'abc'}]);
storage.stringifySetObj('这是键2', [{abc: 'abc'}]);
storage.set('这是键3', 2323);

let item = storage.parseGetObj('这是键')

let allStorage = storage.allStorage()

let len = storage.length()

let log = console.log

console.log(len, 'len')
