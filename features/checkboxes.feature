Feature: Checkboxes

    Scenario: Uncheck checkbox 2 off
        Given I am on the checkboxes page
        When I uncheck checkbox 2
        Then checkbox 2 should be unchecked

    Scenario: Check checkbox 1 on
        Given I am on the checkboxes page
        When I check checkbox 1
        Then checkbox 1 should be checked

    Scenario: Checking an already checked box keeps it checked
        Given I am on the checkboxes page
        When I check checkbox 2
        Then checkbox 2 should be checked