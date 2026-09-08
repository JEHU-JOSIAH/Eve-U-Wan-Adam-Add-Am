// Meditation & Scripture module
// Original reflections written for this app — inspired by the general, publicly known
// themes of the "seasons of love" framework popularized by teachers such as
// Myles Munroe ("Waiting and Dating") and Ben Stuart ("Single, Dating, Engaged, Married").
// These are NOT excerpts or reproductions of their books — no text from those copyrighted
// works is copied here. Each entry pairs an original short reflection with a full King
// James Version scripture passage (public domain) and a question to journal or discuss.
// Readers who want the authors' own words are encouraged to read the original books.

export const MEDITATION_SOURCES = [
  { name: 'Waiting and Dating', author: 'Myles Munroe' },
  { name: 'Single, Dating, Engaged, Married', author: 'Ben Stuart' }
];

export const MEDITATION_CATEGORIES = [
  { id: 'waiting', label: 'Waiting', icon: '⏳', tagline: 'The single season is not a waiting room — it is training ground.' },
  { id: 'dating', label: 'Dating', icon: '🌱', tagline: 'Dating is for discovery, not performance.' },
  { id: 'engaged', label: 'Engaged', icon: '💍', tagline: 'A season to build, not just to celebrate.' },
  { id: 'married', label: 'Married', icon: '🕊️', tagline: 'Covenant love, tested and renewed daily.' }
];

