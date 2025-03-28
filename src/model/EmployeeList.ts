import Employee from "./Employee";

interface EmployeeListOperations {
  list: Employee[];
  load(list: Employee[]): void;
  save(): void;
  addEmployee(emp: Employee): void;
  removeEmployee(id: number): void;
  clear(): void;
}

export default class EmployeeList implements EmployeeListOperations {
  // singleton
  static instance: EmployeeList = new EmployeeList();
  private constructor(private _list: Employee[] = []) {}

  get list(): Employee[] {
    return this._list;
  }

  load(): void {
    const storedEmployeeList: string | null =
      localStorage.getItem("employeeList");
    if (typeof storedEmployeeList !== "string") return;

    const employeeList: {
      _id: number;
      _name: string;
      _age: number;
      _gender: string;
      _job: string;
      _salary: string;
    }[] = JSON.parse(storedEmployeeList);

    employeeList.forEach((employee) => {
      const newEmployee = new Employee(
        employee._id,
        employee._name,
        employee._age,
        employee._gender,
        employee._job,
        employee._salary
      );
      EmployeeList.instance.addEmployee(newEmployee);

      ///
    });
  }

  save(): void {
    localStorage.setItem("employeeList", JSON.stringify(this.list));
  }

  clear(): void {
    this._list = [];
    this.save();
  }
  addEmployee(emp: Employee): void {
    this._list.push(emp);
    this.save();
  }
  removeEmployee(id: number): void {
    this._list = this._list.filter((employee) => employee.id !== id);
    this.save();
  }
}
