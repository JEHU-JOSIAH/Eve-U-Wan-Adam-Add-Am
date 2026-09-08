import assert from 'node:assert/strict';
import {blankPlayer,applyAnswer,gpaSummary,buildConsistencyTests,buildConsequenceScenarios,applyConsequenceAnswer,blankScenarioState} from '../src/engine.js';
import {QUESTIONS,CONSISTENCY_TESTS,CONSEQUENCE_SCENARIOS} from '../src/content.js';

const p0=blankPlayer('t','Tester','man');
assert.equal(gpaSummary(p0).gpa,0);
assert.deepEqual(p0.scenarioState,blankScenarioState());

const p1=applyAnswer(p0,QUESTIONS.find(q=>q.id==='money-01'),1);
assert.ok(p1.profile.financialLiteracy.earnedPoints>0);
assert.ok(p1.scenarioState.financialStability>=0);

const p2=applyAnswer(blankPlayer('t2','Tester','man'),QUESTIONS.find(q=>q.id==='health-01'),1);
assert.ok(p2.relationshipMemory.commitments['override-qualified-medical-care-with-spiritual-claims']>0);
const tests=buildConsistencyTests(p2,CONSISTENCY_TESTS,3);
assert.ok(Array.isArray(tests));

const p3=applyAnswer(blankPlayer('t3','Tester','man'),QUESTIONS.find(q=>q.id==='money-01'),3);
const cons=buildConsequenceScenarios(p3,CONSEQUENCE_SCENARIOS,3);
assert.ok(cons.some(q=>q.id==='consequence-hidden-debt'));
const p4=applyConsequenceAnswer(p3,cons.find(q=>q.id==='consequence-hidden-debt'),0);
assert.ok(p4.scenarioState.consequencesApplied.includes('consequence-hidden-debt'));
assert.ok(p4.scenarioState.trust>0);
console.log('v6 consequence/state tests passed');
