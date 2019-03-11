const expect = require('expect');
let {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage' , () =>{
    it('should generate a message object' , () => {
        let from = 'Jen';
        let text = 'Hello';

        let message = generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    })
})

describe('generateLocationMessage' ,() =>{
    it('should generate a location url' , () =>{
        let from = 'Joy';
        let latitude = 1;
        let longitude = 1;

        let locationMessage = generateLocationMessage(from,latitude,longitude);

        expect(typeof locationMessage.createdAt).toBe('number');
        expect(locationMessage.from).toBe(from);
        expect(locationMessage.url).toBe('https://www.google.com/maps?q=1,1');
    })
})