import { test, expect } from '@playwright/test';
test("Company should be fetch",async({page})=>{
  await page.goto(`${UI_URL}my-Company`)
  await expect(page.getByRole('heading',{name:'Company  Managment'})).toBeVisible()
  await expect(page.locator(':has-text("sdacsadc")')).toBeVisible()

})
const UI_URL="http://localhost:5173/"
test('should allow the user to sign-in', async ({ page }) => {
  await page.goto(UI_URL);
  await page.getByRole("link",{name:"Sign in"}).click();
  await expect(page.getByRole('heading',{name:"SIGNIN"})).toBeVisible();
  await page.locator("[name=email]").fill("ariz@gmail.com");
  await page.locator("[name=password]").fill("ariz123");
  await page.getByRole("button",{name:"Log in"}).click();


  await expect(page.getByText("Succefull done")).toBeVisible();
  await expect(page.getByRole("link",{name:" MY Account "})).toBeVisible();
  await expect(page.getByRole("link",{name:'My Rides'})).toBeVisible();
  await expect(page.getByRole('button',{name:'Logout'})).toBeVisible();



});
test('shouls allow user to register',async({page})=>{

  const testEmail=`test_register_${Math.floor(Math.random()*90000)+10000}@test.com`;
  await page.goto(UI_URL);
  await page.getByRole('link',{name:"Sign in"}).click();
  await page.getByRole('link',{name:' Create Account :Click here'}).click
  await expect(page.getByRole('heading',{name:"Sign Up"})).toBeVisible
  await page.locator("[name=email]").fill("amaanwe@gmail.com")
  await page.locator("[name=firstname]").fill("amaanas")
  await page.locator("[name=lastname]").fill("kskdjd")
  await page.locator("[name=password]").fill("poiuytrewq")
  await page.locator("[name=confirmpassword]").fill("poiuytrewq")
  await page.getByRole("button",{name:'SUBMIT'}).click()
  await expect(page.getByText("Succefully done")).toBeVisible();
  await expect(page.getByRole("link",{name:" MY Account "})).toBeVisible();
  await expect(page.getByRole("link",{name:'My Rides'})).toBeVisible();
  await expect(page.getByRole('button',{name:'Logout'})).toBeVisible();

  





});

