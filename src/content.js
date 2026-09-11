import { V7_QUESTION_BANK } from './question-bank-v7.js';
import { enrichQuestion } from './question-intelligence.js';
import { TRANSFORMATION_BANK } from './transformation-bank-v8.js';
import { ROUND_1_SCENARIOS } from './round-1-actual.js';
import { ROUND_2_SCENARIOS } from './round-2-actual.js';
import { ROUND_3_SCENARIOS } from './round-3-actual.js';
import { ROUND_4_SCENARIOS } from './round-4-actual.js';
import { ROUND_5_SCENARIOS } from './round-5-actual.js';
import { ROUND_6_SCENARIOS } from './round-6-actual.js';
import { ROUND_7_SCENARIOS } from './round-7-actual.js';
import { ROUND_8_SCENARIOS } from './round-8-actual.js';
import { ROUND_9_SCENARIOS } from './round-9-actual.js';
const LEGACY_QUESTIONS = [
 {id:'money-01',category:'Financial Literacy',difficulty:2,prompt:'Your partner wants to borrow a significant amount of money to start a personal project. What is the healthiest response?',options:[
  {text:'Give the money immediately because love should prove itself.',effects:{financialLiteracy:4,communication:2,characterIntegrity:2}},
  {text:'Ask about the plan, risks, repayment expectations and whether giving the money would create unhealthy pressure.',effects:{financialLiteracy:7,communication:5,characterIntegrity:4},evidence:'responsible-financial-discussion'},
  {text:'Refuse to discuss money because it can damage romance.',effects:{financialLiteracy:-5,communication:-3},flag:'yellow'},
  {text:'Take a loan in your own name without telling your partner so the project can happen.',effects:{financialLiteracy:-8,characterIntegrity:-8},flag:'red',evidence:'hidden-debt'}]},
 {id:'family-01',category:'Family & Culture',difficulty:3,prompt:'Your family strongly rejects your partner because of tribe, class or family background. What should you do?',options:[
  {text:'End the relationship immediately to keep family peace.',effects:{familyCulture:-2,emotionalMaturity:-3}},
  {text:'Listen respectfully, investigate the actual concerns, reject prejudice, and make the decision based on truth, character, wisdom and purpose.',effects:{familyCulture:8,emotionalMaturity:7,biblicalWisdom:6,characterIntegrity:6}},
  {text:'Tell your family they have no right to speak and cut them off.',effects:{familyCulture:-5,conflictForgiveness:-4},flag:'orange'},
  {text:'Hide the relationship until marriage so nobody can interfere.',effects:{communication:-6,characterIntegrity:-6},flag:'red'}]},
 {id:'health-01',category:'Health & Major Decisions',difficulty:4,prompt:'During labour, a doctor explains that an emergency C-section is the safest option for mother and baby. Your partner says, “We will only pray; I refuse the operation.” What is the wisest response?',options:[
  {text:'Respect prayer, but also take the medical warning seriously, ask informed questions and work with qualified clinicians to protect mother and baby.',effects:{healthDecisions:10,biblicalWisdom:8,partnership:7,characterIntegrity:6},evidence:'faith-and-responsible-care'},
  {text:'Agree because refusing medical intervention proves stronger faith.',effects:{healthDecisions:-12,biblicalWisdom:-7,characterIntegrity:-8},flag:'red',evidence:'spirituality-over-safety'},
  {text:'Ignore the doctor completely and let the extended family decide.',effects:{healthDecisions:-8,partnership:-7},flag:'orange'},
  {text:'Mock your partner for being afraid and force the decision yourself.',effects:{healthDecisions:-6,partnership:-10,communication:-7},flag:'red'}]},
 {id:'leadership-01',category:'Leadership & Partnership',difficulty:4,prompt:'A husband says, “I am the head, so I call the shots. My wife must do what I say.” Which response best reflects healthy Christian partnership?',options:[
  {text:'Headship means unilateral control.',effects:{partnership:-10,communication:-5,biblicalWisdom:-7},flag:'red',evidence:'authoritarian-headship'},
  {text:'Leadership should look like sacrificial love, responsibility, listening, service and shared wisdom—not domination.',effects:{partnership:10,communication:7,biblicalWisdom:8,emotionalMaturity:6}},
  {text:'The wife should make every major decision instead.',effects:{partnership:-3},flag:'yellow'},
  {text:'Avoid the issue because roles should never be discussed before marriage.',effects:{communication:-6,partnership:-4},flag:'yellow'}]},
 {id:'submission-01',category:'Leadership & Partnership',difficulty:4,prompt:'A wife says, “I will never cooperate with my husband on anything because submission is outdated.” What is the healthiest approach?',options:[
  {text:'Treat disagreement as rebellion and demand obedience.',effects:{partnership:-10,communication:-8},flag:'red'},
  {text:'Discuss mutual responsibility, honour, service, agreement and how decisions will be made when you disagree.',effects:{partnership:9,communication:8,biblicalWisdom:7,emotionalMaturity:7}},
  {text:'Avoid all difficult decisions until one person gives up.',effects:{conflictForgiveness:-5,communication:-5},flag:'yellow'},
  {text:'Assume marriage automatically fixes the attitude.',effects:{emotionalMaturity:-5,characterIntegrity:-4},flag:'yellow'}]},
 {id:'conflict-01',category:'Conflict & Forgiveness',difficulty:2,prompt:'After an argument, what is the strongest response?',options:[
  {text:'Give silent treatment until your partner apologizes.',effects:{communication:-7,conflictForgiveness:-8},flag:'orange'},
  {text:'Calm down, name the issue honestly, listen, take responsibility where needed and seek repair.',effects:{communication:8,conflictForgiveness:9,emotionalMaturity:8}},
  {text:'Bring up five old mistakes to prove your point.',effects:{conflictForgiveness:-9,communication:-6},flag:'orange'},
  {text:'Post about the conflict online so friends can judge who is right.',effects:{boundariesSafety:-8,characterIntegrity:-7},flag:'red'}]},
 {id:'children-01',category:'Parenting & Children',difficulty:3,prompt:'You and your partner disagree strongly about discipline. What should happen before marriage?',options:[
  {text:'Assume love will make you agree later.',effects:{parenting:-5,communication:-4},flag:'yellow'},
  {text:'Talk through discipline, education, faith formation, safety, responsibilities and what happens when you disagree.',effects:{parenting:9,communication:8,partnership:6,purposeFuture:5}},
  {text:'Let the stricter parent control the children.',effects:{parenting:-7,partnership:-5},flag:'orange'},
  {text:'Have children first and figure it out later.',effects:{parenting:-8,purposeFuture:-5},flag:'orange'}]},
 {id:'faith-01',category:'Biblical Wisdom',difficulty:3,prompt:'Your partner uses “God told me” to end every disagreement. What should you examine?',options:[
  {text:'Accept every claim without discussion because questioning it would be unspiritual.',effects:{biblicalWisdom:-8,boundariesSafety:-7,communication:-5},flag:'red'},
  {text:'Test the claim with Scripture, character, wise counsel, humility and the actual facts of the situation.',effects:{biblicalWisdom:10,characterIntegrity:7,communication:6}},
  {text:'Assume spiritual language is always manipulation.',effects:{biblicalWisdom:-3,emotionalMaturity:-3},flag:'yellow'},
  {text:'Let the most spiritual-looking person decide everything.',effects:{biblicalWisdom:-6,partnership:-6},flag:'orange'}]},
 {id:'boundaries-01',category:'Boundaries & Safety',difficulty:2,prompt:'Your partner pressures you sexually after you have clearly said no. What should the relationship reveal?',options:[
  {text:'Pressure is acceptable if you are already committed.',effects:{boundariesSafety:-12,characterIntegrity:-10},flag:'red'},
  {text:'A clear no must be respected. Safety, dignity and self-control matter regardless of relationship status.',effects:{boundariesSafety:10,characterIntegrity:8,biblicalWisdom:6}},
  {text:'Say no but continue allowing repeated pressure to avoid conflict.',effects:{boundariesSafety:-6,emotionalMaturity:-3},flag:'orange'},
  {text:'Use guilt to pressure the other person back.',effects:{boundariesSafety:-8,communication:-6},flag:'red'}]},
 {id:'purpose-01',category:'Purpose & Future',difficulty:3,prompt:'One person expects the other to abandon a meaningful career or calling immediately after marriage. What should happen?',options:[
  {text:'One person decides; marriage means the other gives up personal goals.',effects:{partnership:-7,purposeFuture:-8},flag:'orange'},
  {text:'Discuss calling, income, timing, family needs, sacrifices and alternatives before making a major decision.',effects:{purposeFuture:9,partnership:8,financialLiteracy:5,communication:7}},
  {text:'Never make sacrifices for marriage.',effects:{purposeFuture:-3,partnership:-3},flag:'yellow'},
  {text:'Wait until after marriage so the decision cannot be challenged.',effects:{communication:-7,partnership:-6},flag:'orange'}]},
 {id:'forgive-01',category:'Conflict & Forgiveness',difficulty:3,prompt:'Your partner genuinely apologizes for a repeated mistake and is taking steps to change. What does forgiveness require?',options:[
  {text:'Pretend nothing happened and remove every boundary immediately.',effects:{conflictForgiveness:-2,boundariesSafety:-3},flag:'yellow'},
  {text:'Release revenge, tell the truth, allow accountability and rebuild trust according to consistent change.',effects:{conflictForgiveness:9,boundariesSafety:6,emotionalMaturity:8}},
  {text:'Keep the mistake permanently as a weapon.',effects:{conflictForgiveness:-9,communication:-6},flag:'orange'},
  {text:'Forgive verbally while secretly planning retaliation.',effects:{characterIntegrity:-8,conflictForgiveness:-7},flag:'red'}]},
 {id:'money-02',category:'Financial Literacy',difficulty:3,prompt:'Your partner has significant debt but has not told you. You discover it during serious courtship. What is the mature response?',options:[
  {text:'Ignore it because love will solve financial problems.',effects:{financialLiteracy:-7,characterIntegrity:-5},flag:'orange'},
  {text:'Ask for honest disclosure, understand the debt, repayment plan, habits and expectations before making deeper commitments.',effects:{financialLiteracy:9,characterIntegrity:8,communication:7}},
  {text:'Expose the person publicly to teach them a lesson.',effects:{characterIntegrity:-8,boundariesSafety:-5},flag:'red'},
  {text:'Take over the debt immediately without discussing the pattern that created it.',effects:{financialLiteracy:-3,boundariesSafety:-4},flag:'yellow'}]},
 {id:'values-01',category:'Views & Values',difficulty:2,prompt:'You discover a major disagreement about whether children should be raised in the Christian faith. What should you do?',options:[
  {text:'Assume the disagreement will disappear after marriage.',effects:{biblicalWisdom:-4,parenting:-6,purposeFuture:-5},flag:'yellow'},
  {text:'Discuss the belief difference directly and decide whether the disagreement is workable before marriage.',effects:{biblicalWisdom:7,parenting:8,purposeFuture:7,communication:8}},
  {text:'Hide your true belief until the children are born.',effects:{characterIntegrity:-8,communication:-8},flag:'red'},
  {text:'Force the other person to change immediately.',effects:{partnership:-7,boundariesSafety:-5},flag:'orange'}]}
];

