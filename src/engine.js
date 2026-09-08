import { branchScore, familyForQuestion, stageForQuestion, recordFamilyTurn } from './scenario-families.js';

export const DIMENSIONS = ['emotionalMaturity','communication','biblicalWisdom','financialLiteracy','familyCulture','conflictForgiveness','parenting','partnership','boundariesSafety','purposeFuture','characterIntegrity','healthDecisions'];
export const LABELS = {emotionalMaturity:'Emotional Maturity',communication:'Communication',biblicalWisdom:'Biblical Wisdom',financialLiteracy:'Financial Literacy',familyCulture:'Family & Culture',conflictForgiveness:'Conflict & Forgiveness',parenting:'Parenting & Children',partnership:'Leadership & Partnership',boundariesSafety:'Boundaries & Safety',purposeFuture:'Purpose & Future',characterIntegrity:'Character & Integrity',healthDecisions:'Health & Major Decisions'};
export const BANDS = {strong:[80,100],healthy:[65,79],developing:[50,64],needsWork:[35,49],highRisk:[0,34]};

const PATTERNS = [
 {id:'authoritarian-headship',title:'Control disguised as leadership',severity:'red',message:'Leadership language is being used to justify unilateral control rather than sacrificial love, listening and shared wisdom.',dimensions:['partnership','communication','biblicalWisdom']},
 {id:'spirituality-over-safety',title:'Spirituality overriding responsible care',severity:'red',message:'Faith language is being used to dismiss serious evidence or qualified care. Prayer and responsible action should not be treated as enemies.',dimensions:['healthDecisions','biblicalWisdom','characterIntegrity']},
 {id:'hidden-debt',title:'Financial secrecy',severity:'red',message:'Major financial commitments are being hidden. Trust requires honest disclosure of debt, risk and expectations.',dimensions:['financialLiteracy','characterIntegrity','communication']},
 {id:'responsible-financial-discussion',title:'Healthy financial transparency',severity:'green',message:'The player is willing to discuss money, risk, repayment and expectations before making major financial commitments.',dimensions:['financialLiteracy','communication']},
 {id:'faith-and-responsible-care',title:'Faith joined with responsible wisdom',severity:'green',message:'Prayer is being combined with informed questions, qualified expertise and protection of life and wellbeing.',dimensions:['biblicalWisdom','healthDecisions','partnership']},
 {id:'public-shaming',title:'Unsafe conflict exposure',severity:'red',message:'Private relationship conflict is being exposed publicly instead of being handled with appropriate boundaries and repair.',dimensions:['boundariesSafety','characterIntegrity','conflictForgiveness']},
 {id:'silent-treatment',title:'Withdrawal as punishment',severity:'orange',message:'Silence is being used to punish rather than create healthy space for calm, honest repair.',dimensions:['communication','conflictForgiveness','emotionalMaturity']},
 {id:'spiritual-manipulation',title:'Spiritual pressure',severity:'red',message:'Spiritual claims are being used to shut down questions, accountability or honest disagreement.',dimensions:['biblicalWisdom','boundariesSafety','communication']},
 {id:'family-secrecy',title:'Secrecy under family pressure',severity:'orange',message:'Avoiding honest conversations by hiding a relationship may create deeper trust and family problems later.',dimensions:['familyCulture','communication','characterIntegrity']}
];

export function blankProfile(){return Object.fromEntries(DIMENSIONS.map(k=>[k,{score:0,earnedPoints:0,possiblePoints:0,evidence:[],flags:{green:0,yellow:0,orange:0,red:0},answered:0,positive:0,negative:0,trend:0}]));}
export function blankPlayer(id,name,gender='unspecified'){return {id,name,gender,answers:{},history:[],profile:blankProfile(),patterns:{},decisionSignals:[],director:{phase:'foundation',turn:0,lastReason:'Starting with a balanced foundation.',usedQuestionIds:[],seenCategories:[],seenIntelligenceTags:[],deferred:[],familyHistory:{},activeFamily:null,activeStage:null},relationshipMemory:{events:[],themes:{},commitments:{},consistency:{tested:0,aligned:0,contradictions:[],tests:[]}},scenarioState:blankScenarioState()};}

export function blankScenarioState(){return {trust:0,financialStability:0,familyPressure:0,conflictRepair:0,safety:0,spiritualDiscernment:0,partnershipStability:0,healthWisdom:0,events:[],consequencesApplied:[],activeThreads:[],closedThreads:[]};}
function clamp(n){return Math.max(0,Math.min(100,n));}
function clone(x){return typeof structuredClone==='function'?structuredClone(x):JSON.parse(JSON.stringify(x));}


