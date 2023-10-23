import { describe, expect, it } from "bun:test";
import { calculateAdjacentKnightTargets, calculateKnightMoves, isValidChessField } from ".";

describe('horse-kata', () => {

    describe('calculateKnightMoves', () => {
        it('returns 1 if the target field is reachable in one move', () => {
            const moves = calculateKnightMoves('d5', 'c7')
            expect(moves).toBe(1)
        })
        it('returns 3 if the target is reachable in three moves', () => {
            const moves = calculateKnightMoves('a1', 'f5')
            expect(moves).toBe(3)
        })
    });

    describe('#isValidChessField', () => {
        it('returns false if the number part is out of bounds', () => {
            expect(isValidChessField('a0')).toBe(false)
            expect( isValidChessField('a9')).toBe(false)
        })

        it('returns false if the letter part is out of bounds', () => {
            expect(isValidChessField('i1')).toBe(false)
        })

        it('returns false if the field is not exactly 2 characters long', () => {
            expect(isValidChessField('')).toBe(false)
            expect(isValidChessField('a')).toBe(false)
            expect(isValidChessField('a23')).toBe(false)
            expect(isValidChessField('ab1')).toBe(false)
        })

        it('return true for valid chess fields', () => {
            expect(isValidChessField('a1')).toBeTrue()
            expect(isValidChessField('h8')).toBeTrue()
        })

    });

    describe('calculateAdjacentKnightTargets', () => {
        it('returns all valid targets', () => {
            const targets = calculateAdjacentKnightTargets('d5')
            const expectedTargets = ['e7', 'f6', 'f4', 'e3', 'c3', 'b4', 'b6', 'c7']
            expect(targets).toStrictEqual(expectedTargets)
        })
        it('does not return invalid fields', () => {
            const targets = calculateAdjacentKnightTargets('a1')
            const expectedTargets = ['b3', 'c2']
            expect(targets).toStrictEqual(expectedTargets)
        })
    });


});