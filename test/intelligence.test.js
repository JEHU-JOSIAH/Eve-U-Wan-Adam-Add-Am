import assert from 'node:assert/strict';
import { V7_QUESTION_BANK } from '../src/question-bank-v7.js';
import { validateQuestionBankIntelligence, QUESTION_INTELLIGENCE_VERSION } from '../src/question-intelligence.js';

assert.equal(V7_QUESTION_BANK.length,72);
assert.equal(V7_QUESTION_BANK[0].intelligence.version,QUESTION_INTELLIGENCE_VERSION);
const errors=validateQuestionBankIntelligence(V7_QUESTION_BANK);
assert.deepEqual(errors,[]);
for(const q of V7_QUESTION_BANK){
  assert.ok(q.intelligence.primaryDimension);
  assert.ok(q.intelligence.secondaryDimensions.length>=1);
  assert.ok(q.intelligence.scriptureRefs.length>=1);
  assert.ok([1,2,3].includes(q.intelligence.gpaWeight));
}
console.log(`Question intelligence tests passed: ${V7_QUESTION_BANK.length}`);