// Relationship Memory: a decision is stored as a belief/stance signal so later scenarios
// can test consistency. Content authors can override these defaults with option.memory.
const MEMORY_RULES={
 'money-01':[
  {theme:'financial-support',position:'impulsive-support',commitments:['love-proves-itself-with-immediate-giving'],testTags:['financial-support']},
  {theme:'financial-support',position:'transparent-support',commitments:['discuss-risk-repayment-and-pressure-before-giving'],testTags:['financial-support','financial-transparency']},
  {theme:'financial-support',position:'avoid-money-talk',commitments:['avoid-financial-conversations'],testTags:['financial-support']},
  {theme:'financial-transparency',position:'secret-financing',commitments:['hide-major-financial-commitments'],testTags:['financial-transparency']}
 ],
 'family-01':[
  {theme:'family-conflict',position:'family-peace-first',commitments:['prioritize-family-peace-over-discernment'],testTags:['family-conflict']},
  {theme:'family-conflict',position:'truth-with-honour',commitments:['investigate-concerns-reject-prejudice-use-wisdom'],testTags:['family-conflict']},
  {theme:'family-conflict',position:'cut-off-family',commitments:['end-family-dialogue-quickly'],testTags:['family-conflict']},
  {theme:'family-conflict',position:'hide-relationship',commitments:['hide-relationship-from-family'],testTags:['family-conflict','secrecy']}
 ],
 'health-01':[
  {theme:'medical-safety',position:'integrate-prayer-and-care',commitments:['pray-and-use-qualified-medical-care'],testTags:['medical-safety']},
  {theme:'medical-safety',position:'spirituality-over-care',commitments:['override-qualified-medical-care-with-spiritual-claims'],testTags:['medical-safety']},
  {theme:'medical-safety',position:'defer-to-family',commitments:['let-family-decide-serious-medical-care'],testTags:['medical-safety']},
  {theme:'medical-safety',position:'force-medical-decision',commitments:['unilateral-medical-decision-making'],testTags:['medical-safety','decision-making']}
 ],
 'leadership-01':[
  {theme:'leadership',position:'unilateral-control',commitments:['headship-means-final-unilateral-control'],testTags:['leadership']},
  {theme:'leadership',position:'sacrificial-partnership',commitments:['lead-through-love-listening-service-and-shared-wisdom'],testTags:['leadership','decision-making']},
  {theme:'leadership',position:'reverse-control',commitments:['reverse-unilateral-control'],testTags:['leadership']},
  {theme:'leadership',position:'avoid-role-conversation',commitments:['avoid-role-discussions'],testTags:['leadership']}
 ],
 'submission-01':[
  {theme:'marital-cooperation',position:'coercive-obedience',commitments:['treat-disagreement-as-rebellion'],testTags:['leadership','marital-cooperation']},
  {theme:'marital-cooperation',position:'mutual-responsibility',commitments:['discuss-mutual-responsibility-and-decision-making'],testTags:['leadership','marital-cooperation']},
  {theme:'marital-cooperation',position:'avoid-disagreement',commitments:['delay-decisions-until-someone-gives-up'],testTags:['marital-cooperation']},
  {theme:'marital-cooperation',position:'marriage-will-fix-it',commitments:['assume-marriage-will-fix-attitude'],testTags:['marital-cooperation']}
 ],
 'conflict-01':[
  {theme:'conflict',position:'punitive-silence',commitments:['use-silence-to-punish'],testTags:['conflict']},
  {theme:'conflict',position:'repair-and-accountability',commitments:['calm-listen-own-repair'],testTags:['conflict','forgiveness']},
  {theme:'conflict',position:'scorekeeping',commitments:['use-past-mistakes-as-weapons'],testTags:['conflict']},
  {theme:'conflict',position:'public-escalation',commitments:['expose-conflict-publicly'],testTags:['conflict','boundaries']}
 ],
 'children-01':[
  {theme:'parenting',position:'assume-love-will-align',commitments:['avoid-parenting-discussion'],testTags:['parenting']},
  {theme:'parenting',position:'proactive-parenting-alignment',commitments:['discuss-parenting-before-marriage'],testTags:['parenting']},
  {theme:'parenting',position:'strict-parent-controls',commitments:['let-stricter-parent-control-children'],testTags:['parenting','leadership']},
  {theme:'parenting',position:'delay-parenting-plans',commitments:['postpone-parenting-agreement'],testTags:['parenting']}
 ],
 'faith-01':[
  {theme:'spiritual-authority',position:'accept-unquestioned-claims',commitments:['accept-god-told-me-claims-without-testing'],testTags:['spiritual-discernment']},
  {theme:'spiritual-authority',position:'test-with-scripture-wisdom-facts',commitments:['test-spiritual-claims-with-scripture-character-counsel-and-facts'],testTags:['spiritual-discernment']},
  {theme:'spiritual-authority',position:'distrust-spiritual-language',commitments:['treat-spiritual-language-as-manipulation'],testTags:['spiritual-discernment']},
  {theme:'spiritual-authority',position:'defer-to-most-spiritual-person',commitments:['let-spiritual-appearance-decide'],testTags:['spiritual-discernment']}
 ],
 'boundaries-01':[
  {theme:'sexual-boundaries',position:'pressure-is-acceptable',commitments:['treat-commitment-as-permission'],testTags:['sexual-boundaries']},
  {theme:'sexual-boundaries',position:'respect-clear-no',commitments:['respect-consent-self-control-and-dignity'],testTags:['sexual-boundaries','boundaries']},
  {theme:'sexual-boundaries',position:'tolerate-repeated-pressure',commitments:['tolerate-pressure-to-avoid-conflict'],testTags:['sexual-boundaries']},
  {theme:'sexual-boundaries',position:'retaliatory-pressure',commitments:['use-guilt-and-pressure-in-return'],testTags:['sexual-boundaries']}
 ],
 'purpose-01':[
  {theme:'career-purpose',position:'one-sided-sacrifice',commitments:['one-partner-decides-career-sacrifice'],testTags:['career-purpose']},
  {theme:'career-purpose',position:'shared-planning',commitments:['discuss-calling-income-timing-needs-and-alternatives'],testTags:['career-purpose']},
  {theme:'career-purpose',position:'no-marriage-sacrifice',commitments:['refuse-all-marital-sacrifice'],testTags:['career-purpose']},
  {theme:'career-purpose',position:'delay-until-after-marriage',commitments:['delay-major-career-decisions-until-after-marriage'],testTags:['career-purpose']}
 ],
 'forgive-01':[
  {theme:'forgiveness',position:'boundaryless-forgiveness',commitments:['remove-boundaries-immediately'],testTags:['forgiveness']},
  {theme:'forgiveness',position:'forgive-with-accountability',commitments:['release-revenge-and-rebuild-trust-through-change'],testTags:['forgiveness']},
  {theme:'forgiveness',position:'weaponize-past',commitments:['keep-mistakes-as-weapons'],testTags:['forgiveness','conflict']},
  {theme:'forgiveness',position:'secret-retaliation',commitments:['plan-retaliation-after-verbal-forgiveness'],testTags:['forgiveness']}
 ],
 'money-02':[
  {theme:'financial-transparency',position:'ignore-debt',commitments:['assume-love-solves-financial-problems'],testTags:['financial-transparency']},
  {theme:'financial-transparency',position:'full-disclosure-and-plan',commitments:['disclose-debt-habits-plan-and-expectations'],testTags:['financial-transparency','financial-support']},
  {theme:'financial-transparency',position:'public-shaming',commitments:['expose-financial-failure-publicly'],testTags:['financial-transparency']},
  {theme:'financial-transparency',position:'rescue-without-pattern-work',commitments:['take-over-debt-without-addressing-pattern'],testTags:['financial-transparency']}
 ],
 'values-01':[
  {theme:'faith-parenting-values',position:'assume-belief-difference-will-disappear',commitments:['avoid-major-belief-discussion'],testTags:['faith-parenting-values']},
  {theme:'faith-parenting-values',position:'direct-workability-conversation',commitments:['discuss-belief-difference-before-marriage'],testTags:['faith-parenting-values']},
  {theme:'faith-parenting-values',position:'hide-belief',commitments:['hide-true-belief-until-children-arrive'],testTags:['faith-parenting-values','secrecy']},
  {theme:'faith-parenting-values',position:'force-belief-change',commitments:['force-partner-to-change-belief'],testTags:['faith-parenting-values']}
 ]
};

