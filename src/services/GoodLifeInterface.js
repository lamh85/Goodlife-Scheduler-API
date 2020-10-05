import puppeteer from 'puppeteer'

const navigateToPage = () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.goodlifefitness.com/members');

  return page
}

const inputCredentials = page => {
  await page.type('[name="Email/Member #"]', 'nathan.nguyen8805@gmail.com')
  await page.type('[name="Password"]', 'Zombiearmy2020')

  const waitForConditions = {
    visible: true,
    timeout: 10_000
  }

  const waitResult = await page.waitForSelector('[href*="/bookings"]', waitForConditions)
}

const login = async () => {
  const page = await navigateToPage()
  await inputCredentials(page)




}

const run = () => {
  login()
  schedule()
}