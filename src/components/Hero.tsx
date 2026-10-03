UPDATE ONLY THE HOME / HERO SECTION.

IMPORTANT:
Do NOT modify the About section, profile photo, Experience, Expertise, ERP & Software, Education, Contact, Navbar structure, Admin functionality, CV functionality, language system, or any other working section.

I want to replace the CURRENT Hero background with a clearly visible, professional ANIMATED CORPORATE FINANCE CITY concept.

============================================================
1. HERO DESIGN DIRECTION
============================================================

Create a premium corporate/accounting Hero using:

- Deep navy / midnight blue background:
  #071827
  #081A2B
  #0D2538
  #132E43

- Champagne gold accents:
  #C9A45C
  #D8B56A

- Main text:
  #F8FAFC
  #CBD5E1

The Hero must visually combine:

A. Clearly visible modern corporate city/buildings
B. Modern glass-office / financial environment
C. Animated financial chart
D. Animated financial bars
E. Moving gold light/reflection
F. Subtle building/window illumination

The result must look like a professional Accountant / Finance executive portfolio.

DO NOT create:
- stars
- galaxy
- particles
- network mesh
- Matrix effects
- gaming effects
- neon cyberpunk effects
- random giant polygons
- abstract shapes that hide the buildings
- people or portraits

============================================================
2. BUILDINGS MUST BE CLEARLY VISIBLE
============================================================

This is very important.

The previous implementation made the buildings too dark or almost invisible.

The new Hero MUST have recognizable modern corporate buildings / city architecture.

Use a layered corporate skyline / glass-building environment.

Buildings should be visible mainly:

- on the left side
- on the right side
- in the lower background

Keep the CENTER darker and cleaner for the Hero text.

The buildings should include subtle:

- glass panels
- vertical architectural lines
- window divisions
- reflected blue light
- warm champagne-gold window illumination
- city depth

Do NOT make buildings completely black silhouettes.

They must visibly read as MODERN CORPORATE BUILDINGS.

============================================================
3. ACTUAL CONTINUOUS ANIMATION
============================================================

The Hero MUST visibly animate after the page loads.

Do NOT only add animation class names.

You MUST implement all required @keyframes / CSS animation definitions in the appropriate stylesheet.

Verify that the animation actually runs in the browser.

Animation should contain:

A. MOVING GOLD FINANCIAL LINE GRAPH

Create a subtle champagne-gold financial line chart in the background.

The line should:
- slowly move/change position
- have small data points
- travel mainly through the right/lower-right background
- remain behind the main Hero text
- never obstruct MUHAMMAD SALMAN

Use a professional slow animation.

Approximate animation duration:
8–14 seconds, infinite, ease-in-out.

------------------------------------------------------------

B. ANIMATED FINANCIAL BAR CHART

Add subtle transparent blue/navy financial bars.

The bars should:
- gently rise/fall
- use different heights
- remain semi-transparent
- sit mostly in the lower/right background
- feel like financial reporting/data visualization

Animation duration:
6–12 seconds, infinite.

Do not make them flashy.

------------------------------------------------------------

C. MOVING CHAMPAGNE-GOLD LIGHT SWEEP

Create a soft gold/glass reflection that slowly travels:

LEFT → RIGHT → RESET

across the corporate glass/building environment.

The sweep should be:
- wide
- soft
- blurred
- semi-transparent
- elegant
- clearly visible enough to confirm animation is working

Animation duration:
10–16 seconds, infinite linear/ease-in-out.

------------------------------------------------------------

D. BUILDING WINDOW LIGHT ANIMATION

Some building windows / glass sections should subtly change brightness.

Use very small opacity changes between:

navy blue → muted champagne gold → navy blue.

This must feel like city/building illumination, NOT flashing lights.

Animation duration:
7–15 seconds.

Use different delays so all windows do not pulse together.

------------------------------------------------------------

E. SUBTLE BACKGROUND DEPTH / PARALLAX

At least two background architectural layers should move very slowly by a few pixels.

Example:
- far skyline moves slightly horizontally
- nearer glass layer moves in the opposite direction

Movement must be subtle.

Duration:
18–30 seconds.

============================================================
4. HERO CENTER MUST REMAIN CLEAN
============================================================

Maintain a dark navy readability area behind the main Hero content.

The animation and buildings should be stronger toward the LEFT/RIGHT edges and lower background.

The center should remain visually clean.

Do NOT place financial numbers directly behind the name.

============================================================
5. HERO CONTENT — PRESERVE
============================================================

Keep the current minimal Hero content.

WELCOME TO MY PORTFOLIO

MUHAMMAD SALMAN

ACCOUNTANT

Download CV

