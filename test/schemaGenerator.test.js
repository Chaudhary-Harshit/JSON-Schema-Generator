const  generateSchema  = require('../lib/schemaGenerator');

test('generate schema for a string', () => {
    const data = 'hello';
    const schema = generateSchema(data);
    expect(schema).toEqual({ type: 'string' });
});

test('generate schema for a number', () => {
    const data = 42;
    const schema = generateSchema(data);
    expect(schema).toEqual({ type: 'number' });
});

test('generate schema for a boolean', () => {
    const data = true;
    const schema = generateSchema(data);
    expect(schema).toEqual({ type: 'boolean' });
});

test('generate schema for a null', () => {
    const data = null;
    const schema = generateSchema(data);
    expect(schema).toEqual({ type: 'null' });
});

test('generate schema for an array', () => {
    const data = [1, 2, 3];
    const schema = generateSchema(data);
    expect(schema).toEqual({ type: 'array', items:[ { type: 'number'},{type: 'number'},{type: 'number' } ]});
});

test('generate schema for an array with multiple types', () => {
    const data = [1, 'two', true, null];
    const schema = generateSchema(data);
    expect(schema).toEqual({
        type: 'array',
        items: [
            { type: 'number' },
            { type: 'string' },
            { type: 'boolean' },
            { type: 'null' }
        ]
    });
});

test('generate schema for an object', () => {
    const data = { name: 'John', age: 30, isEmployed: true };
    const schema = generateSchema(data);
    expect(schema).toEqual({
        type: 'object',
        properties: {
            name: { type: 'string' },
            age: { type: 'number' },
            isEmployed: { type: 'boolean' }
        },
        required: ['name', 'age', 'isEmployed']
    });
});

test('generate schema for an array of arrays', () => {
    const data = [[1, 2], ['three', 'four'], [true, false]];
    const schema = generateSchema(data);
    expect(schema).toEqual({
        type: 'array',
        items: [
            { type: 'array', items: [ {type: 'number' },  {type: 'number' }] },
            { type: 'array', items: [{ type: 'string' },{ type: 'string' }] },
            { type: 'array', items: [{ type: 'boolean' },{ type: 'boolean' }] }
        ]
    });
});