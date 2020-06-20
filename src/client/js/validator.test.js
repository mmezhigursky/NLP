import { urlChecker } from "./validator.js";




  describe("URL checker", () => {
    test("check string on blank and not allowed protocol", () => {
        
      const input = ["https://google.com", '',"google.com"]

      expect(urlChecker(input[1])).toBe(false);
      expect(urlChecker(input[0])).toBe(true);
      expect(urlChecker(input[2])).toBe(false);
    });
  
  });