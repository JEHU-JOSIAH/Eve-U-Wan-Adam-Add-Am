// Meditation & Scripture module
// Original reflections written for this app — inspired by the general, publicly known
// themes of the "seasons of love" framework popularized by teachers such as
// Myles Munroe ("Waiting and Dating", "The Purpose and Power of Love and Marriage"),
// Ben Stuart ("Single, Dating, Engaged, Married"), Faith Oyedepo ("Single With A
// Difference", "Dating: A Biblical Guide"), David O. Oyedepo ("In Pursuit of Vision"),
// T.D. Jakes ("T.D. Jakes Speaks to Men", "Daddy Loves His Girls"), and recorded relationship
// messages from Rev. Dr. Sam Oye, Apostle Joshua Selman, Pastor Kingsley & Mildred
// Okonkwo, Bishop Funke Felix-Adejumo, and Dr. Paul & Pastor Becky Enenche.
// These are NOT excerpts or reproductions of those books or messages — no text from those
// copyrighted works is copied here; only the general subject areas they teach on (e.g.
// "singleness as a purposeful season", "peace as a test of guidance", "a marriage needs a
// shared vision", "a man's identity apart from performance", "a woman's identity apart from
// a father's absence", "money mindsets in marriage", "generational family patterns",
// "levels of relationship", "what a man provides beyond money") inspired which topics to
// write about, in entirely original wording. Each entry pairs an original short reflection
// with a full King James Version scripture passage (public domain) and a question to
// journal or discuss. Readers who want the teachers' own words are encouraged to seek out
// the original books and messages.

export const MEDITATION_SOURCES = [
  { name: 'Waiting and Dating', author: 'Myles Munroe' },
  { name: 'The Purpose and Power of Love and Marriage', author: 'Myles Munroe' },
  { name: 'Single, Dating, Engaged, Married', author: 'Ben Stuart' },
  { name: 'Single With A Difference', author: 'Faith Oyedepo' },
  { name: 'Dating: A Biblical Guide', author: 'Faith A. Oyedepo' },
  { name: 'In Pursuit of Vision', author: 'David O. Oyedepo' },
  { name: 'T.D. Jakes Speaks to Men', author: 'T.D. Jakes' },
  { name: 'Daddy Loves His Girls', author: 'T.D. Jakes' },
  { name: 'Relationship Today (recorded teaching)', author: 'Rev. Dr. Sam Oye' },
  { name: 'Destiny Doors & Destiny Relationships (recorded teaching)', author: 'Apostle Joshua Selman' },
  { name: 'Marriage & Money Mindsets (recorded teaching)', author: 'Pastor Kingsley & Mildred Okonkwo' },
  { name: 'Faith, Marriage & Ministry conversation (recorded teaching)', author: 'Bishop Funke Felix-Adejumo' },
  { name: 'Godly Marital Relationships (recorded teaching)', author: 'Dr. Paul & Pastor Becky Enenche' }
];

