class Department{

    constructor(        
        readonly id: string,
        public employees: string){

    }

    format(){
        return `${this.id} owns ${this.employees}`
    }
}

const newDev = new Department("1337", "20",);

class ITDepartment extends Department{
    admins: string[];
    constructor(id: string, admins: string[], private reports: string[]){
        super(id, 'IT');
        this.admins = admins;
    }

    addReport(text: string) {
        this.reports.push(text);
    }

    getReport(){
        console.log(this.reports);
    }
}

const IT = new ITDepartment("d2", ["admin1"], []);

IT.addReport("fisrt raport")
IT.getReport