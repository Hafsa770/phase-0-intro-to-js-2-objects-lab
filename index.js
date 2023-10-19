// Write your solution in this file!

let employee = {
    name: "John Doe",
    streetAddress: "1234 Elm St"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  // Testing the functions
  console.log("Initial employee:", employee);
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log("Updated employee (non-destructive):", updatedEmployee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "5678 Maple St");
  console.log("Updated employee (destructive):", employee);
  
  const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without address (non-destructive):", employeeWithoutAddress);
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Employee without name (destructive):", employee);
  