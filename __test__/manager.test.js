const Manager = require("./lib/manager");

describe("Manager", () => {
  const mockManager = {
    name: "Bryan",
    id: 140,
    email: "Bryan@gmail.com",
    officeNumber: 128,
  };
  describe("constructor tests", () => {
    test("should construct a new instance of the manager class", () => {
      const manager = new Manager(mockManager);
      expect(manager).toBeInstanceOf(Manager);
    });
    test("should construct a new instance of an manager class with name, id, email and office number", () => {
      const manager = new Manager(mockManager);
      expect(manager).toEqual({
        name: "Bryan",
        id: 140,
        email: "Bryan@gmail.com",
        officeNumber: 128,
        role: "Manager",
      });
    });
  });
  describe("method tests", () => {
    test("should return id when the getId method is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getId()).toEqual(140);
    });

    test("should return name when the getName method is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getName()).toEqual("Bryan");
    });

    test("should return email when the getEmail method is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getEmail()).toEqual("Bryan@gmail.com");
    });
    test("should return office number when the getEmail method is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getOfficeNumber()).toEqual(128);
    });
    test("should return manager role when the getRole method is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getRole()).toEqual("Manager");
    });
  });
});