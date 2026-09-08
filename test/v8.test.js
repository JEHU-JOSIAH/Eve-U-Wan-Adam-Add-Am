import assert from 'node:assert/strict';
import { TRANSFORMATION_BANK, TRANSFORMATION_BANK_REPORT } from '../src/transformation-bank-v8.js';
import { SCENARIO_FAMILIES, FAMILY_BY_ID } from '../src/scenario-families.js';

assert.equal(TRANSFORMATION_BANK.length, 120);
assert.equal(TRANSFORMATION_BANK_REPORT.familyCount, 20);
assert.equal(TRANSFORMATION_BANK_REPORT.stages.length, 6);
assert.equal(new Set(TRANSFORMATION_BANK.map(q=>q.id)).size, 120);
for (const q of TRANSFORMATION_BANK) {
  assert.ok(FAMILY_BY_ID[q.scenarioFamily], `missing family ${q.scenarioFamily}`);
  assert.ok(TRANSFORMATION_BANK_REPORT.stages.includes(q.scenarioStage));
  assert.equal(q.options.length,4);
  assert.ok(q.transformation?.objective);
  assert.ok(q.transformation?.longTermQuestion);
  assert.ok(q.intelligence?.version === '8.0');
}
assert.ok(SCENARIO_FAMILIES.length >= 32);
console.log('V8 transformational bank tests passed:', TRANSFORMATION_BANK.length);
