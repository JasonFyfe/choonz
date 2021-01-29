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
  "duration": 5935684600,
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
  "duration": 857121800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_the_user_name_and_passwird()"
});
formatter.result({
  "duration": 854027300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_login()"
});
formatter.result({
  "duration": 280252000,
  "status": "passed"
});
formatter.after({
  "duration": 579816100,
  "status": "passed"
});
formatter.before({
  "duration": 5319149300,
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
  "duration": 1178549800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.when_i_click_logout()"
});
formatter.result({
  "duration": 243131900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_logged_out()"
});
formatter.result({
  "duration": 20818177200,
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for element to be clickable: By.cssSelector: body \u003e div \u003e form \u003e button (tried for 20 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat stepdef.AllTests.i_am_logged_out(AllTests.java:1101)\r\n\tat ✽.Then i am logged out(LoginLogout.feature:12)\r\nCaused by: org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"body \u003e div \u003e form \u003e button\"}\n  (Session info: headless chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-24TH8E7N\u0027, ip: \u0027192.168.1.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Malik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:55978}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 52aa6c9a7c14ac03facda4089756a55c\n*** Element info: {Using\u003dcss selector, value\u003dbody \u003e div \u003e form \u003e button}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:205)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$7.apply(ExpectedConditions.java:201)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:641)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$22.apply(ExpectedConditions.java:638)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat stepdef.AllTests.i_am_logged_out(AllTests.java:1101)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:564)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 579408400,
  "status": "passed"
});
formatter.before({
  "duration": 5333143600,
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
  "duration": 405476700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_the_registration_details()"
});
formatter.result({
  "duration": 3038141600,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#username\"}\n  (Session info: headless chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-24TH8E7N\u0027, ip: \u0027192.168.1.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Malik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56005}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9e08fc8db5a3504db8d9ef3be23f22dc\n*** Element info: {Using\u003dcss selector, value\u003d#username}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat pages.loginPage.reguser(loginPage.java:34)\r\n\tat stepdef.AllTests.i_enter_the_registration_details(AllTests.java:1119)\r\n\tat ✽.When i enter the registration details(LoginLogout.feature:16)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AllTests.i_can_login_with_the_details()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 576407700,
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
  "duration": 5357368800,
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
  "duration": 234839100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 347092300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 12556800,
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
  "duration": 1021608700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_album_details()"
});
formatter.result({
  "duration": 404253200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_album_entry()"
});
formatter.result({
  "duration": 992870700,
  "status": "passed"
});
formatter.after({
  "duration": 582033100,
  "status": "passed"
});
formatter.before({
  "duration": 5359082600,
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
  "duration": 241265900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 407176200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 16609600,
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
  "duration": 686299000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_album_entries()"
});
formatter.result({
  "duration": 6892800,
  "status": "passed"
});
formatter.after({
  "duration": 577345800,
  "status": "passed"
});
formatter.before({
  "duration": 5323453000,
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
  "duration": 260027400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 390725300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 13216100,
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
  "duration": 693135000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_album()"
});
formatter.result({
  "duration": 635726700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_albums_details()"
});
formatter.result({
  "duration": 11111500,
  "status": "passed"
});
formatter.after({
  "duration": 586425500,
  "status": "passed"
});
formatter.before({
  "duration": 5321101900,
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
  "duration": 256593800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 421042700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 18010500,
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
  "duration": 682960500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_album_details()"
});
formatter.result({
  "duration": 1221870800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_albums_entry()"
});
formatter.result({
  "duration": 727107800,
  "status": "passed"
});
formatter.after({
  "duration": 582936500,
  "status": "passed"
});
formatter.before({
  "duration": 5328448200,
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
  "duration": 517893700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 395354800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 32460600,
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
  "duration": 686919400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_album_button()"
});
formatter.result({
  "duration": 993188500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_albums_entry()"
});
formatter.result({
  "duration": 4315600,
  "status": "passed"
});
formatter.after({
  "duration": 579699600,
  "status": "passed"
});
formatter.before({
  "duration": 5315346900,
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
  "duration": 241085100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 385954700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 20489100,
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
  "duration": 679791900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_the_artist_of_that_album()"
});
formatter.result({
  "duration": 1020406600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_artists_page()"
});
formatter.result({
  "duration": 9074200,
  "status": "passed"
});
formatter.after({
  "duration": 587297700,
  "status": "passed"
});
formatter.before({
  "duration": 5315075200,
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
  "duration": 318246400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 423059300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 7753200,
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
  "duration": 680986200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_track_in_that_album()"
});
formatter.result({
  "duration": 3705142000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tracks \u003e div:nth-child(1) \u003e input[type\u003dbutton]\"}\n  (Session info: headless chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-24TH8E7N\u0027, ip: \u0027192.168.1.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Malik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56200}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: e77afdc567a56da6574b1c9f3d2653d6\n*** Element info: {Using\u003dcss selector, value\u003d#tracks \u003e div:nth-child(1) \u003e input[type\u003dbutton]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepdef.AllTests.i_click_on_a_track_in_that_album(AllTests.java:252)\r\n\tat ✽.When I click on a track in that album(albums.feature:50)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_tracks_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 578270900,
  "status": "passed"
});
formatter.before({
  "duration": 5335686800,
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
  "duration": 267670700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correcta_details()"
});
formatter.result({
  "duration": 362475800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.usera_is_logged_in()"
});
formatter.result({
  "duration": 7179300,
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
  "duration": 683303500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_album()"
});
formatter.result({
  "duration": 334447600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_albums_details_are_displayed()"
});
formatter.result({
  "duration": 9006200,
  "status": "passed"
});
formatter.after({
  "duration": 574215700,
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
  "duration": 5342838400,
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
  "duration": 236796700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 346786000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 11128600,
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
  "duration": 655686300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_Artists_details()"
});
formatter.result({
  "duration": 339126100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_Artists_entry()"
});
formatter.result({
  "duration": 634503000,
  "status": "passed"
});
formatter.after({
  "duration": 573144400,
  "status": "passed"
});
formatter.before({
  "duration": 5312476400,
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
  "duration": 328893400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 364541700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 24215500,
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
  "duration": 644604200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_Artists_entries()"
});
formatter.result({
  "duration": 272831600,
  "status": "passed"
});
formatter.after({
  "duration": 588911700,
  "status": "passed"
});
formatter.before({
  "duration": 5415170200,
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
  "duration": 303354300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 411613900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 17274200,
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
  "duration": 620858100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_Artists()"
});
formatter.result({
  "duration": 640668100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_Artists_details()"
});
formatter.result({
  "duration": 10131000,
  "status": "passed"
});
formatter.after({
  "duration": 581157600,
  "status": "passed"
});
formatter.before({
  "duration": 5323161600,
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
  "duration": 457782000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 379387900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 12134300,
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
  "duration": 721649900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_Artists_details()"
});
formatter.result({
  "duration": 393958800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_Artists_entry()"
});
formatter.result({
  "duration": 620985900,
  "status": "passed"
});
formatter.after({
  "duration": 582335000,
  "status": "passed"
});
formatter.before({
  "duration": 5355835100,
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
  "duration": 302247300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 403443500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 12084500,
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
  "duration": 704723300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_Artists_button()"
});
formatter.result({
  "duration": 568813000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_Artists_entry()"
});
formatter.result({
  "duration": 6239700,
  "status": "passed"
});
formatter.after({
  "duration": 583387700,
  "status": "passed"
});
formatter.before({
  "duration": 5353973100,
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
  "duration": 420577600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 424125400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 16084300,
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
  "duration": 736187500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_linked_album()"
});
formatter.result({
  "duration": 678859100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_an_taken_to_that_albums_page()"
});
formatter.result({
  "duration": 10234300,
  "status": "passed"
});
formatter.after({
  "duration": 583657300,
  "status": "passed"
});
formatter.before({
  "duration": 5356139500,
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
  "duration": 292913500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_enter_the_correct_details()"
});
formatter.result({
  "duration": 397416900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.user_is_logged_in()"
});
formatter.result({
  "duration": 19492800,
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
  "duration": 658527400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_artist()"
});
formatter.result({
  "duration": 593098400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_artists_details_are_displayed()"
});
formatter.result({
  "duration": 9999600,
  "status": "passed"
});
formatter.after({
  "duration": 586533900,
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
  "duration": 5328552300,
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
  "duration": 258873200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 369862200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 7055700,
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
  "duration": 645832100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_genres_details()"
});
formatter.result({
  "duration": 403213400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_genres_entry()"
});
formatter.result({
  "duration": 679618100,
  "status": "passed"
});
formatter.after({
  "duration": 591890800,
  "status": "passed"
});
formatter.before({
  "duration": 5414704400,
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
  "duration": 244277600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 344977500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 12701800,
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
  "duration": 673535500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_genres_entries()"
});
formatter.result({
  "duration": 273609300,
  "status": "passed"
});
formatter.after({
  "duration": 590945200,
  "status": "passed"
});
formatter.before({
  "duration": 5310456200,
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
  "duration": 236107900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 364550700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 11737400,
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
  "duration": 632159200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_genres()"
});
formatter.result({
  "duration": 649866900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_genres_details()"
});
formatter.result({
  "duration": 9073100,
  "status": "passed"
});
formatter.after({
  "duration": 575147100,
  "status": "passed"
});
formatter.before({
  "duration": 5366279100,
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
  "duration": 289573300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 400965300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 7832200,
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
  "duration": 664438100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_genres_details()"
});
formatter.result({
  "duration": 499245800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_genres_entry()"
});
formatter.result({
  "duration": 689856800,
  "status": "passed"
});
formatter.after({
  "duration": 586887000,
  "status": "passed"
});
formatter.before({
  "duration": 5336805900,
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
  "duration": 289873900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 404070600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 19926500,
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
  "duration": 724865500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_genres_button()"
});
formatter.result({
  "duration": 621815500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_genres_entry()"
});
formatter.result({
  "duration": 6636700,
  "status": "passed"
});
formatter.after({
  "duration": 596195700,
  "status": "passed"
});
formatter.before({
  "duration": 5411115900,
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
  "duration": 273483400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_enter_the_correct_details()"
});
formatter.result({
  "duration": 405059900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userd_is_logged_in()"
});
formatter.result({
  "duration": 21259000,
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
  "duration": 699023600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_track_in_that_genre()"
});
formatter.result({
  "duration": 3286539100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tracks \u003e div:nth-child(1) \u003e input[type\u003dbutton]\"}\n  (Session info: headless chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-24TH8E7N\u0027, ip: \u0027192.168.1.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Malik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56564}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: dc6c72cf2942cb78cfcfd0e3bd3a6d29\n*** Element info: {Using\u003dcss selector, value\u003d#tracks \u003e div:nth-child(1) \u003e input[type\u003dbutton]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages.updateGenre.trackclick(updateGenre.java:46)\r\n\tat stepdef.AllTests.i_click_on_a_track_in_that_genre(AllTests.java:633)\r\n\tat ✽.When I click on a track in that genre(genres.feature:47)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_tracks_pagea()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 594571500,
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
  "duration": 5397830300,
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
  "duration": 265421300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 358783700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 23452100,
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
  "duration": 646723200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_Playlists_details()"
});
formatter.result({
  "duration": 497772400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_Playlists_entry()"
});
formatter.result({
  "duration": 638732200,
  "status": "passed"
});
formatter.after({
  "duration": 594971700,
  "status": "passed"
});
formatter.before({
  "duration": 5317552300,
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
  "duration": 277518300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 434164900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 21173200,
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
  "duration": 695180400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_Playlists_entries()"
});
formatter.result({
  "duration": 278699100,
  "status": "passed"
});
formatter.after({
  "duration": 574834200,
  "status": "passed"
});
formatter.before({
  "duration": 5310020500,
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
  "duration": 273989700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 423731100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 20997300,
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
  "duration": 674700500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_Playlists()"
});
formatter.result({
  "duration": 680241300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_Playlists_details()"
});
formatter.result({
  "duration": 10532800,
  "status": "passed"
});
formatter.after({
  "duration": 590541700,
  "status": "passed"
});
formatter.before({
  "duration": 5391992300,
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
  "duration": 239497400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 373455500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 6501000,
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
  "duration": 672078700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_Playlists_details()"
});
formatter.result({
  "duration": 596507100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_Playlists_entry()"
});
formatter.result({
  "duration": 644322900,
  "status": "passed"
});
formatter.after({
  "duration": 561082400,
  "status": "passed"
});
formatter.before({
  "duration": 5325907400,
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
  "duration": 241181300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 336988100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 11062500,
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
  "duration": 688862300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_Playlists_button()"
});
formatter.result({
  "duration": 579123600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_Playlists_entry()"
});
formatter.result({
  "duration": 6445900,
  "status": "passed"
});
formatter.after({
  "duration": 582386500,
  "status": "passed"
});
formatter.before({
  "duration": 5349120800,
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
  "duration": 255932900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 388060900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 10639500,
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
  "duration": 711776600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_linked_track()"
});
formatter.result({
  "duration": 3281731100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tracks \u003e div:nth-child(1) \u003e input[type\u003dbutton]\"}\n  (Session info: headless chrome\u003d88.0.4324.104)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LAPTOP-24TH8E7N\u0027, ip: \u0027192.168.1.148\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002714.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 88.0.4324.104, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: C:\\Users\\Malik\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:56752}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 14622d58297364ee46ae469698ddb493\n*** Element info: {Using\u003dcss selector, value\u003d#tracks \u003e div:nth-child(1) \u003e input[type\u003dbutton]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\r\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat pages.updatePlaylists.tracklinkclick(updatePlaylists.java:55)\r\n\tat stepdef.AllTests.i_click_on_a_linked_track(AllTests.java:799)\r\n\tat ✽.When I click on a linked track(playlists.feature:44)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AllTests.i_an_taken_to_that_tracks_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 567549600,
  "status": "passed"
});
formatter.before({
  "duration": 5343955500,
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
  "duration": 253336700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_enter_the_correct_details()"
});
formatter.result({
  "duration": 340196100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userc_is_logged_in()"
});
formatter.result({
  "duration": 14312600,
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
  "duration": 301447100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_playlist()"
});
formatter.result({
  "duration": 341225100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_playlists_details_are_displayed()"
});
formatter.result({
  "duration": 9016900,
  "status": "passed"
});
formatter.after({
  "duration": 581554400,
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
  "duration": 5329486900,
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
  "duration": 273089000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 360685900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 14219400,
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
  "duration": 978647400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_tracks_details()"
});
formatter.result({
  "duration": 603786200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_create_an_tracks_entry()"
});
formatter.result({
  "duration": 916787400,
  "status": "passed"
});
formatter.after({
  "duration": 572657300,
  "status": "passed"
});
formatter.before({
  "duration": 5303578200,
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
  "duration": 281415000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 342536100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 7913100,
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
  "duration": 689102200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_all_the_tracks_entries()"
});
formatter.result({
  "duration": 6372400,
  "status": "passed"
});
formatter.after({
  "duration": 577654800,
  "status": "passed"
});
formatter.before({
  "duration": 5318131300,
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
  "duration": 293301000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 405548600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 17462300,
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
  "duration": 762799300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_view_one_tracks()"
});
formatter.result({
  "duration": 689814700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_read_that_tracks_details()"
});
formatter.result({
  "duration": 9183400,
  "status": "passed"
});
formatter.after({
  "duration": 596048300,
  "status": "passed"
});
formatter.before({
  "duration": 5380978400,
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
  "duration": 330883000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 459578900,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 9518800,
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
  "duration": 732334300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_enter_new_tracks_details()"
});
formatter.result({
  "duration": 1379660400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_update_that_tracks_entry()"
});
formatter.result({
  "duration": 694245800,
  "status": "passed"
});
formatter.after({
  "duration": 563291200,
  "status": "passed"
});
formatter.before({
  "duration": 5407464700,
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
  "duration": 267342100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 338003300,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 11291000,
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
  "duration": 686911400,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_delete_tracks_button()"
});
formatter.result({
  "duration": 949739700,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_can_delete_that_tracks_entry()"
});
formatter.result({
  "duration": 6216300,
  "status": "passed"
});
formatter.after({
  "duration": 564756500,
  "status": "passed"
});
formatter.before({
  "duration": 5342751200,
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
  "duration": 312453200,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 408542500,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 9069400,
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
  "duration": 793223100,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_click_on_a_album_in_that_track()"
});
formatter.result({
  "duration": 1060992000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_am_taken_to_that_albums_page()"
});
formatter.result({
  "duration": 11635600,
  "status": "passed"
});
formatter.after({
  "duration": 596006200,
  "status": "passed"
});
formatter.before({
  "duration": 5445442200,
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
  "duration": 263254000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_enter_the_correct_details()"
});
formatter.result({
  "duration": 407311600,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.userb_is_logged_in()"
});
formatter.result({
  "duration": 14087800,
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
  "duration": 692536000,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.i_search_for_a_track()"
});
formatter.result({
  "duration": 325075800,
  "status": "passed"
});
formatter.match({
  "location": "AllTests.only_that_tracks_details_are_displayed()"
});
formatter.result({
  "duration": 7315800,
  "status": "passed"
});
formatter.after({
  "duration": 576920000,
  "status": "passed"
});
});