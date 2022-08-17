import { test, expect } from '@playwright/test'
import { ForecastPage } from 'pages/forecast.page'
import { formatDateMessage } from 'utils/helper'

test('Get Rainfall forescast three days from now', async ({ page }) => {
  const forecastPage = new ForecastPage(page)

  const thirdDayForcast = await forecastPage.getThirdDayForecast()

  const customMessage = formatDateMessage(forecastPage.thirdDay)
  const forecast = parseFloat(thirdDayForcast)

  //Note: if the percentage rain number is greater than 50% just Assert FAIL the test
  await expect(forecast, `Looks like it will rain on ${customMessage}`).toBeLessThanOrEqual(50)
})