const Employee = require("./lib/employee");

describe("Employee", () => {
  const mockEmployee = {
    name: "Hannah",
    id: 130,
    email: "Hannah@gmail.com",
  };
  describe("constructor tests", () => {
    test("should construct a new instance of an employee class", () => {
      const employee = new Employee(mockEmployee);
      expect(employee).toBeInstanceOf(Employee);
    });
    test("should construct a new instance of an employee class with name, id, email", () => {
      const employee = new Employee(mockEmployee);
      expect(employee).toEqual({
        name: "Hannah",
        id: 130,
        email: "Hannah@gmail.com",
      });
    });
  });
  describe("method tests", () => {
    test("should return id when the getId method is called", () => {
      const employee = new Employee(mockEmployee);
      expect(employee.getId()).toEqual(130);
    });

    test("should return name when the getName method is called", () => {
      const employee = new Employee(mockEmployee);
      expect(employee.getName()).toEqual("Hannah");
    });

    test("should return email when the getEmail method is called", () => {
      const employee = new Employee(mockEmployee);
      expect(employee.getEmail()).toEqual("Hannah@gmail.com");
    });
  });
});