LinkedIn Profile

Keep:

MUHAMMAD = off-white / #F8FAFC

SALMAN = champagne gold / #D8B56A

Do NOT add:
- profile photo
- MBA/BBA
- location
- employer
- 14+ experience card
- VAT card
- ERP card
- professional summary
- statistics
- extra Hero cards

Home must remain minimal.

============================================================
6. LINKEDIN — PRESERVE EXACT LIVE URL
============================================================

The existing LinkedIn Profile button MUST remain active.

Use exactly:

https://www.linkedin.com/in/muhammad-salman-mba-finance-cpa-finalist-66908767/

Requirements:

target="_blank"
rel="noopener noreferrer"

Do NOT create another LinkedIn button.

Do NOT add LinkedIn to the Navbar.

There must NOT be any message saying:

"LinkedIn Profile URL is pending configuration before production deployment."

Remove that message/state/function completely if any old code still exists.

============================================================
7. DOWNLOAD CV
============================================================

Preserve the existing working Download CV button and its current CV functionality.

Do NOT replace the existing CV logic.

============================================================
8. HERO SCREEN FIT
============================================================

Preserve the current successful full-screen Hero behavior.

Desktop / laptop:

Hero should fill the available screen below the Navbar.

Preserve equivalent behavior to:

min-height: calc(100svh - 5rem)

and desktop:

height: calc(100svh - 5rem)

Do NOT make the Hero taller than necessary.

Do NOT introduce vertical scrolling inside the Hero.

Keep the main content vertically and horizontally centered.

Mobile/tablet must remain responsive and must not clip.

============================================================
9. NAVBAR
============================================================

Preserve the existing Navbar.

Do NOT redesign it.

Keep:
- MS logo
- Muhammad Salman
- Accountant
- navigation links
- English / Arabic language control

Do NOT restore the old Light/Dark theme toggle.

The website remains the fixed Navy/Gold theme.

============================================================
10. PERFORMANCE
============================================================

Animation must be lightweight.

Prefer:
- CSS transforms
- opacity
- SVG
- CSS gradients
- GPU-friendly transform animations

Avoid:
- huge video files
- external animation libraries
- heavy canvas rendering
- unnecessary JavaScript animation loops

Do NOT use a video background.

Do NOT use a GIF background.

The moving preview was only a visual reference.

Implement the final animation using CSS/SVG so it remains sharp and responsive.

============================================================
11. REDUCED MOTION
============================================================

Add:

@media (prefers-reduced-motion: reduce)

For users who request reduced motion:

- stop or greatly reduce continuous movement
- preserve the complete static Hero design
- buildings/charts must still remain visible

============================================================
12. IMPORTANT — CSS MUST ACTUALLY EXIST
============================================================

Previously animation class names were added but the visible animation did not work correctly.

DO NOT repeat this problem.

If Hero.tsx uses classes such as:

animate-finance-line
animate-finance-bars
animate-gold-sweep
animate-city-depth
animate-window-light

then the corresponding @keyframes and animation CSS MUST actually exist in the stylesheet used by the application.

Inspect the existing CSS structure first.

Use the project's actual stylesheet.

Do not reference undefined animation classes.

============================================================
13. DO NOT MODIFY OTHER SECTIONS
============================================================

Do NOT change:

About.tsx
the real profile photo
Professional Highlights
Core Professional Expertise
Experience
Remote / Part-Time Experience
ERP & Software
Education
Contact
Admin
CV Modal
Footer
EmailJS
analytics
language translations
mobile navigation

This task is ONLY for the Home/Hero animation and any CSS strictly required for that Hero animation.

============================================================
14. FINAL VERIFICATION
============================================================

Before reporting completion:

1. Run the production build.
2. Confirm build passes with no TypeScript errors.
3. Open the actual Hero preview.
4. Wait at least 10–15 seconds.
5. Confirm visually that:
   - corporate buildings are clearly visible
   - gold financial graph visibly moves
   - financial bars visibly animate
   - gold reflection/light sweep visibly travels
   - subtle building lights animate
   - background depth moves
   - center text stays readable
   - LinkedIn opens the exact profile
   - Download CV still works
   - Hero still fits one desktop screen below Navbar
   - mobile layout does not clip

DO NOT report "completed" merely because the code compiled.

If the animation is not visibly moving in the actual preview, continue fixing it before reporting success.

FINAL TARGET:

A premium Navy/Gold animated corporate-finance Hero with clearly visible modern buildings, moving financial chart/bar elements, subtle city illumination and moving glass/gold reflections, while MUHAMMAD SALMAN / ACCOUNTANT / Download CV / LinkedIn remain clean, centered and professional.
