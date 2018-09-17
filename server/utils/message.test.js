var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generate Message', () => {
    it('should generate correct message object', () => {
        var from = 'Adam';
        var text = 'Some test text';
        var message = generateMessage(from, text);
        expect(message.from).toBe(from);
        expect(message.text).toBe(text);
        expect(message.createdAt).toBeA('number');
    });
});
describe('generate location Message', () => {
    it('should generate correct location message object', () => {
        var from = 'Adam';
        var latitude = 1;
        var longitude = 1;
        var message = generateLocationMessage(from, latitude, longitude);
        expect(message.from).toBe(from);
        expect(message.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(message.createdAt).toBeA('number');
    });
});