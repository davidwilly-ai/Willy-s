import puppeteer from 'puppeteer'
import { existsSync, mkdirSync } from 'fs'
import { join } from 'path'

const url = process.argv[2] || 'http://localhost:3000'
const label = process.argv[3] || ''

const dir = './temporary screenshots'
if (!existsSync(dir)) mkdirSync(dir, { recursive: true })

// Find next available number
let n = 1
while (existsSync(join(dir, `screenshot-${n}${label ? '-' + label : ''}.png`))) n++

const filename = join(dir, `screenshot-${n}${label ? '-' + label : ''}.png`)

const browser = await puppeteer.launch({
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
})
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 })
await new Promise(r => setTimeout(r, 2000))
await page.screenshot({ path: filename, fullPage: false })
await browser.close()

console.log(filename)
