base-cache
==========

A simple node.js base module for creating cache tables, based on hashes/keys. This module was written for the light-router(https://github.com/herenow/light-router) cache manager, so performance is a concern in this module :)

##Install
```
npm install base-cache
```

##How to use
* This cache manager does not have a max_age property, the only option is to set a max_size for the cache table. By default its 10000.

**cache.js**
```javascript
var Cache = require('base-cache')

//Create some cache tables
var Table = {
    dogs: new Cache({max_size: 10000}),
    cats: new Cache({max_size: 5000})
}

//Export the tables
module.exports = Table
```

**logic.js**
```javascript
var cache = require('./cache.js')

//Select a table
var dogs = cache["dogs"]

//Try to find a cache
var hit = dogs.find("Zeus")

if(typeof hit !== 'undefined') {
    console.log(hit)
}
//Not found in cache, add to cache
else {
    dogs.add("Zeus", {
        age: 3,
        gender: 'male',
        breed: 'rottweiler'
    })
}
```


##Methods

***Cache.Constructor(options)***
This initializes a new cache hash table an returns it. You can send an optional options object.

```javascript
var cache = new Cache({
    max_size: 10 //Default: 10000
})
```

***cache.add(key, value)***
Add something to the cache table.

```javascript
cache.add('bananas.stock', 1000)
```

***cache.find(key)***
Find something in the cache table.

```javascript
cache.find('bananas.stock')
```

***cache.clear()***
Clears the given cache table.

```javascript
cache.clear()
```


##Contributions
- [herenow](https://github.com/herenow)
