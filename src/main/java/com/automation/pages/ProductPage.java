package com.automation.pages;

import com.automation.drivermanager.ManageDriver;
import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ProductPage extends Utility {
    private static final Logger log = LogManager.getLogger(ProductPage.class.getName());

    public ProductPage() {
        PageFactory.initElements(ManageDriver.driver, this);
    }


    @CacheLookup
    @FindBy(xpath = "//a[@title='Blouse'][normalize-space()='Blouse']")
    WebElement blouse;

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_8']")
    WebElement white;

    @CacheLookup
    @FindBy(xpath = "//li[@class='ajax_block_product col-xs-12 col-sm-6 col-md-4 last-in-line first-item-of-tablet-line last-item-of-mobile-line']//a[@title='Printed Dress'][normalize-space()='Printed Dress']")
    WebElement printedDress;

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_13']")
    WebElement colorOrg;

    @CacheLookup
    @FindBy(xpath = "//a[normalize-space()='Printed Chiffon Dress']")
    WebElement prichiDress;

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_15']")
    WebElement colorGrn;

    @CacheLookup
    @FindBy(xpath = "//li[@class='ajax_block_product col-xs-12 col-sm-6 col-md-4 first-item-of-tablet-line']//a[@title='Printed Summer Dress'][normalize-space()='Printed Summer Dress']")
    WebElement summerDress;

    @CacheLookup
    @FindBy(xpath = "//a[@id='color_14']")
    WebElement colorBlu;

    @CacheLookup
    @FindBy(xpath = "//select[@id='group_1']")
    WebElement sizesel;

    @CacheLookup
    @FindBy(xpath = "//input[@id='quantity_wanted']")
    WebElement qtyAdd;

    @CacheLookup
    @FindBy(xpath = "//span[normalize-space()='Add to cart']")
    WebElement addCart;

    @CacheLookup
    @FindBy(xpath = "//h2[normalize-space()='Product successfully added to your shopping cart']")
    WebElement verifyAddText;

    @CacheLookup
    @FindBy(xpath = "//span[@title='Close window']")
    WebElement closeBtn;


    public void selProduct(String proName){
        if(proName.equalsIgnoreCase("Blouse")){
            clickOnElement(blouse);
        }else if (proName.equalsIgnoreCase("Printed Dress")){
            clickOnElement(printedDress);
        }else if (proName.equalsIgnoreCase("printed Chiffon Dress")){
            clickOnElement(prichiDress);
        }else if(proName.equalsIgnoreCase("Printed Summer Dress with price $28.98"))
            clickOnElement(summerDress);

    }
    public void selColour(String color) {
        if (color.equalsIgnoreCase("White")) {
            clickOnElement(white);
        } else if (color.equalsIgnoreCase("Orange")) {
            clickOnElement(colorOrg);
        } else if (color.equalsIgnoreCase("Green")) {
            clickOnElement(colorGrn);
        } else if (color.equalsIgnoreCase("Blue")) {
            clickOnElement(colorBlu);
        }
    }
    public void enterQtyAdd(String qty){
        qtyAdd.clear();
        sendTextToElement(qtyAdd,qty);

    }
    public void selectSize(String size){
        log.info("selectSize from  dropdown"+size.toString());
        selectByVisibleTextFromDropDown(sizesel,size);
    }
    public void clickAddCart(){
        log.info("add to cart"+addCart.toString());
        clickOnElement(addCart);
    }
    public void getAddMes(String message){
       log.info("get add message"+ verifyAddText.toString());
        verifyThatTextIsDisplayed(verifyAddText,message);

    }
    public void setCloseBtn(){
        log.info("Clicking on close button : " + closeBtn.toString());
        clickOnElement(closeBtn);

    }

}

