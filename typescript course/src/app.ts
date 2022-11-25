class Department{

    
    protected employees: string[] = [];

    constructor(        
        readonly id: string,
        public name: string){

    }

    format(){
        return `${this.id} owns ${this.name}`
    }

    addEmployee(name: string){
        this.employees.push(name)
    }
}

const newDev = new Department("1337", "20",);

class ITDepartment extends Department{

    private lastReport: string;

    get recentReport(){
        if (this.lastReport){
            return this.lastReport;    
        }
        throw new Error("No report");
    }

    set recentReport(value: string){
        this.addReport(value)
    }

    admins: string[];
    constructor(id: string, admins: string[], private reports: string[]){
        super(id, 'IT');
        this.admins = admins;
        this.lastReport = reports[0];
    }

    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    getReport(){
        console.log(this.reports);
    }

    addEmployee(name: string){
        if (name === "Marcel"){
            return;
        }
        this.employees.push(name)
    }

}

const IT = new ITDepartment("d2", ["admin1"], []);

IT.addReport("fisrt raport")
IT.getReport()
IT.addEmployee("Test")