export const MEDITATIONS = [
  // ---------------- WAITING ----------------
  {
    id: 'wait-01', category: 'waiting', title: 'Purpose Before Partner',
    reflection: "Before you ask 'who is right for me', ask 'what am I here for'. A life with no direction cannot recognize the right traveling companion — it only recognizes company. Use this season to discover what God has called you to build, so that when someone shows up, you can measure them against a purpose, not against loneliness.",
    scriptureRef: 'Jeremiah 29:11 (KJV)',
    scriptureText: 'For I know the thoughts that I think toward you, saith the LORD, thoughts of peace, and not of evil, to give you an expected end.',
    prompt: 'What is one part of your purpose you could invest in this month, whether or not you are in a relationship?'
  },
  {
    id: 'wait-02', category: 'waiting', title: 'Guard What Feeds Your Heart',
    reflection: "Singleness is not an empty season; it is an unsupervised one. What you allow into your heart now — the shows, the conversations, the company — becomes the soil someone else will plant in later. Waiting well is less about being passive and more about being alert to what you are cultivating while no one is watching.",
    scriptureRef: 'Proverbs 4:23 (KJV)',
    scriptureText: 'Keep thy heart with all diligence; for out of it are the issues of life.',
    prompt: 'What is one thing you are currently allowing into your heart that does not deserve to be there?'
  },
  {
    id: 'wait-03', category: 'waiting', title: 'Strength Renewed, Not Rushed',
    reflection: "Waiting is often framed as weakness — as if the strong ones are the ones who 'make something happen'. But real strength is patient enough to let character catch up to desire. Rushing a relationship to escape loneliness usually trades a short season of waiting for a long season of regret.",
    scriptureRef: 'Isaiah 40:31 (KJV)',
    scriptureText: 'But they that wait upon the LORD shall renew their strength; they shall mount up with wings as eagles; they shall run, and not be weary; and they shall walk, and not faint.',
    prompt: 'Where in your life have you mistaken rushing for progress?'
  },
  {
    id: 'wait-04', category: 'waiting', title: 'Delight, Then Desire',
    reflection: "This verse is often misquoted as a formula for getting what you want. Read closely, it is an order of operations: delight comes first. A heart that is genuinely satisfied in its relationship with God is far less likely to hand its discernment over to the first person who shows interest.",
    scriptureRef: 'Psalm 37:4 (KJV)',
    scriptureText: 'Delight thyself also in the LORD; and he shall give thee the desires of thine heart.',
    prompt: 'Is your current desire for a relationship coming from delight or from deficit?'
  },

  // ---------------- DATING ----------------
  {
    id: 'date-01', category: 'dating', title: 'Test the Fruit, Not the Promises',
    reflection: "Words are easy in the early stage of a relationship, because words cost nothing yet. Fruit takes time and pressure to grow. Watch how someone treats a waiter, handles being told no, and speaks about their exes and their family — those are fruit, not a first impression.",
    scriptureRef: 'Matthew 7:16-17 (KJV)',
    scriptureText: 'Ye shall know them by their fruits. Do men gather grapes of thorns, or figs of thistles? Even so every good tree bringeth forth good fruit; but a corrupt tree bringeth forth evil fruit.',
    prompt: 'What fruit have you actually observed in this person over time, as opposed to what they have told you about themselves?'
  },
  {
    id: 'date-02', category: 'dating', title: 'Love That Is Patient With Facts',
    reflection: "Real love does not need to be rushed, hidden, or defended from scrutiny. If a relationship cannot survive honest questions, wise counsel, or a season of getting to know someone slowly, it may be infatuation wearing love's name.",
    scriptureRef: '1 Corinthians 13:4-7 (KJV)',
    scriptureText: 'Charity suffereth long, and is kind; charity envieth not; charity vaunteth not itself, is not puffed up, doth not behave itself unseemly, seeketh not her own, is not easily provoked, thinketh no evil; rejoiceth not in iniquity, but rejoiceth in the truth; beareth all things, believeth all things, hopeth all things, endureth all things.',
    prompt: 'Which phrase in this passage is hardest to say honestly about your current relationship — and why?'
  },
  {
    id: 'date-03', category: 'dating', title: 'Counsel Is Not Control',
    reflection: "Many people hide a new relationship from people who love them because they suspect what those people might say. That instinct to hide is itself information. Wise counsel does not remove your freedom to choose; it simply widens what you can see before you choose.",
    scriptureRef: 'Proverbs 15:22 (KJV)',
    scriptureText: 'Without counsel purposes are disappointed: but in the multitude of counsellors they are established.',
    prompt: 'Who in your life would tell you the truth about this relationship, even if it was not what you wanted to hear — and have you actually asked them?'
  },
  {
    id: 'date-04', category: 'dating', title: 'Unequal Yoking Is Not Just About Religion',
    reflection: "This verse is often applied narrowly to faith labels, but its deeper principle is about direction: two people pulling toward different destinations will eventually tear the yoke, and each other. Shared faith matters, but so does a shared direction for finances, family, and purpose.",
    scriptureRef: '2 Corinthians 6:14 (KJV)',
    scriptureText: 'Be ye not unequally yoked together with unbelievers: for what fellowship hath righteousness with unrighteousness? and what communion hath light with darkness?',
    prompt: 'In what specific direction are you and this person actually walking — not what you hope, but what your daily choices show?'
  },

  // ---------------- ENGAGED ----------------
  {
    id: 'eng-01', category: 'engaged', title: 'Build the House Before You Move In',
    reflection: "Engagement is not a victory lap; it is a construction phase. Budgets, conflict patterns, family expectations, and hard conversations about children and calling belong here — not after the wedding, when the cost of discovering a mismatch is much higher.",
    scriptureRef: 'Proverbs 24:27 (KJV)',
    scriptureText: 'Prepare thy work without, and make it fit for thyself in the field; and afterwards build thine house.',
    prompt: 'What conversation have you and your fiancé(e) been avoiding because it feels unromantic?'
  },
  {
    id: 'eng-02', category: 'engaged', title: 'Two Are Better Than One — If They Actually Help Each Other Up',
    reflection: "This passage is frequently read at weddings, but its real content is practical, not sentimental: partnership exists to lift each other when one falls, and to provide warmth and defense in hard seasons. Ask whether this is already true of you two now, in the small failures, not just imagined for the big ones later.",
    scriptureRef: 'Ecclesiastes 4:9-10 (KJV)',
    scriptureText: 'Two are better than one; because they have a good reward for their labour. For if they fall, the one will lift up his fellow: but woe to him that is alone when he falleth; for he hath not another to help him up.',
    prompt: 'Think of the last time you failed at something. Did your engagement actually function like this passage — or did you hide the fall?'
  },
  {
    id: 'eng-03', category: 'engaged', title: 'Leaving Well So You Can Cleave Well',
    reflection: "Marriage requires a genuine shift in primary loyalty — not abandoning parents, but no longer letting their voice override the marriage. Couples who never renegotiate boundaries with in-laws during engagement often import that unfinished conversation straight into the marriage.",
    scriptureRef: 'Genesis 2:24 (KJV)',
    scriptureText: 'Therefore shall a man leave his father and his mother, and shall cleave unto his wife: and they shall be one flesh.',
    prompt: 'What has not yet been renegotiated with your families that needs to be settled before the wedding, not after?'
  },
  {
    id: 'eng-04', category: 'engaged', title: 'Count the Cost Honestly',
    reflection: "Wisdom does not mean pessimism about the relationship; it means an honest inventory before commitment. A wedding budget, a shared financial picture, a plan for children, and a plan for conflict are the 'materials' this passage is describing.",
    scriptureRef: 'Luke 14:28 (KJV)',
    scriptureText: 'For which of you, intending to build a tower, sitteth not down first, and counteth the cost, whether he have sufficient to finish it?',
    prompt: 'Have you and your fiancé(e) actually looked at real numbers and real plans together, or only talked about the wedding day?'
  },

  // ---------------- MARRIED ----------------
  {
    id: 'mar-01', category: 'married', title: 'Love Is a Daily Decision, Not Just a Feeling',
    reflection: "The instruction to husbands here is active and ongoing, modeled on a love that gave itself up — not a love that waits to feel inspired. Feelings will fluctuate with sleep, stress, and season; covenant love is the decision that keeps showing up on the flat days too.",
    scriptureRef: 'Ephesians 5:25 (KJV)',
    scriptureText: 'Husbands, love your wives, even as Christ also loved the church, and gave himself for it.',
    prompt: 'What would it look like to love your spouse today specifically, rather than in general?'
  },
  {
    id: 'mar-02', category: 'married', title: 'Anger Has a Curfew',
    reflection: "This is not a command to never be angry — anger itself is not sin. It is a command to not let unresolved conflict become a permanent resident in the relationship. Couples who make a habit of resolving before sleep build a very different marriage than those who let silence accumulate.",
    scriptureRef: 'Ephesians 4:26 (KJV)',
    scriptureText: 'Be ye angry, and sin not: let not the sun go down upon your wrath.',
    prompt: 'Is there an unresolved conflict in your marriage right now that has already outlived its curfew?'
  },
  {
    id: 'mar-03', category: 'married', title: 'A Cord Not Easily Broken',
    reflection: "A marriage that only has two strands — you and your spouse — is more fragile than one with a third, shared commitment to God running through it. The image is practical: two threads snap far more easily than three woven together.",
    scriptureRef: 'Ecclesiastes 4:12 (KJV)',
    scriptureText: 'And if one prevail against him, two shall withstand him; and a threefold cord is not quickly broken.',
    prompt: 'What would it look like to intentionally weave a third strand into your marriage this season?'
  },
  {
    id: 'mar-04', category: 'married', title: 'Covenant Is Kept Even When It Costs',
    reflection: "This verse pairs honor with purity in the same breath — marriage is meant to be protected, not merely tolerated. Fidelity is not only about avoiding a single dramatic betrayal; it is about the small, daily choices to keep the marriage bed — and the marriage itself — honored.",
    scriptureRef: 'Hebrews 13:4 (KJV)',
    scriptureText: 'Marriage is honourable in all, and the bed undefiled: but whoremongers and adulterers God will judge.',
    prompt: 'What small daily habit protects your marriage — and is there one you have let slide?'
  }
];

export function meditationsByCategory(categoryId) {
  return MEDITATIONS.filter(m => m.category === categoryId);
}
