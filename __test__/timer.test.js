const functions = require('../src/client/js/timer');

// Test if the function is defined
test('function exists', () => {
    expect(functions.countTripLength).toBeDefined();
});

// Test if the function is really a function.
test('is function', () => {
    expect(typeof functions.countTripLength).toBe('function');
});

// Test the function of countTripLength
test('Calculate trip length between start date and end date', () => {
    expect(functions.countTripLength('2020-05-22', '2020-05-20')).toBe(3);
});