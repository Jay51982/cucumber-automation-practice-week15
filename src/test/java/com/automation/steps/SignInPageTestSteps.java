package com.automation.steps;

import com.automation.pages.HomePage;
import com.automation.pages.SigninPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SignInPageTestSteps {

    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on Sign In link$")
    public void iClickOnSignInLink() {
        new HomePage().clickOnSignInLink();
    }

    @Then("^I can see \"([^\"]*)\" message is displayed$")
    public void iCanSeeMessageIsDisplayed(String arg0)  {
        String expectedMessage = "AUTHENTICATION";
        String actualMessage = new SigninPage().verifyAuthentication();
        Assert.assertEquals("message not displayed",expectedMessage, actualMessage);
    }

    @And("^I enter the username\"([^\"]*)\"$")
    public void iEnterTheUsername(String username) {
      new SigninPage().enterUsername(username);
    }

    @And("^I enter the password \"([^\"]*)\"$")
    public void iEnterThePassword(String password) {
        new SigninPage().enterpassword(password);

    }

    @And("^I click On signin Button$")
    public void iClickOnSigninButton() {
        new SigninPage().clickonSignInBtn();
    }

    @Then("^I verify the Error Message \"([^\"]*)\"$")
    public void iVerifyTheErrorMessage(String errormsg) {
        new SigninPage().verifyErrorMessage(errormsg);

    }


    @Then("^I Verify that Sign out link is displayed$")
    public void iVerifyThatSignOutLinkIsDisplayed() {
        String expectedMessage = "Sign out";
        String actualMessage = new SigninPage().verifySignOutLink();
        Assert.assertEquals("message not displayed",expectedMessage, actualMessage);
    }

    @And("^I click on Sign out Link$")
    public void iClickOnSignOutLink() {
        new SigninPage().clickOnSignOutLink();
    }

    @Then("^I Verify that Sign In Link displayed$")
    public void iVerifyThatSignInLinkDisplayed() {
        String expectedMessage = "Sign in";
        String actualMessage = new SigninPage().verifySigninButton();
        Assert.assertEquals("message not displayed",expectedMessage, actualMessage);

    }
}
