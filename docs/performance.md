# Performance

The portfolio keeps its typography, cloud artwork, and cube.
Content is prerendered, so reading the site does not depend on its animations.

## Loading

- Internal links prefetch after a 120 ms mouse hover or keyboard focus, rather
  than prefetching every visible destination. Save-Data and slow connections skip
  this speculative work; navigation still works normally.
- Only the first row of the Projects collection and the About portrait have image
  preload priority. Homepage project cards and detail-page screenshots use native
  lazy loading.
- Responsive image variants are capped at 1920 px. The portrait's `sizes` attribute
  reflects its actual maximum rendered width.
- EmailJS is imported when a message is submitted, rather than on page load.

## Animation

- Clouds and the desktop cube autoplay on visible pages, including devices
  reporting limited memory, fewer processors, Save-Data, or a slow connection.
  The existing controls pause and resume playback when the visitor chooses.
- Cloud turbulence, displacement, and blur are baked into two transparent WebP
  atlases, rather than recalculated by live SVG filters. The original shapes,
  colors, layering, and drift remain. Each atlas includes both themes, so changing
  themes does not fetch another image. Run `npm run clouds` to regenerate them.
- Reduced-motion preferences, offscreen state, and document visibility stop
  decorative work. Reduced motion continues to take precedence over play controls.
- The sky's canvas backing buffer is allocated only for eligible mouse input and
  released when paused or offscreen. Touch-only visitors do not allocate it.
  Pointer input is coalesced into drawing frames at roughly 30 per second;
  coordinates use cached geometry rather than reading layout on each move.
  The trail stays white in both themes, with no colored particle dots. Clearing
  is restricted to its previous painted bounds instead of the whole hero, and
  drawing stops after the trail fades.
- Unchanged cubelets are memoized. Cube turns remain valid when playback pauses.
- Theme switching uses native view-transition snapshots for a 500 ms circular
  reveal, with no duplicated page content, added library, or idle animation loop.
  The small switch highlight moves in its own native transition. Reduced motion
  and unsupported browsers switch instantly; unavailable storage or interrupted
  transitions do not prevent changing themes.
- Tetris uses a timer for the next piece drop instead of polling every animation
  frame. Pause, game over, offscreen state, and hidden documents stop that timer.
  Resuming starts a fresh drop interval without catching up on hidden time.

## Local validation — 2026-10-05

Paired production-build measurements used Chromium with a fresh browser context,
cache disabled, a 1440 × 900 viewport, 4× CPU throttling, and a six-second idle
window after loading. The baseline is the site before this performance change.
Transfer totals include initial assets and automatic prefetches, with no link
interaction. These are local lab observations, not measurements of every device.

| Page     | Initial transfer before | Initial transfer after | Reduction |
| -------- | ----------------------: | ---------------------: | --------: |
| Home     |           352,858 bytes |          299,093 bytes |     15.2% |
| Projects |           459,027 bytes |          380,123 bytes |     17.2% |

The unused homepage canvas backing buffer decreased from 5,184,000 bytes to zero at
device scale factor 1. This buffer calculation is separate from JavaScript heap
and does not represent the browser's total memory use.

A separate mobile check used a 390 × 844 viewport at device scale factor 2,
6× CPU throttling, 1.6 Mbps downloads, and 150 ms latency. Observed LCP values
were 732 ms on Home, 1088 ms on About, and 768 ms on Projects, with autoplay enabled. Keeping priority
on the first project thumbnails preserved their loading speed. All three pages
fit the viewport and had layout-shift scores below 0.02.

In a paired 14-point pointer-path check at device scale factor 1, the average
canvas area cleared per frame fell from 1,296,000 to about 25,581 square pixels
(98.0% smaller). This measures clearing area for that path, not a 98% reduction
in total CPU or GPU usage. Pixel checks confirmed a visible white trail in both
themes, zero colored particles, complete fading, and no drawing-frame callbacks
after the trail disappeared. Autoplay was also verified with two-core, 2 GB,
Save-Data, and 3G browser hints.

Validation covered:

- Production build, ESLint, TypeScript, and whitespace checks.
- All 19 public routes: HTTP 200, no hydration errors, and no mobile overflow.
- Hover and keyboard-focus prefetch; no bulk prefetch or slow-connection prefetch.
- Autoplay on normal and constrained-device profiles, plus Save-Data, touch, and
  reduced-motion behavior.
- Sky and cube pause/resume, offscreen behavior, and visibility-change handling.
- Project filters, mobile navigation, dark theme, and content without JavaScript.
- Circular theme reveals in both directions under 4× CPU throttling, keyboard
  activation, repeated input, saved preferences, and switching while scrolled.
  Reduced motion, missing API support, blocked storage, and skipped or failed
  animations preserve working theme controls.
- Full-height home hero across eleven phone, tablet, and desktop viewports,
  including 320 × 568 and 1440 × 1100, without the next section peeking through.
- Tetris movement, hold, hard drop, pause, offscreen suspension, resume, and restart.
- Deferred contact SDK loading and its existing missing-configuration error state
  in the local preview. No email was sent during testing.

## Safari rendering — 2026-10-06

The previous SVG filters rendered clouds in WebKit at device scale factor 1,
but produced an empty layer at scale factor 3 with a 393 × 852 viewport. Removing
the filters restored the artwork, isolating the failure from layout or playback.
WebKit also has [documented viewport-dependent SVG filter rendering issues](https://bugs.webkit.org/show_bug.cgi?id=266295).

The replacement uses two 640 × 800 atlases totaling 39,596 bytes. Their decoded
RGBA pixels total 4,096,000 bytes; this does not measure the browser's total
graphics memory. These are additional homepage assets, so the earlier loading
measurements above describe the October 5 build, before this rendering fix.

Both palettes now render in WebKit and Chromium at phone scale factors 2 and 3,
including 320 × 568 and 430 × 932, and on desktop. Playback controls, offscreen
suspension, reduced motion, and the touch device's zero-sized trail canvas remain
intact. The circular reveal still lasts 500 ms and normal clouds still autoplay.

Paired headless WebKit measurements on the same computer at 393 × 852 and scale
factor 3 sampled animation-frame callbacks during six alternating theme reveals.
The original filtered artwork produced mean callback intervals around 38 ms;
the baked artwork produced intervals around 14 ms. Extra layer hints or pausing
clouds during the reveal did not improve that result, so neither was added.
This is a local engine comparison, not a physical iPhone FPS measurement.

To investigate future regressions, compare production builds rather than the
development server. Chromium's `Network.loadingFinished` reports transferred
bytes; `Performance.getMetrics` reports main-thread task duration. Record before
and after with the same viewport, cache state, and throttling settings.

Rendering references: [Google's animation guidance](https://web.dev/articles/animations-guide),
[MDN's canvas optimization guidance](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas),
and [MDN's circular view-transition example](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API/Using).
