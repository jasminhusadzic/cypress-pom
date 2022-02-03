export class LeadFormComponent {

    
    
    submitLeadForm = (options = {selector, isFullName, fullName, phone, location}) => {
        if(options.isFullName) {
            this.populateFullName(options.selector, options.fullName);
        }else {
            this.populateFirstName(options.fullName);
            this.populateLastName(options.fullName);
        }

        this.populatePhone(options.phone)
        
        '' !== options.location ? this.insertLocation(options.location) : '';
        this.clickSubmit();
    }

    populateFullName = (leadform, fullName) => {
        cy.get(leadform).find('[name="fullName"]')
                .should('exist')
                .clear()
                .type(fullName)
    }

    populateFirstName = (fullName) => {
        const firstName = fullName.split(' ');

    }

    populateLastName = (fullName) => {
        const lastName = fullName.split(' ');
    }

    populatePhone = (phone) => {

    }

    insertLocation = (location = '') => {

    }

    clickSubmit = () => {

    }

    get firstNameInput() {

    }

    get lastNameInput() {

    }

    get phoneInput() {

    }

    get locationInput() {

    }

    get submitButton() {

    }
}