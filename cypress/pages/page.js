import { LeadFormComponent } from "./components/lead-form.component";

export class BasePage {

    open = (path) => {
        cy.visit(path);
    }

    getleadFormComponent = () => {
        return new LeadFormComponent()
    }
}