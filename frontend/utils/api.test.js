import * as API from './api'
import 'whatwg-fetch'

test('First test', () => {
      expect.assertions(1)
      const reactObject = {name: 'react', path: 'react'}
      return expect(API.getCategories()).resolves.toContainEqual(reactObject);
});

