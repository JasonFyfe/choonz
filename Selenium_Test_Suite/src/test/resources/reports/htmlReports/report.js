$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("LoginLogout.feature");
formatter.feature({
  "line": 2,
  "name": "User registration, login and logout",
  "description": "",
  "id": "user-registration,-login-and-logout",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@loginlogout"
    }
  ]
});
formatter.before({
  "duration": 5906818100,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "I wish to login to the system",
  "description": "",
  "id": "user-registration,-login-and-logout;i-wish-to-login-to-the-system",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "i go to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "i enter the user name and passwird",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "i can login",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_go_to_the_login_page()"
});
formatter.result({
  "duration": 3026716201,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_the_user_name_and_passwird()"
});
formatter.result({
  "duration": 856048300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_login()"
});
formatter.result({
  "duration": 280284800,
  "status": "passed"
});
formatter.after({
  "duration": 583919300,
  "status": "passed"
});
formatter.before({
  "duration": 5336700800,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "I wish to logout of the system",
  "description": "",
  "id": "user-registration,-login-and-logout;i-wish-to-logout-of-the-system",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "i can logina",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "when i click logout",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "i am logged out",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_logina()"
});
formatter.result({
  "duration": 1159059600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.when_i_click_logout()"
});
formatter.result({
  "duration": 246900501,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_logged_out()"
});
formatter.result({
  "duration": 20871141800,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.cssSelector: body \u003e div \u003e form \u003e button (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat stepdef.AllTests.i_am_logged_out(AllTests.java:1101)\r\n\tat ✽.Then i am logged out(LoginLogout.feature:12)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"body \u003e div \u003e form \u003e button\"}\n  (Session info: headless chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-24TH8E7N\u0027, ip: \u0027192.168.1.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Malik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63051}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 7804549b6282a98e5e67454c5fdea016\n*** Element info: {Using\u003dcss selector, value\u003dbody \u003e div \u003e form \u003e button}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat stepdef.AllTests.i_am_logged_out(AllTests.java:1101)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 582874900,
  "status": "passed"
});
formatter.before({
  "duration": 5303632700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "I wish to register as a new user",
  "description": "",
  "id": "user-registration,-login-and-logout;i-wish-to-register-as-a-new-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "i can go to the register page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "i enter the registration details",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "i can login with the details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_go_to_the_register_page()"
});
formatter.result({
  "duration": 396840600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_the_registration_details()"
});
formatter.result({
  "duration": 3011036700,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: headless chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-24TH8E7N\u0027, ip: \u0027192.168.1.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Malik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:63089}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 567fb5d6f30ddb042154c8a1090377cf\n*** Element info: {Using\u003dcss selector, value\u003d#username}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat pages.loginPage.reguser(loginPage.java:34)\r\n\tat stepdef.AllTests.i_enter_the_registration_details(AllTests.java:1119)\r\n\tat ✽.When i enter the registration details(LoginLogout.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AllTests.i_can_login_with_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 579707700,
  "status": "passed"
});
formatter.uri("albums.feature");
formatter.feature({
  "line": 2,
  "name": "Albums Page",
  "description": "",
  "id": "albums-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@albums"
    }
  ]
});
formatter.before({
  "duration": 5346068800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 286457300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 353542500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 7629400,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create Album",
  "description": "",
  "id": "albums-page;create-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I can access the albums page from the artist",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter album details",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "i can create an album entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page_from_the_artist()"
});
formatter.result({
  "duration": 997403900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_album_details()"
});
formatter.result({
  "duration": 390749600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_album_entry()"
});
formatter.result({
  "duration": 1025680000,
  "status": "passed"
});
formatter.after({
  "duration": 562321500,
  "status": "passed"
});
formatter.before({
  "duration": 5327316100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 267050600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 358537700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 11853400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Read Album",
  "description": "",
  "id": "albums-page;read-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "i can read all the album entries",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 680416000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_album_entries()"
});
formatter.result({
  "duration": 6188600,
  "status": "passed"
});
formatter.after({
  "duration": 580118100,
  "status": "passed"
});
formatter.before({
  "duration": 5330162600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 257239200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 391830500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 13125900,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Read One Album",
  "description": "",
  "id": "albums-page;read-one-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on view one album",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "i can read that albums details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 694923600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_album()"
});
formatter.result({
  "duration": 643019300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_albums_details()"
});
formatter.result({
  "duration": 10442100,
  "status": "passed"
});
formatter.after({
  "duration": 586747300,
  "status": "passed"
});
formatter.before({
  "duration": 5336466200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 295652000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 379484600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 14404300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Update Album",
  "description": "",
  "id": "albums-page;update-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I enter new album details",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "i can update that albums entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 667447200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_album_details()"
});
formatter.result({
  "duration": 1119991800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_albums_entry()"
});
formatter.result({
  "duration": 733277500,
  "status": "passed"
});
formatter.after({
  "duration": 569670800,
  "status": "passed"
});
formatter.before({
  "duration": 5324561500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 532308400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 346552800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 13160100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Delete Album",
  "description": "",
  "id": "albums-page;delete-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on delete album button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "i can delete that albums entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 694420700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_album_button()"
});
formatter.result({
  "duration": 960087100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_albums_entry()"
});
formatter.result({
  "duration": 6031700,
  "status": "passed"
});
formatter.after({
  "duration": 577539800,
  "status": "passed"
});
formatter.before({
  "duration": 5333665700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 232994700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 418549800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 15023000,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "View artist linked to album",
  "description": "",
  "id": "albums-page;view-artist-linked-to-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I click on the artist of that album",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "i am taken to that artists page",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 667112500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_the_artist_of_that_album()"
});
formatter.result({
  "duration": 978219300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_artists_page()"
});
formatter.result({
  "duration": 9651100,
  "status": "passed"
});
formatter.after({
  "duration": 578902600,
  "status": "passed"
});
formatter.before({
  "duration": 5303146400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 284869800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 336861000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 6896500,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "View track linked to album",
  "description": "",
  "id": "albums-page;view-track-linked-to-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "I click on a track in that album",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "ia am taken to that tracks page",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 653880500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_track_in_that_album()"
});
formatter.result({
  "duration": 1278174500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_tracks_page()"
});
formatter.result({
  "duration": 9295800,
  "status": "passed"
});
formatter.after({
  "duration": 580955400,
  "status": "passed"
});
formatter.before({
  "duration": 5330709500,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatea to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correcta details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "usera is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatea_to_the_login_page()"
});
formatter.result({
  "duration": 242655400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 447416900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 8820800,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Search for a album",
  "description": "",
  "id": "albums-page;search-for-a-album",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 56,
  "name": "I can access the albums page",
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "i search for a album",
  "keyword": "When "
});
formatter.step({
  "line": 58,
  "name": "only that albums details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_albums_page()"
});
formatter.result({
  "duration": 673375700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_album()"
});
formatter.result({
  "duration": 338548200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_albums_details_are_displayed()"
});
formatter.result({
  "duration": 9374600,
  "status": "passed"
});
formatter.after({
  "duration": 568621400,
  "status": "passed"
});
formatter.uri("artists.feature");
formatter.feature({
  "line": 2,
  "name": "Artists Page",
  "description": "",
  "id": "artists-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@artists"
    }
  ]
});
formatter.before({
  "duration": 5357864600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 239237300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 330028700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 11500800,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Create Artists",
  "description": "",
  "id": "artists-page;create-artists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I can access the Artists page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I enter Artists details",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "i can create an Artists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_page()"
});
formatter.result({
  "duration": 651718100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_Artists_details()"
});
formatter.result({
  "duration": 342717200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_Artists_entry()"
});
formatter.result({
  "duration": 601441700,
  "status": "passed"
});
formatter.after({
  "duration": 575736800,
  "status": "passed"
});
formatter.before({
  "duration": 5328876100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 241765900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 388608400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 15186600,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Read Artist",
  "description": "",
  "id": "artists-page;read-artist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I can access the Artists page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "i can read all the Artists entries",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_page()"
});
formatter.result({
  "duration": 625412100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_Artists_entries()"
});
formatter.result({
  "duration": 271064500,
  "status": "passed"
});
formatter.after({
  "duration": 581744200,
  "status": "passed"
});
formatter.before({
  "duration": 5329733000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 233004100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 399336200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 19532000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Read One Artists",
  "description": "",
  "id": "artists-page;read-one-artists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "I can access the Artists page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "I click on view one Artists",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "i can read that Artists details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_page()"
});
formatter.result({
  "duration": 622415500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_Artists()"
});
formatter.result({
  "duration": 622319400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_Artists_details()"
});
formatter.result({
  "duration": 9011300,
  "status": "passed"
});
formatter.after({
  "duration": 577760400,
  "status": "passed"
});
formatter.before({
  "duration": 5330774600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 233595700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 367611700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 11411800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Update Artists",
  "description": "",
  "id": "artists-page;update-artists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 30,
  "name": "I can access the Artists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 31,
  "name": "I enter new Artists details",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "i can update that Artists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_view_one_page()"
});
formatter.result({
  "duration": 659291400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_Artists_details()"
});
formatter.result({
  "duration": 374626900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_Artists_entry()"
});
formatter.result({
  "duration": 638238700,
  "status": "passed"
});
formatter.after({
  "duration": 562449500,
  "status": "passed"
});
formatter.before({
  "duration": 5337600900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 255239500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 402926300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 12474300,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Delete Artists",
  "description": "",
  "id": "artists-page;delete-artists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I can access the Artists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "I click on delete Artists button",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "i can delete that Artists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_view_one_page()"
});
formatter.result({
  "duration": 665098800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_Artists_button()"
});
formatter.result({
  "duration": 603565700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_Artists_entry()"
});
formatter.result({
  "duration": 6484100,
  "status": "passed"
});
formatter.after({
  "duration": 582470600,
  "status": "passed"
});
formatter.before({
  "duration": 5328177900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 232636800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 328798500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 13291900,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "view album from a single Artists",
  "description": "",
  "id": "artists-page;view-album-from-a-single-artists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 44,
  "name": "I can access the Artists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "I click on a linked album",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "i an taken to that albums page",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_view_one_page()"
});
formatter.result({
  "duration": 662021800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_linked_album()"
});
formatter.result({
  "duration": 641078600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_an_taken_to_that_albums_page()"
});
formatter.result({
  "duration": 9763200,
  "status": "passed"
});
formatter.after({
  "duration": 573740100,
  "status": "passed"
});
formatter.before({
  "duration": 5326904200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigate to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigate_to_the_login_page()"
});
formatter.result({
  "duration": 252031500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 399380300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 13117200,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Search for a artist",
  "description": "",
  "id": "artists-page;search-for-a-artist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "I can access the Artists page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "i search for a artist",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "only that artists details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Artists_page()"
});
formatter.result({
  "duration": 678548500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_artist()"
});
formatter.result({
  "duration": 594645300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_artists_details_are_displayed()"
});
formatter.result({
  "duration": 8744300,
  "status": "passed"
});
formatter.after({
  "duration": 582819000,
  "status": "passed"
});
formatter.uri("genres.feature");
formatter.feature({
  "line": 2,
  "name": "genres Page",
  "description": "",
  "id": "genres-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@genres"
    }
  ]
});
formatter.before({
  "duration": 5325063900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 225356800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 363452000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 11076400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Create genres",
  "description": "",
  "id": "genres-page;create-genres",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I can access the genres page",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I enter genres details",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "i can create an genres entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_page()"
});
formatter.result({
  "duration": 641509600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_genres_details()"
});
formatter.result({
  "duration": 422208900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_genres_entry()"
});
formatter.result({
  "duration": 658274900,
  "status": "passed"
});
formatter.after({
  "duration": 579649900,
  "status": "passed"
});
formatter.before({
  "duration": 5318580500,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 251682700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 458675300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 12707800,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Read genres",
  "description": "",
  "id": "genres-page;read-genres",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I can access the genres page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "i can read all the genres entries",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_page()"
});
formatter.result({
  "duration": 633777500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_genres_entries()"
});
formatter.result({
  "duration": 268542000,
  "status": "passed"
});
formatter.after({
  "duration": 583717800,
  "status": "passed"
});
formatter.before({
  "duration": 5314875700,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 261738300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 333103200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 13886700,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Read One genres",
  "description": "",
  "id": "genres-page;read-one-genres",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "I can access the genres page",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "I click on view one genres",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "i can read that genres details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_page()"
});
formatter.result({
  "duration": 617059700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_genres()"
});
formatter.result({
  "duration": 619365100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_genres_details()"
});
formatter.result({
  "duration": 9659500,
  "status": "passed"
});
formatter.after({
  "duration": 578377800,
  "status": "passed"
});
formatter.before({
  "duration": 5323510200,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 252216300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 345063500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 13107900,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Update genres",
  "description": "",
  "id": "genres-page;update-genres",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I can access the genres view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I enter new genres details",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "i can update that genres entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_view_one_page()"
});
formatter.result({
  "duration": 660138500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_genres_details()"
});
formatter.result({
  "duration": 482001600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_genres_entry()"
});
formatter.result({
  "duration": 612544100,
  "status": "passed"
});
formatter.after({
  "duration": 574164600,
  "status": "passed"
});
formatter.before({
  "duration": 5325025800,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 237867700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 370596300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 12533300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Delete genres",
  "description": "",
  "id": "genres-page;delete-genres",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 39,
  "name": "I can access the genres view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "I click on delete genres button",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "i can delete that genres entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_view_one_page()"
});
formatter.result({
  "duration": 648357600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_genres_button()"
});
formatter.result({
  "duration": 567395400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_genres_entry()"
});
formatter.result({
  "duration": 6071900,
  "status": "passed"
});
formatter.after({
  "duration": 575204000,
  "status": "passed"
});
formatter.before({
  "duration": 5328896900,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "navigated to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "userd enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "userd is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigated_to_the_login_page()"
});
formatter.result({
  "duration": 242483600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 355767300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 6695700,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "View track linked to genre",
  "description": "",
  "id": "genres-page;view-track-linked-to-genre",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 46,
  "name": "I can access the genres view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 47,
  "name": "I click on a track in that genre",
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "i am taken to that tracks pagea",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_genres_view_one_page()"
});
formatter.result({
  "duration": 683921700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_track_in_that_genre()"
});
formatter.result({
  "duration": 621220400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_tracks_pagea()"
});
formatter.result({
  "duration": 8734800,
  "status": "passed"
});
formatter.after({
  "duration": 577246300,
  "status": "passed"
});
formatter.uri("playlists.feature");
formatter.feature({
  "line": 2,
  "name": "Playlists Page",
  "description": "",
  "id": "playlists-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@playlists"
    }
  ]
});
formatter.before({
  "duration": 5348999000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 232653700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 389025300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 21402300,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Create Playlists",
  "description": "",
  "id": "playlists-page;create-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I can access the Playlists page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I enter Playlists details",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "i can create an Playlists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_page()"
});
formatter.result({
  "duration": 619947000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_Playlists_details()"
});
formatter.result({
  "duration": 477904200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_Playlists_entry()"
});
formatter.result({
  "duration": 619913200,
  "status": "passed"
});
formatter.after({
  "duration": 579618100,
  "status": "passed"
});
formatter.before({
  "duration": 5320247800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 273286600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 350536200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 12131800,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Read Playlists",
  "description": "",
  "id": "playlists-page;read-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 17,
  "name": "I can access the Playlists page",
  "keyword": "Given "
});
formatter.step({
  "line": 18,
  "name": "i can read all the Playlists entries",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_page()"
});
formatter.result({
  "duration": 639525200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_Playlists_entries()"
});
formatter.result({
  "duration": 256257400,
  "status": "passed"
});
formatter.after({
  "duration": 562685100,
  "status": "passed"
});
formatter.before({
  "duration": 5323146300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 300911000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 383517800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 13646200,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Read One Playlists",
  "description": "",
  "id": "playlists-page;read-one-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 22,
  "name": "I can access the Playlists page",
  "keyword": "Given "
});
formatter.step({
  "line": 23,
  "name": "I click on view one Playlists",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "i can read that Playlists details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_page()"
});
formatter.result({
  "duration": 670026400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_Playlists()"
});
formatter.result({
  "duration": 647411500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_Playlists_details()"
});
formatter.result({
  "duration": 9536100,
  "status": "passed"
});
formatter.after({
  "duration": 573252800,
  "status": "passed"
});
formatter.before({
  "duration": 5325651700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 238721100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 332074000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 12114800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Update Playlists",
  "description": "",
  "id": "playlists-page;update-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 29,
  "name": "I can access the Playlists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "I enter new Playlists details",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "i can update that Playlists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_view_one_page()"
});
formatter.result({
  "duration": 684870700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_Playlists_details()"
});
formatter.result({
  "duration": 590530600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_Playlists_entry()"
});
formatter.result({
  "duration": 625697200,
  "status": "passed"
});
formatter.after({
  "duration": 584567900,
  "status": "passed"
});
formatter.before({
  "duration": 5316585900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 238834500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 357990400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 24422000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Delete Playlists",
  "description": "",
  "id": "playlists-page;delete-playlists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "I can access the Playlists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "I click on delete Playlists button",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "i can delete that Playlists entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_view_one_page()"
});
formatter.result({
  "duration": 654876300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_Playlists_button()"
});
formatter.result({
  "duration": 578697800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_Playlists_entry()"
});
formatter.result({
  "duration": 6371100,
  "status": "passed"
});
formatter.after({
  "duration": 582259900,
  "status": "passed"
});
formatter.before({
  "duration": 5326923300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 280703000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 396353800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 8903000,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "view track from a single playlist",
  "description": "",
  "id": "playlists-page;view-track-from-a-single-playlist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 43,
  "name": "I can access the Playlists view one page",
  "keyword": "Given "
});
formatter.step({
  "line": 44,
  "name": "I click on a linked track",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "i an taken to that tracks page",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_Playlists_view_one_page()"
});
formatter.result({
  "duration": 717417400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_linked_track()"
});
formatter.result({
  "duration": 623905000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_an_taken_to_that_tracks_page()"
});
formatter.result({
  "duration": 10118400,
  "status": "passed"
});
formatter.after({
  "duration": 574734000,
  "status": "passed"
});
formatter.before({
  "duration": 5351242700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigatec to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userc enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userc is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigatec_to_the_login_page()"
});
formatter.result({
  "duration": 265699600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 345644100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 13062900,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "search playlists from homepage",
  "description": "",
  "id": "playlists-page;search-playlists-from-homepage",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 49,
  "name": "I can access the homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 50,
  "name": "i search for a playlist",
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "only that playlists details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_homepage()"
});
formatter.result({
  "duration": 298261400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_playlist()"
});
formatter.result({
  "duration": 340061000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_playlists_details_are_displayed()"
});
formatter.result({
  "duration": 8582100,
  "status": "passed"
});
formatter.after({
  "duration": 581193200,
  "status": "passed"
});
formatter.uri("tracks.feature");
formatter.feature({
  "line": 2,
  "name": "tracks Page",
  "description": "",
  "id": "tracks-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@tracks"
    }
  ]
});
formatter.before({
  "duration": 5323403800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 230407300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 351030800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 15095500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Create tracks",
  "description": "",
  "id": "tracks-page;create-tracks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "I can access the tracks page from the albums",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I enter tracks details",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "i can create an tracks entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page_from_the_albums()"
});
formatter.result({
  "duration": 995781100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_tracks_details()"
});
formatter.result({
  "duration": 633996600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_tracks_entry()"
});
formatter.result({
  "duration": 881991400,
  "status": "passed"
});
formatter.after({
  "duration": 576284200,
  "status": "passed"
});
formatter.before({
  "duration": 5317602200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 261486600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 330619900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 22608600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Read tracks",
  "description": "",
  "id": "tracks-page;read-tracks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "i can read all the tracks entries",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 664307000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_tracks_entries()"
});
formatter.result({
  "duration": 6322500,
  "status": "passed"
});
formatter.after({
  "duration": 578366400,
  "status": "passed"
});
formatter.before({
  "duration": 5356238000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 259103500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 407231500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 24675700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Read One tracks",
  "description": "",
  "id": "tracks-page;read-one-tracks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on view one tracks",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "i can read that tracks details",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 677297600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_tracks()"
});
formatter.result({
  "duration": 624736300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_tracks_details()"
});
formatter.result({
  "duration": 9945600,
  "status": "passed"
});
formatter.after({
  "duration": 575074600,
  "status": "passed"
});
formatter.before({
  "duration": 5311534000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 243562800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 345762700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 12517700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Update tracks",
  "description": "",
  "id": "tracks-page;update-tracks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "I enter new tracks details",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "i can update that tracks entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 652853400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_tracks_details()"
});
formatter.result({
  "duration": 1211247700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_tracks_entry()"
});
formatter.result({
  "duration": 640108900,
  "status": "passed"
});
formatter.after({
  "duration": 586277400,
  "status": "passed"
});
formatter.before({
  "duration": 5334328300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 262958000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 406066300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 14042100,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Delete tracks",
  "description": "",
  "id": "tracks-page;delete-tracks",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I click on delete tracks button",
  "keyword": "When "
});
formatter.step({
  "line": 40,
  "name": "i can delete that tracks entry",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 700757800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_tracks_button()"
});
formatter.result({
  "duration": 942917500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_tracks_entry()"
});
formatter.result({
  "duration": 6121600,
  "status": "passed"
});
formatter.after({
  "duration": 581783600,
  "status": "passed"
});
formatter.before({
  "duration": 5298700100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 293974600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 390634300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 15314100,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "View album linked to track",
  "description": "",
  "id": "tracks-page;view-album-linked-to-track",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 45,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 46,
  "name": "I click on a album in that track",
  "keyword": "When "
});
formatter.step({
  "line": 47,
  "name": "i am taken to that albums page",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 681406000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_album_in_that_track()"
});
formatter.result({
  "duration": 982584900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_albums_page()"
});
formatter.result({
  "duration": 9294700,
  "status": "passed"
});
formatter.after({
  "duration": 574020800,
  "status": "passed"
});
formatter.before({
  "duration": 5351117600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "navigateb to the login page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "userb enter the correct details",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "userb is logged in",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.navigateb_to_the_login_page()"
});
formatter.result({
  "duration": 343135200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 383679100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 5783100,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Search for a track",
  "description": "",
  "id": "tracks-page;search-for-a-track",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 51,
  "name": "I can access the tracks page",
  "keyword": "Given "
});
formatter.step({
  "line": 52,
  "name": "i search for a track",
  "keyword": "When "
});
formatter.step({
  "line": 53,
  "name": "only that tracks details are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "AllTests.i_can_access_the_tracks_page()"
});
formatter.result({
  "duration": 672579700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_track()"
});
formatter.result({
  "duration": 322617100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_tracks_details_are_displayed()"
});
formatter.result({
  "duration": 8695800,
  "status": "passed"
});
formatter.after({
  "duration": 577085500,
  "status": "passed"
});
});