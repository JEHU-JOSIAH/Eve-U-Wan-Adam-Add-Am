export const QUESTION_INTELLIGENCE_VERSION = '8.0';
import { familyForQuestion, stageForQuestion, FAMILY_STAGES } from './scenario-families.js';

export const QUESTION_PHASES = ['foundation','pressure','stakes','repair','consistency'];
export const STAKES = ['low','medium','high','critical'];

const PROFILES = {
  'Emotional Maturity': {
    primaryDimension:'emotionalMaturity', secondaryDimensions:['communication','characterIntegrity'],
    decisionTypes:['self-awareness','emotional-regulation','responsibility'],
    principle:'Take responsibility for your response without making another person responsible for your emotions.',
    scriptureRefs:['Proverbs 16:32','James 1:19-20'],
    tags:['emotional-regulation','responsibility','self-awareness'],
    thread:'emotional-maturity'
  },
  'Communication': {
    primaryDimension:'communication', secondaryDimensions:['emotionalMaturity','conflictForgiveness'],
    decisionTypes:['disclosure','listening','clarification','conversation'],
    principle:'Speak truthfully, listen carefully, and address issues directly rather than through pressure or avoidance.',
    scriptureRefs:['Ephesians 4:15','James 1:19'],
    tags:['honesty','listening','clarity'], thread:'communication'
  },
  'Biblical Wisdom': {
    primaryDimension:'biblicalWisdom', secondaryDimensions:['characterIntegrity','partnership'],
    decisionTypes:['discernment','conviction','wisdom','accountability'],
    principle:'Distinguish Biblical conviction from preference, fear, tradition, or spiritual pressure.',
    scriptureRefs:['James 1:5','1 Thessalonians 5:21'],
    tags:['discernment','wisdom','accountability'], thread:'spiritual-discernment'
  },
  'Faith & Character': {
    primaryDimension:'biblicalWisdom', secondaryDimensions:['characterIntegrity','communication','partnership'],
    decisionTypes:['discernment','conviction','wisdom','accountability'],
    principle:'Christian language should never replace truth, humility, evidence, responsibility, or obedience to God.',
    scriptureRefs:['James 1:5','1 Thessalonians 5:21','Micah 6:8'],
    tags:['faith','character','discernment','integrity'], thread:'spiritual-discernment'
  },
  'Financial Literacy': {
    primaryDimension:'financialLiteracy', secondaryDimensions:['characterIntegrity','communication'],
    decisionTypes:['disclosure','budgeting','risk-assessment','agreement'],
    principle:'Handle money with truth, diligence, clarity, and realistic stewardship.',
    scriptureRefs:['Proverbs 21:5','Luke 14:28'],
    tags:['financial-transparency','stewardship','risk'], thread:'financial-transparency'
  },
  'Family & Culture': {
    primaryDimension:'familyCulture', secondaryDimensions:['communication','boundariesSafety','characterIntegrity'],
    decisionTypes:['family-boundary','honour','discernment','negotiation'],
    principle:'Honour family without surrendering wisdom, truth, safety, or the responsibilities of the relationship.',
    scriptureRefs:['Ephesians 6:2','Proverbs 15:22'],
    tags:['family-pressure','honour','boundaries'], thread:'family-pressure'
  },
  'Conflict & Forgiveness': {
    primaryDimension:'conflictForgiveness', secondaryDimensions:['communication','emotionalMaturity','characterIntegrity'],
    decisionTypes:['repair','forgiveness','accountability','de-escalation'],
    principle:'Pursue repair and forgiveness without confusing forgiveness with the removal of wise boundaries or accountability.',
    scriptureRefs:['Ephesians 4:31-32','Galatians 6:1-2'],
    tags:['repair','forgiveness','accountability'], thread:'conflict-repair'
  },
  'Parenting & Children': {
    primaryDimension:'parenting', secondaryDimensions:['partnership','familyCulture','characterIntegrity'],
    decisionTypes:['parenting-alignment','discipline','family-planning','protection'],
    principle:'Treat parenting as a shared responsibility requiring love, guidance, stability, protection, and deliberate agreement.',
    scriptureRefs:['Deuteronomy 6:6-7','Ephesians 6:4'],
    tags:['parenting','children','family-planning'], thread:'parenting'
  },
  'Leadership & Partnership': {
    primaryDimension:'partnership', secondaryDimensions:['communication','biblicalWisdom','emotionalMaturity'],
    decisionTypes:['leadership','shared-decision','sacrifice','agreement'],
    principle:'Leadership should be expressed through responsibility, service, wisdom, listening, and love—not domination.',
    scriptureRefs:['Ephesians 5:21-25','Philippians 2:3-4'],
    tags:['leadership','partnership','service','shared-wisdom'], thread:'partnership-leadership'
  },
  'Boundaries & Safety': {
    primaryDimension:'boundariesSafety', secondaryDimensions:['characterIntegrity','communication','emotionalMaturity'],
    decisionTypes:['boundary','consent','safety','pressure-response'],
    principle:'Clear boundaries protect dignity, safety, freedom, and the possibility of healthy trust.',
    scriptureRefs:['1 Corinthians 6:18-20','Proverbs 4:23'],
    tags:['boundaries','consent','safety'], thread:'boundaries-safety'
  },
  'Purpose & Future': {
    primaryDimension:'purposeFuture', secondaryDimensions:['partnership','financialLiteracy','communication'],
    decisionTypes:['planning','calling','career','sacrifice'],
    principle:'Shared purpose requires honest discussion of calling, timing, capacity, responsibilities, and consequences.',
    scriptureRefs:['Luke 14:28','Proverbs 16:3'],
    tags:['purpose','planning','career','sacrifice'], thread:'purpose-future'
  },
  'Character & Integrity': {
    primaryDimension:'characterIntegrity', secondaryDimensions:['communication','financialLiteracy','emotionalMaturity'],
    decisionTypes:['integrity','truth-telling','consistency','accountability'],
    principle:'Character is demonstrated in repeated choices, especially when honesty costs something.',
    scriptureRefs:['Proverbs 10:9','Luke 16:10'],
    tags:['integrity','truth','consistency'], thread:'character-integrity'
  },
  'Views & Values': {
    primaryDimension:'biblicalWisdom', secondaryDimensions:['parenting','purposeFuture','communication'],
    decisionTypes:['belief-alignment','values','discernment','agreement'],
    principle:'Major convictions and values should be discussed honestly before deeper commitment, especially where they affect family life and faith.',
    scriptureRefs:['Amos 3:3','Romans 14:5'],
    tags:['values-alignment','beliefs','future-agreement'], thread:'values-alignment'
  },
  'Health & Major Decisions': {
    primaryDimension:'healthDecisions', secondaryDimensions:['biblicalWisdom','partnership','boundariesSafety'],
    decisionTypes:['medical-decision','informed-consent','risk','care'],
    principle:'Prayer and faith can be joined with responsible action, informed questions, qualified expertise, and respect for informed consent.',
    scriptureRefs:['Proverbs 11:14','Proverbs 15:22'],
    tags:['health-wisdom','informed-consent','responsible-care'], thread:'health-wisdom'
  }
};

