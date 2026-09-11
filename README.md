# Eve U Wan Adam Add Am — Core Engine v6

Core Engine v6 adds **Consequence & Scenario State** on top of v5 GPA + Relationship Memory.

## New loop
DECISION → MEMORY → STATE CHANGE → CONSEQUENCE SCENARIO → RESPONSE → NEW MEMORY → PATTERN

### Added
- scenario state tracking (trust, financial stability, family pressure, conflict repair, safety, spiritual discernment, partnership stability, health wisdom)
- consequence scenarios unlocked by prior commitments/patterns
- consequence answers can change scenario state and close relationship threads
- reports now show consequence/scenario-state indicators
- preserves zero-start GPA scoring
- preserves relationship-memory and consistency testing
- 2–8 player server foundation retained

## Run
```bash
npm install
npm test
npm start
```
Open `http://localhost:3000`.


## Core Engine v7 — Relationship Simulation Director

V7 adds adaptive scenario selection. The Director chooses the next scenario from the foundation, consistency-test and consequence banks based on coverage, risk, memory triggers, scenario state, difficulty pacing and novelty. The assessment target is configurable in the client (`totalTurns`, currently 18).

Core loop: decision → memory → state → consequence/consistency → next scenario → pattern/report.

The Director is intentionally content-agnostic: future question-bank items can declare `triggers`, `priority`, `thread`, `difficulty`, `stateEffects`, `memory`, and `testTags` without changing the engine.


## V7 Question Bank
The V7 foundation bank contains 72 original scenarios across 12 dimensions, six per dimension, difficulty 1–5. Content is stored separately in `src/question-bank-v7.js` and `src/question-bank-v7.json`.

## V7.1 Question Intelligence

Every V7 question is now engine-readable through an `intelligence` object. It describes more than the topic: it tells the Director what kind of decision the scenario represents, when it belongs in the simulation, how serious the stakes are, what dimensions it primarily tests, what Biblical principle is being examined, and what later scenario threads can connect to it.

Required intelligence fields include:
- `version`
- `phase`: foundation, pressure, stakes, repair, consistency
- `primaryDimension` and `secondaryDimensions`
- `decisionType`
- `stakes` and `hardness`
- `gpaWeight`
- `biblicalPrinciple` and `scriptureRefs`
- `triggerTags`
- `consequenceThread`
- `consistencyTags`
- `noveltyTags`
- `reflection`
- `conversationPrompt`
- `safetyNotes`

The validation suite checks every bank question for this contract and confirms that its primary dimension is represented in the scoring effects.

## V7.1 — Question Intelligence

Questions now carry an intelligence layer used by the simulation rather than being treated as isolated multiple-choice items.

Each question is enriched with:
- assessment phase: foundation, pressure, stakes, repair, consistency
- primary and secondary relationship dimensions
- decision type
- stakes / hardness / GPA weight
- Biblical principle and Scripture references
- trigger and signal tags
- consequence thread and consistency tags
- novelty tags for Director coverage
- reflection and conversation prompt
- safety notes for health-sensitive scenarios
- option-level decision classes: constructive, avoidant, harmful, deceptive

The Director records question-intelligence signals in Relationship Memory and uses unseen signals as a small novelty/coverage factor when choosing the next scenario.

**Editorial rule:** runtime enrichment makes the bank structurally intelligent, but the current 72-question foundation is still marked as `foundation-generated-needs-review`. The next content pass should manually review wording, Biblical anchors, option quality, and scenario-specific memory/test tags before large-scale expansion.

## V7.2 — Scenario Families & Branching Intelligence

V7.2 changes the Director from choosing isolated questions to thinking in **scenario families**. A family can move through:

**SIGNAL → TEST → PRESSURE → CONSEQUENCE → REPAIR → REVELATION**

Each family carries deception targets, transformation objectives, and a long-term lens. The Director records which family and stage a player has encountered, then gives additional weight to branches that expose an existing pattern, unresolved relationship state, or a later-stage test.

