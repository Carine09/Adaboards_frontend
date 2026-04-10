import { expect, test } from 'vitest' 
import { showRelativeDate } from './date';

/**
 * Date par défaut (new Date()) => Devrait afficher "maintenant"
 * Date dans le passé (ex: new Date('2023-01-01')) => Devrait afficher "il y a X jours"
 * Temporal pour rendre la date dynamique (mais pas encore dispo sur typescript)
 * @see https://grafikart.fr/tutoriels/temporal-date-js-2316#t470 
 * @see 
 */
test('Afficher la date relative - Date par défaut -> Devrait afficher maintenant ', () => {    
    expect(showRelativeDate(new Date())).toBe('maintenant');
})

test('Date dans le passé (ex: 09/04/2026 => Devrait afficher il y a 1 jours', () => {
    expect(showRelativeDate(new Date('2026-04-09'))).toBe('il y a 1 jour');
})

test('Date dans le passé (ex: 2026-04-05 => Devrait afficher il y a 5 jours', () => {
    expect(showRelativeDate(new Date('2026-04-05'))).toBe('il y a 5 jours');
})

test('Date dans le passé (ex: 10/04/2026 11h => Devrait afficher il y a 4 heures', () => {
    expect(showRelativeDate(new Date("2026-04-10 11:00:00"))).toBe('il y a 4 heures');
})

test("Cas d'erreur", () => {
    const invalidDate = new Date("Invalid Date");
    expect(showRelativeDate(invalidDate)).toBe('date invalide')
})

// 05-04-2026 => Devrait afficher il y a 5 jours

// 10-04-2026 11:00 => Devrait afficher il y a 4 heures

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3)
// })