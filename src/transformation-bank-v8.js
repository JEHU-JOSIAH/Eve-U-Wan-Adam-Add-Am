import { TRANSFORMATION_BANK_V8_3 as BANK } from './transformation-bank-v8-3.js';
export const TRANSFORMATION_BANK_V8_3 = BANK;
export const TRANSFORMATION_BANK_V8_2 = BANK;
export const TRANSFORMATION_BANK_V8_1 = BANK;
export const TRANSFORMATION_BANK_V8 = BANK;
export const TRANSFORMATION_BANK = BANK;
export const TRANSFORMATION_BANK_REPORT = { familyCount: new Set(BANK.map(q=>q.scenarioFamily)).size, stages: [...new Set(BANK.map(q=>q.scenarioStage))] };
