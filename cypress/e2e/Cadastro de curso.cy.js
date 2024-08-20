
describe('Desafio Beedoo QA Chalenge', function(){
  beforeEach(function(){
      //const now = new Date('2024-08-20').getTime()
      //cy.clock(now) //Congelar essa data 

      cy.visit('https://creative-sherbet-a51eac.netlify.app/')
      cy.title()
        .should('be.equal','Beedoo QA Tests')
  })

  it('CT 0002 - Cadastrar um curso oline com todas as informações obrigatórias.', function() {

    const Nome_do_curso ='CT 0002 - Cadastrar um curso Online com todas as informações obrigatórias.'
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
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Curso cadastrado com sucesso!')
  })
  
  it('CT 0003 - Cadastrar um curso Presencial com todas as informações obrigatórias.', function() {

    const Nome_do_curso ='CT 0003 - Cadastrar um curso Presencial com todas as informações obrigatórias.'
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
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Presencial').click()
    cy.get('[aria-label="Endereço"]').type('Rua. Americana nº350')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Curso cadastrado com sucesso!')
  })
  
  it('CT 0004 - Cadastrar um curso com o campo "NOME DO CURSO" vazio.', function() {

    const Nome_do_curso ='CT 0004 - Cadastrar um curso com o campo "NOME DO CURSO" vazio.'
    const Data_Inicio = '2024-08-05'
    const Data_Fim = '2024-08-27'

    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    //cy.get('[aria-label="Nome do curso"]').type('')
    cy.get('[aria-label="Descrição do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Instrutor"]').type('João')
    cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    cy.get('[aria-label="Data de início"]').type(Data_Inicio)
    cy.get('[aria-label="Data de fim"]').type(Data_Fim)
    cy.get('[aria-label="Número de vagas"]').type(10)
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Preencher todos os campos')
  })

  it('CT 0005 - Cadastrar um curso com o campo "DESCRIÇÃO DO CURSO" vazio.', function() {

    const Nome_do_curso ='CT 0005 - Cadastrar um curso com o campo "DESCRIÇÃO DO CURSO" vazio.'
    const Data_Inicio = '2024-08-05'
    const Data_Fim = '2024-08-27'

    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    cy.get('[aria-label="Nome do curso"]').type(Nome_do_curso)
    //cy.get('[aria-label="Descrição do curso"]').type('')
    cy.get('[aria-label="Instrutor"]').type('João')
    cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    cy.get('[aria-label="Data de início"]').type(Data_Inicio)
    cy.get('[aria-label="Data de fim"]').type(Data_Fim)
    cy.get('[aria-label="Número de vagas"]').type(10)
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Preencher todos os campos')
  })
  it('CT 0006 - Cadastrar um curso com o campo "INSTRUTOR" vazio.', function() {

    const Nome_do_curso ='CT 0006 - Cadastrar um curso com o campo "INSTRUTOR" vazio.'
    const Data_Inicio = '2024-08-05'
    const Data_Fim = '2024-08-27'

    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    cy.get('[aria-label="Nome do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Descrição do curso"]').type(Nome_do_curso)
    //cy.get('[aria-label="Instrutor"]').type('João')
    cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    cy.get('[aria-label="Data de início"]').type(Data_Inicio)
    cy.get('[aria-label="Data de fim"]').type(Data_Fim)
    cy.get('[aria-label="Número de vagas"]').type(10)
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Preencher todos os campos')
  })
  it('CT 0007 - Cadastrar um curso com o campo "URL DA IMAGEM DA CAPA"vazio.', function() {

    const Nome_do_curso ='CT 0007 - Cadastrar um curso com o campo "URL DA IMAGEM DA CAPA"vazio.'
    const Data_Inicio = '2024-08-05'
    const Data_Fim = '2024-08-27'

    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    cy.get('[aria-label="Nome do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Descrição do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Instrutor"]').type('João')
    //cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    cy.get('[aria-label="Data de início"]').type(Data_Inicio)
    cy.get('[aria-label="Data de fim"]').type(Data_Fim)
    cy.get('[aria-label="Número de vagas"]').type(10)
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Preencher todos os campos')
  })
  it('CT 0008 - Cadastrar um curso com o campo "DATA DE INÍCIO" vazio.', function() {

    const Nome_do_curso ='CT 0008 - Cadastrar um curso com o campo "DATA DE INÍCIO" vazio.'
    const Data_Inicio = '2024-08-05'
    const Data_Fim = '2024-08-27'

    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    cy.get('[aria-label="Nome do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Descrição do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Instrutor"]').type('João')
    cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    //cy.get('[aria-label="Data de início"]').type(Data_Inicio)
    cy.get('[aria-label="Data de fim"]').type(Data_Fim)
    cy.get('[aria-label="Número de vagas"]').type(10)
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Preencher todos os campos')
  })
  it('CT 0009 - Cadastrar curso com a "DATA DE INÍCIO" inferior a data atual.', function() {

    const Nome_do_curso ='CT 0009 - Cadastrar curso com a "DATA DE INÍCIO" inferior a data atual.'
    const Data_Inicio = '2023-08-05'
    const Data_Fim = '2024-08-27'

    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    cy.get('[aria-label="Nome do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Descrição do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Instrutor"]').type('João')
    cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    cy.get('[aria-label="Data de início"]').type(Data_Inicio)
    cy.get('[aria-label="Data de fim"]').type(Data_Fim)
    cy.get('[aria-label="Número de vagas"]').type(10)
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Data de início inferior a data atual')
  })

  it('CT 0010 - Cadastrar curso com a "DATA DE FIM" vazia.', function() {

    const Nome_do_curso ='CT 0010 - Cadastrar curso com a "DATA DE FIM" vazia.'
    const Data_Inicio = '2024-08-05'
    const Data_Fim = '2024-08-27'

    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    cy.get('[aria-label="Nome do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Descrição do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Instrutor"]').type('João')
    cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    cy.get('[aria-label="Data de início"]').type(Data_Inicio)
    //cy.get('[aria-label="Data de fim"]').type(Data_Fim)
    cy.get('[aria-label="Número de vagas"]').type(10)
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Preencher todos os campos')
  })
  it('CT 0011 - Cadastrar curso com o campo "DATA DE FIM" inferior a data de início.', function() {

    const Nome_do_curso ='CT 0011 - Cadastrar curso com o campo "DATA DE FIM" inferior a data de início.'
    const Data_Inicio = '2024-08-05'
    const Data_Fim = '2024-08-01'

    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    cy.get('[aria-label="Nome do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Descrição do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Instrutor"]').type('João')
    cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    cy.get('[aria-label="Data de início"]').type(Data_Inicio)
    cy.get('[aria-label="Data de fim"]').type(Data_Fim)
    cy.get('[aria-label="Número de vagas"]').type(10)
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Data de fim não pode ser inferior a data início')
  })
  
  it('CT 0012 - Cadastrar curso com o campo "NÚMEROS DE VAGAS" vazia.', function() {

    const Nome_do_curso ='CT 0012 - Cadastrar curso com o campo "NÚMEROS DE VAGAS" vazia.'
    const Data_Inicio = '2024-08-05'
    const Data_Fim = '2024-08-27'

    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    cy.get('[aria-label="Nome do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Descrição do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Instrutor"]').type('João')
    cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    cy.get('[aria-label="Data de início"]').type(Data_Inicio)
    cy.get('[aria-label="Data de fim"]').type(Data_Fim)
    //cy.get('[aria-label="Número de vagas"]').type(10)
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Preencher todos os campos')
  })

  
  it('CT 0013 - Cadastrar curso com o campo "NÚMEROS DE VAGAS" < 0 .', function() {

    const Nome_do_curso ='CT 0013 - Cadastrar curso com o campo "NÚMEROS DE VAGAS" < 0 .'
    const Data_Inicio = '2024-08-05'
    const Data_Fim = '2024-08-27'

    cy.get('[href="/new-course"] > .q-btn__content > .block').click()
    cy.get('[aria-label="Nome do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Descrição do curso"]').type(Nome_do_curso)
    cy.get('[aria-label="Instrutor"]').type('João')
    cy.get('[aria-label="Url da imagem de capa"]').type('https://images.app.goo.gl/NTC68CQVaCKFhWmq7')
    cy.get('[aria-label="Data de início"]').type(Data_Inicio)
    cy.get('[aria-label="Data de fim"]').type(Data_Fim)
    cy.get('[aria-label="Número de vagas"]').type(-10)
    cy.get('[aria-label="Tipo de curso"]').click()
    cy.get('[class="q-item__label"]').contains('Online').click()
    cy.get('[aria-label="Link de inscrição"]').type('https://creative-sherbet-a51eac.netlify.app/new-course')
    cy.get('.q-pa-md > .q-btn > .q-btn__content').click()
    cy.get('.q-notification__message').should('have.text','Números de vagas tem que ser maior que 0')
  })
})

