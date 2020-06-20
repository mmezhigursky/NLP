
jest.mock('./http'); // This line is important!
const {textAnalysator} = require('./http');
import "babel-polyfill"

// here I wonted work with asinc function and mokcs in jest
//just simple example
test('should return some data',() => {
  textAnalysator('https://www.google.com/').then(label=>{
      expect(label).toBe('preventative medicine')
  });

});
