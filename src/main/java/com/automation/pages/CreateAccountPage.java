package com.automation.pages;

import com.automation.drivermanager.ManageDriver;
import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class CreateAccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(CreateAccountPage.class.getName());

    public CreateAccountPage() {
        PageFactory.initElements(ManageDriver.driver, this);
    }

    //All the fields locators and create appropriate method for it
    @CacheLookup
    @FindBy(id = "customer_firstname")
    WebElement firstName;

    @CacheLookup
    @FindBy(id = "customer_lastname")
    WebElement lastName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement email;

    @CacheLookup
    @FindBy(id = "passwd")
    WebElement password;

    @CacheLookup
    @FindBy(id = "firstname")
    WebElement firstNameField;

    @CacheLookup
    @FindBy(id = "lastname")
    WebElement lastNameField;

    @CacheLookup
    @FindBy(id = "address1")
    WebElement address;

    @CacheLookup
    @FindBy(id = "city")
    WebElement city;

    @CacheLookup
    @FindBy(id = "id_state")
    WebElement state;

    @CacheLookup
    @FindBy(xpath= "//input[@id='postcode']")
    WebElement zipcode;

    @CacheLookup
    @FindBy(xpath = "//select[@id='id_country']")
    WebElement countryName;

    @CacheLookup
    @FindBy(xpath = "//input[@id='phone_mobile']")
    WebElement phoneNumber;

    @CacheLookup
    @FindBy(xpath = "//input[@id='alias']")
    WebElement reference;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Register']")
    WebElement registerbtn;

    @CacheLookup
    @FindBy (xpath = "//h1[contains(text(),'My account')]")
    WebElement verifyMyAccount;

    public void enterFirstName(String text) {
        log.info("enter First Name " + firstName.toString());
        sendTextToElement(firstName, text);
    }

    public void enterLastName(String text) {
        log.info("enter LastName : " + lastName.toString());
        sendTextToElement(lastName, text);
    }

    public void enteremail(String text){
        log.info("enter email : "+ email.toString());
        sendTextToElement(email,text);
    }
    public void enterPassword(String text) {
        log.info("enter password " + password.toString());
        sendTextToElement(password, text);
    }

    public void enterFirstNameField(String text) {
        log.info("first Name field " + firstName.toString());
        sendTextToElement(firstNameField, text);
    }

    public void enterLastNameField(String text) {
        log.info("enter LastName field " + lastNameField.toString());
        sendTextToElement(lastNameField, text);
    }

    public void enterAddress(String text) {
        log.info("Enter address " + address.toString());
        sendTextToElement(address, text);
    }

    public void enterCity(String text) {
        log.info("enter city " + city.toString());
        sendTextToElement(city, text);
    }

    public void selectState(String text) {
        log.info("select state " + state.toString());
        sendTextToElement(state, text);
    }

    public void enterZipCode(String text) {
        log.info("enter Zip code " + zipcode.toString());
        sendTextToElement(zipcode, text);
    }

    public void enterCountry(String country){
        log.info("enter country name : "+ countryName.toString());
        sendTextToElement(countryName,country);
    }

    public void enterPhoneNumber(String text) {
        log.info("enter Phone Number " + phoneNumber.toString());
        sendTextToElement(phoneNumber, text);
    }

    public void enterReference(String text) {
        log.info("enter Reference " + reference.toString());
        sendTextToElement(reference, text);
    }

    public void clickOnRegisterBtn() {
        log.info("Click on register button " + registerbtn.toString());
        clickOnElement(registerbtn);
    }
    public String verifyMyAccountText() {
        log.info("verify Text " + verifyMyAccount.toString());
        return getTextFromElement(verifyMyAccount);
    }
}
