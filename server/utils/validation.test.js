const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString' , () =>{
    it('it should reject non-string values' ,() =>{
        let res = isRealString(98);
        expect(res).toBe(false);
    });

    it('it should reject only spaces' ,() =>{
        let res = isRealString('    ');
        expect(res).toBe(false);
    });

    it('should allow string with non-space string' ,() => {
        let res = isRealString('  asd  ');
        expect(res).toBe(true);
    })
});