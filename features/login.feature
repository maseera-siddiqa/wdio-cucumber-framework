Feature: Login Functionality 

    Scenario: Successful login with valid credentials
        Given I am on the login page
        When I enter username "tomsmith"
        And I enter password "SuperSecretPassword!"
        And I click on the login button
        Then I should see success message

    Scenario: Failed login with invalid credentials 
        Given I am on the login page
        When I enter username "wronguser"
        And I enter password "wrongpassword"
        And I click on the login button
        Then I should see error message "Your username is invalid" 