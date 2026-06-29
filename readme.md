PixelVista Design System v1.0
Design Philosophy

Performance First • Minimal by Design • Images are the Hero

Three core principles:

Images should always be the primary visual element.
The interface should disappear into the background.
Every interaction should feel smooth and intentional.
🎨 1. Color System
Primary Palette
Token	Value	Usage
--color-bg	#090E1A	Main background
--color-surface	#111827	Cards
--color-surface-2	#1A2333	Elevated surfaces
--color-border	rgba(255,255,255,.08)	Borders
Brand Colors
Token	Value
Primary	#4F8CFF
Accent	#8B5CF6
Highlight	#22D3EE
Typography Colors
Token	Value
Primary	#F8FAFC
Secondary	#CBD5E1
Muted	#94A3B8
Status

| Success | #10B981 |
| Warning | #F59E0B |
| Error | #EF4444 |

✍ Typography System

Fonts

Headings

Poppins

Weights

600
700
800
Body

Inter

Weights

400
500
600
Responsive Typography
Token	Value
Display	clamp(3rem,6vw,5rem)
H1	clamp(2.5rem,5vw,4rem)
H2	clamp(2rem,4vw,3rem)
H3	1.5rem
Body	1rem
Small	.875rem
📏 Spacing System

Everything is based on an 8px grid.

4
8
16
24
32
48
64
96
128

Never use random values.

🌐 Container

Desktop

1280px

Content

1180px

Padding

24px
Border Radius

Small

8px

Medium

16px

Large

24px

Extra Large

40px

Pill

999px
Shadows
Small
0 8px 20px rgba(0,0,0,.15)
Medium
0 18px 40px rgba(0,0,0,.25)
Large
0 30px 60px rgba(0,0,0,.35)
🧩 Components
Primary Button
Height

52px

Radius

999px

Padding

18px 32px

Hover

lift 3px
darker blue
Secondary Button

Transparent

Border

Hover

Glass background

Search Bar

Height

64px

Radius

999px

Padding

24px

Focus

Blue glow

Category Chip

Height

42px

Hover

Lift

Background transition

Cards

Radius

24px

Image

16:10

Content Padding

20px

Hover

translateY(-6px)

shadow++

image scale(1.05)
📸 Image Cards
Image

♡

Photographer

Category

Lazy loading placeholder first.

Modal

Large

Glass

Blur

Close button

Download button

Keyboard accessible

✨ Motion Guidelines

Duration

Fast

150ms

Normal

250ms

Large

300ms

Hero Background

20 seconds

Infinite

Easing
ease-out

No bounce.

🌌 Aurora Background

Three blurred circles.

Blue

Purple

Cyan

Opacity

.25

Blur

180px

Animation

Very slow.

📱 Responsive Breakpoints
Device	Width
Mobile S	360px
Mobile	480px
Tablet	768px
Laptop	1024px
Desktop	1280px
Large	1440px

We'll use mobile-first CSS.

♿ Accessibility Rules
Semantic HTML (header, main, section, footer).
Every image has meaningful alt text.
Keyboard navigation for search, chips, and modal.
Visible focus states using the primary blue.
Color contrast meeting WCAG AA.
Respect prefers-reduced-motion where possible.
⚡ Performance Rules
Lazy load all gallery images.
Use loading="lazy" as a baseline and enhance with the Intersection Observer API.
Debounce search input.
Minimize layout shifts.
Modular JavaScript (ES modules).
Compress assets and keep the first load lightweight.
🎨 Final UI Layout

Now let's move to the UI. This is the screen we'll build.

┌────────────────────────────────────────────────────────────────────────────┐
│ 📸 PixelVista                                              🌙               │
│                                                                            │
│                   (Aurora Animated Background)                             │
│                                                                            │
│              Discover Stunning Photography                                 │
│                                                                            │
│     Explore millions of curated images with blazing-fast performance.      │
│                                                                            │
│ ┌────────────────────────────────────────────────────────────────────────┐ │
│ │ 🔍 Search mountains, wildlife, architecture…                     ⏎     │ │
│ └────────────────────────────────────────────────────────────────────────┘ │
│                                                                            │
│  Nature   Space   Travel   Cars   AI   Food   Animals                     │
│                                                                            │
│             10M+ Photos     100+ Categories     Fast Loading              │
│                                                                            │
│                          ↓ Scroll to Explore                               │
└────────────────────────────────────────────────────────────────────────────┘

                            Trending This Week

┌──────────────┐ ┌──────────────┐ ┌──────────────┐
│              │ │              │ │              │
│    Photo     │ │    Photo     │ │    Photo     │
│              │ │              │ │              │
└──────────────┘ └──────────────┘ └──────────────┘

                     [ Load More ]