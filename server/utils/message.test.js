const expect = require('expect');
let {generateMessage} = require('./message');

describe('generateMessage' , () =>{
    it('should generate a message object' , () => {
        let from = 'Jen';
        let text = 'Hello';

        let message = generateMessage(from,text);

        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,text});
    })
})