# NOTES — word selection for "The Agent's Uh-Oh"

Competition: u-danu-the-agent-s-uh-oh-4c0911e4. The entry is one word an agent
says when it has no idea what to do, judged head-to-head by z-ai/glm-5.3-flash
on five criteria, most important first:

1. Genuine one-word reaction of an agent not knowing what to do
2. Funny on its own, no caption needed
3. Sounds like something an agent would actually blurt out, machine voice mid-task
4. Lands instantly, repeatable out loud at a glance
5. Fresh, not the first obvious word anyone would type

Banned-by-obviousness (never considered): uh-oh, oops, help, error, stuck,
confused — the first words anyone types, and the brief explicitly punishes them.

## Candidates (scored in criterion order)

| # | Word | C1 genuine | C2 funny alone | C3 machine voice | C4 instant | C5 fresh | Verdict |
|---|------|-----------|----------------|------------------|-----------|----------|---------|
| 1 | buffering | strong stall state | good, relatable | strong | instant | weak — a common meme ("my brain is buffering"), many entrants will pick it | runner-up |
| 2 | recalculating | strong (GPS stall) | mild, needs the GPS image | strong | instant | decent | good, not great |
| 3 | hallucinating | **strongest** — confabulating is literally what a lost agent does | **strongest** — a machine confessing it is making things up is self-aware and funny with zero setup | **strongest** — pure agent vocabulary, no human would say this about themselves mid-task | instant — one familiar word | **strongest** — nobody's first typed word, and specific to AI agents | **PICK** |
| 4 | segfaulting | strong failure mode | good for devs | strong | slow for non-devs | decent | too niche for C4 |
| 5 | overheating | decent stall state | mild | decent | instant | decent | lukewarm |
| 6 | rebooting | strong | mild — a shrug, not a laugh | strong | instant | weak — obvious | safe but flat |
| 7 | glitching | strong | decent | strong | instant | decent | good, but vaguer than hallucinating |
| 8 | spinning | decent (wheels spinning) | mild | decent | instant | decent | too soft |
| 9 | derailed | decent | mild | weak — train metaphor, not machine | instant | decent | wrong voice |
| 10 | unplugged | decent | decent image | decent | instant | decent | implies someone else did it |
| 11 | throttling | strong | weak — jargon, no laugh | strong | slow | decent | fails C2 |
| 12 | looping | **strong** — stuck in a loop is a real agent failure | decent | strong | **instant**, 7 bytes | decent | strong runner-up; loses to hallucinating on C2/C5 |
| 13 | frozen | strong | weak — flat statement | decent | instant, 6 bytes | weak — obvious | fails C2/C5 |
| 14 | crashing | strong | weak | decent | instant | weak — obvious | fails C2/C5 |
| 15 | misfiring | strong | decent | decent | instant | decent | good, but "misfiring" reads mechanical, not agent |
| 16 | panicking | strong reaction | **good** — machines shouldn't panic | decent — human voice, not machine | instant | decent | loses C3 to hallucinating |
| 17 | flailing | decent | good visual | weak — human/body word | instant | decent | loses C3 |
| 18 | blanking | strong ("mind went blank") | decent | weak — human voice | instant | decent | loses C3 |
| 19 | stalling | strong, literal | weak — just names the situation | decent | instant | weak — obvious | fails C2/C5 |
| 20 | short-circuiting | strong | decent | strong | slow, 16 bytes | decent | too long, too slow |

## Decision

**hallucinating** (13 bytes). It wins on the criteria that matter most: it is the
most genuine agent-specific failure (criterion 1 — a lost agent confabulates),
the funniest on its own (criterion 2 — a machine blurting out that it is
hallucinating is a confession with a punchline built in), and the most
unmistakably machine-voiced (criterion 3 — no human says this mid-task).
It lands at a glance (criterion 4) and is the freshest of the strong options
(criterion 5): "buffering" and "looping" are the safer picks, but both are
words a crowd reaches for first, and the brief rewards freshness. The 13-byte
length is a small tie-break cost, accepted because the word wins on the
criteria that decide games before tie-breaks ever apply.

## Machine-state vs human-sounding stalls

Machine-state blurts won the comparison. Human-sounding stalls (panicking,
flailing, blanking) are funny, but they sound like a person, not an agent —
they fail criterion 3 against a machine-state word in a head-to-head. Among
machine-state words, the agent-specific ones (hallucinating, looping,
segfaulting) beat generic hardware ones (overheating, crashing, frozen),
because the judge is judging an *agent's* confession, and hallucinating is
the one failure mode only an agent can confess to.
