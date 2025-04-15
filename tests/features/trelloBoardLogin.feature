Feature: trello board actions

Scenario: 01 create trello Board
Given I open trello board
When I have entered valid credentials for login
When I create a Trello board via API with different boardNames
Then I have created lists
When I have created cards
Then I am performing dragAndDrop Actions





