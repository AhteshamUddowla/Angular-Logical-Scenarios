export class Employee{
    empId: number;
    name: string;
    contactNo:  string;
    email:  string;
    city:  string;
    state:  string;
    pinCode:  string;
    designation:  string;
    mockEmpRelatives: any[ ]

    constructor(){
        this.empId = 0
        this.name = ""
        this.contactNo = ""
        this.email = ""
        this.city = ""
        this.state = ""
        this.pinCode = ""
        this.designation = ""
        this.mockEmpRelatives = []
    }
}

export class EmpRelative{
    relativeId: number;
    name: string;
    relation: string;
    age: number;
    empId: number;

    constructor(){
        this.relativeId = 0
        this.name = ""
        this.relation = ""
        this.age = 0
        this.empId = 0

    }
}
