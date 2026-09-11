// Meditation & Scripture module
// Original reflections written for this app — inspired by the general, publicly known
// themes of the "seasons of love" framework popularized by teachers such as
// Myles Munroe ("Waiting and Dating", "The Purpose and Power of Love and Marriage"),
// Ben Stuart ("Single, Dating, Engaged, Married"), Faith Oyedepo ("Single With A
// Difference", "Dating: A Biblical Guide"), David O. Oyedepo ("In Pursuit of Vision")
// and T.D. Jakes ("T.D. Jakes Speaks to Men", "Daddy Loves His Girls").
// These are NOT excerpts or reproductions of those books — no text from those copyrighted
// works is copied here; only the general subject areas they teach on (e.g. "singleness as
// a purposeful season", "peace as a test of guidance", "a marriage needs a shared vision",
// "a man's identity apart from performance", "a woman's identity apart from a father's
// absence") inspired which topics to write about, in entirely original wording. Each entry
// pairs an original short reflection with a full King James Version scripture passage
// (public domain) and a question to journal or discuss. Readers who want the authors' own
// words are encouraged to read the original books.

export const MEDITATION_SOURCES = [
  { name: 'Waiting and Dating', author: 'Myles Munroe' },
  { name: 'The Purpose and Power of Love and Marriage', author: 'Myles Munroe' },
  { name: 'Single, Dating, Engaged, Married', author: 'Ben Stuart' },
  { name: 'Single With A Difference', author: 'Faith Oyedepo' },
  { name: 'Dating: A Biblical Guide', author: 'Faith A. Oyedepo' },
  { name: 'In Pursuit of Vision', author: 'David O. Oyedepo' },
  { name: 'T.D. Jakes Speaks to Men', author: 'T.D. Jakes' },
  { name: 'Daddy Loves His Girls', author: 'T.D. Jakes' }
];

export const MEDITATION_CATEGORIES = [
  { id: 'waiting', label: 'Waiting', icon: '⏳', tagline: 'The single season is not a waiting room — it is training ground.' },
  { id: 'dating', label: 'Dating', icon: '🌱', tagline: 'Dating is for discovery, not performance.' },
  { id: 'engaged', label: 'Engaged', icon: '💍', tagline: 'A season to build, not just to celebrate.' },
  { id: 'married', label: 'Married', icon: '🕊️', tagline: 'Covenant love, tested and renewed daily.' },
  { id: 'guidance', label: 'Guidance', icon: '🧭', tagline: 'Purpose, discernment and hearing God clearly in every season.' },
  { id: 'vision', label: 'Vision', icon: '🎯', tagline: 'Where there is no vision for a relationship, it drifts toward destruction.' },
  { id: 'for-men', label: 'For Men', icon: '🛡️', tagline: 'Identity, rest and leadership that comes from character, not performance.' },
  { id: 'for-women', label: 'For Women', icon: '💎', tagline: 'Worth, discernment and destiny that were never on loan from a man.' }
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
  }
];

export function meditationsByCategory(categoryId) {
  return MEDITATIONS.filter(m => m.category === categoryId);
}
