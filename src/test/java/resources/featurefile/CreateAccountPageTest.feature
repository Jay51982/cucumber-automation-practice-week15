Feature: CreateAccountPageTest
  As User I want to create an account in automation website

  @sanity,@regression,@smoke
  Scenario: verify that user should create account successfully
    Given I am on homepage
    When I click on Sign In link
    Then  I enter email address "primeabc123@gmail.com"
    And I click on create and account button
    Then I fill all mandetory fields "Gautam","Adani","Abc123","Gautam","Adani","Liverpool Street","London","California","12345","07123456789","Home Address"
    And I click on Register button
    And I can see my account
