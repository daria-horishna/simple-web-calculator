// calculator.js
import posthog from 'posthog-js';

// Ініціалізація PostHog
posthog.init('phc_oURsraicSCGu9DpAzXm2PbWdVkAP8h2ZMWKzk3PgBkLp', {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only'
});

export function add(a, b) {
    const result = a + b;
    // КРОК 2: Відстежуємо подію додавання
    posthog.capture('calculation_performed', { operation: 'add', result: result });
    return result;
}

export function subtract(a, b) {
    const result = a - b;
    // КРОК 2: Відстежуємо подію віднімання
    posthog.capture('calculation_performed', { operation: 'subtract', result: result });
    return result;
}

export function multiply(a, b) {
    const result = a * b;
    // КРОК 2: Відстежуємо подію множення
    posthog.capture('calculation_performed', { operation: 'multiply', result: result });
    return result;
}

export function divide(a, b) {
    if (b === 0) {
        // Відстежуємо помилку як негативний сценарій
        posthog.capture('calculation_error', { type: 'division_by_zero' });
        throw new Error("Ділення на нуль неможливе");
    }
    const result = a / b;
    posthog.capture('calculation_performed', { operation: 'divide', result: result });
    return result;
}

export function power(base, exponent) {
    const result = base ** exponent;
    posthog.capture('calculation_performed', { operation: 'power', result: result });
    return result;
}

export function calculateAndLog(a, b, logger) {
    const result = add(a, b);
    logger(`Успішно пораховано: ${result}`);
    return result;
}