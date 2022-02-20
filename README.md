# CypressPractice

Principles of Automation Testing with Cypress 

URL to be tested https://www.rahulshettyacademy.com/AutomationPractice/


Run All Test
npm run cyrun


Open Test Runner (in order to run test from there)
npm run cyopen

To generate Report HTML with Cucumber
 node cucumber-html-report.js

To execute only one test (for example Test3.js) and Record to Cypress Dashboard
npm run cyrun -- --record --key 'enter key' --spec "cypress\integration\2-advanced-examples\Test3.js"
-- Get the key open Test Runner > Settings > Record Key

Enable Jenkins in port 9090
java -jar jenkins.war --enable-future-java --httpPort=9090

