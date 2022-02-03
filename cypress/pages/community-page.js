
import { getUserProfile } from "../utils/profiles";
import { BasePage } from "./page";

export class CommunityPage extends BasePage {

    leadforms = {

        exposed: {
            
            submit: () => {
                const exposedLeadForm = '[data-au-id="in-page-long-lead-form-block"]';
                const data = getUserProfile() 
                this.getleadFormComponent()
                    .submitLeadForm({
                        selector: exposedLeadForm, 
                        isFullName:true, 
                        fullName: data.fullName, 
                        phone: '', 
                        location: ''
                    })

            },
        },

        unlockPricing: {

        },

        getStarted: {

        }
    }
}