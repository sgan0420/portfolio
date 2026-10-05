# Performance

The portfolio keeps its existing layout, typography, cloud artwork, and cube.
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

- When the browser reports at most four logical processors, at most 4 GB of
  device memory, Save-Data, or a slow connection, decorative effects start paused.
  These hints are conservative defaults, not a hardware benchmark. The existing
  play controls let visitors opt into animation.
- Reduced-motion preferences, offscreen state, and document visibility stop
  decorative work. Reduced motion continues to take precedence over play controls.
- The sky's canvas backing buffer is allocated only for eligible mouse input and
  released when paused or offscreen. Touch-only visitors do not allocate it.
  Pointer samples are capped at roughly 30 per second, matching the draw rate;
  pointer coordinates use cached geometry rather than reading layout on each move.
- Unchanged cubelets are memoized. Cube turns remain valid when playback pauses.
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
| Home     |           352,858 bytes |          299,792 bytes |     15.0% |
| Projects |           459,027 bytes |          381,000 bytes |     17.0% |

With emulated browser hints of two logical processors and 2 GB of memory on the
same 4× CPU throttle, idle main-thread work on Projects decreased from 114.8 ms to
2.9 ms over six seconds. The cube stayed still until explicitly played. The
unused homepage canvas backing buffer decreased from 5,184,000 bytes to zero at
device scale factor 1. This buffer calculation is separate from JavaScript heap
and does not represent the browser's total memory use.

A separate mobile check used a 390 × 844 viewport at device scale factor 2,
6× CPU throttling, 1.6 Mbps downloads, and 150 ms latency. Observed LCP values
were 628 ms on Home, 1092 ms on About, and 768 ms on Projects. Keeping priority
on the first project thumbnails preserved their loading speed. All three pages
fit the viewport and had layout-shift scores below 0.02.

Validation covered:

- Production build, ESLint, TypeScript, and whitespace checks.
- All 19 public routes: HTTP 200, no hydration errors, and no mobile overflow.
- Hover and keyboard-focus prefetch; no bulk prefetch or slow-connection prefetch.
- Normal, constrained-device, Save-Data, touch, and reduced-motion behavior.
- Sky and cube pause/resume, offscreen behavior, and visibility-change handling.
- Project filters, mobile navigation, dark theme, and content without JavaScript.
- Tetris movement, hold, hard drop, pause, offscreen suspension, resume, and restart.
- Deferred contact SDK loading and its existing missing-configuration error state
  in the local preview. No email was sent during testing.

To investigate future regressions, compare production builds rather than the
development server. Chromium's `Network.loadingFinished` reports transferred
bytes; `Performance.getMetrics` reports main-thread task duration. Record before
and after with the same viewport, cache state, and throttling settings.
