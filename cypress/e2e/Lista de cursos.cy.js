describe('Desafio Beedoo QA Chalenge', function() {
    beforeEach(function(){
        cy.visit('https://creative-sherbet-a51eac.netlify.app/')
        cy.title()
          .should('be.equal','Beedoo QA Tests')
    })
  
    it('CT 0017 - Excluir um curso da lista ', function() {
      const Nome_do_curso ='CT 0017 - Excluir um curso da lista.'
      const Data_Inicio = '2024-08-05'
      const Data_Fim = '2024-08-27'
  
      cy.get('[href="/new-course"] > .q-btn__content > .block').click()
      cy.get('[aria-label="Nome do curso"]').type(Nome_do_curso)
      cy.get('[aria-label="Descrição do curso"]').type(Nome_do_curso)
      cy.get('[aria-label="Instrutor"]').type('João')
      cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
      cy.get('[aria-label="Data de início"]').type(Data_Inicio)
      cy.get('[aria-label="Data de fim"]').type(Data_Fim)
      cy.get('[aria-label="Número de vagas"]').type(10)
      cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
      cy.get('.q-notification__message').should('have.text','Curso cadastrado com sucesso!')
      cy.get('.q-card__actions.justify-center > .q-btn > .q-btn__content > .block').click()
      cy.get('.q-notifications__list--top.items-center > :nth-child(1)').should('have.text','Curso excluído com sucesso!')
      cy.get('[href="/new-course"] > .q-btn__content > .block').click()
      cy.get('[href="/"] > .q-btn__content > .block').click()
      cy.get('.text-h5').should('have.text','')
    })
  
  })