function memoryFor(question,option,optionIndex){
 if(option.memory) return clone(option.memory);
 const rules=MEMORY_RULES[question.id];
 return rules?.[optionIndex] || {theme:question.category,position:`option-${optionIndex}`,commitments:[],testTags:[question.category]};
}

export function applyAnswer(player,question,optionIndex){
 const option=question.options[optionIndex];
 if(!option)throw new Error('Invalid option');
 let next=clone(player);
 const previous=next.answers[question.id];
 if(previous!==undefined) return next;
 next.answers[question.id]=optionIndex;
 next.history.push({questionId:question.id,optionIndex,at:Date.now(),category:question.category});
 const touched=[];
 for(const [d,deltaRaw] of Object.entries(option.effects||{})){
  const p=next.profile[d]; if(!p)continue;
  const delta=Number(deltaRaw)||0; const before=p.score;
  // Scores begin at zero. Positive points are earned; harmful choices do not create
  // negative academic-style points. Risk is tracked separately through flags/patterns.
  const possible=Math.max(0,...question.options.map(o=>Number(o.effects?.[d])||0));
  const earned=Math.max(0,delta);
  p.possiblePoints+=possible; p.earnedPoints+=earned;
  p.score=p.possiblePoints?clamp(Math.round((p.earnedPoints/p.possiblePoints)*100)):0;
  p.answered++;
  p.trend=delta; if(delta>0)p.positive++; if(delta<0)p.negative++;
  const flag=option.flags?.[d]||option.flag;
  if(flag&&p.flags[flag]!==undefined)p.flags[flag]++;
  if(option.evidence){p.evidence.push({questionId:question.id,tag:option.evidence});
   next.patterns[option.evidence]=(next.patterns[option.evidence]||0)+1;
  }
  touched.push({dimension:d,delta,before,after:p.score});
 }
 next.decisionSignals.push({questionId:question.id,category:question.category,delta:touched,evidence:option.evidence||null,flag:option.flag||null});
 const memory=memoryFor(question,option,optionIndex);
 const event={id:`mem-${next.history.length}-${question.id}`,questionId:question.id,category:question.category,optionIndex,theme:memory.theme,position:memory.position,commitments:[...(memory.commitments||[])],testTags:[...(memory.testTags||[])],evidence:option.evidence||null,flag:option.flag||null,decisionClass:question.intelligence?.decisionClasses?.[optionIndex]||null,signalTags:[...(question.intelligence?.signalTags||[])],phase:question.intelligence?.phase||null,stakes:question.intelligence?.stakes||null,at:Date.now(),source:question.consistencyTest?'consistency-test':'initial'};
 const prior=next.relationshipMemory.events.filter(e=>e.theme===event.theme && e.position!==event.position);
 next.relationshipMemory.events.push(event);
 next.relationshipMemory.themes[event.theme]=(next.relationshipMemory.themes[event.theme]||0)+1;
 for(const c of event.commitments)next.relationshipMemory.commitments[c]=(next.relationshipMemory.commitments[c]||0)+1;
 if(question.consistencyTest && memory.testAgainst){
   const priorEvents=next.relationshipMemory.events.filter(e=>e.id!==event.id && e.theme===event.theme);
   const baseline=priorEvents.at(-1);
   next.relationshipMemory.consistency.tested++;
   if(baseline){
     const aligned=baseline.position===event.position;
     if(aligned) next.relationshipMemory.consistency.aligned++;
     else next.relationshipMemory.consistency.contradictions.push({theme:event.theme,earlier:baseline.position,later:event.position,questionId:question.id});
     next.relationshipMemory.consistency.tests.push({questionId:question.id,theme:event.theme,earlier:baseline.position,later:event.position,aligned});
   }
 }
 next=updateScenarioState(next,question,option);
 return next;
}



