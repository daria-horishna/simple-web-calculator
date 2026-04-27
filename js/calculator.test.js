// calculator.test.js
import { describe, it, expect, vi } from 'vitest';
import { add, subtract, multiply, divide, calculateAndLog } from './calculator.js';

describe('Бізнес-логіка Калькулятора', () => {

    it('1. Коректно додає два числа', () => {
        expect(add(2, 3)).toBe(5); // Assertion (перевірка)
    });

    it('2. Коректно віднімає два числа', () => {
        expect(subtract(10, 4)).toBe(6);
    });

    it('3. Коректно множить два числа', () => {
        expect(multiply(3, 4)).toBe(12);
    });

    it('4. Коректно ділить числа без залишку', () => {
        expect(divide(10, 2)).toBe(5);
    });

    it('5. Викидає помилку при спробі ділення на нуль', () => {
        // Перевіряємо обробку виняткових ситуацій
        expect(() => divide(10, 0)).toThrowError("Ділення на нуль неможливе");
    });

    it('6. Використовує Mock-об\'єкт для перевірки логування', () => {
        // Створюємо Mock-функцію (шпигуна), яка нічого не робить, але записує, чи її викликали
        const mockLogger = vi.fn();

        // Викликаємо нашу логіку і передаємо туди Mock
        calculateAndLog(5, 5, mockLogger);

        // Перевіряємо, чи логіка калькулятора дійсно викликала цей Mock
        expect(mockLogger).toHaveBeenCalled();
        // Перевіряємо, чи правильний текст був переданий у Mock
        expect(mockLogger).toHaveBeenCalledWith('Успішно пораховано: 10');
    });

});