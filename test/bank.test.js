import assert from 'node:assert/strict';
import {QUESTIONS} from '../src/content.js';
const bank=QUESTIONS.filter(q=>q.id.startsWith('emo-')||q.id.startsWith('com-')||q.id.startsWith('bib-')||q.id.startsWith('fin-')||q.id.startsWith('fam-')||q.id.startsWith('con-')||q.id.startsWith('par-')||q.id.startsWith('lea-')||q.id.startsWith('bou-')||q.id.startsWith('pur-')||q.id.startsWith('cha-')||q.id.startsWith('hea-'));
assert.equal(bank.length,72);
assert.equal(new Set(bank.map(q=>q.id)).size,72);
assert.ok(bank.every(q=>q.options.length===4));
assert.ok(bank.every(q=>q.difficulty>=1&&q.difficulty<=5));
console.log('V7 question bank tests passed:',bank.length);