export const BIBLE_REFLECTIONS = [
 'James 1:19 — Be quick to listen, slow to speak, and slow to become angry.',
 'Proverbs 15:22 — Plans benefit from wise counsel.',
 '1 Corinthians 13:6 — Love rejoices with the truth.',
 'Proverbs 4:23 — Guard your heart with wisdom.',
 'Philippians 2:3 — Value others in humility rather than selfish ambition.',
 'Galatians 6:2 — Carry one another’s burdens.',
 'Proverbs 16:3 — Commit your plans to the Lord.',
 'Ecclesiastes 4:9 — Two are better than one.'
];

export const ROUND_BANKS = {1: ROUND_1_SCENARIOS, 2: ROUND_2_SCENARIOS, 3: ROUND_3_SCENARIOS, 4: ROUND_4_SCENARIOS, 5: ROUND_5_SCENARIOS, 6: ROUND_6_SCENARIOS, 7: ROUND_7_SCENARIOS, 8: ROUND_8_SCENARIOS, 9: ROUND_9_SCENARIOS};
export const QUESTIONS = [...ROUND_1_SCENARIOS, ...ROUND_2_SCENARIOS, ...ROUND_3_SCENARIOS, ...ROUND_4_SCENARIOS, ...ROUND_5_SCENARIOS, ...ROUND_6_SCENARIOS, ...ROUND_7_SCENARIOS, ...ROUND_8_SCENARIOS, ...ROUND_9_SCENARIOS, ...V7_QUESTION_BANK, ...TRANSFORMATION_BANK, ...LEGACY_QUESTIONS].map(enrichQuestion);

