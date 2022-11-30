class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    format() {
        return `${this.id} owns ${this.name}`;
    }
    addEmployee(name) {
        this.employees.push(name);
    }
}
const newDev = new Department("1337", "20");
class ITDepartment extends Department {
    constructor(id, admins, reports) {
        super(id, 'IT');
        this.reports = reports;
        this.admins = admins;
        this.lastReport = reports[0];
    }
    get recentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No report");
    }
    set recentReport(value) {
        this.addReport(value);
    }
    addReport(text) {
        this.reports.push(text);
        this.lastReport = text;
    }
    getReport() {
        console.log(this.reports);
    }
    addEmployee(name) {
        if (name === "Marcel") {
            return;
        }
        this.employees.push(name);
    }
}
const IT = new ITDepartment("d2", ["admin1"], []);
IT.addReport("fisrt raport");
IT.getReport();
IT.addEmployee("Test");
