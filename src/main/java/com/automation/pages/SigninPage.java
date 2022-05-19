package com.automation.pages;

import com.automation.drivermanager.ManageDriver;
import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class SigninPage extends Utility {
    private static final Logger log = LogManager.getLogger(SigninPage.class.getName());

    public SigninPage() {
        PageFactory.initElements(ManageDriver.driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement usernameField;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement passwordField;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Sign in']")
    WebElement signInbtn;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement createanAccnewEmail;

    @CacheLookup
    @FindBy(xpath = "//h1[normalize-space()='Authentication']")
    WebElement verifyAuthentication;

    @CacheLookup
    @FindBy(xpath ="//span[normalize-space()='Create an account']")
    WebElement clickcreataccount;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutLink;

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement clicksignOutLink;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Sign in']")
    WebElement verifysignInbtn;


    public void enterUsername(String text){
        log.info("enter username " + usernameField.toString());
        sendTextToElement(usernameField,text);
    }
    public void enterpassword(String password){
        log.info("enter password" + passwordField.toString());
        sendTextToElement(passwordField,password);
    }
    public void clickonSignInBtn(){
        clickOnElement(signInbtn);
    }
    public void emailForCreateNewAccount(String email){
        log.info("enter email for create new account "+ createanAccnewEmail.toString());
        sendTextToElement(createanAccnewEmail,email);
    }
    public String verifyAuthentication(){
        log.info("verify Text "+ verifyAuthentication.toString());
        return getTextFromElement(verifyAuthentication);
    }
    public void clickCreatAccount(){
        log.info("Clicking on CreatAccount : " + clickcreataccount.toString());
        clickOnElement(clickcreataccount);
    }

    public String verifyErrorMessage(String errorMsg) {

        List<WebElement> topMenuNames = driver.findElements(By.xpath("//body/div[@id='page']/div[@class='columns-container']/div[@id='columns']/div[@class='row']/div[@id='center_column']/div[1]"));
        for (WebElement names : topMenuNames) {
            if (names.getText().equalsIgnoreCase(errorMsg)) {
                break;
            }
        }
        return errorMsg;
    }
    public String verifySignOutLink(){
        log.info("verify signOut Link "+ signOutLink.toString());
        verifyThatElementIsDisplayed(signOutLink);
        return getTextFromElement(signOutLink);
    }
    public void clickOnSignOutLink(){
        log.info("click on sign out link "+ clicksignOutLink.toString());
        clickOnElement(clicksignOutLink);
    }
    public String verifySigninButton(){
        log.info("verify signin button "+ verifysignInbtn.toString());
        verifyThatElementIsDisplayed(verifysignInbtn);
        return getTextFromElement(verifysignInbtn);
    }
}
