/// <reference types="cypress" />

import { communityPage } from "../../utils/initialize"

describe('Community Page', () => {
    
    it('Submit exposed lead form', () => {

        communityPage.open('https://web-lighthouse.qa.aplaceformom.com/community/atria-west-86-72892');
        communityPage.leadforms.exposed.submit()

        // cy.visit('https://web-lighthouse.dev.aplaceformom.com/')
        // cy.get('[data-au-id="leadform-location-search-input"]')
        //     .should('exist')
        //     .click()
        //     .clear()
        //     .type(90210)
    })
})