export function updateScenarioState(player, question, option){
 const next=clone(player);
 if(!next.scenarioState) next.scenarioState=blankScenarioState();
 const s=next.scenarioState;
 const effects=option.stateEffects||{};
 for(const [k,v] of Object.entries(effects)) if(Object.prototype.hasOwnProperty.call(s,k)) s[k]=clamp((Number(s[k])||0)+Number(v||0));
 if(question.stateEffects) for(const [k,v] of Object.entries(question.stateEffects)) if(Object.prototype.hasOwnProperty.call(s,k)) s[k]=clamp((Number(s[k])||0)+Number(v||0));
 s.events.push({questionId:question.id,optionIndex:next.answers[question.id],effects:{...effects},at:Date.now()});
 return next;
}

export function scenarioStateSummary(player){
 const s=player.scenarioState||blankScenarioState();
 const labels={trust:'Trust',financialStability:'Financial Stability',familyPressure:'Family Pressure',conflictRepair:'Conflict Repair',safety:'Safety & Boundaries',spiritualDiscernment:'Spiritual Discernment',partnershipStability:'Partnership Stability',healthWisdom:'Health Wisdom'};
 return Object.entries(labels).map(([key,label])=>({key,label,score:Number(s[key])||0}));
}

export function consequenceCandidates(player, bank=[]){
 const commitments=player.relationshipMemory?.commitments||{};
 const patterns=player.patterns||{};
 return bank.filter(q=>{
   if(player.answers[q.id]!==undefined) return false;
  const triggers=q.triggers||[];
   return triggers.some(t=> (t.type==='commitment' && commitments[t.value]>0) || (t.type==='pattern' && patterns[t.value]>0) || (t.type==='state' && Number(player.scenarioState?.[t.value]||0) <= Number(t.max ?? 100)));
 }).sort((a,b)=>(b.priority||0)-(a.priority||0));
}

export function buildConsequenceScenarios(player, bank=[], limit=3){
 const c=consequenceCandidates(player,bank);
 const chosen=[]; const used=new Set();
 for(const q of c){
   const key=(q.thread||q.id); if(used.has(key)) continue;
   chosen.push({...clone(q),consequenceScenario:true}); used.add(key);
   if(chosen.length>=limit) break;
 }
 return chosen;
}

