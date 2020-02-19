import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../app.po';
import { browser } from 'protractor';

let page: AppPage;

Before(() => {
  page = new AppPage();
});

Given(/^I am on the home page$/,{timeout: 2 * 5000}, async () => {

  await page.navigateTo();

});

When(/^I do nothing$/, () => {});

Then(/^I should see the title$/, async () => {
  expect(await page.getTitleText()).to.equal('LEARN');
});