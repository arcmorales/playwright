import { expect, Locator, Page } from '@playwright/test'
import { formatDateMessage, getDaysFromNow } from 'utils/helper'

export class ForecastPage {
  page: Page
  cityLink: Locator
  forecastUrl: string
  thirdDay: string
  thirdDayFormatted: string

  constructor(page: Page, state = `nsw`, city = `Sydney`) {
    this.page = page
    this.cityLink = page.locator(`#today_refresh h3:has-text("${city}")`)
    this.forecastUrl = `/${state.toLowerCase()}/forecasts/${city.toLowerCase()}.shtml`
    const thirdDay = getDaysFromNow(3)
    this.thirdDay = thirdDay
    this.thirdDayFormatted = formatDateMessage(thirdDay)
  }

  async goToHome() {
    await this.page.goto('/')
  }

  async goToCityForecast() {
    await this.goToHome()
    await this.cityLink.click()
    await expect(this.page).toHaveURL(this.forecastUrl)
  }

  async getThirdDayForecast() {
    await this.goToCityForecast()

    const forecast = await this.page
      .locator('div.day', { has: this.page.locator(`text=${this.thirdDay}`) })
      .locator('dd.rain > em.pop')
      .innerText()

    return parseFloat(forecast)
  }
}
