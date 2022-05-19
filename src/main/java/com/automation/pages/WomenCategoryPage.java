package com.automation.pages;

//import com.automation.cucumber.drivermanager.ManageDriver;
//import com.automation.cucumber.utility.Utility;
import com.automation.drivermanager.ManageDriver;
import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Reporter;

import java.util.List;

public class WomenCategoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());

    public WomenCategoryPage() {
        PageFactory.initElements(ManageDriver.driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@title='Women']")
    WebElement women;

    @CacheLookup
    @FindBy(xpath = "//span[@class='category-name']")
    WebElement womenTab;

    @CacheLookup
    @FindBy(xpath = "//ul[@id='ul_layered_id_attribute_group_3']//li")
    List<WebElement> colourList;

    @CacheLookup
    @FindBy(xpath = "//ul[@class='product_list grid row']//h5//a")
    List<WebElement> productList;



    public void clickOnWomen() {
        clickOnElement(women);
    }

    public String verifyWomen() {
     log.info("verify the Women Text"+womenTab.toString());
        return getTextFromElement(womenTab);
    }

    public void selectColour(String colour){
        for (WebElement colur:colourList) {

            if (colur.getText().contains(colour)){
                System.out.println(colur);
                mouseHoverToElementAndClick(colur);

            }

        }

    }

}