function inferPhase(q, index){
  if(q.consistencyTest || q.memoryTestFor) return 'consistency';
  if(q.consequenceScenario || q.triggers?.length) return 'stakes';
  if(q.difficulty >= 5) return 'stakes';
  if(q.difficulty >= 4) return 'pressure';
  if(index % 7 === 0) return 'repair';
  return 'foundation';
}

function inferStakes(q){
  if(q.difficulty >= 5) return 'critical';
  if(q.difficulty >= 4) return 'high';
  if(q.difficulty >= 3) return 'medium';
  return 'low';
}

function inferDecisionType(q, profile){
  const text = `${q.prompt} ${q.options.map(o=>o.text).join(' ')}`.toLowerCase();
  const preferred = profile.decisionTypes.find(t=>text.includes(t.replaceAll('-',' ')));
  return preferred || profile.decisionTypes[0];
}

export function enrichQuestion(q,index=0){
  const profile = PROFILES[q.category];
  if(!profile) throw new Error(`Unknown question category: ${q.category}`);
  const phase = inferPhase(q,index);
  const stakes = inferStakes(q);
  const family = familyForQuestion(q);
  const intelligence = {
    version: QUESTION_INTELLIGENCE_VERSION,
    phase,
    primaryDimension: profile.primaryDimension,
    secondaryDimensions: [...profile.secondaryDimensions],
    decisionType: inferDecisionType(q,profile),
    decisionClasses: q.options.map(o=>o.flag==='red'?'harmful':o.flag==='orange'?'deceptive':o.flag==='yellow'?'avoidant':'constructive'),
    stakes,
    hardness: Number(q.difficulty)||1,
    gpaWeight: stakes==='critical'?3:stakes==='high'?2:1,
    biblicalPrinciple: profile.principle,
    scriptureRefs: [...profile.scriptureRefs],
    triggerTags: [...profile.tags],
    signalTags: [...profile.tags],
    consequenceThread: profile.thread,
    safetyCritical: q.difficulty>=5 || q.category==='Health & Major Decisions',
    consistencyTags: [...profile.tags],
    noveltyTags:[q.category, phase, ...profile.tags],
    reflection: `What does your choice here reveal about the kind of man or woman you are becoming and the kind of relationship you are prepared to build?`,
    conversationPrompt: `If this became real in your relationship, what would you need to agree on before moving forward?`,
    safetyNotes: q.category==='Health & Major Decisions' ? ['Do not treat the game as medical advice. Encourage qualified professional care and informed decisions.'] : [],
    scenarioFamily: family.id,
    scenarioStage: stageForQuestion(q),
    deceptionTargets: [...family.deceptionTargets],
    transformationObjectives: [...family.transformationObjectives],
    evidenceMode: q.evidenceMode || 'choice-and-pattern',
    longTermLens: family.longTermLens
  };
  return {...q,intelligence};
}

