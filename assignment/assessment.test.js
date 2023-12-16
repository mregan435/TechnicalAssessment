const minStepsToStrongPassword = require("./assessmentOne");
const minimumDifference = require("./assessmentTwo");;

// Run unit tests using Jest
describe('Question 1', () => {
  describe('Minimum steps to strong password', () => {

    it('should return 5 for the password "a"', () => {
      expect(minStepsToStrongPassword('a')).toBe(5);
    });

    it('should return 3 for the password "aA1"', () => {
      expect(minStepsToStrongPassword('aA1')).toBe(3);
    });

    it('should return 3 for the password "1337C0d3"', () => {
      expect(minStepsToStrongPassword('1337C0d3')).toBe(0);
    });
  });
});

describe('Question 2', () => {
  describe('Absolute difference of the sums of the arrays', () => {

    it('should return 2 for the array "[3,9,7,3]"', () => {
      expect(minimumDifference([3,9,7,3])).toBe(2);
    });

    it('should return 72 for the array "[-36,36]"', () => {
      expect(minimumDifference([-36,36])).toBe(72);
    });

    it('should return 72 for the array "[2,-1,0,4,-2,-9]"', () => {
      expect(minimumDifference([2,-1,0,4,-2,-9])).toBe(0);
    });
  });
});