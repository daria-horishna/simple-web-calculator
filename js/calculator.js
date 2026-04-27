// calculator.js

// Трігер для оновлення статусу бейджа

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

export function multiply(a, b) {
    return a * b;
}

export function divide(a, b) {
    if (b === 0) {
        throw new Error("Ділення на нуль неможливе");
    }
    return a / b;
}

export function power(base, exponent) {
    return base ** exponent;
}

// Спеціальна функція для практики з Mock-об'єктами
// Уявимо, що logger - це стороння бібліотека для запису історії в базу даних
export function calculateAndLog(a, b, logger) {
    const result = add(a, b);
    logger(`Успішно пораховано: ${result}`); // Викликаємо сторонню функцію
    return result;
}