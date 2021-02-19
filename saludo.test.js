const saludo = require('./saludo');

test('probando el saludo Hola + nombre de la persona', () => {
  expect(saludo('Danilo')).toBe('Hola Danilo');
});