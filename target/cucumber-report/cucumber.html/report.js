$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccountPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "CreateAccountPageTest",
  "description": "As User I want to create an account in automation website",
  "id": "createaccountpagetest",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "verify that user should create account successfully",
  "description": "",
  "id": "createaccountpagetest;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@regression,"
    },
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I enter email address \"shayona2@gmail.com\"",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I click on create and account button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I fill all mandetory fields \"Gautam\",\"Adani\",\"Adani123\",\"Gautam\",\"Adani\",\"Liverpool Street\",\"London\",\"California\",\"123 456\",\"07444 567456\",\"Home Address\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "I click on Register button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I can see my account",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("SignInPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "SignPageTest",
  "description": "As user I Should Navigate To SignIn Page SuccessFully",
  "id": "signpagetest",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "User should navigate to login page successfully",
  "description": "",
  "id": "signpagetest;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can see \"AUTHENTICATION\" message is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Verify the Error Message With InValid Credentials",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@smoke,"
    },
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Error Message \"\u003cerrormsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "errormsg"
      ],
      "line": 19,
      "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 20,
      "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 21,
      "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 22,
      "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 23,
      "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Verify the Error Message With InValid Credentials",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the username\"\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Error Message \"An email address required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 21,
  "name": "Verify the Error Message With InValid Credentials",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the username\"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Error Message \"Password is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 22,
  "name": "Verify the Error Message With InValid Credentials",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the username\"adfdfgfg\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Error Message \"Invalid email address.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 23,
  "name": "Verify the Error Message With InValid Credentials",
  "description": "",
  "id": "signpagetest;verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@sanity,"
    },
    {
      "line": 10,
      "name": "@regression"
    },
    {
      "line": 10,
      "name": "@smoke,"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I enter the username\"abcd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I enter the password \"123456\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I verify the Error Message \"Authentication failed.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 26,
  "name": "Verify That User Should LogIn SuccessFully With Valid Credentials",
  "description": "",
  "id": "signpagetest;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@smoke,"
    },
    {
      "line": 25,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I enter the username\"prime256@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I enter the password \"Prime456\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I Verify that Sign out link is displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 35,
  "name": "verify That User Should LogOut SuccessFully",
  "description": "",
  "id": "signpagetest;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@smoke,"
    },
    {
      "line": 34,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "I enter the username\"prime256@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I enter the password \"Prime456\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click On signin Button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on Sign out Link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I Verify that Sign In Link displayed",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.uri("WomenCategoryPageTest.feature");
formatter.feature({
  "line": 1,
  "name": "WomenCategoryPageTest",
  "description": "As User I am able to use all functionality of the women category page",
  "id": "womencategorypagetest",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "verify user should navigate to women category page successfully",
  "description": "",
  "id": "womencategorypagetest;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@sanity,"
    },
    {
      "line": 4,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I can see Women Page display with message WOMEN",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I can click on product \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can change the Quantity \"\u003cquantity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can select the size \"\u003csize\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can select the colour \"\u003ccolour\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can verify Product successfully added to your cart \"\u003cProduct successfully added to your shopping cart\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can click on X button",
  "keyword": "And "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;",
  "rows": [
    {
      "cells": [
        "product",
        "quantity",
        "size",
        "colour"
      ],
      "line": 23,
      "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 24,
      "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 25,
      "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 26,
      "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 27,
      "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 24,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I can click on product \"Blouse\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can change the Quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can select the colour \"White\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can verify Product successfully added to your cart \"\u003cProduct successfully added to your shopping cart\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can click on X button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 25,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I can click on product \"Printed Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can change the Quantity \"3\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can select the size \"L\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can select the colour \"Orange\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can verify Product successfully added to your cart \"\u003cProduct successfully added to your shopping cart\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can click on X button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 26,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I can click on product \"Printed Chiffon Dress\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can change the Quantity \"4\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can select the size \"S\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can select the colour \"Green\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can verify Product successfully added to your cart \"\u003cProduct successfully added to your shopping cart\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can click on X button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 27,
  "name": "verifyUserShouldAddProductToTheCartSuccessfully",
  "description": "",
  "id": "womencategorypagetest;verifyusershouldaddproducttothecartsuccessfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I click on women tab",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I can click on product \"Printed Summer Dress with Price $28.98\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I can change the Quantity \"2\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I can select the size \"M\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I can select the colour \"Blue\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I can click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I can verify Product successfully added to your cart \"\u003cProduct successfully added to your shopping cart\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I can click on X button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});