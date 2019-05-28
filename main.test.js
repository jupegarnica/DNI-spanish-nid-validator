const validator = require('./main.js');

describe('spanish dni validator', () => {
    it('must have 9 chars' , () => {
        expect(validator('12345678AA')).toBe(false);
        expect(validator('12345678')).toBe(false);
    });
    it('must be call with a string', () => {
        expect(validator(123)).toBe(false);
        expect(validator([])).toBe(false);
        expect(validator({})).toBe(false);
        expect(validator(undefined)).toBe(false);
    })
    it('must work', () => {
      expect(validator('12345678Z')).toBe(true);
      expect(validator('12345678A')).toBe(false);
    });
} )