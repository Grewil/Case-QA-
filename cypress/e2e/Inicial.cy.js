describe('Desafio Beedoo QA Chalenge', function(){
    beforeEach(function(){
        cy.visit('https://creative-sherbet-a51eac.netlify.app/')
        cy.title()
          .should('be.equal','Beedoo QA Tests')
    })
  
    it('CT 0001 - Validar o botão "CASASTRAR CURSO"..', function() {
      cy.get('[href="/new-course"] > .q-btn__content > .block').click()


    })

    it('CT 0016 - Validar o botão "LISTAR CURSOS"...', function() {
        cy.get('[href="/"] > .q-btn__content > .block').click()
    
      })
})