export const MEDITATION_CATEGORIES = [
  { id: 'waiting', label: 'Waiting', icon: '⏳', tagline: 'The single season is not a waiting room — it is training ground.' },
  { id: 'dating', label: 'Dating', icon: '🌱', tagline: 'Dating is for discovery, not performance.' },
  { id: 'engaged', label: 'Engaged', icon: '💍', tagline: 'A season to build, not just to celebrate.' },
  { id: 'married', label: 'Married', icon: '🕊️', tagline: 'Covenant love, tested and renewed daily.' },
  { id: 'guidance', label: 'Guidance', icon: '🧭', tagline: 'Purpose, discernment and hearing God clearly in every season.' },
  { id: 'vision', label: 'Vision', icon: '🎯', tagline: 'Where there is no vision for a relationship, it drifts toward destruction.' },
  { id: 'for-men', label: 'For Men', icon: '🛡️', tagline: 'Identity, rest and leadership that comes from character, not performance.' },
  { id: 'for-women', label: 'For Women', icon: '💎', tagline: 'Worth, discernment and destiny that were never on loan from a man.' },
  { id: 'money', label: 'Money & Marriage', icon: '💰', tagline: 'Money habits are relationship habits — handle both with the same integrity.' },
  { id: 'roots', label: 'Family Roots', icon: '🌳', tagline: 'You didn\u2019t choose the family that raised you. You do choose what you pass on.' },
  { id: 'communication', label: 'Communication', icon: '💬', tagline: 'Most conflicts are not solved by better arguments. They are solved by someone finally feeling heard.' }
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
  {
    id: 'wait-05', category: 'waiting', title: 'The Power of Your Now',
    reflection: "It is tempting to treat singleness as a waiting room you sit in until real life starts. But the years you are living right now are not a rehearsal — they are the only version of this season you will ever get. What you build, learn, forgive, and finish while single becomes the foundation everything else stands on. Postponing your life until marriage is not patience; it is procrastination wearing a spiritual costume.",
    scriptureRef: '2 Corinthians 6:2 (KJV)',
    scriptureText: 'Behold, now is the accepted time; behold, now is the day of salvation.',
    prompt: 'What have you been postponing "until things settle down" that you could actually start this week?'
  },
  {
    id: 'wait-06', category: 'waiting', title: 'Useful While Unmarried',
    reflection: "David, Joseph, Nehemiah and Esther all did something history remembers while they were still single. Their impact was never conditioned on a wedding ring — it flowed from a gift they had already started using. If you are waiting to matter until you are married, you may be sitting on a contribution the world needs from you right now, in the shape you are currently in.",
    scriptureRef: '1 Timothy 4:12 (KJV)',
    scriptureText: 'Let no man despise thy youth; but be thou an example of the believers, in word, in conversation, in charity, in spirit, in faith, in purity.',
    prompt: 'What gift or skill do you already have that could bless someone else this month, with no relationship required?'
  },
  {
    id: 'wait-07', category: 'waiting', title: 'Practicing the Covenant You Will Need Later',
    reflection: "Covenant faithfulness is not a switch that turns on at the altar; it is a muscle trained long before. How you keep your word to a friend, show up when you said you would, and stay honest when no one is checking — these small, unglamorous consistencies are the actual training ground for the covenant faithfulness marriage will one day require of you.",
    scriptureRef: 'Psalm 89:34 (KJV)',
    scriptureText: 'My covenant will I not break, nor alter the thing that is gone out of my lips.',
    prompt: 'Where have you recently broken a small promise, and what would it look like to go back and repair it?'
  },
  {
    id: 'wait-08', category: 'waiting', title: 'Positioning, Not Just Praying',
    reflection: "Readiness is not a feeling you wait to arrive; it is a posture you build on purpose. Being available means actually being open to the idea, not secretly attached to someone else. Being approachable means your countenance invites conversation rather than guarding against it. Being accessible means you exist somewhere beyond your own four walls. Being attractive means the character and habits people are drawn to are actually being cultivated. And some doors only move with focused, specific prayer. Waiting well includes all five.",
    scriptureRef: 'Matthew 25:13 (KJV)',
    scriptureText: 'Watch therefore, for ye know neither the day nor the hour wherein the Son of man cometh.',
    prompt: 'Of the five — available, approachable, accessible, attractive, prayerful — which one have you actually been neglecting?'
  },
  {
    id: 'wait-09', category: 'waiting', title: 'If You Cannot Be Friends First',
    reflection: "Attraction can happen in a moment; friendship has to be built. A relationship that skips straight to romantic intensity without ever developing genuine friendship is missing the part that actually survives hard seasons — the part that enjoys the other person's company, tells them the truth, and sticks around when the excitement dips. If you cannot picture being this person's friend, the foundation for marrying them is not there yet either.",
    scriptureRef: 'Proverbs 18:24 (KJV)',
    scriptureText: 'A man that hath friends must shew himself friendly: and there is a friend that sticketh closer than a brother.',
    prompt: 'Setting the romantic attraction aside for a moment, would you describe this person as a genuine friend?'
  },
  {
    id: 'wait-10', category: 'waiting', title: 'Become the Right Person',
    reflection: "It is tempting to spend the waiting season making a mental list of everything the future spouse needs to be. It is far more productive to spend it asking what kind of person you are actually becoming. A relationship rarely rises higher than the character of the people entering it — growing your own integrity, patience and faith does more to attract and sustain a healthy partner than any amount of demanding perfection from someone else ever will.",
    scriptureRef: 'Ephesians 5:1 (KJV)',
    scriptureText: 'Be ye therefore followers of God, as dear children.',
    prompt: 'If your future spouse showed up today, would the person you currently are be someone worth marrying?'
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
  {
    id: 'date-05', category: 'dating', title: 'Dating With a Destination',
    reflection: "There is a difference between exploring a relationship with a real destination in view and drifting through one to fill a weekend. Purposeless dating trains you to fall in and out of attraction at the drop of a hat; purposeful dating trains you to evaluate, communicate, and build. Before your next date, it is worth being honest with yourself about which one you are actually doing.",
    scriptureRef: '1 Corinthians 9:26 (KJV)',
    scriptureText: 'I therefore so run, not as uncertainly; so fight I, not as one that beateth the air.',
    prompt: 'If someone watched how you date, would they conclude you are running toward something — or just running?'
  },
  {
    id: 'date-06', category: 'dating', title: 'Discipline Before Desire',
    reflection: "Attraction will always show up uninvited; discipline is what decides what happens next. A dating relationship without self-control is a city with no walls — everything valuable inside it is exposed. This is not about suppressing genuine affection, but about refusing to let a feeling in the moment override a standard you set with a clear mind.",
    scriptureRef: 'Proverbs 25:28 (KJV)',
    scriptureText: 'He that hath no rule over his own spirit is like a city that is broken down, and without walls.',
    prompt: 'Where in this relationship has a strong feeling recently overridden a standard you had set for yourself?'
  },
  {
    id: 'date-07', category: 'dating', title: 'Let Your Words Build, Not Break',
    reflection: "The words exchanged on ordinary dates do more shaping than the big declarations do. Careless teasing, sarcasm dressed as honesty, or venting dressed as vulnerability can quietly erode a relationship long before any major conflict arrives. A relationship's real health can often be measured in how its two people talk to each other on a completely unremarkable Tuesday.",
    scriptureRef: 'Proverbs 15:4 (KJV)',
    scriptureText: 'A wholesome tongue is a tree of life: but perverseness therein is a breach in the spirit.',
    prompt: 'What is one phrase or tone you use with this person that you would not want to become a permanent habit?'
  },
  {
    id: 'date-08', category: 'dating', title: 'Peace Is Not Optional',
    reflection: "Excitement is loud and immediate; peace is quieter and more reliable. It is possible to feel thrilled about a relationship and unsettled about it at the very same time — and the unsettled part is usually the one worth listening to. Peace is not the absence of nerves before a big step; it is the absence of that persistent inner alarm that something is being ignored.",
    scriptureRef: 'Colossians 3:15 (KJV)',
    scriptureText: 'And let the peace of God rule in your hearts, to the which also ye are called in one body; and be ye thankful.',
    prompt: 'Setting excitement aside for a moment, do you actually feel at peace about the direction of this relationship?'
  },
  {
    id: 'date-09', category: 'dating', title: 'Four Tests Before You Commit',
    reflection: "Conviction: does this actually align with what you know to be wise, or only with what you want? Peace: is there a settled quiet about this, or a persistent unease you keep talking yourself out of? Love: is what you feel patient, kind and honest, or mostly urgency? Time: has this been observed across real seasons, or only during the easiest, most flattering weeks? None of these four tests, on its own, is proof. Together, over time, they are hard to fake.",
    scriptureRef: '1 Thessalonians 5:21 (KJV)',
    scriptureText: 'Prove all things; hold fast that which is good.',
    prompt: 'Which of the four tests — conviction, peace, love, time — has this relationship actually not yet passed?'
  },
  {
    id: 'date-10', category: 'dating', title: 'Assume Nothing',
    reflection: "It is possible to date someone for a long time and still not really know them — their true history, their actual character under pressure, what they are like when no one important is watching. Assuming you know someone because the relationship feels familiar is different from having actually verified it. Marriage should not be the moment you first discover who you really married.",
    scriptureRef: '2 Corinthians 13:1 (KJV)',
    scriptureText: 'This is the third time I am coming to you. In the mouth of two or three witnesses shall every word be established.',
    prompt: 'What do you actually know about this person from independent evidence, versus what you have simply assumed or been told by them alone?'
  },
  {
    id: 'date-11', category: 'dating', title: 'What Happens in the Dark Eventually Comes to Light',
    reflection: "Secrecy in the early stages of a relationship rarely stays contained to one small thing. A habit of hiding conversations, finances, or other relationships from a partner tends to expand quietly over time, because concealment gets easier the more it is practiced. Genuine intimacy cannot be built in the dark — it needs the kind of transparency that is willing to be seen fully, not managed carefully.",
    scriptureRef: 'Luke 12:2 (KJV)',
    scriptureText: 'For there is nothing covered, that shall not be revealed; neither hid, that shall not be known.',
    prompt: 'Is there anything currently being managed or hidden in this relationship that would change things if it came fully into the light?'
  },
  {
    id: 'date-12', category: 'dating', title: 'What You Celebrate, Grows',
    reflection: "It is easy to notice what a partner gets wrong and rarely mention what they get right. But attention is a kind of investment — whatever gets consistently celebrated in a relationship tends to grow, and whatever only gets criticized tends to wither or go into hiding. Intentionally celebrating a partner's effort, not just the results they produce, shapes the whole emotional climate of how a relationship develops.",
    scriptureRef: 'Psalm 103:2 (KJV)',
    scriptureText: 'Bless the LORD, O my soul, and forget not all his benefits.',
    prompt: 'What has this person done recently that deserved genuine celebration, and did you actually say so?'
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
  {
    id: 'eng-05', category: 'engaged', title: 'Knowledge Before the Wedding Day',
    reflection: "Love gets a couple to the altar; knowledge is what keeps them together long after the flowers have wilted. Many marriages struggle not from a shortage of affection but from a shortage of understanding — of finances, conflict, expectations, and each other. Engagement is the appointed season to actively go get that knowledge: premarital counseling, honest mentors, hard books — not to assume it will arrive automatically with the ring.",
    scriptureRef: 'Hosea 4:6 (KJV)',
    scriptureText: 'My people are destroyed for lack of knowledge: because thou hast rejected knowledge, I will also reject thee, that thou shalt be no priest to me.',
    prompt: 'What specific source of marriage knowledge — a counselor, a course, a mentor couple — have you not yet pursued, and what is stopping you?'
  },
  {
    id: 'eng-06', category: 'engaged', title: 'Doers, Not Just Hearers',
    reflection: "It is easy to nod along in premarital counseling and feel prepared simply because the advice made sense. But advice that is only heard and never practiced changes nothing. The engaged couples who thrive are the ones who take a session's counsel and actually rehearse it that same week — the hard conversation, the budget meeting, the apology — rather than filing it away as something they agreed with.",
    scriptureRef: 'James 1:22 (KJV)',
    scriptureText: 'But be ye doers of the word, and not hearers only, deceiving your own selves.',
    prompt: 'What is one piece of counsel you and your fiancé(e) have received but not yet actually practiced?'
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
  },
  {
    id: 'mar-05', category: 'married', title: 'Four Small Phrases That Protect a Marriage',
    reflection: "\"Please.\" \"I am sorry.\" \"Thank you.\" \"I love you.\" None of these cost anything, and none of them are complicated — which is exactly why they get skipped once a marriage feels settled. But these small courtesies are what keep two people relating to each other as honored guests rather than furniture. A marriage that stops saying them out loud has not necessarily stopped loving; it has simply stopped showing it in the smallest, most repeatable ways.",
    scriptureRef: 'Colossians 4:6 (KJV)',
    scriptureText: 'Let your speech be alway with grace, seasoned with salt, that ye may know how ye ought to answer every man.',
    prompt: 'Which of these four phrases have you said the least this week, and to whom does it need to be said?'
  },
  {
    id: 'mar-06', category: 'married', title: 'What God Joined, Let No One Else Manage',
    reflection: "Every marriage exists inside a wider circle of parents, relatives and close friends whose opinions matter and whose love is usually genuine. But there is a difference between welcoming their input and letting them quietly run the marriage from the outside. Protecting the boundary around your covenant is not disrespect toward family; it is what actually lets two people become one without a third, fourth and fifth voice steering from the sidelines.",
    scriptureRef: 'Mark 10:8-9 (KJV)',
    scriptureText: 'And they twain shall be one flesh: so then they are no more twain, but one flesh. What therefore God hath joined together, let not man put asunder.',
    prompt: 'Where has outside input on your marriage quietly become outside control?'
  },
  {
    id: 'mar-07', category: 'married', title: 'Love Keeps No Record of Wrongs',
    reflection: "It is possible to forgive an argument out loud and still privately keep a running tally of it — filed away for the next disagreement. Real peace does not come from having nothing to be offended by; it comes from loving something more than your right to stay offended. A marriage that keeps score eventually turns every fresh conflict into a courtroom of past ones.",
    scriptureRef: 'Psalm 119:165 (KJV)',
    scriptureText: 'Great peace have they which love thy law: and nothing shall offend them.',
    prompt: 'Is there an old offense you have said you forgave, that you are still quietly keeping on file?'
  },
  {
    id: 'mar-08', category: 'married', title: 'Love Like the Sun',
    reflection: "The sun does not dim on the days no one thanks it for shining. Love that only shows up when it is appreciated, reciprocated, or convenient is really just a transaction wearing love's name. The kind of love a marriage actually needs to survive its hardest seasons is the kind that keeps shining on principle, not on performance review.",
    scriptureRef: '1 Corinthians 13:8 (KJV)',
    scriptureText: 'Charity never faileth.',
    prompt: 'Has your love toward your spouse lately been conditional on how appreciated it felt?'
  },
  {
    id: 'mar-09', category: 'married', title: 'If You Don\u2019t Work On It, It Won\u2019t Work Out',
    reflection: "A good marriage is not evidence that two people got lucky with compatibility; it is usually evidence that two people kept choosing to do the unglamorous work — the hard conversation, the repeated apology, the deliberate date night, the daily small kindness. Marriages rarely fail from one dramatic event. They usually fade from ordinary neglect, one skipped effort at a time.",
    scriptureRef: '1 Corinthians 15:58 (KJV)',
    scriptureText: 'Therefore, my beloved brethren, be ye stedfast, unmoveable, always abounding in the work of the Lord, forasmuch as ye know that your labour is not in vain in the Lord.',
    prompt: 'What is one specific, unglamorous effort your marriage has quietly stopped receiving from you?'
  },

  // ---------------- GUIDANCE ----------------
  {
    id: 'guide-01', category: 'guidance', title: 'Excitement Fades, Peace Confirms',
    reflection: "Excitement can be manufactured by attention, novelty, or flattery — it tells you how a moment feels, not whether a direction is right. Peace is slower to arrive and harder to fake. Before a big relationship decision, it helps to separate the two questions honestly: am I excited about this, and, quite apart from that, am I actually at peace about it?",
    scriptureRef: 'Philippians 4:6-7 (KJV)',
    scriptureText: 'Be careful for nothing; but in every thing by prayer and supplication with thanksgiving let your requests be made known unto God. And the peace of God, which passeth all understanding, shall keep your hearts and minds through Christ Jesus.',
    prompt: 'Name one decision in front of you right now. Are you chasing the excitement of it, or genuinely at peace about it?'
  },
  {
    id: 'guide-02', category: 'guidance', title: 'Meekness Positions You to Be Led',
    reflection: "A person who already thinks they have everything figured out is very hard to guide — by God, by wise counsel, or by a partner who sees something they cannot see in themselves. Meekness is not weakness; it is the willingness to actually be correctable. In relationships as much as anywhere else, guidance only lands on a heart that has left room to receive it.",
    scriptureRef: 'James 1:21 (KJV)',
    scriptureText: 'Wherefore lay apart all filthiness and superfluity of naughtiness, and receive with meekness the engrafted word, which is able to save your souls.',
    prompt: 'When was the last time you actually changed your mind because someone else\u2019s counsel was better than your own plan?'
  },
  {
    id: 'guide-03', category: 'guidance', title: 'There Is an Appointed Time',
    reflection: "Some things genuinely will not be rushed, no matter how much pressure, comparison, or anxiety is applied to them. An appointed time is not a punishment for being late to your own life; it is simply the truth that certain outcomes are only ready when they are ready. The right response to a delay is not panic — it is steady preparation while you wait for it to arrive.",
    scriptureRef: 'Habakkuk 2:3 (KJV)',
    scriptureText: 'For the vision is yet for an appointed time, but at the end it shall speak, and not lie: though it tarry, wait for it; because it will surely come, it will not tarry.',
    prompt: 'What are you currently tempted to force ahead of its appointed time?'
  },
  {
    id: 'guide-04', category: 'guidance', title: 'Persistence Outlasts a Feeling',
    reflection: "Motivation is a spark; persistence is what actually finishes the work after the spark burns out. Whether it is a season of waiting, a hard conversation you keep needing to have, or the daily discipline of a growing relationship, the outcome usually belongs to whoever kept showing up after the initial feeling wore off, not whoever felt the most at the start.",
    scriptureRef: 'Galatians 6:9 (KJV)',
    scriptureText: 'And let us not be weary in well doing: for in due season we shall reap, if we faint not.',
    prompt: 'Where have you recently felt like giving up simply because the initial excitement wore off, not because the effort actually stopped being worth it?'
  },
  {
    id: 'guide-05', category: 'guidance', title: 'Renewed Strength for the Next Season',
    reflection: "A disappointment — a relationship that ended, a delay that outlasted your patience — does not have to be the final word on your strength. Renewal is a real, repeatable event, not a one-time miracle reserved for people who never got tired. You are allowed to be depleted by a season and still expect to be restored for the next one.",
    scriptureRef: 'Psalm 103:5 (KJV)',
    scriptureText: "Who satisfieth thy mouth with good things; so that thy youth is renewed like the eagle's.",
    prompt: 'What season recently depleted you, and what would genuine renewal — not just moving on — actually look like?'
  },
  {
    id: 'guide-06', category: 'guidance', title: 'Forgiveness Is for an Offense; Tolerance Is for a Pattern',
    reflection: "These two get confused constantly, and confusing them causes real harm. Forgiveness releases a person from a specific wrong that has already happened — it looks backward. Tolerance keeps absorbing a pattern that is still actively happening — it looks forward, and often enables the very thing it should be resisting. You can forgive someone completely and still refuse to keep tolerating what they are still doing. The two are not the same decision.",
    scriptureRef: 'Mark 11:25 (KJV)',
    scriptureText: 'And when ye stand praying, forgive, if ye have ought against any: that your Father also which is in heaven may forgive you your trespasses.',
    prompt: 'Is there something you have been calling "forgiveness" that is actually just ongoing tolerance of ongoing harm?'
  },
  {
    id: 'guide-07', category: 'guidance', title: 'Release What Is Occupying You',
    reflection: "It is hard to receive what is next while still emotionally occupied by what came before — an old relationship never fully grieved, a rejection never fully processed, a version of a plan that never fully died. Guidance does not usually get louder to compete with the noise already inside you; it waits for room to be made. Letting go is not forgetting. It is making space.",
    scriptureRef: 'Isaiah 43:18-19 (KJV)',
    scriptureText: 'Remember ye not the former things, neither consider the things of old. Behold, I will do a new thing; now it shall spring forth; shall ye not know it?',
    prompt: 'What from a former season is still quietly occupying space that a new season actually needs?'
  },
  {
    id: 'guide-08', category: 'guidance', title: 'Refuse to Descend',
    reflection: "There is a real temptation, when someone treats you unfairly, to answer them on their own level — matching pettiness with pettiness, cruelty with cruelty. It rarely produces anything but two people behaving the same badly. Restraint in the face of provocation is not weakness; it is often the only thing that keeps a conflict from escalating into something neither person can undo.",
    scriptureRef: 'Proverbs 26:4 (KJV)',
    scriptureText: 'Answer not a fool according to his folly, lest thou also be like unto him.',
    prompt: 'Where have you recently been tempted to match someone\u2019s bad behavior instead of simply refusing to descend to it?'
  },
  {
    id: 'guide-09', category: 'guidance', title: 'Curate What You Dwell On',
    reflection: "Bitterness and clarity rarely occupy the mind at the same time — whichever one you keep feeding tends to crowd the other out. What gets replayed mentally, especially about a partner or a past hurt, is not a neutral habit; it actively shapes what you notice, expect, and eventually act on. Guarding your thought life is not denial. It is choosing which voice gets to keep speaking.",
    scriptureRef: 'Philippians 4:8 (KJV)',
    scriptureText: 'Finally, brethren, whatsoever things are true, whatsoever things are honest, whatsoever things are just, whatsoever things are pure, whatsoever things are lovely, whatsoever things are of good report; if there be any virtue, and if there be any praise, think on these things.',
    prompt: 'What thought have you been replaying lately that is shaping how you see someone more than the actual facts do?'
  },

  // ---------------- VISION ----------------
  {
    id: 'vision-01', category: 'vision', title: 'A Relationship Without Vision Drifts Toward Destruction',
    reflection: "Two people can genuinely love each other and still slowly come apart for lack of a shared picture of where they are actually going. Love supplies the fuel, but vision supplies the direction — without it, a couple is not being led anywhere in particular, just carried by whatever season currently has the most pull. A relationship does not need a five-year plan to be safe, but it does need two people who can say, honestly, what they are building this for.",
    scriptureRef: 'Proverbs 29:18 (KJV)',
    scriptureText: 'Where there is no vision, the people perish: but he that keepeth the law, happy is he.',
    prompt: 'If someone asked you and your partner separately "what is this relationship actually for", how different would your two answers be?'
  },
  {
    id: 'vision-02', category: 'vision', title: 'Plan the Marriage, Not Just the Wedding',
    reflection: "It is possible to spend a year planning a single day and almost no time planning the decades meant to follow it. Diligence — real, unglamorous planning — is what turns a hope into something durable; haste produces something that looks finished from the outside while the foundation underneath was never actually laid.",
    scriptureRef: 'Proverbs 21:5 (KJV)',
    scriptureText: 'The thoughts of the diligent tend only to plenteousness; but of every one that is hasty only to want.',
    prompt: 'What has had more planning time so far: the event, or the actual life you are planning to build afterward?'
  },
  {
    id: 'vision-03', category: 'vision', title: 'Two Cannot Walk Together Without Agreement',
    reflection: "This is not a demand for identical opinions on everything; it is a question about direction. Two people can disagree on plenty of details and still walk together, as long as they have actually agreed on where they are headed. What quietly wears a relationship down is not disagreement — it is two people assuming they agree on the destination when they have never actually said it out loud.",
    scriptureRef: 'Amos 3:3 (KJV)',
    scriptureText: 'Can two walk together, except they be agreed?',
    prompt: 'Where might you and your partner be assuming agreement on direction that you have never actually put into words?'
  },
  {
    id: 'vision-04', category: 'vision', title: 'Write the Vision Down',
    reflection: "A vision that only exists as a vague feeling is easy to lose in the noise of ordinary weeks. Writing it down — what you are actually building toward as a couple, in plain, specific language — turns a mood into something you can return to, measure against, and remind each other of when a hard season makes the direction hard to see.",
    scriptureRef: 'Habakkuk 2:2 (KJV)',
    scriptureText: 'And the LORD answered me, and said, Write the vision, and make it plain upon tables, that he may run that readeth it.',
    prompt: 'If you wrote your relationship\u2019s vision down in a few plain sentences today, what would it actually say?'
  },
  {
    id: 'vision-05', category: 'vision', title: 'Vision Is a Form of Security',
    reflection: "A clear sense of direction does something quiet but powerful for a relationship: it makes both people feel safe enough to invest fully, rather than holding part of themselves back in case the whole thing is going nowhere. A household with no direction can still have affection in it, but it will struggle to have confidence in it. Vision is not only about where you end up — it is part of what makes the people inside it feel secure enough to stay wholehearted along the way.",
    scriptureRef: 'Genesis 18:19 (KJV)',
    scriptureText: 'For I know him, that he will command his children and his household after him, and they shall keep the way of the LORD.',
    prompt: 'Does your household currently run on a direction you have actually communicated, or on assumption and habit?'
  },
  {
    id: 'vision-06', category: 'vision', title: 'A Marriage Aimed at Something Bigger Than Itself',
    reflection: "A relationship that exists purely to make its two members happy tends to become fragile the moment happiness dips, because it has nothing bigger to fall back on. A relationship aimed at something beyond itself — raising secure children, serving a community, living out a shared faith — has a reason to keep showing up for each other even in the seasons where the feelings are not doing much of the work.",
    scriptureRef: 'Matthew 28:19-20 (KJV)',
    scriptureText: 'Go ye therefore, and teach all nations\u2026 and, lo, I am with you alway, even unto the end of the world.',
    prompt: 'What is your relationship actually aimed at beyond the happiness of the two people in it?'
  },

  // ---------------- FOR MEN ----------------
  {
    id: 'men-01', category: 'for-men', title: 'Understand Her, Don\u2019t Try to Convert Her',
    reflection: "It is a quiet trap to treat a wife or partner as a project to be corrected into your own way of thinking, rather than a person to be understood. The instinct to fix, direct, or slowly reshape someone into a more convenient version of themselves usually says more about a man\u2019s own insecurity than about anything actually wrong with her. Real strength studies a partner well enough to know how to love her specifically, not how to make her easier to manage.",
    scriptureRef: '1 Peter 3:7 (KJV)',
    scriptureText: 'Likewise, ye husbands, dwell with them according to knowledge, giving honour unto the wife, as unto the weaker vessel, and as being heirs together of the grace of life; that your prayers be not hindered.',
    prompt: 'Where have you recently tried to change your partner rather than genuinely trying to understand her?'
  },
  {
    id: 'men-02', category: 'for-men', title: 'Am I Enough?',
    reflection: "Underneath a lot of male performance — the need to always look capable, unaffected, in control — is a much younger question that never fully got answered: am I enough? Chasing an answer through achievement, image or a woman\u2019s approval will always need a bigger achievement tomorrow. The only answer sturdy enough to hold weight is the one that was never about your own sufficiency in the first place.",
    scriptureRef: '2 Corinthians 3:5 (KJV)',
    scriptureText: 'Not that we are sufficient of ourselves to think any thing as of ourselves; but our sufficiency is of God.',
    prompt: 'Where are you currently trying to prove you are enough, instead of resting in a sufficiency that was never meant to come from you?'
  },
  {
    id: 'men-03', category: 'for-men', title: 'Rest Before You Break',
    reflection: "Weariness is not a character flaw, but where a tired man goes looking for relief matters enormously. A man who never admits he needs rest eventually finds it somewhere unsafe — a flattering distraction, a secret indulgence, a relationship that was never his to lean on. The strength to keep going and the humility to actually stop are not opposites; a man who never learns the second one eventually loses the first.",
    scriptureRef: 'Matthew 11:28 (KJV)',
    scriptureText: 'Come unto me, all ye that labour and are heavy laden, and I will give you rest.',
    prompt: 'When you are genuinely worn out, where do you actually go for rest — and is it a safe place?'
  },
  {
    id: 'men-04', category: 'for-men', title: 'Releasing What God Reassigns',
    reflection: "Every season of strength eventually gives way to a new one — a role changes, someone younger rises, a body does not perform the way it once did. The temptation is to grip tighter exactly when it is time to release. A man who can only feel secure while he is winning, first, or irreplaceable has built his identity on something with an expiration date.",
    scriptureRef: 'Ecclesiastes 3:1 (KJV)',
    scriptureText: 'To every thing there is a season, and a time to every purpose under the heaven.',
    prompt: 'What season of your life or identity are you currently gripping tightly, that might actually be ending?'
  },
  {
    id: 'men-05', category: 'for-men', title: 'Provide More Than Money',
    reflection: "Financial provision is real and it matters, but it is only one kind of security a household needs. There is spiritual security — a man whose household can see his convictions in his actual life. There is a sense of direction, physical safety, emotional availability, integrity that holds under pressure, and a willingness to actually answer for his choices to someone. A man who provides money but nothing else has covered one need out of several.",
    scriptureRef: 'Joshua 24:15 (KJV)',
    scriptureText: 'And if it seem evil unto you to serve the LORD, choose you this day whom ye will serve\u2026 but as for me and my house, we will serve the LORD.',
    prompt: 'Beyond money, which kind of security has your household actually been missing from you?'
  },
  {
    id: 'men-06', category: 'for-men', title: 'Accountability Protects Leadership',
    reflection: "A man who answers to no one is not more free; he is simply unprotected. Every serious moral collapse tends to share one thing in common — a season where no one was close enough, or trusted enough, to ask the hard question and expect a real answer. Real strength includes being genuinely correctable by people who have earned the right to speak into your life.",
    scriptureRef: 'Proverbs 11:14 (KJV)',
    scriptureText: 'Where no counsel is, the people fall: but in the multitude of counsellors there is safety.',
    prompt: 'Who currently has real permission to ask you a hard question and expect an honest answer?'
  },
  {
    id: 'men-07', category: 'for-men', title: 'Beware the Ladder Trap',
    reflection: "It is possible to build genuine influence and still quietly begin treating people as rungs — useful in proportion to what they can do for you. A relationship built for what it can provide will eventually be dropped the moment it stops providing. True greatness in leadership was never measured by how many people serve you, but by how well you serve the people entrusted to you.",
    scriptureRef: 'Mark 10:45 (KJV)',
    scriptureText: 'For even the Son of man came not to be ministered unto, but to minister, and to give his life a ransom for many.',
    prompt: 'Is there a relationship in your life you have started treating as useful rather than as someone to genuinely serve?'
  },

  // ---------------- FOR WOMEN ----------------
  {
    id: 'women-01', category: 'for-women', title: 'You Are Not Defined by His Absence',
    reflection: "The presence or absence of a father shapes how a woman first learns to expect love from men — but it does not have the final word on her worth. Whatever went unaffirmed in childhood is real, and it is also not permanent; it can be brought to a Father who does not run out of attention, approval, or presence, and who was never going to let an earthly gap be the final word on your identity.",
    scriptureRef: '2 Corinthians 6:18 (KJV)',
    scriptureText: 'And will be a Father unto you, and ye shall be my sons and daughters, saith the Lord Almighty.',
    prompt: 'What is one thing you have been seeking from male attention that was actually always meant to come from knowing who you are?'
  },
  {
    id: 'women-02', category: 'for-women', title: 'Gluttony Does Not Heal Starvation',
    reflection: "When something real went unmet early on, it is tempting to try to fill it by taking in as much attention, affirmation or affection as you can get, as fast as you can get it. But more of the wrong thing does not heal a lack — it just becomes a different kind of hunger. What actually heals a real deficit is being genuinely supplied, not merely filled.",
    scriptureRef: 'Philippians 4:19 (KJV)',
    scriptureText: 'But my God shall supply all your need according to his riches in glory by Christ Jesus.',
    prompt: 'Is there an old lack you have been trying to overcorrect for, rather than bring honestly to God to actually supply?'
  },
  {
    id: 'women-03', category: 'for-women', title: 'The Right to Choose',
    reflection: "Discernment is not the opposite of love; it is what makes love safe to give. Choosing someone because his treatment of you feels familiar — even when that familiarity is actually old pain wearing a new face — is not the same as choosing someone because he is genuinely worth trusting. The right to choose well is a real power. It is worth using slowly.",
    scriptureRef: 'Proverbs 14:15 (KJV)',
    scriptureText: 'The simple believeth every word: but the prudent man looketh well to his going.',
    prompt: 'Is there a pattern that feels familiar in how someone is treating you right now, that is actually worth questioning rather than trusting?'
  },
  {
    id: 'women-04', category: 'for-women', title: 'Arise Into Your Purpose',
    reflection: "It is possible to spend a season quietly waiting for a relationship to finally begin real life — postponing dreams, growth and joy until someone else arrives to validate them. But purpose was never conditioned on a relationship status. Whatever season you are in right now is still a legitimate place to rise, grow, and pursue what you were actually made for.",
    scriptureRef: 'Mark 5:41 (KJV)',
    scriptureText: 'And he took the damsel by the hand, and said unto her, Talitha cumi; which is, being interpreted, Damsel, I say unto thee, arise.',
    prompt: 'What have you been putting on hold until a relationship arrives, that you could actually rise into now?'
  },
  {
    id: 'women-05', category: 'for-women', title: 'Refined, Not Diminished',
    reflection: "Grace and dignity are not the same as making yourself smaller. A woman does not need to shrink her voice, her intelligence or her convictions to be received well by a man worth receiving. Meekness in scripture was never weakness — it was strength that has chosen not to force itself. That is a very different thing from strength that was never allowed to exist in the first place.",
    scriptureRef: '1 Peter 3:4 (KJV)',
    scriptureText: 'But let it be the hidden man of the heart, in that which is not corruptible, even the ornament of a meek and quiet spirit, which is in the sight of God of great price.',
    prompt: 'Is there a part of yourself you have been shrinking to be more easily accepted, rather than genuinely offering in strength?'
  },
  {
    id: 'women-06', category: 'for-women', title: 'Build Your Own Financial Base',
    reflection: "Financial stewardship is not about preparing for a marriage to fail — it is about entering or staying in one as a capable steward rather than a dependent liability. A woman who works, saves, and invests with her own hands is not competing with her husband's provision; she is strengthening the household's whole foundation, and protecting her own dignity and options no matter what seasons come.",
    scriptureRef: 'Proverbs 31:16 (KJV)',
    scriptureText: 'She considereth a field, and buyeth it: with the fruit of her hands she planteth a vineyard.',
    prompt: 'What is one concrete step you could take this month to build your own financial base, regardless of your relationship status?'
  },
  {
    id: 'women-07', category: 'for-women', title: 'Don\u2019t Make Him Your God',
    reflection: "It is a heavy, impossible weight to be someone's entire source of identity, security and worship — and no man, however good, can bear it without eventually failing under it. When God holds first place, a husband is free to simply be a husband: present, loved, human, and imperfect, without being asked to function as your savior. That arrangement is safer for both of you.",
    scriptureRef: 'Exodus 20:3 (KJV)',
    scriptureText: 'Thou shalt have no other gods before me.',
    prompt: 'Is there a place in your heart currently expecting a man to be what only God was ever meant to be?'
  },

  // ---------------- MONEY & MARRIAGE ----------------
  {
    id: 'money-01', category: 'money', title: 'God, Not Your Spouse, Is the Source',
    reflection: "It is easy to quietly transfer the job of \"provider\" from God onto a spouse, and then feel betrayed whenever they cannot fully carry it. A spouse is a channel God can use, not the source itself. That distinction matters practically: it keeps you from panicking as though your future collapsed when a job is lost, and it keeps you from silently resenting a spouse for not being able to do what was never actually theirs to guarantee.",
    scriptureRef: 'Haggai 2:8 (KJV)',
    scriptureText: 'The silver is mine, and the gold is mine, saith the LORD of hosts.',
    prompt: 'Have you been quietly expecting your spouse to be your source, rather than a channel God is using?'
  },
  {
    id: 'money-02', category: 'money', title: 'Agree Before You Argue',
    reflection: "Most money conflict in marriage is not really about the money; it is about two people discovering, in the heat of a decision, that they never actually agreed on a shared financial direction in the first place. Sitting down while calm to agree on priorities, limits and goals turns future disagreements into a matter of checking the plan, rather than relitigating the whole relationship every time a bill or a want shows up.",
    scriptureRef: 'Matthew 18:19 (KJV)',
    scriptureText: 'Again I say unto you, That if two of you shall agree on earth as touching any thing that they shall ask, it shall be done for them of my Father which is in heaven.',
    prompt: 'What financial decision keeps causing tension because you and your partner never actually agreed on it in advance?'
  },
  {
    id: 'money-03', category: 'money', title: 'Transparency Is Not Optional',
    reflection: "Financial secrecy in a marriage — a hidden account, an undisclosed debt, spending neither partner can see — behaves exactly like any other secret: it quietly teaches both people that the relationship cannot fully be trusted with the truth. Real financial partnership does not require identical opinions on every purchase, but it does require that nothing about the household's money is deliberately hidden from the person who shares the household.",
    scriptureRef: 'Luke 8:17 (KJV)',
    scriptureText: 'For nothing is secret, that shall not be made manifest; neither any thing hid, that shall not be known and come abroad.',
    prompt: 'Is there any part of your financial life right now that your spouse or partner does not actually know about?'
  },
  {
    id: 'money-04', category: 'money', title: 'Generosity Over a Rigid Split',
    reflection: "A marriage run purely on \"my half, your half\" tends to calcify into keeping score. A marriage run on generosity — each person contributing according to capacity and season, not a fixed formula — flexes naturally when one partner earns more, less, or nothing for a while. Rigid fairness protects an individual. Generosity protects a partnership.",
    scriptureRef: '2 Corinthians 9:7 (KJV)',
    scriptureText: 'Every man according as he purposeth in his heart, so let him give; not grudgingly, or of necessity: for God loveth a cheerful giver.',
    prompt: 'Is your household currently run more on rigid fairness or on generous partnership — and which season actually calls for which?'
  },
  {
    id: 'money-05', category: 'money', title: 'Save for Tomorrow Without Starving Today',
    reflection: "Spending everything as it arrives leaves a household one bad season away from crisis. Hoarding everything out of fear leaves a household unable to actually enjoy what it has been given. Wisdom holds both together — living generously and gratefully in the present while still, deliberately, setting something aside for a future that has not asked permission to arrive.",
    scriptureRef: 'Proverbs 21:20 (KJV)',
    scriptureText: 'There is treasure to be desired and oil in the dwelling of the wise; but a foolish man spendeth it up.',
    prompt: 'What percentage of what comes into your household is actually being set aside on purpose, rather than simply spent as it arrives?'
  },

  // ---------------- FAMILY ROOTS ----------------
  {
    id: 'roots-01', category: 'roots', title: 'Roots and Fruits',
    reflection: "Whatever you watched modeled at home — how conflict was handled, how love was shown or withheld, how money or anger or silence was used — tends to show up again in your own relationships unless it is deliberately examined. This is not about blame; the people who raised you were often simply repeating what they inherited too. It is about noticing, on purpose, before repeating it becomes automatic.",
    scriptureRef: 'Proverbs 22:6 (KJV)',
    scriptureText: 'Train up a child in the way he should go: and when he is old, he will not depart from it.',
    prompt: 'What pattern from the home you grew up in have you noticed quietly showing up in how you relate to others?'
  },
  {
    id: 'roots-02', category: 'roots', title: 'What Is Tolerated Gets Repeated',
    reflection: "A dysfunctional pattern rarely announces itself as dysfunction; it usually arrives disguised as \"just how things are.\" The moment a harmful pattern gets quietly normalized instead of named, it stops being questioned — and what goes unquestioned in one generation tends to simply continue into the next. Naming a pattern honestly, even when it is uncomfortable, is the first real interruption of it.",
    scriptureRef: 'James 3:16 (KJV)',
    scriptureText: 'For where envying and strife is, there is confusion and every evil work.',
    prompt: 'What pattern in your family has always been treated as normal, that actually deserves to be questioned?'
  },
  {
    id: 'roots-03', category: 'roots', title: 'Breaking the Cycle Is Possible',
    reflection: "Whatever was learned by watching can also be unlearned on purpose. A family history of a certain kind of failure is not a prophecy over your own life — it is simply data about what you will need to be intentional about. Plenty of people have become the first in their family line to do something differently, not because their past was easier than anyone else's, but because they decided the cycle would end with them.",
    scriptureRef: '2 Corinthians 5:17 (KJV)',
    scriptureText: 'Therefore if any man be in Christ, he is a new creature: old things are passed away; behold, all things are become new.',
    prompt: 'What specific cycle from your family history are you determined will end with you?'
  },
  {
    id: 'roots-04', category: 'roots', title: 'Discretion Should Govern Disclosure',
    reflection: "Honesty about your past does not require dumping every detail onto someone the moment you meet them, nor does it mean hiding everything indefinitely out of shame. Trust is built in layers, and what gets shared can be paced to match how much trust has actually been earned on both sides. Wisdom is not the same as secrecy, and vulnerability is not the same as having no filter.",
    scriptureRef: 'Ecclesiastes 3:7 (KJV)',
    scriptureText: 'A time to rend, and a time to sew; a time to keep silence, and a time to speak.',
    prompt: 'Is there something about your past you have either over-shared too early, or are still hiding out of unnecessary shame?'
  },
  {
    id: 'roots-05', category: 'roots', title: 'Forgiving Your Past Without Excusing It',
    reflection: "Forgiving a parent or a painful history does not mean pretending it did not happen or was acceptable. It means releasing the grip that unresolved bitterness has on you specifically, so it stops quietly steering decisions in your present relationships. Unforgiveness rarely punishes the person who caused the wound; it usually just keeps punishing the person still carrying it.",
    scriptureRef: 'Hebrews 12:15 (KJV)',
    scriptureText: 'Looking diligently lest any man fail of the grace of God; lest any root of bitterness springing up trouble you, and thereby many be defiled.',
    prompt: 'Is there a root of bitterness from your family history that may still be quietly shaping how you relate to others?'
  },
  {
    id: 'roots-06', category: 'roots', title: 'The Relationship Bank Account',
    reflection: "Every relationship works a little like an account. Honesty, affection, kept promises and small kindnesses are deposits. Criticism, broken word and betrayal are withdrawals. A relationship with years of consistent deposits can usually absorb a hard season without collapsing; a relationship already running on empty cannot survive even a small withdrawal. Whatever pattern of giving and taking you watched growing up, you get to decide what your own account actually runs on.",
    scriptureRef: 'Luke 6:38 (KJV)',
    scriptureText: 'Give, and it shall be given unto you; good measure, pressed down, and shaken together, and running over, shall men give into your bosom. For with the same measure that ye mete withal it shall be measured to you again.',
    prompt: 'Has your relationship account lately had more deposits going in, or more withdrawals coming out?'
  },

  // ---------------- COMMUNICATION ----------------
  {
    id: 'comm-01', category: 'communication', title: 'Mind Over Mouth',
    reflection: "Almost every word that later needed an apology was said faster than it was thought through. The gap between an impulse to speak and the actual words leaving your mouth is where wisdom does its work — deciding whether a thought deserves to be spoken at all, and if so, how. Quick reactions feel honest in the moment; they are just as often only reckless.",
    scriptureRef: 'James 1:19 (KJV)',
    scriptureText: 'Wherefore, my beloved brethren, let every man be swift to hear, slow to speak, slow to wrath.',
    prompt: 'What is something you said recently that would have benefited from a longer pause between thought and mouth?'
  },
  {
    id: 'comm-02', category: 'communication', title: 'Listen to Understand, Not to Reply',
    reflection: "There is a specific, common failure that looks like listening but is not: nodding along while actually just waiting for the other person to stop talking so you can say what you already decided to say. Real listening changes you a little — it lets what the other person said actually land before you respond to it. Most conflicts are not solved by better arguments. They are solved by someone finally feeling heard.",
    scriptureRef: 'Proverbs 18:13 (KJV)',
    scriptureText: 'He that answereth a matter before he heareth it, it is folly and shame unto him.',
    prompt: 'In your last disagreement, were you genuinely listening, or were you mainly waiting for your turn?'
  },
  {
    id: 'comm-03', category: 'communication', title: 'The Sandwich Approach to Correction',
    reflection: "Correction lands very differently depending on how it arrives. Criticism dropped with no context tends to be heard as an attack, even when it is accurate. Correction wrapped in genuine commendation — naming something real that is working, addressing the concern clearly, and closing with sincere affirmation — tends to actually be received, because it makes clear the relationship is not under threat, only the specific issue is.",
    scriptureRef: 'Revelation 3:19 (KJV)',
    scriptureText: 'As many as I love, I rebuke and chasten: be zealous therefore, and repent.',
    prompt: 'The last time you corrected your partner, did it feel like an attack on them, or a specific concern from someone clearly for them?'
  },
  {
    id: 'comm-04', category: 'communication', title: 'Say It Before Silence Says It For You',
    reflection: "Feeling love and communicating it are not the same action, and a relationship only really has access to the second one. Affection that stays entirely internal — never spoken, never demonstrated — is functionally invisible to the person who needed to receive it. Silence has a way of getting interpreted as absence, even when the feeling was real the whole time.",
    scriptureRef: '1 John 3:18 (KJV)',
    scriptureText: 'My little children, let us not love in word, neither in tongue; but in deed and in truth.',
    prompt: 'What love have you been feeling but not actually expressing in words or action lately?'
  }
];

export function meditationsByCategory(categoryId) {
  return MEDITATIONS.filter(m => m.category === categoryId);
}
