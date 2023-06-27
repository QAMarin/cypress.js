describe('Форма логина и пароля', () => {
  beforeEach(() => {
    cy.visit('https://login.qa.studio/');
  })

  it('Проверка позитивного кейса авторизации', () => {
    const login = 'german@dolnikov.ru';
    const password = 'iLoveqastudio1';

    cy.get('#mail').type(login);
       cy.get('#pass').type(password);
       cy.get('#loginButton').click();
       cy.contains('Авторизация прошла успешно').should('be.visible');
       cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })

  it('Проверка логики восстановления пароля', () => {
    cy.get('#forgotEmailButton').click();
    cy.get('#mailForgot').type('dada@mail.ru')
    cy.get('#restoreEmailButton').click();

    cy.contains('Успешно отправили пароль на e-mail').should('be.visible');
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })

  it('Проверка негативного кейса авторизации с неправильным паролем', () => {
    const login = 'german@dolnikov.ru'
    const password = 'incorrectpassword'

    cy.get('#mail').type(login)
    cy.get('#pass').type(password)
    cy.get('#loginButton').click()

    cy.contains('Такого логина или пароля нет').should('be.visible')
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')
  })

  it('Проверка негативного кейса авторизации с неправильным логином', () => {
    const login = 'incorrect@login.com'
    const password = 'iLoveqastudio1'

    cy.get('#mail').type(login)
    cy.get('#pass').type(password)
    cy.get('#loginButton').click()

    cy.contains('Такого логина или пароля нет').should('be.visible')
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')
  })

  it('Проверка негативного кейса валидации без символа "@" в логине', () => {
    const login = 'germandolnikov.ru'
    const password = 'iLoveqastudio1'

    cy.get('#mail').type(login)
    cy.get('#pass').type(password)
    cy.get('#loginButton').click()

    cy.contains('Нужно исправить проблему валидации').should('be.visible')
    cy.get('#exitMessageButton > .exitIcon').should('be.visible');
  })

  it('Проверка приведения логина к строчным буквам', () => {
    const login = 'GerMan@Dolnikov.ru'
    const password = 'iLoveqastudio1'

    cy.get('#mail').type(login)
    cy.get('#pass').type(password)
    cy.get('#loginButton').click()

    cy.contains('Такого логина или пароля нет').should('be.visible')
    cy.get('#exitMessageButton > .exitIcon').should('be.visible')
  })
})