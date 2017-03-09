/*
QUnit.test("hello test", function(assert) {
    assert.ok(1 == "1", "Passed!");
    assert.
});
*/

var App = window.App || {};

QUnit.test('hello test', function(assert) {
    assert.ok(1 == '1', 'Passed!');
});

QUnit.test('DataStore.prototype.get()', function(assert) {
    var ds = new App.DataStore();

    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpresso');
    assert.deepEqual(ds.get('m@bond.com'), 'tea', 'Returns tea');
    assert.deepEqual(ds.get('james@bond.com'), 'eshpresso', 'Returns eshpresso');
});

QUnit.test('DataStore.prototype.add', function(assert) {
    var ds = new App.DataStore();

    assert.deepEqual(ds.add('jamie@bond.com', 'milk'), undefined, 'Added into DB');
});

QUnit.test('DataStore.prototype.getAll()', function(assert) {
    var ds = new App.DataStore();

    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpresso');

    var orders = ds.getAll();
    assert.ok(orders['m@bond.com'] == 'tea', 'GetAll Works');
    assert.ok(orders['james@bond.com'] == 'eshpresso', 'GetAll Works');

});

QUnit.test('DataStore.prototype.remove()', function(assert) {
    var ds = new App.DataStore();

    ds.add('m@bond.com', 'tea');
    ds.add('james@bond.com', 'eshpresso');
    ds.remove('james@bond.com');

    assert.ok(ds.get('m@bond.com') == 'tea', 'Item Returns tea');
    assert.ok(ds.get('james@bond.com') == undefined, 'james@bond.com Removed succeeds');
});



//Trucks.js
/*The Problem was Truck along with Datastore were not defined thus they had to be
defined again.
*/

QUnit.test('Truck.prototype.createOrder()', function(assert) {
    var Truck = App.Truck;
    var DataStore = App.DataStore;

    var myTruck = new Truck('ncc-1701', new DataStore());
    var test = new Truck('ncc-1701', new DataStore());

    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });
    myTruck.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    });

    //Test Portion
    test.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    test.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });
    test.createOrder({
        emailAddress: 'm@bond.com',
        coffee: 'earl grey'
    });

    assert.deepEqual(myTruck, test, 'Create Order works');

});

QUnit.test('Truck.prototype.deliverOrder()', function(assert) {
    var Truck = App.Truck;
    var DataStore = App.DataStore;

    var myTruck = new Truck('ncc-1701', new DataStore());
    var test = new Truck('ncc-1701', new DataStore());

    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });

    myTruck.deliverOrder('me@goldfinger.com');

    test.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });

    assert.deepEqual(myTruck, test, 'Deliver Order works');

});

QUnit.test('Truck.prototype.printOrders()', function(assert) {
    var Truck = App.Truck;
    var DataStore = App.DataStore;

    var myTruck = new Truck('ncc-1701', new DataStore());

    myTruck.createOrder({
        emailAddress: 'me@goldfinger.com',
        coffee: 'double mocha'
    });
    myTruck.createOrder({
        emailAddress: 'dr@no.com',
        coffee: 'decaf'
    });

    var test = myTruck.printOrders();

    assert.deepEqual(myTruck.printOrders(), test, 'Deliver Order works');

});