export function enrichBank(bank){
  return bank.map((q,i)=>enrichQuestion(q,i));
}

export function validateQuestionIntelligence(q){
  const errors=[];
  if(!q.intelligence) return ['missing intelligence'];
  const i=q.intelligence;
  if(i.version!==QUESTION_INTELLIGENCE_VERSION) errors.push('wrong intelligence version');
  if(!QUESTION_PHASES.includes(i.phase)) errors.push('invalid phase');
  if(!STAKES.includes(i.stakes)) errors.push('invalid stakes');
  if(!i.primaryDimension) errors.push('missing primaryDimension');
  if(!Array.isArray(i.secondaryDimensions)||i.secondaryDimensions.length<1) errors.push('missing secondaryDimensions');
  if(!i.decisionType) errors.push('missing decisionType');
  if(!Array.isArray(i.decisionClasses)||i.decisionClasses.length!==q.options.length) errors.push('invalid decisionClasses');
  if(!Array.isArray(i.signalTags)) errors.push('missing signalTags');
  if(!i.biblicalPrinciple) errors.push('missing biblicalPrinciple');
  if(!Array.isArray(i.scriptureRefs)||i.scriptureRefs.length<1) errors.push('missing scriptureRefs');
  if(!i.consequenceThread) errors.push('missing consequenceThread');
  if(!i.scenarioFamily) errors.push('missing scenarioFamily');
  if(!FAMILY_STAGES.includes(i.scenarioStage)) errors.push('invalid scenarioStage');
  if(!Array.isArray(i.deceptionTargets)||i.deceptionTargets.length<1) errors.push('missing deceptionTargets');
  if(!Array.isArray(i.transformationObjectives)||i.transformationObjectives.length<1) errors.push('missing transformationObjectives');
  if(!i.longTermLens) errors.push('missing longTermLens');
  if(!Array.isArray(i.consistencyTags)||i.consistencyTags.length<1) errors.push('missing consistencyTags');
  if(!Array.isArray(i.noveltyTags)||i.noveltyTags.length<2) errors.push('missing noveltyTags');
  if(!i.reflection) errors.push('missing reflection');
  if(!i.conversationPrompt) errors.push('missing conversationPrompt');
  if(![1,2,3].includes(i.gpaWeight)) errors.push('invalid gpaWeight');
  return errors;
}

export function validateQuestionBankIntelligence(bank){
  const errors=[];
  const ids=new Set();
  for(const q of bank){
    if(ids.has(q.id)) errors.push(`${q.id}: duplicate id`);
    ids.add(q.id);
    const qErrors=validateQuestionIntelligence(q);
    for(const e of qErrors) errors.push(`${q.id}: ${e}`);
    const effectDims=new Set(Object.keys(q.options?.[0]?.effects||{}));
    if(q.intelligence && !effectDims.has(q.intelligence.primaryDimension)) errors.push(`${q.id}: primary dimension not represented in option effects`);
  }
  return errors;
}
