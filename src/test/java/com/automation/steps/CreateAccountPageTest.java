package com.automation.steps;

import com.automation.pages.CreateAccountPage;
import com.automation.pages.SigninPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CreateAccountPageTest {
    @Then("^I enter email address \"([^\"]*)\"$")
    public void iEnterEmailAddress(String email) {
        new SigninPage().emailForCreateNewAccount(email);

    }

    @And("^I click on create and account button$")
    public void iClickOnCreateAndAccountButton() {
        new SigninPage().clickCreatAccount();
    }

    @Then("^I fill all mandetory fields \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\"$")
    public void iFillAllMandetoryFields(String firstName, String lastName, String password, String fNameField, String lNameField, String address, String city, String state, String zipcode, String phNumber, String reference) throws Throwable {
     new CreateAccountPage().enterFirstName(firstName);
     new CreateAccountPage().enterLastName(lastName);
     new CreateAccountPage().enterPassword(password);
     new CreateAccountPage().enterFirstNameField(fNameField);
     new CreateAccountPage().enterLastNameField(lNameField);
     new CreateAccountPage().enterAddress(address);
     new CreateAccountPage().enterCity(city);
     new CreateAccountPage().selectState(state);
     new CreateAccountPage().enterZipCode(zipcode);
     new CreateAccountPage().enterPhoneNumber(phNumber);
     new CreateAccountPage().enterReference(reference);
    }

    @And("^I click on Register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().clickOnRegisterBtn();
    }

    @And("^I can see my account$")
    public void iCanSeeMyAccount() {
        String expectedMessage = "MY ACCOUNT";
        String actualMessage = new CreateAccountPage().verifyMyAccountText();
        Assert.assertEquals("message not displayed",expectedMessage, actualMessage);

    }
}
