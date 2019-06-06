/**
 * We will try and scrape google now
 * GOAL:
 * User will input keyword and url we will have have to find the position
 * of that URL in google search results
 */
const puppeteer = require('puppeteer');

const KEYWORD_SELECTOR = '#tsf > div:nth-child(2) > div > div.RNNXgb > div > div.a4bIc > input';
const KEYWORD_INPUT = 'sparsh turkane';
const SEARCH_BUTTON_SELECTOR = '#tsf > div:nth-child(2) > div > div.FPdoLc.VlcLAe > center > input.gNO89b';
//const NEXT_BUTTON_SELECTOR = '#pnnext > span:nth-child(2)';
const NEXT_BUTTON_SELECTOR = '#pnnext';

async function run() {
	// Setting up puppeteer to run headless
	const browser = await puppeteer.launch(
		{
			headless: false
		}
	);

	const page = await browser.newPage();

	await page.setViewport({
		width: 1366,
		height: 650,
	});

	// Go To google.com
	await page.goto('https://google.com');

	// Enter a keyword in input box
	await page.click(KEYWORD_SELECTOR);
	await page.keyboard.type(KEYWORD_INPUT);
	
	// Click on search button
	await page.click(SEARCH_BUTTON_SELECTOR);

	await page.waitFor(2 * 1000);
	//await page.click(NEXT_BUTTON_SELECTOR);
	
	// For loop for going to many different pages
	for (let i = 1; i <= 4; i++) {
		await page.waitFor(2 * 1000);
		// Go to next pages
		await page.click(NEXT_BUTTON_SELECTOR);
		await page.waitFor(2 * 1000);
		
	}
}

run();