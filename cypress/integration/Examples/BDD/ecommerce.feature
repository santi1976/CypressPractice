Feature: End to end Ecommerce validation

    Applicaction Regression
        @Regression
        Scenario: Ecommerce products delivery
        Given I open ecommerce page
        When I add items to cart
        And Validate Total Prices
        Then Select the country submit and verify Thank you phrase

        @Smoke
        Scenario: Filling the form to shop
        Given I open ecommerce page
        When I fill the form details
        |name | gender |
        |pipino | Male |
        Then Validate the form behaviour
        And Select the Shop Page