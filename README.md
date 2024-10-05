# Desafio-QA-Beedoo
Bem vindo ao BEEDOO QA Chalenge "https://creative-sherbet-a51eac.netlify.app/", um projeto desenvolvido para testar as funcionalidades críticas de uma aplicação web de uma plataforma de cursos, onde foi realizado os testes manuais e automatizados utilizando o framework Cypress.

## História de usuário:

- **História do usuário 01** - Como usuário eu quero ter os botões de "LISTA DE CURSOS" e "CADASTRAR CURSO" na tela inicial.
- **História do usuário 02** - Como usuário eu quero poder visualizar na tela inicial a lista de todos os cursos cadastrados na plataforma e com as informações "Nome do curso, Descrição do curso, Instrutor,Imagem da capa do curso, Data de início, Data de fim, Números de vagas disponíveis e se o curso é Online ou presencial" todas as informações visíveis na tela de lista de cursos.
- **História do usuário 03** - Como administrador na tela de cadastrar curso eu quero que tenha os campos  "Nome do curso, Descrição do curso, Instrutor,URL da Imagem da capa do curso, Data de início, Data de fim, Números de vagas disponíveis e se o curso é Online ou presencial" para preencher e que todas as informações seja obrigatórias o preenchimento.
- **História do usuário 04** - Como administrador na tela de "Lista de cursos" eu quero ter a opção de excluir os cursos da lista.
- **História do usuário 05** - Como adminstrador na tela de "CADASTRAR CURSO" eu quero que não permita o cadastro de cursos com a quantidade de vagas <=0 e data já expirada.
- **História do usuário 06** - Como administrador na tela de "Lista de cursos" eu não quero que tenha cursos repetidos.

## Casos de testes manuais
  Os testes manuais foram documentados e estão disponíveis no Google Drive em um formato .XLSX no no link (https://docs.google.com/spreadsheets/d/1BYNnjCUcQVCfEDDa4JRikeC_RedazD85/edit?usp=drive_link&ouid=106437964310882198040&rtpof=true&sd=true) :
 Certifique-se de seguir as instruções e registrar os resultados de cada teste.

 - **HISTÓRIA DE USUÁRIO:** Levantamento das necessidades de um administrador e de um usuário.
 - **PLANEJAMENTO:** Levantamento de todas as telas e suas funcionalidades.
 - **MAPEAMENTO DOS CASOS DE TESTE:** Mapear todos os testes necessários e controlar algumas informações como (Nº Caso de Teste,	Nome do Caso de Teste,	Complexidade,	Tipo de Teste, 	Necessidade de massa de Teste,	Funcionalidade associada ao CT,	Passível de automação,	Regressivo Obrigatório,	Prioridade,	Versão)
 - **CASOS DE TESTE GHERKIN:** Informações dos casos de testes e a execução dos teses (Nº do Caso de Teste,	Nome do Caso de Teste,	Casos de teste Gherkin,	Execução,	Pré-Requisitos,	Massa de Testes,	Status,	Tela,	Observação).
 - **CONTROLE DE EXECUÇÃO:** O controle para esses testes foi realizado através de de planilha mas também pode ser realizado com outras ferramentas como exemplo Jira, trello e testlink facilitando a comunicação com o time.
 - **CONTROLE DE BUG:** Controle e histórico com os bug.
 - **MASSA DE DADOS:** Massa de dados utilizado nos tetes.

## Evidências
<<<<<<< HEAD
Evidenêncas da execução dos testes foi realizada no formato MP4 e se encontra no link (https://drive.google.com/drive/folders/14UDH3KXzhLei9Ng8gwCyirYO_J27F7oA?usp=drive_link) 
=======
Evidências da execução dos testes foi realizada no formato MP4 e se encontra no link (https://drive.google.com/drive/folders/14UDH3KXzhLei9Ng8gwCyirYO_J27F7oA?usp=drive_link) 
>>>>>>> 6b82e2c (segundo commit)

## Melhorias no sistema.

**Tela de Lista de Cursos:**
- 1º Criar uma campo para localizar os cursos pelo nome.
- 2º Criar uma opção para o administrador editar as informações do curso.
  
**Tela de Cadastrar curso:**
- 1º Criar um campo de categoria de curso EX. Tecnologia, culinária ...
- 2º No campo Endereço do curso presencial acrescentar mais detalhes como Cidade, CEP e Bairro.
- 3º Mensagens de alerta para os campos obrigatórios.

# Testes automatizados com "CYPRESS"

## Pré-requisitos:
- Node.js
- Cypress

## Configuração do Ambiente:

1. *Instale o Node.js*:
   - Verifique se você possui o Node.js instalado executando node --version no terminal.
   - Caso não tenha o Node.js, você pode baixar a versão mais recente [aqui](https://nodejs.org/en/download/prebuilt-installer).

2. *Instale o Cypress*:
   - Execute o seguinte comando para instalar o Cypress:
:
     ```
     npm install cypress --save-dev
     ```


## Executando os Testes:

1. *Clone o repositório*:
   ```
   git clone https://github.com/Grewil/Desafio-Beedoo-Qa-Chalenge.git

   ```

2. *Execute os testes*:
Para Testes_Cypress_ Desafio Beedoo Qa Chalenge *(Automação Web)*:

   ```
   npx cypress open
   Selecione o teste desejado na interface do Cypress.
   ```
   

### Bons testes :)



  

