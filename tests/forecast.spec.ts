import { test, expect } from '@playwright/test'
import { ForecastPage } from 'pages/forecast.page'

const THRESHHOLD = 50

test.describe('Get rainfall forecast three days from now', () => {
  test('it should not rain in Sydney', async ({ page }) => {
    const forecastPage = new ForecastPage(page)

    const forecast = await forecastPage.getThirdDayForecast()

    //Note: if the percentage rain number is greater than 50% just Assert FAIL the test
    await expect(forecast, `Looks like it will rain on ${forecastPage.thirdDayFormatted}`).toBeLessThanOrEqual(
      THRESHHOLD
    )
  })
})
