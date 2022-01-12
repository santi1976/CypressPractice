Feature: End to end Ecommerce validation

    applicaction regression
        Scenario: Ecommerce products delivery
        Given I open ecommerce page
        When I add items to cart
        And Validate Total Prices
        Then Select the country submit and verify Thank you phrase

        