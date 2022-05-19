package com.automation.pages;

import com.automation.drivermanager.ManageDriver;
import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage() {
        PageFactory.initElements(ManageDriver.driver, this);
    }

    //WOMEN, DRESSES, T-SHIRTS and Sign in Links and logo locatores
    //and create appropriate methods for it.

    @CacheLookup
    @FindBy(xpath="//a[@title='Women']")
    WebElement women;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[@class='header-container']/header[@id='header']/div/div[@class='container']/div[@class='row']/div[@id='block_top_menu']/ul[@class='sf-menu clearfix menu-content sf-js-enabled sf-arrows']/li[2]/a[1]")
    WebElement dresses;

    @CacheLookup
    @FindBy(xpath = "//li[@class='sfHover']//a[@title='T-shirts'][normalize-space()='T-shirts']")
    WebElement tshirts;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Sign in']")
    WebElement signInLink;

    @CacheLookup
    @FindBy(xpath = "//img[@alt='My Store']")
    WebElement logo;

    public void clickOnWomen(){
        clickOnElement(women);
        log.info("Clicking on Women tab : " + women.toString());
    }

    public void clickdresses(){
        clickOnElement(dresses);
        log.info("Clicking on dresses : " + dresses.toString());
    }

    public void clickonTshirt(){
        clickOnElement(tshirts);
        log.info("Clicking on Tshirt : " +tshirts.toString());
    }

    public void clickOnSignInLink(){
        clickOnElement(signInLink);
        log.info("Clicking on SignInLink: " +signInLink.toString());
    }

    public void verifyLogo(){
        log.info("  verify Logo: " + logo.toString());
        verifyThatElementIsDisplayed(logo);
    }




}
