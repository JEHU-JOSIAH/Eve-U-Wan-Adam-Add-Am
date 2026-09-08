export const SCENARIO_FAMILY_VERSION = '7.2';

export const FAMILY_STAGES = ['signal','test','pressure','consequence','repair','revelation'];

export const SCENARIO_FAMILIES = [
  {id:'charm-vs-character',title:'Charm vs Character',category:'Character & Integrity',illusion:'Attraction, charisma, gifting or public image is treated as proof of character.',deceptionTargets:['charm-without-character','image-over-evidence','love-bombing'],transformationObjectives:['separate attraction from character','look for repeated evidence','value private character over public image'],longTermLens:'If the attractive behaviour continued for ten years, what would daily life actually look like?',thread:'character-integrity'},
  {id:'spirituality-vs-discernment',title:'Spirituality vs Discernment',category:'Biblical Wisdom',illusion:'Spiritual language is assumed to make a person or decision unquestionable.',deceptionTargets:['god-told-me-pressure','spiritual-performance','faith-without-testing'],transformationObjectives:['test claims without cynicism','recognize spiritual manipulation','join faith with wisdom and facts'],longTermLens:'What happens when spiritual language becomes the reason nobody is allowed to ask questions?',thread:'spiritual-discernment'},
  {id:'leadership-vs-control',title:'Leadership vs Control',category:'Leadership & Partnership',illusion:'Headship, submission or decisiveness is used to justify domination.',deceptionTargets:['authoritarian-headship','coercive-submission','decision-control'],transformationObjectives:['distinguish service from domination','practice shared wisdom','notice coercion early'],longTermLens:'If disagreement is handled this way every month for ten years, who becomes smaller?',thread:'partnership-leadership'},
  {id:'chemistry-vs-compatibility',title:'Chemistry vs Compatibility',category:'Emotional Maturity',illusion:'Strong attraction is treated as evidence that major differences will solve themselves.',deceptionTargets:['chemistry-over-compatibility','marriage-will-fix-it','wishful-thinking'],transformationObjectives:['examine values and workability','separate desire from discernment','name non-negotiable differences'],longTermLens:'Would this difference still be workable after children, stress, illness and financial pressure?',thread:'values-alignment'},
  {id:'money-vs-love',title:'Money vs Love',category:'Financial Literacy',illusion:'Financial sacrifice, generosity or rescue is treated as proof of love.',deceptionTargets:['love-proves-itself-with-money','financial-secrecy','rescue-pattern'],transformationObjectives:['replace rescue with stewardship','test financial honesty','assess risk before commitment'],longTermLens:'What would this money pattern do to the household after ten years?',thread:'financial-transparency'},
  {id:'forgiveness-vs-accountability',title:'Forgiveness vs Accountability',category:'Conflict & Forgiveness',illusion:'Forgiveness is used to erase consequences while repeated harm continues.',deceptionTargets:['forgiveness-without-change','apology-without-repair','patience-without-boundaries'],transformationObjectives:['recognize credible change','keep wise boundaries','distinguish mercy from enabling'],longTermLens:'If nothing changes, is forgiveness becoming permission for the pattern to continue?',thread:'conflict-repair'},
  {id:'family-honour-vs-discernment',title:'Family Honour vs Discernment',category:'Family & Culture',illusion:'Family approval or rejection is treated as the final proof of whether a relationship is right.',deceptionTargets:['family-pressure','prejudice-disguised-as-concern','rebellion-disguised-as-independence'],transformationObjectives:['investigate concerns','reject prejudice without rejecting wisdom','set respectful boundaries'],longTermLens:'Which family concerns would still matter if nobody were emotionally pressuring you?',thread:'family-pressure'},
  {id:'boundaries-vs-access',title:'Love vs Entitlement to Access',category:'Boundaries & Safety',illusion:'Closeness or commitment is treated as permission to control, pressure or access the other person.',deceptionTargets:['love-as-entitlement','sexual-pressure','privacy-violation'],transformationObjectives:['respect consent and dignity','identify coercion','protect safety before attachment'],longTermLens:'What happens to freedom and safety if this behaviour becomes normal?',thread:'boundaries-safety'},
  {id:'purpose-vs-personal-sacrifice',title:'Purpose vs Self-Erasure',category:'Purpose & Future',illusion:'Marriage requires one person to disappear, abandon calling or carry an unfair burden.',deceptionTargets:['purpose-erasure','one-sided-sacrifice','ambition-without-responsibility'],transformationObjectives:['negotiate sacrifice','protect purpose and responsibility','test practical compatibility'],longTermLens:'Would this arrangement remain fair through career changes, children and seasons of pressure?',thread:'purpose-future'},
  {id:'medical-faith-vs-wisdom',title:'Faith vs False Either-Ors',category:'Health & Major Decisions',illusion:'Prayer and responsible care are presented as opposites.',deceptionTargets:['spirituality-over-safety','anti-medical-certainty','fear-based-medical-control'],transformationObjectives:['combine prayer with informed care','respect informed consent','recognize dangerous false certainty'],longTermLens:'When life is at stake, can both partners seek God and responsible qualified help without coercion?',thread:'health-wisdom'},
  {id:'parenting-values-vs-assumptions',title:'Parenting Values vs Assumptions',category:'Parenting & Children',illusion:'Love is assumed to guarantee agreement about children.',deceptionTargets:['parenting-assumption','children-as-leverage','strict-parent-control'],transformationObjectives:['discuss parenting before commitment','protect children from adult conflict','test agreement under pressure'],longTermLens:'How would this disagreement affect a child if it repeated for ten years?',thread:'parenting'},
  {id:'self-deception-vs-evidence',title:'Self-Deception vs Evidence',category:'Emotional Maturity',illusion:'Attachment causes a person to explain away evidence because he or she desperately wants the relationship to work.',deceptionTargets:['wishful-thinking','sunk-cost','confirmation-bias','i-can-fix-him','i-can-fix-her'],transformationObjectives:['notice rationalization','weigh evidence over fantasy','choose truth over attachment'],longTermLens:'If your closest friend described this exact pattern, what would you tell him or her?',thread:'self-discernment'}
,

  // V8 transformational families
  {
    "id": "success-career",
    "title": "Success & Career",
    "category": "Purpose & Future",
    "illusion": "Can you love a partner whose professional success changes the balance of income, visibility or opportunity?",
    "deceptionTargets": [
      "career-success",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "career-success"
  },
  {
    "id": "education-growth",
    "title": "Education & Intellectual Growth",
    "category": "Purpose & Future",
    "illusion": "Can you support a partner who keeps learning, changing his or her mind with evidence, or becoming more qualified?",
    "deceptionTargets": [
      "education-growth",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "education-growth"
  },
  {
    "id": "attractiveness-change",
    "title": "Physical Attractiveness Through Seasons",
    "category": "Emotional Maturity",
    "illusion": "Can your commitment survive normal changes in appearance, age, weight, pregnancy, stress and illness?",
    "deceptionTargets": [
      "appearance-change",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "appearance-change"
  },
  {
    "id": "fertility-children",
    "title": "Fertility & Children",
    "category": "Parenting & Children",
    "illusion": "How do you respond when hopes about children, fertility or family size meet reality?",
    "deceptionTargets": [
      "fertility-children",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "fertility-children"
  },
  {
    "id": "illness-health",
    "title": "Illness & Long-Term Care",
    "category": "Health & Major Decisions",
    "illusion": "Can love remain compassionate and responsible when health changes?",
    "deceptionTargets": [
      "illness-care",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "illness-care"
  },
  {
    "id": "disability-support",
    "title": "Disability & Changed Capacity",
    "category": "Emotional Maturity",
    "illusion": "Can you preserve dignity, partnership and practical responsibility when one partner loses capacity?",
    "deceptionTargets": [
      "disability-support",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "disability-support"
  },
  {
    "id": "relocation",
    "title": "Relocation & Opportunity",
    "category": "Purpose & Future",
    "illusion": "Can you make major location decisions without turning one partner into the automatic loser?",
    "deceptionTargets": [
      "relocation",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "relocation"
  },
  {
    "id": "family-rejection",
    "title": "Family Rejection & Prejudice",
    "category": "Family & Culture",
    "illusion": "Can you investigate family concerns without surrendering discernment or becoming blindly rebellious?",
    "deceptionTargets": [
      "family-rejection",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "family-rejection"
  },
  {
    "id": "spiritual-growth",
    "title": "Spiritual Growth & Change",
    "category": "Biblical Wisdom",
    "illusion": "Can you remain humble when one partner grows spiritually at a different pace?",
    "deceptionTargets": [
      "spiritual-growth",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "spiritual-growth"
  },
  {
    "id": "ministry-success",
    "title": "Ministry & Public Calling",
    "category": "Purpose & Future",
    "illusion": "Can public spiritual success remain subordinate to character, family responsibility and mutual consent?",
    "deceptionTargets": [
      "ministry-success",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "ministry-success"
  },
  {
    "id": "business-failure",
    "title": "Business Failure & Recovery",
    "category": "Financial Literacy",
    "illusion": "What happens to partnership when a venture fails and financial pressure rises?",
    "deceptionTargets": [
      "business-failure",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "business-failure"
  },
  {
    "id": "wealth-increase",
    "title": "Wealth Increase & Power",
    "category": "Financial Literacy",
    "illusion": "Can prosperity increase without increasing entitlement, secrecy or control?",
    "deceptionTargets": [
      "wealth-increase",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "wealth-increase"
  },
  {
    "id": "unemployment",
    "title": "Unemployment & Provision",
    "category": "Financial Literacy",
    "illusion": "Can dignity and partnership survive a season when one partner cannot earn?",
    "deceptionTargets": [
      "unemployment",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "unemployment"
  },
  {
    "id": "pregnancy",
    "title": "Pregnancy & Life Reordering",
    "category": "Parenting & Children",
    "illusion": "How do you handle the physical, emotional, financial and practical disruption of pregnancy?",
    "deceptionTargets": [
      "pregnancy",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "pregnancy"
  },
  {
    "id": "parenting-differences",
    "title": "Parenting Differences",
    "category": "Parenting & Children",
    "illusion": "Can two adults disagree about parenting without making the child the battleground?",
    "deceptionTargets": [
      "parenting-differences",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "parenting-differences"
  },
  {
    "id": "aging-parents",
    "title": "Aging Parents & Extended Family",
    "category": "Family & Culture",
    "illusion": "Can you care for aging parents while protecting the marriage from unmanaged family demands?",
    "deceptionTargets": [
      "aging-parents",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "aging-parents"
  },
  {
    "id": "sexual-boundaries",
    "title": "Sexual Boundaries & Desire",
    "category": "Boundaries & Safety",
    "illusion": "Can desire remain governed by dignity, consent, patience and self-control?",
    "deceptionTargets": [
      "sexual-boundaries",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "sexual-boundaries"
  },
  {
    "id": "influence-status",
    "title": "Influence, Status & Power",
    "category": "Character & Integrity",
    "illusion": "Can you handle a partner becoming more influential, respected or connected than you?",
    "deceptionTargets": [
      "influence-status",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "influence-status"
  },
  {
    "id": "public-recognition",
    "title": "Public Recognition & Comparison",
    "category": "Character & Integrity",
    "illusion": "Can you celebrate your partner publicly without turning comparison into rivalry?",
    "deceptionTargets": [
      "public-recognition",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "public-recognition"
  },
  {
    "id": "aging-life-seasons",
    "title": "Aging, Time & Changing Priorities",
    "category": "Emotional Maturity",
    "illusion": "Can your relationship adapt as bodies, responsibilities, priorities and dreams change?",
    "deceptionTargets": [
      "aging-seasons",
      "wishful-thinking",
      "role-based-worth"
    ],
    "transformationObjectives": [
      "test principles under changing circumstances",
      "separate stated values from repeated behaviour",
      "choose evidence over fantasy"
    ],
    "longTermLens": "If this pattern continued for ten years, what would daily life and dignity look like?",
    "thread": "aging-seasons"
  }
];

export const FAMILY_BY_ID = Object.fromEntries(SCENARIO_FAMILIES.map(f=>[f.id,f]));
export const FAMILY_BY_CATEGORY = Object.fromEntries(SCENARIO_FAMILIES.map(f=>[f.category,f.id]));

export function familyForQuestion(q){
  if(q.scenarioFamily && FAMILY_BY_ID[q.scenarioFamily]) return FAMILY_BY_ID[q.scenarioFamily];
  return FAMILY_BY_ID[FAMILY_BY_CATEGORY[q.category]] || FAMILY_BY_ID['self-deception-vs-evidence'];
}

export function stageForQuestion(q){
  if(q.scenarioStage && FAMILY_STAGES.includes(q.scenarioStage)) return q.scenarioStage;
  const phase=q.intelligence?.phase || 'foundation';
  if(phase==='repair') return 'repair';
  if(phase==='stakes') return 'pressure';
  if(phase==='consistency') return 'revelation';
  if((q.difficulty||1)>=4) return 'test';
  return 'signal';
}

export function branchScore(player,q){
  const family=familyForQuestion(q);
  const history=player.director?.familyHistory?.[family.id] || [];
  const state=player.scenarioState||{};
  const patterns=player.patterns||{};
  const memory=player.relationshipMemory?.commitments||{};
  let score=0;
  const stage=stageForQuestion(q);
  const last=history.at(-1);
  if(last && FAMILY_STAGES.indexOf(stage)>FAMILY_STAGES.indexOf(last.stage)) score+=18;
  if(!last && stage==='signal') score+=8;
  for(const tag of family.deceptionTargets){
    if(patterns[tag]) score+=18;
    if(memory[tag]) score+=12;
  }
  if(state.safety!==undefined && family.id==='boundaries-vs-access' && state.safety<45) score+=15;
  if(state.trust!==undefined && ['charm-vs-character','money-vs-love','self-deception-vs-evidence'].includes(family.id) && state.trust<45) score+=10;
  if(state.spiritualDiscernment!==undefined && family.id==='spirituality-vs-discernment' && state.spiritualDiscernment<45) score+=15;
  if(state.healthWisdom!==undefined && family.id==='medical-faith-vs-wisdom' && state.healthWisdom<45) score+=15;
  return score;
}

export function recordFamilyTurn(player,q){
  const next=structuredClone(player);
  if(!next.director.familyHistory) next.director.familyHistory={};
  const family=familyForQuestion(q); const stage=stageForQuestion(q);
  if(!next.director.familyHistory[family.id]) next.director.familyHistory[family.id]=[];
  next.director.familyHistory[family.id].push({questionId:q.id,stage,at:Date.now()});
  next.director.activeFamily=family.id;
  next.director.activeStage=stage;
  return next;
}