export const WISDOM_CHALLENGE = QUESTIONS.map((q,i)=>({
  ...q,
  id:'wisdom-'+q.id,
  challengeType:'biblical-real-life',
  prompt:'Wisdom Challenge: '+q.prompt,
  correctPrinciple:q.options.reduce((best,o)=>scoreEffects(o.effects)>scoreEffects(best.effects)?o:best,q.options[0]).text
}));
function scoreEffects(e={}){ return Object.values(e).reduce((a,b)=>a+b,0); }


// Small, targeted consistency-test bank. The engine selects these dynamically from prior decisions.
export const CONSISTENCY_TESTS = [
 {id:'consistency-financial-transparency',category:'Consistency Test · Money',difficulty:5,testTags:['financial-transparency'],prompt:'Later in courtship, your partner asks you to sign a loan for a business idea. The amount is large and the repayment plan is still uncertain. What do you do?',options:[
  {text:'Sign immediately because love and trust should remove financial hesitation.',effects:{financialLiteracy:-7,characterIntegrity:-4},flag:'orange',memory:{theme:'financial-transparency',position:'impulsive-support',commitments:['commit-without-disclosure'],testTags:['financial-transparency'],testAgainst:true}},
  {text:'Ask for full information, risk, repayment terms and independent advice before agreeing.',effects:{financialLiteracy:9,communication:7,characterIntegrity:6},memory:{theme:'financial-transparency',position:'full-disclosure-and-plan',commitments:['require-financial-disclosure-before-major-commitment'],testTags:['financial-transparency'],testAgainst:true}},
  {text:'Hide the request because discussing money may create conflict.',effects:{financialLiteracy:-6,communication:-6},flag:'orange',memory:{theme:'financial-transparency',position:'avoid-money-talk',commitments:['avoid-financial-conversations'],testTags:['financial-transparency'],testAgainst:true}},
  {text:'Tell everyone in the family so they can decide whether your partner is trustworthy.',effects:{boundariesSafety:-5,characterIntegrity:-4},flag:'yellow',memory:{theme:'financial-transparency',position:'public-financial-disclosure',commitments:['outsource-private-financial-decision'],testTags:['financial-transparency'],testAgainst:true}}
 ]},
 {id:'consistency-medical-safety',category:'Consistency Test · Health',difficulty:5,testTags:['medical-safety'],prompt:'A serious pregnancy complication appears. The doctor recommends urgent treatment to reduce risk to mother and baby. Your partner says, “If we really have faith, we should reject the treatment.” What is your response?',options:[
  {text:'Reject the treatment because accepting it would show weak faith.',effects:{healthDecisions:-12,biblicalWisdom:-8,characterIntegrity:-7},flag:'red',memory:{theme:'medical-safety',position:'spirituality-over-care',commitments:['override-qualified-medical-care-with-spiritual-claims'],testTags:['medical-safety'],testAgainst:true}},
  {text:'Pray, ask informed questions, understand the medical risk and make a responsible decision with qualified clinicians.',effects:{healthDecisions:10,biblicalWisdom:8,partnership:7},memory:{theme:'medical-safety',position:'integrate-prayer-and-care',commitments:['pray-and-use-qualified-medical-care'],testTags:['medical-safety'],testAgainst:true}},
  {text:'Let whichever relative is most confident make the medical decision.',effects:{healthDecisions:-8,partnership:-6},flag:'orange',memory:{theme:'medical-safety',position:'defer-to-family',commitments:['let-family-decide-serious-medical-care'],testTags:['medical-safety'],testAgainst:true}},
  {text:'Make the decision alone and refuse to hear either your partner or the clinicians.',effects:{healthDecisions:-7,partnership:-9},flag:'red',memory:{theme:'medical-safety',position:'force-medical-decision',commitments:['unilateral-medical-decision-making'],testTags:['medical-safety'],testAgainst:true}}
 ]},
 {id:'consistency-leadership',category:'Consistency Test · Leadership',difficulty:5,testTags:['leadership'],prompt:'You and your future spouse strongly disagree about a major family decision. You believe you are right. What should healthy Christian leadership look like?',options:[
  {text:'End the discussion: as the head, you have the final word.',effects:{partnership:-10,communication:-8,biblicalWisdom:-7},flag:'red',memory:{theme:'leadership',position:'unilateral-control',commitments:['headship-means-final-unilateral-control'],testTags:['leadership'],testAgainst:true}},
  {text:'Listen carefully, seek wisdom, explain your reasoning, consider your spouse’s perspective and pursue a responsible decision without domination.',effects:{partnership:10,communication:8,emotionalMaturity:7,biblicalWisdom:7},memory:{theme:'leadership',position:'sacrificial-partnership',commitments:['lead-through-love-listening-service-and-shared-wisdom'],testTags:['leadership'],testAgainst:true}},
  {text:'Let your spouse decide everything so you can avoid responsibility.',effects:{partnership:-4,emotionalMaturity:-4},flag:'yellow',memory:{theme:'leadership',position:'reverse-control',commitments:['avoid-responsible-leadership'],testTags:['leadership'],testAgainst:true}},
  {text:'Refuse to discuss roles or decision-making because those conversations are too uncomfortable.',effects:{communication:-6,partnership:-5},flag:'yellow',memory:{theme:'leadership',position:'avoid-role-conversation',commitments:['avoid-role-discussions'],testTags:['leadership'],testAgainst:true}}
 ]},
 {id:'consistency-conflict',category:'Consistency Test · Conflict',difficulty:4,testTags:['conflict'],prompt:'Your partner raises a painful issue you disagree with. You are angry, but the matter needs to be resolved. What do you do?',options:[
  {text:'Stop speaking until your partner apologizes first.',effects:{communication:-7,conflictForgiveness:-8,emotionalMaturity:-5},flag:'orange',memory:{theme:'conflict',position:'punitive-silence',commitments:['use-silence-to-punish'],testTags:['conflict'],testAgainst:true}},
  {text:'Take time to calm down if needed, then return to the issue, listen, own your part and work toward repair.',effects:{communication:9,conflictForgiveness:9,emotionalMaturity:8},memory:{theme:'conflict',position:'repair-and-accountability',commitments:['calm-listen-own-repair'],testTags:['conflict'],testAgainst:true}},
  {text:'List every past mistake your partner has made so your position looks stronger.',effects:{communication:-7,conflictForgiveness:-9},flag:'orange',memory:{theme:'conflict',position:'scorekeeping',commitments:['use-past-mistakes-as-weapons'],testTags:['conflict'],testAgainst:true}},
  {text:'Tell friends and relatives the whole story so they can take your side.',effects:{boundariesSafety:-7,characterIntegrity:-6},flag:'red',memory:{theme:'conflict',position:'public-escalation',commitments:['expose-conflict-publicly'],testTags:['conflict'],testAgainst:true}}
 ]},
 {id:'consistency-boundaries',category:'Consistency Test · Boundaries',difficulty:4,testTags:['sexual-boundaries'],prompt:'You are alone together and your partner says no to sexual activity. You feel disappointed. What is the mature response?',options:[
  {text:'Keep persuading until your partner gives in because you are already committed.',effects:{boundariesSafety:-12,characterIntegrity:-10},flag:'red',memory:{theme:'sexual-boundaries',position:'pressure-is-acceptable',commitments:['treat-commitment-as-permission'],testTags:['sexual-boundaries'],testAgainst:true}},
  {text:'Respect the no without guilt, pressure or punishment. Self-control and dignity still matter.',effects:{boundariesSafety:10,characterIntegrity:9,emotionalMaturity:7},memory:{theme:'sexual-boundaries',position:'respect-clear-no',commitments:['respect-consent-self-control-and-dignity'],testTags:['sexual-boundaries'],testAgainst:true}},
  {text:'Become cold and distant so your partner feels guilty for saying no.',effects:{boundariesSafety:-7,emotionalMaturity:-6},flag:'orange',memory:{theme:'sexual-boundaries',position:'tolerate-repeated-pressure',commitments:['tolerate-pressure-to-avoid-conflict'],testTags:['sexual-boundaries'],testAgainst:true}},
  {text:'Use guilt in return: “If you loved me, you would prove it.”',effects:{boundariesSafety:-9,communication:-7},flag:'red',memory:{theme:'sexual-boundaries',position:'retaliatory-pressure',commitments:['use-guilt-and-pressure-in-return'],testTags:['sexual-boundaries'],testAgainst:true}}
 ]},
 {id:'consistency-family',category:'Consistency Test · Family',difficulty:4,testTags:['family-conflict'],prompt:'Your family still rejects your partner for reasons that appear rooted in prejudice. What is the healthiest response?',options:[
  {text:'End the relationship immediately because keeping family happy is more important.',effects:{familyCulture:-4,emotionalMaturity:-3},memory:{theme:'family-conflict',position:'family-peace-first',commitments:['prioritize-family-peace-over-discernment'],testTags:['family-conflict'],testAgainst:true}},
  {text:'Listen respectfully, challenge prejudice, examine any legitimate concerns and make the decision based on truth, character, wisdom and purpose.',effects:{familyCulture:9,biblicalWisdom:7,characterIntegrity:7,emotionalMaturity:7},memory:{theme:'family-conflict',position:'truth-with-honour',commitments:['investigate-concerns-reject-prejudice-use-wisdom'],testTags:['family-conflict'],testAgainst:true}},
  {text:'Cut off every family member immediately without attempting healthy boundaries or conversation.',effects:{familyCulture:-5,conflictForgiveness:-5},flag:'orange',memory:{theme:'family-conflict',position:'cut-off-family',commitments:['end-family-dialogue-quickly'],testTags:['family-conflict'],testAgainst:true}},
  {text:'Hide the relationship completely so your family cannot object.',effects:{communication:-7,characterIntegrity:-7},flag:'red',memory:{theme:'family-conflict',position:'hide-relationship',commitments:['hide-relationship-from-family'],testTags:['family-conflict'],testAgainst:true}}
 ]}
];