export function applyConsequenceAnswer(player,question,optionIndex){
 let next=applyAnswer(player,question,optionIndex);
 const option=question.options[optionIndex];
 const thread=question.thread||question.id;
 if(!next.scenarioState.consequencesApplied.includes(question.id)) next.scenarioState.consequencesApplied.push(question.id);
 if(question.thread){
   next.scenarioState.activeThreads=(next.scenarioState.activeThreads||[]).filter(x=>x!==thread);
   if(option.closesThread) next.scenarioState.closedThreads=[...(next.scenarioState.closedThreads||[]),thread];
 }
 return next;
}

export function consequenceSummary(player){
 const s=player.scenarioState||blankScenarioState();
 return {applied:s.consequencesApplied?.length||0,events:s.events||[],activeThreads:s.activeThreads||[],closedThreads:s.closedThreads||[],state:scenarioStateSummary(player)};
}

export function scoreBand(score){if(score>=80)return 'strong';if(score>=65)return 'healthy';if(score>=50)return 'developing';if(score>=35)return 'needs-work';return 'high-risk-pattern';}

export function gradeFromPercent(percent){
 const p=clamp(Number(percent)||0);
 if(p>=90)return {letter:'A',gpa:4.0,label:'Excellent'};
 if(p>=85)return {letter:'A-',gpa:3.7,label:'Very strong'};
 if(p>=80)return {letter:'B+',gpa:3.3,label:'Strong'};
 if(p>=75)return {letter:'B',gpa:3.0,label:'Good'};
 if(p>=70)return {letter:'B-',gpa:2.7,label:'Good, with room to grow'};
 if(p>=65)return {letter:'C+',gpa:2.3,label:'Developing well'};
 if(p>=60)return {letter:'C',gpa:2.0,label:'Developing'};
 if(p>=55)return {letter:'C-',gpa:1.7,label:'Needs focused growth'};
 if(p>=50)return {letter:'D',gpa:1.0,label:'Needs significant growth'};
 return {letter:'F',gpa:0.0,label:'Major growth needed'};
}

export function categoryScores(player){
 return DIMENSIONS.map(d=>{
   const p=player.profile[d];
   const percent=p.possiblePoints?Math.round((p.earnedPoints/p.possiblePoints)*100):0;
   const grade=gradeFromPercent(percent);
   return {dimension:d,score:percent,earned:p.earnedPoints,possible:p.possiblePoints,grade:grade.letter,gpa:grade.gpa,label:grade.label};
 });
}

export function gpaSummary(player){
 const categories=categoryScores(player).filter(x=>x.possible>0);
 const percent=categories.length?Math.round(categories.reduce((s,x)=>s+x.score,0)/categories.length):0;
 const grade=gradeFromPercent(percent);
 return {percent,gpa:grade.gpa,letter:grade.letter,label:grade.label,categories};
}

export function comparePlayers(a,b){return Object.fromEntries(DIMENSIONS.map(d=>{const gap=Math.abs(a.profile[d].score-b.profile[d].score);const avg=(a.profile[d].score+b.profile[d].score)/2;return [d,{gap,average:Math.round(avg),alignment:Math.max(0,Math.round(100-gap*1.5)),band:scoreBand(avg)}]}));}
export function discernmentSummary(player){
 const g=gpaSummary(player);
 const avg=g.percent;
 const reds=DIMENSIONS.filter(d=>player.profile[d].flags.red>=1);
 const weak=DIMENSIONS.filter(d=>player.profile[d].score<50).sort((a,b)=>player.profile[a].score-player.profile[b].score);
 let recommendation='CONTINUE WITH WISDOM';
 if(reds.length)recommendation='PAUSE — ADDRESS SERIOUS PATTERNS';
 else if(avg<50)recommendation='WORK ON YOURSELF FIRST';
 else if(weak.length>=4)recommendation='PAUSE — GROW BEFORE DEEPENING THE RELATIONSHIP';
 return {average:avg,recommendation,redDimensions:reds,weakDimensions:weak.slice(0,4),gpa:g.gpa,letter:g.letter,gradeLabel:g.label};
}

export function detectPatterns(player){
 const results=[];
 for(const rule of PATTERNS){
  const count=player.patterns[rule.id]||0;
  if(count>=1){
   const related=rule.dimensions.map(d=>player.profile[d]).filter(Boolean);
   const red=related.reduce((s,p)=>s+p.flags.red,0);
   const orange=related.reduce((s,p)=>s+p.flags.orange,0);
   const green=related.reduce((s,p)=>s+p.flags.green,0);
   results.push({...rule,count,red,orange,green,priority:rule.severity==='red'?3:rule.severity==='orange'?2:1});
  }
 }
 // A generic pattern is useful when several separate answers create repeated risk in one dimension,
 // even if the content author did not attach a named evidence tag.
 for(const d of DIMENSIONS){
  const p=player.profile[d];
  if(p.flags.red>=2){
   results.push({id:'repeated-red-'+d,title:`Repeated red-flag decisions: ${LABELS[d]}`,severity:'red',message:`Several decisions have raised serious concerns in ${LABELS[d]}. Review the specific scenarios rather than treating one answer in isolation.`,dimensions:[d],count:p.flags.red,red:p.flags.red,orange:p.flags.orange,green:p.flags.green,priority:3});
  }
 }
 return results.sort((a,b)=>b.priority-a.priority || b.count-a.count);
}


