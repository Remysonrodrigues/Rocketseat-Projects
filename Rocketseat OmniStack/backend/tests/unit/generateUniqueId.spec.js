const generateUniqueId = require('../../src/utils/generateUniqueId');

//Fazendo teste unitario
describe('Generate Unique ID', () => {
    it('should generate an unique ID', () => {
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});