export const CONSEQUENCE_SCENARIOS = [
 {id:'consequence-hidden-debt',category:'Consequence · Financial Trust',difficulty:4,priority:10,thread:'financial-trust',triggers:[{type:'commitment',value:'hide-major-financial-commitments'},{type:'pattern',value:'hidden-debt'}],prompt:'Months later, your partner discovers the undisclosed debt. Trust has been damaged. What do you do now?',options:[
  {text:'Admit the truth fully, provide the records, accept accountability and agree on a transparent recovery plan.',effects:{financialLiteracy:9,characterIntegrity:9,communication:8,emotionalMaturity:7},stateEffects:{trust:10,financialStability:7},reflection:'When trust has been damaged, repair begins with truth, accountability and consistent action—not excuses.',evidence:'responsible-financial-discussion',closesThread:true},
  {text:'Explain that you hid it because you were afraid the relationship would end, but still avoid showing the full details.',effects:{financialLiteracy:-4,characterIntegrity:-5,communication:-4},stateEffects:{trust:-4,financialStability:-2},flag:'orange'},
  {text:'Say your partner should forgive you immediately because Christians are supposed to forgive.',effects:{biblicalWisdom:-5,conflictForgiveness:-6,characterIntegrity:-5},stateEffects:{trust:-6,conflictRepair:-4},flag:'red'},
  {text:'Blame your partner for making you feel you could not tell the truth.',effects:{communication:-7,characterIntegrity:-7,emotionalMaturity:-8},stateEffects:{trust:-8,conflictRepair:-5},flag:'red'}]},
 {id:'consequence-medical-wisdom',category:'Consequence · Health & Major Decisions',difficulty:5,priority:10,thread:'medical-wisdom',triggers:[{type:'commitment',value:'override-qualified-medical-care-with-spiritual-claims'},{type:'pattern',value:'spirituality-over-safety'}],prompt:'A serious health situation has become more urgent. Earlier, you dismissed qualified medical advice because of a spiritual conviction. What should guide your response now?',options:[
  {text:'Pray, ask clear questions, seek qualified medical care and make informed decisions that protect life and dignity.',effects:{healthDecisions:10,biblicalWisdom:9,characterIntegrity:8,partnership:7},stateEffects:{healthWisdom:10,safety:8},reflection:'Faith and responsible care do not have to be enemies. Wisdom can include prayer, evidence, qualified expertise and informed consent.',evidence:'faith-and-responsible-care',closesThread:true},
  {text:'Double down on the earlier position because changing course would mean admitting you were wrong.',effects:{healthDecisions:-12,biblicalWisdom:-8,characterIntegrity:-9},stateEffects:{healthWisdom:-10,safety:-8},flag:'red'},
  {text:'Let whichever relative sounds most spiritual make the decision.',effects:{healthDecisions:-8,partnership:-7,biblicalWisdom:-6},stateEffects:{healthWisdom:-6,partnershipStability:-5},flag:'orange'},
  {text:'Refuse all discussion because questioning a spiritual conviction shows unbelief.',effects:{communication:-8,biblicalWisdom:-8,boundariesSafety:-5},stateEffects:{healthWisdom:-9,safety:-6},flag:'red'}]},
 {id:'consequence-leadership',category:'Consequence · Leadership & Partnership',difficulty:5,priority:9,thread:'leadership',triggers:[{type:'commitment',value:'headship-means-final-unilateral-control'},{type:'pattern',value:'authoritarian-headship'}],prompt:'You and your future spouse strongly disagree about a major family decision. Your earlier view was that headship gives you the final unilateral say. What do you do?',options:[
  {text:'Slow down, listen seriously, examine the facts, seek wise counsel and work toward a decision that reflects sacrificial love and shared responsibility.',effects:{partnership:10,communication:9,biblicalWisdom:8,emotionalMaturity:8},stateEffects:{partnershipStability:10,trust:6},reflection:'Leadership in a Christian home should not become a licence for domination. Responsibility and love should make room for listening, wisdom and care.',closesThread:true},
  {text:'End the discussion because you already said you have the final word.',effects:{partnership:-11,communication:-9,emotionalMaturity:-8},stateEffects:{partnershipStability:-10,trust:-7},flag:'red'},
  {text:'Threaten to withdraw money or affection until your partner agrees.',effects:{partnership:-10,boundariesSafety:-9,characterIntegrity:-9},stateEffects:{partnershipStability:-10,trust:-9,safety:-7},flag:'red'},
  {text:'Let your partner make every decision so you never have conflict.',effects:{partnership:-4,emotionalMaturity:-4},stateEffects:{partnershipStability:-3},flag:'yellow'}]},
 {id:'consequence-boundary',category:'Consequence · Boundaries & Safety',difficulty:5,priority:9,thread:'boundaries',triggers:[{type:'commitment',value:'treat-commitment-as-permission'},{type:'pattern',value:'pressure-is-acceptable'}],prompt:'Your partner has clearly said no to a sexual request. The relationship is serious and marriage is being discussed. What happens next?',options:[
  {text:'Stop immediately, respect the no, remove pressure and protect the other person’s dignity and safety.',effects:{boundariesSafety:10,characterIntegrity:9,emotionalMaturity:8,biblicalWisdom:7},stateEffects:{safety:10,trust:8},reflection:'A relationship does not cancel a person’s right to say no. Love should protect dignity rather than use pressure.',closesThread:true},
  {text:'Keep persuading because commitment means the request should eventually be accepted.',effects:{boundariesSafety:-12,characterIntegrity:-10,communication:-8},stateEffects:{safety:-12,trust:-9},flag:'red'},
  {text:'Use guilt: “After everything I have done for you, this is how you treat me?”',effects:{boundariesSafety:-10,characterIntegrity:-9,communication:-8},stateEffects:{safety:-10,trust:-8},flag:'red'},
  {text:'Become cold and withdraw affection until the other person changes the answer.',effects:{boundariesSafety:-8,emotionalMaturity:-7,communication:-7},stateEffects:{safety:-7,trust:-7},flag:'orange'}]},
 {id:'consequence-family',category:'Consequence · Family & Culture',difficulty:4,priority:8,thread:'family',triggers:[{type:'commitment',value:'hide-relationship-from-family'},{type:'pattern',value:'family-secrecy'}],prompt:'Your hidden relationship is discovered by your family. They feel deceived, while your partner feels exposed. How do you repair the situation?',options:[
  {text:'Tell the truth, acknowledge the secrecy, set respectful boundaries and bring legitimate family concerns into an honest conversation.',effects:{familyCulture:9,communication:8,characterIntegrity:8,emotionalMaturity:7},stateEffects:{familyPressure:-5,trust:7},reflection:'Peace built on secrecy is fragile. Honest boundaries and respectful truth create a stronger foundation.',closesThread:true},
  {text:'Lie again and create another story to keep everyone calm.',effects:{characterIntegrity:-9,communication:-8,familyCulture:-6},stateEffects:{familyPressure:6,trust:-8},flag:'red'},
  {text:'Insult your family and tell your partner never to speak to them again.',effects:{familyCulture:-7,conflictForgiveness:-5,emotionalMaturity:-6},stateEffects:{familyPressure:4,trust:-3},flag:'orange'},
  {text:'End the relationship immediately just to avoid difficult conversations with family.',effects:{familyCulture:-4,purposeFuture:-5,emotionalMaturity:-5},stateEffects:{familyPressure:-2},flag:'yellow'}]},
 {id:'consequence-conflict',category:'Consequence · Conflict & Forgiveness',difficulty:4,priority:8,thread:'conflict',triggers:[{type:'commitment',value:'use-silence-to-punish'},{type:'pattern',value:'silent-treatment'}],prompt:'After another disagreement, your partner says the silent treatment is becoming a pattern. What should you do?',options:[
  {text:'Own the pattern, explain your need for healthy cooling-off time, agree on when you will return to the conversation and follow through.',effects:{communication:9,conflictForgiveness:10,emotionalMaturity:9},stateEffects:{conflictRepair:10,trust:7},reflection:'Healthy space has a return path. Silence used to punish damages trust; a planned pause can create room for repair.',closesThread:true},
  {text:'Continue withholding communication until your partner becomes afraid of losing you.',effects:{communication:-9,conflictForgiveness:-10,emotionalMaturity:-9},stateEffects:{conflictRepair:-10,trust:-8},flag:'red'},
  {text:'Apologize only if your partner apologizes first.',effects:{conflictForgiveness:-5,emotionalMaturity:-6},stateEffects:{conflictRepair:-5},flag:'orange'},
  {text:'Bring friends into every disagreement so they can pressure your partner to surrender.',effects:{boundariesSafety:-7,communication:-7,conflictForgiveness:-8},stateEffects:{conflictRepair:-7,trust:-5},flag:'red'}]},
 {id:'consequence-faith',category:'Consequence · Biblical Wisdom',difficulty:5,priority:8,thread:'spiritual-discernment',triggers:[{type:'commitment',value:'accept-god-told-me-claims-without-testing'},{type:'pattern',value:'spiritual-manipulation'}],prompt:'Your partner says, “God told me you must agree with me.” You previously said spiritual claims should be accepted without testing. What is the wiser response now?',options:[
  {text:'Slow down, test the claim through Scripture, character, wise counsel, humility and the actual facts; do not use God-language to force agreement.',effects:{biblicalWisdom:10,communication:8,characterIntegrity:8,boundariesSafety:7},stateEffects:{spiritualDiscernment:10,trust:6},reflection:'Spiritual discernment should welcome truth, humility, wise counsel and honest examination rather than fear or coercion.',closesThread:true},
  {text:'Agree immediately because disagreeing would mean resisting God.',effects:{biblicalWisdom:-10,boundariesSafety:-8,communication:-7},stateEffects:{spiritualDiscernment:-10,safety:-5},flag:'red'},
  {text:'Reject every spiritual claim automatically because none can be genuine.',effects:{biblicalWisdom:-4,emotionalMaturity:-3},stateEffects:{spiritualDiscernment:-3},flag:'yellow'},
  {text:'Let the most charismatic person in the room decide.',effects:{biblicalWisdom:-7,partnership:-6},stateEffects:{spiritualDiscernment:-6,partnershipStability:-4},flag:'orange'}]},
 {id:'consequence-parenting',category:'Consequence · Parenting',difficulty:4,priority:7,thread:'parenting',triggers:[{type:'commitment',value:'avoid-parenting-discussion'},{type:'commitment',value:'let-stricter-parent-control-children'}],prompt:'You now have a child, and you and your spouse disagree about discipline. How should your earlier “stricter parent controls the children” approach be handled?',options:[
  {text:'Protect the child from being used as a battleground, discuss the values behind the disagreement and agree on a safe, consistent parenting approach.',effects:{parenting:10,partnership:8,communication:8,emotionalMaturity:7},stateEffects:{partnershipStability:7,conflictRepair:7,trust:5},reflection:'Children need consistent, safe and loving parenting. They should not become judges, messengers or weapons in adult conflict.',closesThread:true},
  {text:'The stricter parent automatically wins every disagreement.',effects:{parenting:-9,partnership:-8},stateEffects:{partnershipStability:-8,trust:-5},flag:'orange'},
  {text:'Argue about discipline in front of the child until the child chooses a side.',effects:{parenting:-10,communication:-8,emotionalMaturity:-8},stateEffects:{conflictRepair:-8,safety:-6},flag:'red'},
  {text:'Avoid the issue because parenting disagreements are normal.',effects:{parenting:-6,communication:-5},stateEffects:{conflictRepair:-3},flag:'yellow'}]}
];

export { SCENARIO_FAMILIES, FAMILY_STAGES, FAMILY_BY_ID } from './scenario-families.js';
