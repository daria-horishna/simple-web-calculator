// tests/calculator.spec.js
import { test, expect } from '@playwright/test';

test.describe('E2E Тестування UI Калькулятора', () => {

    test.beforeEach(async ({ page }) => {
        // Вказуємо адресу нашого локального сервера замість file://
        await page.goto('http://localhost:3000');
    });

    test('Сценарій 1: Успішне додавання чисел (Критичний шлях)', async ({ page }) => {
        await page.fill('#num1', '15');
        await page.fill('#num2', '25');

        // ВИПРАВЛЕНО: тепер клікаємо на правильний id
        await page.click('#calc-btn');

        const resultText = await page.locator('#result').innerText();
        expect(resultText).toContain('40');
    });

    test('Сценарій 2: Відображення помилки при порожніх полях', async ({ page }) => {
        // ВИПРАВЛЕНО: тут також переконайся, що стоїть правильний id
        await page.click('#calc-btn');

        const resultLocator = page.locator('#result');
        await expect(resultLocator).not.toBeEmpty();
    });
});