const Intern = require("./lib/intern");

describe("Intern", () => {
  const mockIntern = {
    name: "Grace",
    id: 160,
    email: "Grace@gmail.com",
    school: "Georgia Institute of Technology",
  };
  describe("constructor tests", () => {
    test("should construct a new instance of the intern class", () => {
      const intern = new Intern(mockIntern);
      expect(intern).toBeInstanceOf(Intern);
    });
    test("should construct a new instance of an intern class with name, id, email and office number", () => {
      const intern = new Intern(mockIntern);
      expect(intern).toEqual({
        name: "Grace",
        id: 160,
        email: "Grace@gmail.com",
        school: "Georgia Institue of Technology",
        role: "Intern",
      });
    });
  });
  describe("method tests", () => {
    test("should return id when the getId method is called", () => {
      const intern = new Intern(mockIntern);
      expect(intern.getId()).toEqual(160);
    });

    test("should return name when the getName method is called", () => {
      const intern = new Intern(mockIntern);
      expect(intern.getName()).toEqual("Sam");
    });

    test("should return email when the getEmail method is called", () => {
      const intern = new Intern(mockIntern);
      expect(intern.getEmail()).toEqual("Grace@gmail.com");
    });
    test("should return school when the getSchool method is called", () => {
      const intern = new Intern(mockIntern);
      expect(intern.getSchool()).toEqual("Georgia Institute of Technology");
    });
    test("should return intern role when the getRole method is called", () => {
      const intern = new Intern(mockIntern);
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});