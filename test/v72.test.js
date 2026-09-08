import assert from 'node:assert/strict';
import {QUESTIONS,CONSISTENCY_TESTS,CONSEQUENCE_SCENARIOS} from '../src/content.js';
import {blankPlayer,initializeDirector,chooseNextScenario,applyAnswer,recordDirectorTurn,directorState} from '../src/engine.js';
import {SCENARIO_FAMILIES,FAMILY_STAGES,familyForQuestion,stageForQuestion} from '../src/scenario-families.js';
import {validateQuestionIntelligence} from '../src/question-intelligence.js';

assert.ok(SCENARIO_FAMILIES.length >= 12);
assert.deepEqual(FAMILY_STAGES,['signal','test','pressure','consequence','repair','revelation']);
assert.ok(QUESTIONS.length>=72);
for(const q of QUESTIONS){
  assert.ok(familyForQuestion(q)?.id, q.id);
  assert.ok(FAMILY_STAGES.includes(stageForQuestion(q)), q.id);
  assert.equal(validateQuestionIntelligence(q).length,0,q.id);
}

let p=initializeDirector(blankPlayer('v72','Test','man'));
let banks={base:QUESTIONS,consistency:CONSISTENCY_TESTS,consequence:CONSEQUENCE_SCENARIOS};
for(let i=0;i<8;i++){
  const pick=chooseNextScenario(p,banks); assert.ok(pick?.question,`turn ${i}`);
  p=applyAnswer(p,pick.question,0);
  p=recordDirectorTurn(p,pick.question,pick.source,pick.reason);
}
const ds=directorState(p);
assert.ok(ds.activeFamily);
assert.ok(ds.familyHistory[ds.activeFamily]?.length>=1);
assert.ok(Object.keys(ds.familyHistory).length>=2);
console.log('v7.2 scenario family tests passed');
