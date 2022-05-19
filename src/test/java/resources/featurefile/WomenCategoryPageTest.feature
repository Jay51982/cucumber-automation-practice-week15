Feature: WomenCategoryPageTest
  As User I am able to use all functionality of the women category page

  @sanity,@regression
  Scenario: verify user should navigate to women category page successfully
    Given I am on homepage
    When I click on women tab
    Then I can see Women Page display with message WOMEN

  @regression
  Scenario Outline: verifyUserShouldAddProductToTheCartSuccessfully
    Given  I am on homepage
    When I click on women tab
    And I can click on product "<product>"
    And I can change the Quantity "<quantity>"
    And I can select the size "<size>"
    And I can select the colour "<colour>"
    And I can click on add to cart button
    And I can verify Product successfully added to your cart "<Product successfully added to your shopping cart>"
    And I can click on X button
    Examples:

      | product                                | quantity | size | colour |
      | Blouse                                 | 2        | M    | White  |
      | Printed Dress                          | 3        | L    | Orange |
      | Printed Chiffon Dress                  | 4        | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2        | M    | Blue   |