export function buildMemorySummary(player){
 const m=player.relationshipMemory||{events:[],themes:{},commitments:{},consistency:{tested:0,aligned:0,contradictions:[],tests:[]}};
 const repeatedThemes=Object.entries(m.themes).filter(([,n])=>n>=2).sort((a,b)=>b[1]-a[1]).map(([theme,count])=>({theme,count}));
 const commitments=Object.entries(m.commitments).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([commitment,count])=>({commitment,count}));
 const contradictions=m.consistency?.contradictions||[];
 return {events:m.events||[],repeatedThemes,commitments,consistency:{tested:m.consistency?.tested||0,aligned:m.consistency?.aligned||0,contradictions},lastEvent:m.events?.at(-1)||null};
}

export function buildConsistencyTests(player,testBank=[],limit=3){
 const events=player.relationshipMemory?.events||[];
 const candidates=[]; const seen=new Set();
 for(const e of [...events].reverse()){
   for(const tag of e.testTags||[]){
     if(seen.has(tag))continue;
     const q=testBank.find(x=>(x.testTags||[]).includes(tag));
     if(q && player.answers[q.id]===undefined){ candidates.push({...clone(q),consistencyTest:true,memoryTestFor:e.theme,triggerPosition:e.position});seen.add(tag);break; }
   }
   if(candidates.length>=limit)break;
 }
 return candidates;
}

export function consistencySummary(player){
 const c=player.relationshipMemory?.consistency||{tested:0,aligned:0,contradictions:[]};
 const rate=c.tested?Math.round(c.aligned/c.tested*100):null;
 return {tested:c.tested,aligned:c.aligned,consistencyRate:rate,contradictions:c.contradictions||[]};
}

export function buildIntelligenceReport(player){
 const patterns=detectPatterns(player);
 const summary=discernmentSummary(player);
 const strongest=DIMENSIONS.map(d=>({d,score:player.profile[d].score})).sort((a,b)=>b.score-a.score).slice(0,3).map(x=>x.d);
 const weakest=DIMENSIONS.map(d=>({d,score:player.profile[d].score})).sort((a,b)=>a.score-b.score).slice(0,4).map(x=>x.d);
 const positiveSignals=player.decisionSignals.filter(x=>x.delta.some(y=>y.delta>0)).length;
 const negativeSignals=player.decisionSignals.filter(x=>x.delta.some(y=>y.delta<0)).length;
 return {summary,patterns,strongest,weakest,positiveSignals,negativeSignals,answered:player.history.length,director:directorState(player),memory:buildMemorySummary(player),consistency:consistencySummary(player),consequence:consequenceSummary(player),gpa:gpaSummary(player)};
}

export function comparisonSummary(a,b){
 const c=comparePlayers(a,b);const vals=Object.values(c);
 const avg=Math.round(vals.reduce((s,x)=>s+x.alignment,0)/vals.length);
 const strongest=Object.entries(c).sort(([,x],[,y])=>y.alignment-x.alignment).slice(0,3).map(([d])=>d);
 const tensions=Object.entries(c).sort(([,x],[,y])=>x.alignment-y.alignment).slice(0,4).map(([d])=>d);
 const ap=detectPatterns(a),bp=detectPatterns(b);
 const serious=[...new Set([...ap,...bp].filter(p=>p.severity==='red').map(p=>p.id))];
 const ma=buildMemorySummary(a),mb=buildMemorySummary(b);
 return {alignment:avg,strongest,tensions,dimensions:c,playerPatterns:{a:ap,b:bp},sharedSeriousPatterns:serious,memory:{a:ma,b:mb},gpa:{a:{name:a.name,...gpaSummary(a)},b:{name:b.name,...gpaSummary(b)}}};
}

