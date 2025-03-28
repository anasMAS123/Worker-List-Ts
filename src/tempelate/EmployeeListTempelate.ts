import EmployeeList from "../model/EmployeeList";

export interface EmployeeListTemplateOperations {
  ul: HTMLUListElement;
  render(employeeList: EmployeeList): void;
  clear(): void;
}

export default class EmployeeListTemelate
  implements EmployeeListTemplateOperations
{
  ul: HTMLUListElement;
  //singleton
  static instance: EmployeeListTemelate = new EmployeeListTemelate();
  private constructor() {
    this.ul = document.getElementById("list") as HTMLUListElement;
  }
  clear(): void {
    this.ul.innerHTML = ``;
  }
  render(employeeList: EmployeeList): void {
    this.clear();
    employeeList.list.forEach((employee) => {
      const li = document.createElement("li");
      li.className = "list-item";
      const imgSpan = document.createElement("span");
      const img = document.createElement("img");
      img.src = employee.gender === "male" ? "/man.png" : "/woman.png";
      img.width = 50;
      img.height = 50;
      imgSpan.append(img);
      li.append(imgSpan);
      const nameSpan = document.createElement("span");
      nameSpan.className = "employee-name";
      nameSpan.innerText = employee.name;
      li.append(nameSpan);
      const ageSpan = document.createElement("span");
      ageSpan.className = "employee-age";
      ageSpan.innerText = employee.age?.toString();
      li.append(ageSpan);
      const genderSpan = document.createElement("span");
      genderSpan.className = "employee-gender";
      genderSpan.innerText = employee.gender;
      li.append(genderSpan);
      const jobSpan = document.createElement("span");
      jobSpan.className = "employee-job";
      jobSpan.innerText = employee.job;
      li.append(jobSpan);
      const salarySpan = document.createElement("span");
      salarySpan.className = "employee-salary";
      salarySpan.innerText = employee.salary;
      li.append(salarySpan);
      const clearBtn = document.createElement("button");
      clearBtn.className = "clear";
      clearBtn.innerText = "x";
      li.append(clearBtn);
      clearBtn.addEventListener("click", () => {
        employeeList.removeEmployee(employee.id);
        this.render(employeeList);
      });
      this.ul.append(li);
    });
  }
}
