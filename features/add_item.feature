Feature: Add Item

  Scenario: Add items to shopping basket
    Given I add 2 units of "The Hobbit" to my shopping basket
    And I add 5 units of "Breaking Bad"
    When I check the content of my shopping basket
    Then it should contain the following information:
```
01/01/2022
2 x The Hobbit // 2 x 5 = £10
5 x Breaking Bad // 5 x 7 = £35
Total: £45
```