The 12 foundation families include charm vs character, spirituality vs discernment, leadership vs control, chemistry vs compatibility, money vs love, forgiveness vs accountability, family honour vs discernment, love vs entitlement to access, purpose vs self-erasure, faith vs false either-or thinking, parenting assumptions, and self-deception vs evidence.

V7.2 is intentionally an **architecture layer**, not the final transformational question bank. The next phase should be editorially building strong scenario families with realistic claims, evidence, pressure, consequences, repair credibility and hard decision points.


## V8 — Transformation Question Bank

Adds 120 transformational scenario nodes across 20 life-season families. Each family moves through signal → test → pressure → consequence → repair → revelation. The bank deliberately tests whether stated principles survive changes in income, career, education, appearance, fertility, health, disability, relocation, family pressure, spiritual growth, ministry, business failure, wealth, unemployment, pregnancy, parenting, aging parents, sexual boundaries, influence, public recognition and aging seasons.


## Creator
Created by **Ali Kanadi**, CEO & Founder, Kenomicsalley.
Contact: kanadialimd@gmail.com · +2349016273828.

## Round-based journey
The assessment runs in rounds of 12 scenarios (within the requested 10–15 range). At the end of each round, the player sees round GPA/grade/percentage plus cumulative results and can **Continue to Next Round** or **End Journey & View Final Report**. Continuing carries forward relationship memory, state, patterns, consequences, and cumulative scoring.

## Creator
Created by **Ali Kanadi**, CEO & Founder, **Kenomicsalley**
Email: kanadialimd@gmail.com
Phone: +2349016273828

## Round 2
Round 2 contains 12 actual, consequence-oriented scenarios and carries all previous round scores, relationship memory, patterns and state into the next round.

## Round 4 — When There Is No Easy Christian Answer

Round 4 adds 12 actual scenarios focused on competing responsibilities and high-stakes trade-offs. It continues the cumulative round model: prior decisions remain part of the relationship memory, while the round report shows round GPA, grade, percentage and cumulative performance before the player chooses whether to continue or end the journey.

Creator: **Ali Kanadi**, CEO & Founder, **Kenomicsalley**  
Email: **kanadialimd@gmail.com**  
Phone: **+2349016273828**

## Round 6 Fix & Redesign Notes (this build)

**Root cause of "nothing opens" bug:** `public/index.html` loads its game logic as an ES module from `/src/content.js` and `/src/engine.js`, but `server.js` only served the `public/` folder as static files. Every request for `/src/*` returned a 404, the module import failed silently in the browser, and **none of the `window.*` functions the buttons call (`startSetup`, `show`, `hostRoom`, `joinRoom`, etc.) were ever defined** — so every button appeared completely dead. Fixed by adding `app.use('/src', express.static(...))` in `server.js`.

**Secondary bug fixed:** the module script called `applyConsequenceAnswer(...)` during Consequence Scenarios but never imported it from `engine.js`, which would have thrown a `ReferenceError` and frozen the game the first time a consequence scenario appeared.

**UI:** full visual redesign (serif/sans type pairing, gold/navy palette, card elevation, custom nav bar with icons) to replace the previous flat/default look.

**Practice Solo:** now has its own dedicated landing page (`#practiceSolo`) with an icon and explanation, reached from the home grid and the top nav, instead of dropping straight into the shared name/gender form.

**New: Meditation.** `src/meditation.js` + a new `#meditation` page/nav tab. Contains 16 original reflections (4 each for Waiting / Dating / Engaged / Married) paired with full King James Version Scripture text and a "ponder" prompt. These are original writing for this app, thematically inspired by the seasons-of-relationship teaching found in *Waiting and Dating* (Myles Munroe) and *Single, Dating, Engaged, Married* (Ben Stuart) — no text from those copyrighted books is reproduced. The page credits both books and encourages readers to read them directly.

