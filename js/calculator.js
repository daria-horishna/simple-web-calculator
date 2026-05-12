// calculator.js
import posthog from 'posthog-js';

// Ініціалізація PostHog
posthog.init('phc_oURsraicSCGu9DpAzXm2PbWdVkAP8h2ZMWKzk3PgBkLp', {
    api_host: '/ingest',
    person_profiles: 'identified_only'
});

import * as Sentry from "@sentry/browser";

Sentry.init({
    dsn: "https://843ed3bf1ce9b510f14e28fa30bc1bdc@o4511371463491584.ingest.de.sentry.io/4511371490951248",
    integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration(),
    ],
    // Tracing
    tracesSampleRate: 1.0,
    // Replay
    replaysSessionSampleRate: 0.1,
    replaysOnErrorSampleRate: 1.0,
    environment: "development",
});

// Налаштування контексту користувача
Sentry.setUser({
    id: "student-pp-32",
    email: "daria.horishna@example.com",
    segment: "premium_user"
});

export function add(a, b) {
    const result = a + b;
    posthog.capture('calculation_performed', { operation: 'add', result: result });
    return result;
}

export function subtract(a, b) {
    const result = a - b;
    posthog.capture('calculation_performed', { operation: 'subtract', result: result });
    return result;
}

export function multiply(a, b) {
    const result = a * b;
    posthog.capture('calculation_performed', { operation: 'multiply', result: result });
    return result;
}

export function divide(a, b) {
    if (b === 0) {
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

// Крок 5: Перевірка Feature Flag
posthog.onFeatureFlags(() => {
    // Якщо прапорець 'show-info-message' увімкнений в PostHog
    if (posthog.isFeatureEnabled('show-info-message')) {
        // Створюємо елемент повідомлення на сторінці
        const info = document.createElement('p');
        info.innerText = "✨ Тепер ви можете використовувати розширені функції!";
        info.style.color = "green";
        info.id = "feature-flag-msg";
        document.body.appendChild(info);
    }
});

document.getElementById('break-btn').addEventListener('click', () => {
    throw new TypeError("Sentry Test: Absolutely NEW error type!");
});