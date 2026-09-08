import assert from 'node:assert/strict';
import { ROUND_1_SCENARIOS } from '../src/round-1-actual.js';
import { ROUND_2_SCENARIOS } from '../src/round-2-actual.js';
import { ROUND_3_SCENARIOS } from '../src/round-3-actual.js';
import { ROUND_4_SCENARIOS } from '../src/round-4-actual.js';
import { ROUND_5_SCENARIOS } from '../src/round-5-actual.js';
import { ROUND_6_SCENARIOS } from '../src/round-6-actual.js';
import { ROUND_BANKS } from '../src/content.js';

assert.equal(ROUND_1_SCENARIOS.length,12);
assert.equal(ROUND_2_SCENARIOS.length,12);
assert.equal(ROUND_3_SCENARIOS.length,12);
assert.equal(ROUND_4_SCENARIOS.length,12);
assert.equal(ROUND_5_SCENARIOS.length,12);
assert.equal(ROUND_6_SCENARIOS.length,12);
assert.equal(ROUND_BANKS[4],ROUND_4_SCENARIOS);
assert.equal(ROUND_BANKS[5],ROUND_5_SCENARIOS);
assert.equal(ROUND_BANKS[6],ROUND_6_SCENARIOS);
for(const q of [...ROUND_4_SCENARIOS,...ROUND_5_SCENARIOS,...ROUND_6_SCENARIOS]){
 assert.equal(q.options.length,4);
 assert.ok(q.prompt.length>120);
 assert.ok(q.intelligence?.biblicalPrinciple);
 assert.ok(q.intelligence?.scriptureRefs?.length);
 assert.ok(q.editorial?.transformationObjective);
 assert.ok(q.editorial?.selfDeceptionTrap);
 assert.ok(q.editorial?.tenYearLens);
}
assert.equal(new Set(ROUND_4_SCENARIOS.map(q=>q.id)).size,12);
console.log('Round 1–6 actual scenario tests passed:',12*6);
