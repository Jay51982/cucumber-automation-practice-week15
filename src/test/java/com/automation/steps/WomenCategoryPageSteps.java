package com.automation.steps;

import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomenCategoryPageSteps {
    @When("^I click on women tab$")
    public void iClickOnWomenTab() {
       new WomenCategoryPage().clickOnWomen();
    }

    @Then("^I can see Women Page display with message WOMEN$")
    public void iCanSeeWomenPageDisplayWithMessageWOMEN() {
        String expectedMessage = "Women";
        String actualMessage = new WomenCategoryPage().verifyWomen();
        Assert.assertEquals("message not Matched with Text",expectedMessage, actualMessage);
    }


    @And("^I can click on product \"([^\"]*)\"$")
    public void iCanClickOnProduct(String product)  {
        new ProductPage().selProduct(product);
    }

    @And("^I can change the Quantity \"([^\"]*)\"$")
    public void iCanChangeTheQuantity(String qty)  {
        new ProductPage().enterQtyAdd(qty);
    }

    @And("^I can select the size \"([^\"]*)\"$")
    public void iCanSelectTheSize(String size)  {
        new ProductPage().selectSize(size);
    }

    @And("^I can select the colour \"([^\"]*)\"$")
    public void iCanSelectTheColour(String colour)  {
        new ProductPage().selColour(colour);
    }

    @And("^I can click on add to cart button$")
    public void iCanClickOnAddToCartButton() {
        new ProductPage().clickAddCart();
    }

    @And("^I can verify Product successfully added to your cart \"([^\"]*)\"$")
    public void iCanVerifyProductSuccessfullyAddedToYourCart(String message) {
       new ProductPage().getAddMes(message);
    }

    @And("^I can click on X button$")
    public void iCanClickOnXButton() {
        new ProductPage().setCloseBtn();
    }


}
