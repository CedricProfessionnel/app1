describe("Mon exemple",()=>{
    before("Je roule avant",()=>{
        cy.log("avant")
    })
    beforeEach("Je roule avant chaque",()=>{
        cy.log("avant chaque")
    })
    it("Je suis un test",()=>{
        cy.log("test")
    })
    it("Je suis un test2",()=>{
        cy.log("test2")
    })
    afterEach("Je roule après chaque",()=>{
        cy.log("après chaque")
    })
    after("Je roule après",()=>{
        cy.log("après")
    })
})