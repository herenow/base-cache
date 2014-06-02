var Cache = require('../index.js')
var table = {}

exports.testCacheTable = function(test)
{
    table.test = new Cache({
        max_size: 100
    })

    if(typeof table.test !== 'undefined') {
        test.done()
    }
}

exports.testAdd = function(test)
{
    table.test.add("test", true)
    test.done()
}

exports.testFind = function(test)
{
    test.ok( table.test.find("test") )
    test.done()
}

exports.testSize = function(test)
{
    test.equal(table.test.size(), 1)
    test.done()
}

exports.testClear = function(test)
{
    table.test.clear()
    test.equal(table.test.size(), 0)
    test.done()
}

exports.testGet2MaxSize = function(test)
{
    //Add 200 elements, but the size should not pass 100
    for(var i = 0; i < 200; i++) {
        table.test.add("key." + i, {id: i})
    }
    test.equal(table.test.size(), 100)
    test.equal((typeof table.test.find("key.1") === "undefined"), true)
    test.equal((typeof table.test.find("key.199") !== "undefined"), true)
    test.done()
}
