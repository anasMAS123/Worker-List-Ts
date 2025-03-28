import "./styles/style.css";
import Employee from "./model/Employee";
import EmployeeList from "./model/EmployeeList";
import EmployeeListTemelate from "./tempelate/EmployeeListTempelate";
const initApp = () => {
  const employeeList: EmployeeList = EmployeeList.instance;
  const employeeListTemp: EmployeeListTemelate = EmployeeListTemelate.instance;

  const form = document.getElementById("form") as HTMLFormElement;
  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault();

    const _name = document.getElementById("name") as HTMLInputElement;
    const _age = document.getElementById("age") as HTMLInputElement;
    const _gender = document.getElementById("gender") as HTMLSelectElement;
    const _job = document.getElementById("job") as HTMLInputElement;
    const _salary = document.getElementById("salary") as HTMLInputElement;

    const _id =
      employeeList.list.length !== 0
        ? employeeList.list[employeeList.list.length - 1].id + 1
        : 1;
    const newEmp = new Employee(
      _id,
      _name.value,
      parseInt(_age.value),
      _gender.value,
      _job.value,
      _salary.value
    );
    employeeList.addEmployee(newEmp);
    employeeListTemp.render(employeeList);
  });
  employeeList.load();
  employeeListTemp.render(employeeList);
};

document.addEventListener("DOMContentLoaded", initApp);
