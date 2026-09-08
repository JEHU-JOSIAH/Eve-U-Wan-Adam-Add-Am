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
