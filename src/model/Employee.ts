export interface EmployeeData {
  id: number;
  name: string;
  age: number;
  gender: string;
  job: string;
  salary: string;
}

export default class Employee implements EmployeeData {
  constructor(
    private _id: number = 0,
    private _name: string = "",
    private _age: number = 0,
    private _gender: string = "",
    private _job: string = "",
    private _salary: string = ""
  ) {}
  get id(): number {
    return this._id;
  }
  set id(_id: number) {
    this._id = _id;
  }
  get name(): string {
    return this._name;
  }
  set name(_name: string) {
    this._name = _name;
  }

  get age(): number {
    return this._age;
  }
  set age(_age: number) {
    this._age = _age;
  }

  get gender(): string {
    return this._gender;
  }
  set gender(_gender: string) {
    this._gender = _gender;
  }

  get job(): string {
    return this._job;
  }
  set job(_job: string) {
    this._job = _job;
  }

  get salary(): string {
    return this._salary;
  }
  set salary(_salary: string) {
    this._salary = _salary;
  }
}
