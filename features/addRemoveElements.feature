Feature: Adding and removing elements 

    Scenario: Adding an element shows a Delete button 
        Given I am on the add and remove elements page
        When I click on Add Element button
        Then the number of delete buttons should be 1

    Scenario: Adding an element 3 times shows 3 Delete buttons
        Given I am on the add and remove elements page
        When I click on Add Element button 3 times
        Then the number of delete buttons should be 3
