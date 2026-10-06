Feature: Checkboxes

    Scenario: Toggle checkbox 2 off
        Given I am on the checkboxes page
        When I toggle checkbox 2
        Then checkbox 2 should be unchecked

    Scenario: Toggle checkbox 1 on
        Given I am on the checkboxes page
        When I toggle checkbox 1
        Then checkbox 1 should be checked