const CONVERSATIONS={
 communication:'How will you handle disagreement when one person wants to talk immediately and the other needs time to calm down?',
 financialLiteracy:'What counts as a major financial decision, and what must be disclosed before money is committed?',
 familyCulture:'How will you respond when family expectations conflict with the values or wellbeing of your marriage?',
 conflictForgiveness:'What does genuine forgiveness look like when an issue requires accountability and changed behaviour?',
 parenting:'How will you resolve major parenting disagreements without turning the children into judges or messengers?',
 partnership:'How will major decisions be made when you strongly disagree about what should happen?',
 boundariesSafety:'What behaviour would make either of you say, “This is not safe or acceptable,” and what would you do next?',
 biblicalWisdom:'How will you distinguish Biblical conviction from personal preference, fear, tradition or spiritual pressure?',
 healthDecisions:'How will prayer, Scripture, qualified expertise and informed consent work together during serious health decisions?',
 purposeFuture:'What shared purpose are you building, and what sacrifices are you each genuinely willing to make?',
 emotionalMaturity:'How will you take responsibility for your emotions without making your partner responsible for regulating you?',
 characterIntegrity:'What will you do when the honest choice costs you money, comfort, reputation or family approval?'
};
export function conversationPrompts(comparison){
 return comparison.tensions.slice(0,4).map(d=>({dimension:d,title:LABELS[d],prompt:CONVERSATIONS[d]}));
}
export function reflectionFor(question,option){return option.reflection || question.reflection || 'Pause and ask: What does this decision reveal about love, wisdom, responsibility and the kind of relationship you are building?';}
export function decisionFeedback(question,option){
 const effects=Object.entries(option.effects||{}).filter(([,v])=>Number(v)!==0).sort(([,a],[,b])=>Math.abs(b)-Math.abs(a)).slice(0,3);
 return effects.map(([d,v])=>({dimension:d,label:LABELS[d],delta:Number(v),direction:Number(v)>0?'strengthening':'needs attention'}));
}
export function makeAssessment(name,gender='unspecified'){return {player:blankPlayer('local-'+Date.now(),name,gender),questionIndex:0,complete:false};}


// V7 Relationship Simulation Director. It chooses what the player should face next
// using assessment coverage, unresolved risks, active consequences, consistency
// opportunities, difficulty pacing and novelty. It does not change scores itself.
export function directorSnapshot(player){
 const p=player.profile||blankProfile();
 const answered=player.history?.length||0;
 const active=(player.scenarioState?.activeThreads||[]);
 const risk=DIMENSIONS.map(d=>({dimension:d,score:p[d]?.score||0,red:p[d]?.flags?.red||0,orange:p[d]?.flags?.orange||0,answered:p[d]?.answered||0}))
   .sort((a,b)=>(b.red-a.red)||(b.orange-a.orange)||(a.score-b.score));
 const coverage=DIMENSIONS.map(d=>({dimension:d,answered:p[d]?.answered||0}));
 const intelligenceSignals={}; for(const e of player.relationshipMemory?.events||[]) for(const tag of e.signalTags||[]) intelligenceSignals[tag]=(intelligenceSignals[tag]||0)+1;
 return {answered,activeThreads:active,risk,coverage,intelligenceSignals};
}

function candidateScore(player,q,source){
 if(!q || player.answers?.[q.id]!==undefined) return -Infinity;
 const p=player.profile||blankProfile();
 const state=player.scenarioState||blankScenarioState();
 const turn=player.history?.length||0;
 let score=0;
 const d=Object.keys(q.options?.[0]?.effects||{});
 const seenSignals=Object.keys(player.relationshipMemory?.events?.reduce((m,e)=>{for(const t of e.signalTags||[])m[t]=(m[t]||0)+1;return m;}, {})||{});
 const qTags=q.intelligence?.signalTags||[];
 score += qTags.filter(t=>!seenSignals.includes(t)).length*0.8;
 if(q.intelligence?.phase===player.director?.phase) score += 0.4;
 // Coverage: early game should sample neglected dimensions.
 for(const dim of d) score += (p[dim]?.answered||0)===0 ? 12 : Math.max(0,3-(p[dim]?.answered||0));
 // Unresolved risk deserves attention, but not every turn.
 if(source==='consequence') score += 28 + (q.priority||0)*2;
 if(source==='consistency') score += 24 + (q.difficulty||0)*2;
 if(source==='base') score += Math.max(0,10-(turn*0.4));
 score += branchScore(player,q);
 const triggers=q.triggers||[];
 for(const t of triggers){
   if(t.type==='commitment' && player.relationshipMemory?.commitments?.[t.value]) score += 35;
   if(t.type==='pattern' && player.patterns?.[t.value]) score += 40;
   if(t.type==='state' && Number(state[t.value]||0) <= Number(t.max??100)) score += 18;
 }
 // Avoid back-to-back repetition of the same category unless it is an urgent thread.
 if(turn>0 && player.history?.at(-1)?.category===q.category) score -= 12;
 if((q.difficulty||1) >= 5 && turn < 3) score -= 8;
 // Reward scenarios that test an area with a weak score.
 for(const dim of d) if((p[dim]?.score||0)<50) score += 6;
 score += Math.random()*0.01;
 return score;
}

