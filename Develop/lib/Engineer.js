// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
class Engineer extends Employee {
    constructor(name, id, email) {
        super();
        this.github = github;
        this.role = 'Engineer';
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Engineer;