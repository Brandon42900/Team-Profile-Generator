const Engineer = require("./lib/engineer");

describe("Engineer", () => {
  const mockEngineer = {
    name: "Brandon",
    id: 150,
    email: "Brandonorozco10@gmail.com",
    github: "www.github.com/brandon42900",
  };
  describe("constructor tests", () => {
    test("should construct a new instance of the engineer class", () => {
      const engineer = new Engineer(mockEngineer);
      expect(engineer).toBeInstanceOf(Engineer);
    });
    test("should construct a new instance of an engineer class with name, id, email and github profile", () => {
      const engineer = new Engineer(mockEngineer);
      expect(engineer).toEqual({
        name: "Brandon",
        id: 150,
        email: "Brandonorozco10@gmail.com",
        github: "www.github.com/brandon42900",
        role: "Engineer",
      });
    });
  });
  describe("method tests", () => {
    test("should return id when the getId method is called", () => {
      const engineer = new Engineer(mockEngineer);
      expect(engineer.getId()).toEqual(150);
    });

    test("should return name when the getName method is called", () => {
      const engineer = new Engineer(mockEngineer);
      expect(engineer.getName()).toEqual("Ella");
    });

    test("should return email when the getEmail method is called", () => {
      const engineer = new Engineer(mockEngineer);
      expect(engineer.getEmail()).toEqual("Brandonorozco10@gmail.com");
    });
    test("should return github profile URL when the getGithub method is called", () => {
      const engineer = new Engineer(mockEngineer);
      expect(engineer.getGithub()).toEqual("www.github.com/brandon42900");
    });
    test("should return engineer role when the getRole method is called", () => {
      const engineer = new Engineer(mockEngineer);
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });
});