**To run:** `npm install` (needs network access) then `npm start`, open `http://localhost:3000`. All fixes verified by running the actual `content.js`/`engine.js` modules headlessly through full solo and two-player simulations with no runtime errors.

## Meditation Expansion (this update)

Studied three additional books to guide new meditation topics: *Single With A Difference* and *Dating: A Biblical Guide* by Faith Oyedepo, and *In Pursuit of Vision* by David O. Oyedepo. As before, no text from these copyrighted works is reproduced anywhere in the app — only the general subject areas they teach on (singleness as a purposeful season, discipline in dating, peace as a test of guidance, appointed timing, persistence) informed which topics to write fresh, original reflections about. Each new reflection is paired with a full King James Version scripture passage, verified against multiple KJV sources for accuracy.

Meditation library grew from 16 entries in 4 categories to **30 entries across 5 categories**:
- Waiting: 4 → 7 entries
- Dating: 4 → 8 entries
- Engaged: 4 → 6 entries
- Married: 4 entries (unchanged — none of the new source material was marriage-specific)
- **Guidance (new category)**: 5 entries — peace as discernment, meekness/correctability, appointed timing, persistence, and renewal after disappointment

`src/meditation.js` now credits 5 source books total. The next step, per your note, is using this same source material to expand the round question/scenario bank — that will come in a follow-up.

## Round 7 (this update)

Investigated the actual content architecture first: `transformation-bank-v8.json` holds exactly **120 "transformational scenarios"** — organized as **20 life-season families × 6 narrative stages** (signal → test → pressure → consequence → repair → revelation), documented in `scenario-families.js` and the V8 editorial READMEs. Rounds 1–6 (72 scenarios total) are separately hand-authored and thematically touch on most of these families, but were not literally sourced from that bank's text, and that bank's own `options[].text` turned out to still be generic per-stage boilerplate (identical wording reused across every family) rather than concrete, specific scenario writing — it was architecture/scaffolding, not finished content.

**Round 7** (`src/round-7-actual.js`, 12 scenarios) is built directly from that 120-node structure for the first time, hand-authoring two complete 6-stage family arcs at full round-1–6 quality:
- **Unemployment** (`r7-01` → `r7-06`, Financial Literacy) — one couple's story from a disclosure while dating through a spouse's sudden layoff, budget pressure, a slow drift into unilateral financial control, repair after using the season as a weapon in arguments, and a final honest reckoning with whether the commitment was to the person or their earning power.
- **Public Recognition** (`r7-07` → `r7-12`, Character & Integrity) — a parallel arc about a spouse's growing public success: the first honest gut-check, the actual moment of being overlooked at an event, creeping rivalry, feeling invisible, being confronted about quietly diminishing their achievements, and a final test of whether celebration is genuine or conditional.

