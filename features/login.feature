Feature: Login Functionality

    Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter the username "tomsmith"
    And I enter password "SuperSecretPassword!"
    And I click on the login button 
    Then I should see success message

    Scenario: Failed login with invalid credentials
    Given I am on the login page
    When I enter the username "wrongUser"
    And I enter password "WrongPassword!"
    And I click on the login button
    Then I should see the failure message


