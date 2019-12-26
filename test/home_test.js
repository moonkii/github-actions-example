Feature('Visit home page');

Scenario('guest visits home page', I => {
    I.amOnPage('/');

    I.see('test page');
});