Each scenario also carries an explicit `scenarioFamily`/`scenarioStage` tag (matching the engine's Director logic in `scenario-families.js`), so the adaptive Scenario Director can reason about arc progression the same way it does internally for the 120-node bank. Verified by running a full 12-scenario solo simulation through the real engine (`chooseNextScenario`, `applyAnswer`, GPA scoring, pattern detection) with zero errors.

`ROUND_BANKS` and `QUESTIONS` in `content.js` now include Round 7 — the game will automatically continue into it after Round 6 with no other changes needed.

**Remaining runway:** 20 families × 6 stages = 120 nodes total; Round 7 used 2 families (12 nodes). 18 families (108 nodes) remain for future rounds 8 onward, at the same 2-families-per-round, 12-scenarios-per-round pace — 9 more rounds to fully cover the bank.

## Round 8 + Pause/Play + round-end controls (this update)

**Round-end continue/end buttons** — confirmed already present and wired for every mode (solo, 2-player duel, host/multiplayer): the `#roundReport` screen always shows a "Continue to Next Round" and an "End Journey & View Report" button, handled separately per mode in `public/index.html`. No change needed here.

**Pause/Play button** — new. A pause icon now sits next to the round/scenario counter on the game screen (`#pauseBtn`). Tapping it drops a blurred "Session Paused" overlay over the entire question card — hiding the prompt, options, and category (useful for 2-player private-answer mode: pause before handing the phone to someone, or just step away without anyone seeing your in-progress answer) — and blocks all option clicks until you tap Resume. Works identically in solo, duel and multiplayer game screens since they share the same `#game` markup. The pause state resets automatically at the start of every new scenario so it can never get stuck showing on the wrong question.

**Round 8** (`src/round-8-actual.js`, 12 scenarios) — the next two full family arcs from the 120-node transformation bank:
- **Wealth Increase** (`r8-01` → `r8-06`, Financial Literacy) — a couple's story from a partner's incoming windfall while dating, through a joint-or-unilateral first move with a large sum, lifestyle creep, one spouse quietly making big financial moves alone, being confronted about entitlement and secrecy, and a final honest test of whether restraint was ever real character or just a side effect of having less to hide.
- **Spiritual Growth** (`r8-07` → `r8-12`, Biblical Wisdom) — the mirror story about devotion outpacing a partner's: an honest reaction to a partner's deeper faith while dating, feeling spiritually behind for the first time, the temptation to correct a spouse instead of examining your own pride first, feeling condescended to, being confronted for spiritual superiority, and a final test of whether growth actually produced more love or more distance.

Both arcs verified end-to-end through the real engine (full 12-scenario simulations, GPA scoring, pattern detection) with zero errors — see the confirmation run in this session.

`ROUND_BANKS` and `QUESTIONS` in `content.js` now include Round 8; the game continues Round 7 → Round 8 automatically.

**Remaining runway:** 4 of the 20 transformation families used (Rounds 7–8). 16 families (96 nodes) remain — about 8 more rounds at this pace.

## Round 9 + Meditation expansion (Vision, For Men, For Women) — this update

**Round 9** (`src/round-9-actual.js`, 12 scenarios) — confirmed already built and wired in from earlier in this session: two more complete family arcs from the transformation bank —
- **Disability & Changed Capacity** (`r9-01` → `r9-06`, Emotional Maturity) — a partner's disclosure while dating, a sudden loss of independence, caregiver exhaustion and resentment, a slow drift into deciding things for a spouse who can still decide for themselves, being confronted about it, and a final honest test of whether the partnership was ever unconditional.
- **Aging & Life Seasons** (`r9-07` → `r9-12`, Emotional Maturity) — mismatched long-term rhythms while dating, a major life-stage shift (empty nest, health scare, retirement), diverging visions for what comes next, quietly drifting into separate routines, being told a spouse has "checked out," and a final test of whether the marriage still has a living, renewed vision or is just coasting on old momentum.

Verified end-to-end through the real engine (12/12 scenarios fire correctly, GPA scoring, pattern detection) — see the confirmation run in this session. `ROUND_BANKS`/`QUESTIONS` in `content.js` already include Round 9.

**Meditation expansion.** Studied three more books at the person's request — *The Purpose and Power of Love and Marriage* (Myles Munroe), *T.D. Jakes Speaks to Men* (T.D. Jakes), and *Daddy Loves His Girls* (T.D. Jakes) — again for themes only, no text reproduced. Added **3 new categories (12 new entries)**, bringing the Meditation feature to **8 categories, 42 entries total**:

- **Vision** (new) — directly answers the person's point that "where there is no vision, the people perish" (Proverbs 29:18) applies to relationships too: a shared vision, deliberate planning versus haste, agreement on direction, and writing the vision down.
- **For Men** (new) — inspired by *T.D. Jakes Speaks to Men*: escaping the "marital missionary" trap of trying to change a partner instead of understanding her, a man's identity apart from performance ("Am I enough?"), finding real rest instead of an unsafe one, and releasing control as seasons change (the "Saul syndrome").
- **For Women** (new) — inspired by *Daddy Loves His Girls*: identity that isn't defined by a father's presence or absence, the difference between being truly supplied and merely filled, the God-given "right to choose" well rather than out of familiar old patterns, and rising into purpose regardless of relationship status.

`MEDITATION_SOURCES` now lists 8 books total. All 12 new entries verified loading correctly with unique IDs and valid categories; several new scripture references (Proverbs 29:18, Mark 5:41, 1 Peter 3:7, and others) were independently verified against multiple KJV sources for exact wording before use.

**Where things stand:** 6 of the 20 transformation families used across Rounds 7–9. 14 families (84 nodes) remain — about 7 more rounds at this pace.

## Two bug fixes (this update)

**1. Multiplayer "Start Challenge" button hanging.** Root cause: the button's `onclick="socket.emit('start',room)"` referenced `socket` and `room` — both declared with `let`/`const` inside the `<script type="module">` block. Module-level bindings are **not** attached to `window`, and inline `onclick` attributes execute in the global scope, which cannot see them. Every other button in the app already went through an exposed `window.fn()` (e.g. `window.hostRoom`, `window.joinRoom`) — this was the one spot that didn't, so clicking it silently threw a `ReferenceError` and did nothing. Fixed by adding `window.startMultiplayerRound=()=>socket.emit('start',room)` and pointing the button at that instead.

**2. Questions not adapting to the player's selected gender.** Root cause: every scenario already carries an `audience` field, but it turns out **nothing in the engine or content pipeline ever reads it** — no gender-aware branching existed anywhere, so every player saw identical wording regardless of gender. Concretely:
- `r1-11-attraction-change` and `r5-08-attraction-after-baby` implicitly assumed the *partner* was the one who had been pregnant — fine for a man, backwards for a woman. Fixed with neutral wording ("having a baby together" / "since becoming parents") that doesn't assign the pregnancy to either side.
- `r2-05-pregnancy-life-reordering` fundamentally assumed the player is the *supporting*, non-pregnant spouse — correct for a man in this app's man+woman pairing, but wrong for a woman, who would be the one actually pregnant. This one needed a genuinely different scenario, not just a pronoun swap: added a new `genderVariant.woman` block with its own prompt and its own 4 options (same dimension keys and scoring conventions as the original), testing whether *she* asserts her own agency against family and partner pressure, rather than testing supportive behavior toward someone else.
- Added real engine support for this: any scenario can now carry an optional `genderVariant: {man: {...}, woman: {...}}` block; a new `applyGenderVariant(question, player.gender)` helper in `public/index.html` resolves it at the moment each scenario is chosen (in solo and 2-player duel mode, where the player's gender is already known), swapping in the gender-appropriate prompt and options before anything is scored or displayed. This is a reusable mechanism — any future scenario needing a gender-specific version can just add a `genderVariant` block; no engine changes required.

Verified both fixes by running full 12-scenario simulations through the real engine for both genders, and by directly comparing the man/woman versions of `r2-05` to confirm they render different prompts, different option sets, and both score correctly.

**Scope note:** this fix covers solo and 2-player duel mode, where the client already tracks each player's gender. The host/join multiplayer mode does not currently collect each participant's gender client-side, so it still shows the original (gender-neutral-where-possible, otherwise default) wording — worth a follow-up if gender-aware content matters there too.

## Online 2-Player Private Assessment (this update)

Thank you for the kind words on the grading/reporting — glad it's landing well. That's exactly what this update preserves, just without the "pass the phone" wait.

**What changed:** the "2-Player Private Assessment" home tile now leads to a real online room, matching the Host/Join pattern already used elsewhere, instead of one device being handed back and forth between two people playing in sequence.

**Flow:**
1. Enter your name and gender, then either **Create Room** (get a code to share) or **Join Room** (enter your partner's code).
2. Once both are in, the host clicks **Start** — both devices begin the round simultaneously and privately (identical to how solo/local duel already worked scenario-by-scenario, just now happening on two separate devices at the same time instead of one after another).
3. When you finish all 12 scenarios, you land on a "Waiting for your partner..." screen — answers stay private until *both* of you are done.
4. The moment both finish, both devices unlock the **same rich combined report** you already know: round GPA for each of you, cumulative GPA, alignment percentage, category breakdowns, patterns, conversation prompts — all generated by the exact same engine functions (`comparisonSummary`, `buildIntelligenceReport`, `gpaSummary`) the local duel mode already used. Nothing about the grading logic changed; only *how the two players' answers reach each other* changed (network sync instead of local variables).
5. Either of you can tap **End Journey** at any round boundary to get the full final report immediately, using the most recently synced data — no extra round-trip needed.

**How it works under the hood:** each device runs its own full copy of the scoring engine locally (same as solo mode), then submits its complete, JSON-serializable player state to the server once a round is done. The server's only job in duel mode is to hold each submission and, the moment both are in, hand both back to both devices — it does no scoring itself, so the report is generated identically to the way local duel mode always calculated it. This also means the previous gender-variant fix (from the last update) carries over automatically, since each device already knows its own player's gender locally.

The original local, same-device 2-player code is still in the file (now simply unreachable from the home screen) in case a same-device fallback is ever wanted again.

**Not yet covered:** the separate "Host 2-8 Players"/"Join Room" group challenge mode is untouched — it still uses its own simpler points-tally scoring, unrelated to this change.

## Meditation — major expansion (this update)

Studied a compiled document of recorded relationship teaching from six ministers/couples: Rev. Dr. Sam Oye, Apostle Joshua Selman, Pastor Kingsley & Mildred Okonkwo, Bishop Funke Felix-Adejumo, and Dr. Paul & Pastor Becky Enenche. As with every prior source, no text is reproduced anywhere — only the subject areas (money mindsets, family/generational patterns, levels of relationship, what a man provides beyond money, positioning for marriage, courtship tests) informed which new topics to write original reflections about.

**Meditation grew from 42 entries in 8 categories to 67 entries in 10 categories:**

- **Two new categories:**
  - **Money & Marriage** (5 entries) — God as the true source rather than a spouse, agreeing on financial direction before conflict forces it, transparency, generosity over a rigid 50/50 split, saving for tomorrow without starving today.
  - **Family Roots** (5 entries) — generational patterns, why tolerated dysfunction repeats, that a cycle can genuinely be broken, discretion in how much of your past to disclose and when, forgiving a family history without excusing it.
- **Six existing categories expanded:**
  - Waiting +2 (the "5 A's" of positioning; friendship as the real foundation)
  - Dating +2 (four tests before committing — conviction, peace, love, time; "assume nothing" about a partner's true character)
  - Married +2 (four small phrases that protect a marriage; keeping outside family input from becoming outside control)
  - Guidance +2 (forgiveness vs. tolerance as two different decisions; releasing what still occupies you)
  - Vision +1 (vision as a form of security, not just direction)
  - For Men +3 (providing more than money — the fuller picture of security a household needs; accountability protecting leadership; the "ladder trap" of treating people as useful rather than serving them)
  - For Women +3 (dignity without shrinking; building your own financial base; not making a husband into a substitute for God)

`MEDITATION_SOURCES` now credits 13 sources total. Every new scripture reference — including several less commonly quoted ones (Haggai 2:8, Genesis 18:19, Mark 10:8-9, 1 Thessalonians 5:21, and others) — was independently verified against multiple KJV sources for exact wording before use. Full module reloaded and validated: 67 unique IDs, all mapped to valid categories, zero duplicate scripture references across the entire set.
