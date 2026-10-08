Feature: Dropdown functionality

    Scenario Outline: Select <option> from the dropdown
        Given I am on the dropdown page
        When I select "<option>" from the dropdown
        Then "<option>" should be selected

    Examples: Options available in the dropdown
        | option   | 
        | Option 1 |
        | Option 2 |
        