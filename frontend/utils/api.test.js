import {
 getCategories   
} from './api'
import 'whatwg-fetch'
import 'jest-localstorage-mock';


test('First test', () => {
    const categoryKeys = ["name", "path"];
    return getCategories().then(data => {
        data.forEach(category => {
            const currentKeys = Object.keys(category)
            expect(currentKeys).toContain(categoryKeys[0])
            expect(currentKeys).toContain(categoryKeys[1])
        })
    });
});

