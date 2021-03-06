var assert = chai.assert;

suite('temperature', function() {
    test('32F = 0C', function() {
        original.value = "32F";
        calculate();
        assert.deepEqual(converted.innerHTML, "0.0 Celsius");
    });
    test('12F = -11.1C', function() {
        original.value = "12F";
        calculate();
        assert.deepEqual(converted.innerHTML, "-11.1 Celsius");
    });
    test('6.1C = 43F', function() {
        original.value = "6.1C";
        calculate();
        assert.deepEqual(converted.innerHTML, "43.0 Farenheit");
    });
    test('3te = 0C', function() {
        original.value = "3te";
        calculate();
        assert.deepEqual(converted.innerHTML, /ERROR/);
    });
    
    test('45C = 113.0 Farenheit', function() {
        original.value = "45C";
        calculate();
        assert.deepEqual(converted.innerHTML, "113.0 Farenheit");
    });
    test('5X = error', function() {
        original.value = "5X";
        calculate();
        assert.match(converted.innerHTML, /ERROR/);
    });
});