export function chooseNextScenario(player,banks={base:[],consistency:[],consequence:[]}){
 const candidates=[];
 for(const q of banks.base||[]) candidates.push({q,source:'base',score:candidateScore(player,q,'base')});
 for(const q of banks.consistency||[]) candidates.push({q,source:'consistency',score:candidateScore(player,q,'consistency')});
 for(const q of banks.consequence||[]) candidates.push({q,source:'consequence',score:candidateScore(player,q,'consequence')});
 // Only unlock targeted tests/consequences after enough foundation decisions.
 const turns=player.history?.length||0;
 const filtered=candidates.filter(c=>{
   if(c.source==='base') return true;
   if(turns<5) return false;
   if(c.source==='consistency') return !!(c.q.triggers||[]).some(t=>(t.type==='commitment'&&player.relationshipMemory?.commitments?.[t.value])||(t.type==='pattern'&&player.patterns?.[t.value]));
   if(c.source==='consequence') return !!(c.q.triggers||[]).some(t=>(t.type==='commitment'&&player.relationshipMemory?.commitments?.[t.value])||(t.type==='pattern'&&player.patterns?.[t.value])||(t.type==='state'&&Number(player.scenarioState?.[t.value]||0)<=Number(t.max??100)));
   return false;
 });
 if(!filtered.length) return null;
 filtered.sort((a,b)=>b.score-a.score);
 const pick=filtered[0];
 const next=clone(pick.q);
 if(pick.source==='consistency') next.consistencyTest=true;
 if(pick.source==='consequence') next.consequenceScenario=true;
 return {question:next,source:pick.source,reason:directorReason(player,pick.q,pick.source)};
}

export function directorReason(player,q,source){
 if(source==='consequence') return 'Your earlier decision created a situation the game wants you to face.';
 if(source==='consistency') return 'A principle or position you expressed earlier is being tested in a new situation.';
 const family=familyForQuestion(q);
 if(q.intelligence?.scenarioStage==='revelation') return `The Director is testing whether you can see through ${family.title.toLowerCase()} and choose evidence over assumption.`;
 if(q.intelligence?.scenarioStage==='consequence') return `The Director is showing the likely consequence of the ${family.title.toLowerCase()} pattern.`;
 if(q.intelligence?.scenarioStage==='pressure') return `The Director is increasing pressure inside the ${family.title.toLowerCase()} scenario.`;
 const missing=DIMENSIONS.filter(d=>(player.profile?.[d]?.answered||0)===0 && (q.options?.[0]?.effects||{})[d]!==undefined);
 if(missing.length) return `The Director is broadening your assessment into ${LABELS[missing[0]]}.`;
 const weak=DIMENSIONS.filter(d=>(player.profile?.[d]?.score||0)<50 && (q.options?.[0]?.effects||{})[d]!==undefined);
 if(weak.length) return `The Director is giving you another opportunity to examine ${LABELS[weak[0]]}.`;
 return 'The Director is balancing the assessment with a new relationship situation.';
}

export function initializeDirector(player){
 const next=clone(player);
 next.director={phase:'foundation',turn:0,lastReason:'Starting with a balanced foundation.',usedQuestionIds:[],seenCategories:[],seenIntelligenceTags:[],deferred:[],familyHistory:{},activeFamily:null,activeStage:null};
 return next;
}

export function recordDirectorTurn(player,question,source,reason){
 let next=clone(player);
 if(!next.director) next=initializeDirector(next);
 next.director.turn=(next.director.turn||0)+1;
 next.director.lastReason=reason||directorReason(next,question,source);
 next.director.usedQuestionIds.push(question.id);
 if(!next.director.seenCategories.includes(question.category)) next.director.seenCategories.push(question.category);
 for(const tag of (question.intelligence?.noveltyTags||[])) if(!next.director.seenIntelligenceTags.includes(tag)) next.director.seenIntelligenceTags.push(tag);
 next.director.phase=source==='consequence'?'consequence':source==='consistency'?'consistency':next.director.turn<6?'foundation':'adaptive';
 next=recordFamilyTurn(next,question);
 return next;
}

export function adaptivePlan(player,banks={},limit=12){
 let next=clone(player); const plan=[];
 for(let i=0;i<limit;i++){
   const choice=chooseNextScenario(next,banks); if(!choice) break;
   plan.push({...choice.question,directorSource:choice.source,directorReason:choice.reason});
   next.answers[choice.question.id]='__reserved__';
 }
 return plan;
}

export function directorState(player){
 return {phase:player.director?.phase||'foundation',turn:player.director?.turn||0,lastReason:player.director?.lastReason||'',seenCategories:player.director?.seenCategories||[],activeFamily:player.director?.activeFamily||null,activeStage:player.director?.activeStage||null,familyHistory:player.director?.familyHistory||{}};
}
