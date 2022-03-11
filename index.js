

let employee = {
    employeeName: 'Greg',
    employeeAddress: '123 Fake Street'
}
function updateEmployeeWithKeyAndValue(employee, employeeName, employeeAddress){
    const newObj = {...employee};
    newObj[employeeName]=employeeAddress
    return newObj 
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, employeeName, employeeAddress){
    employee[employeeName]= employeeAddress;
    return employee
}
function deleteFromEmployeeByKey(employee){
    const newObj = {...employee}
    delete newObj.employeeName
    return newObj.employeeName = { employeeName: 'Sam'}
}
function destructivelyDeleteFromEmployeeByKey(employee, employeeName){
    
   Reflect.deleteProperty(employee,employeeName)
   return employee
}
