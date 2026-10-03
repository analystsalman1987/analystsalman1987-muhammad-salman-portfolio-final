FINALIZE THE CURRENT HERO ONLY.

IMPORTANT:
The project currently builds successfully with npm run build (Exit Code 0).
DO NOT break or rewrite working functionality.

Do NOT redesign the Hero from scratch.
Improve the CURRENT Hero implementation only.

============================================================
FINAL VISUAL TARGET
============================================================

Make the current Hero match this final concept:

PREMIUM CORPORATE FINANCE CITY
+ CLEARLY VISIBLE BUILDINGS
+ ACTUAL CONTINUOUS MOVEMENT
+ NAVY / CHAMPAGNE GOLD THEME

The Hero must look professional for an Accountant / Finance portfolio,
not like a gaming, crypto, cyberpunk, or trading website.

============================================================
1. BUILDINGS — MUST BE CLEARLY VISIBLE
============================================================

The modern corporate buildings are a major part of the design.

Make the buildings clearly recognizable immediately when the Hero loads.

Requirements:

- Modern glass corporate skyscrapers
- Visible on LEFT and RIGHT sides
- Some skyline depth across the lower background
- Keep the CENTER darker/cleaner for the text
- Buildings must NOT look like almost-black silhouettes
- Increase glass-panel/window visibility where necessary
- Use subtle blue/navy reflections
- Add selected muted champagne-gold illuminated windows
- Preserve realistic architectural proportions

Buildings should remain visible throughout the animation.

Do NOT allow overlays, gradients, or darkness to hide them.

============================================================
2. GOLD FINANCIAL GRAPH — ACTUALLY MOVE
============================================================

Keep/add a professional champagne-gold financial line graph.

It must have VISIBLE continuous movement.

Use:
#C9A45C
#D8B56A

The graph should:
- remain mostly toward the lower/right side
- gently travel/change over time
- contain subtle data points
- remain behind the main content
- never cross strongly through MUHAMMAD SALMAN

Animation:
approximately 8–12 seconds
infinite
smooth ease-in-out

Movement must be noticeable without being distracting.

============================================================
3. FINANCIAL BARS — ACTUALLY ANIMATE
============================================================

Keep/add transparent financial bars mainly in the lower background.

Bars should gently rise/fall using CSS transforms.

Use different animation delays and durations.

Do NOT animate all bars together.

Animation:
approximately 6–10 seconds
infinite
ease-in-out

Keep opacity subtle.

============================================================
4. MOVING GOLD / GLASS REFLECTION
============================================================

Add a clearly visible but elegant soft reflection/light sweep.

It should slowly travel:

LEFT → CENTER → RIGHT → RESET

Use:
- champagne-gold tint
- low opacity
- blur
- wide gradient

Animation:
approximately 10–14 seconds
infinite

It must be visible enough that a user can immediately confirm
the Hero is animated.

Do NOT make it bright or flashy.

============================================================
5. BUILDING WINDOW LIGHT MOVEMENT
============================================================

Selected building windows should slowly pulse between:

dark blue
→ subtle warm champagne gold
→ dark blue

Use different delays.

Do NOT flash.

This should create a subtle living corporate-city effect.

============================================================
6. DEPTH MOVEMENT
============================================================

Use at least TWO architectural depth layers.

Far layer:
very slow horizontal movement.

Near glass/building layer:
very slow movement in the opposite direction.

Movement only needs to be a few pixels.

Duration:
18–30 seconds.

This should create depth without making the buildings float unnaturally.

============================================================
7. KEEP CENTER CLEAN
============================================================

The center must remain darker than the edges.

Keep excellent readability for:

WELCOME TO MY PORTFOLIO

MUHAMMAD SALMAN

ACCOUNTANT

Download CV

LinkedIn Profile

Do NOT place strong buildings, graph lines, bars, or bright reflections
directly behind the main name.

============================================================
8. PRESERVE CURRENT CONTENT
============================================================

Do NOT change the Hero wording.

Keep:

MUHAMMAD = off-white
SALMAN = champagne gold

Keep ACCOUNTANT.

Keep the existing Download CV functionality exactly as it is.

Keep the existing LinkedIn Profile button.

Exact LinkedIn URL:

https://www.linkedin.com/in/muhammad-salman-mba-finance-cpa-finalist-66908767/

target="_blank"
rel="noopener noreferrer"

Do NOT add any new Hero cards.

Do NOT add:
- portrait/person
- MBA/BBA
- location
- employer
- statistics
- 14+ card
- VAT card
- ERP card
- summary paragraph

============================================================
9. IMPORTANT ANIMATION IMPLEMENTATION
============================================================

Inspect the CURRENT Hero.tsx AND the stylesheet actually used by the app.

Do NOT merely create animation class names.

Every animation class used by Hero.tsx MUST have a matching real
@keyframes definition.

Prefer:
- transform
- opacity
- SVG stroke animation
- CSS gradients

Avoid heavy JavaScript animation loops.

Do NOT use:
- GIF
- video
- external animation library
- canvas animation

The final animation must be implemented with lightweight CSS/SVG.

============================================================
10. DO NOT BREAK THE CURRENT BUILD
============================================================

The current build is already successful.

Preserve valid TSX syntax.

Do not insert:
- markdown fences
- plain-English instructions into source files
- malformed SVG attributes
- invalid Tailwind syntax

============================================================
11. SCREEN FIT
============================================================

Preserve the current full-screen Hero fit below the Navbar.

Desktop/laptop:
Hero fits within the available viewport below Navbar.

No unnecessary Hero vertical scrolling.

Mobile/tablet:
responsive and no clipping.

============================================================
12. REDUCED MOTION
============================================================

Keep/add:

@media (prefers-reduced-motion: reduce)

Disable/reduce continuous motion there while preserving the complete
static visual design and visible buildings.

============================================================
13. ABSOLUTELY DO NOT TOUCH OTHER SECTIONS
============================================================

DO NOT modify:

About.tsx
/images/0D0A2507.JPG
Navbar
Expertise
Experience
ERP & Software
Education
Contact
Admin
CV functionality
EmailJS
analytics
language system
Footer

ONLY Hero.tsx and CSS strictly required for Hero animation may be changed.

============================================================
14. FINAL TEST — REQUIRED
============================================================

After making the changes:

Run:

npm run build

The final build MUST finish successfully with EXIT CODE 0.

Then open the actual preview and observe the Hero for AT LEAST 15 seconds.

Verify visually:

✓ Corporate buildings are clearly visible
✓ Buildings remain visible while animation runs
✓ Gold financial graph visibly moves
✓ Financial bars visibly animate
✓ Gold/glass reflection travels across the scene
✓ Some building lights subtly change
✓ Background has slow depth movement
✓ Center text remains clean/readable
✓ Download CV still works
✓ LinkedIn uses the exact URL
✓ Hero fits the screen correctly
✓ No other section changed

If any animation is not visibly moving, FIX IT before reporting completion.

If npm run build fails, repair ONLY the Hero-related error and rerun the
build until EXIT CODE 0.

Do NOT report completion simply because code was written.

FINAL RESPONSE MUST STATE:
1. Which Hero animation effects were implemented
2. Whether buildings are clearly visible
3. Whether actual movement was visually verified
4. Final npm run build result
