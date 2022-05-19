Feature: SignPageTest
  As user I Should Navigate To SignIn Page SuccessFully

  @sanity,@regression
  Scenario: User should navigate to login page successfully
    Given I am on homepage
    When I click on Sign In link
    Then I can see "AUTHENTICATION" message is displayed

  @sanity,@smoke,@regression
  Scenario Outline: Verify the Error Message With InValid Credentials
    Given I am on homepage
    When I click on Sign In link
    And I enter the username"<username>"
    And I enter the password "<password>"
    And I click On signin Button
    Then I verify the Error Message "<errormsg>"
    Examples:
      | username       | password | errormsg                   |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  @smoke,@regression
  Scenario: Verify That User Should LogIn SuccessFully With Valid Credentials
    Given I am on homepage
    When I click on Sign In link
    And I enter the username"shayona123@gmail.com"
    And I enter the password "abc123"
    And I click On signin Button
    Then I Verify that Sign out link is displayed

 @smoke,@regression
 Scenario: verify That User Should LogOut SuccessFully
   Given I am on homepage
   When I click on Sign In link
   And I enter the username"shayona123@gmail.com"
   And I enter the password "abc123"
   And I click On signin Button
   And  I click on Sign out Link
   Then I Verify that Sign In Link displayed

