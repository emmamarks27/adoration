//Curly braces grabs the component from the file

//import the each method
const each = require('jest-each').default;

const { showHowMuchILoveYou } = require('./adoration.js');

// I am describing this function, it exists. "It" is an alias fror test.

describe('showHowMuchILoveYou', () => {
  it('Exists', () => {
    expect(showHowMuchILoveYou).toBeDefined;
  });

  it('Is a function', () => {
    expect(showHowMuchILoveYou instanceof Function).toEqual(true);
  });

  //each takes in an array and then for every item in the array it applies a test.

  //expected refers to the string passed as first argument in array, amount refers to second argument.
  each([
    [`I love you thiiiiis much`, 5],
    [`I love you thiiis much`, 3],
  ]).test('Returns %s when passed %s', (expected, amount) => {
    expect(showHowMuchILoveYou(amount)).toBe(expected);
  });

  it('Throws an error when passed a string', () => {
    expect(() => {
      showHowMuchILoveYou('with all my heart');
    }).toThrow(new Error("I'm really sorry; you're just not my type."));
  });
});
