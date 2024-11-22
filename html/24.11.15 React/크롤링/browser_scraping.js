// 1. 요청을 보낸다.
// 2. 응답을 받는다. (HTML)
// 3. HTML을 뜯어서 원하는 정보를 얻는다.
// npm install jsdom, axios
const axios = require('axios');
const { JSDOM } = require('jsdom');
const { default: puppeteer } = require('puppeteer');

async function srcapingPractice() {
  const URL = 'https://comic.naver.com/webtoon?tab=mon';
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();

  await page.goto(URL);

  // const text = await page.$eval('h1', (el) => el.textContent);

  const imgUrls = await page.$$eval('#content > div:nth-child(1) > ul  li:nth-child(1) img', (imgs) => {
    // console.log(imgs);
    imgs.map((img) => img.src);
  });
  console.log(imgUrls);
}

srcapingPractice();
