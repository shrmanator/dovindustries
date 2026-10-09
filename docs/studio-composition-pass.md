# Studio composition pass

## Plan

The page is a studio catalogue of things made and questions being investigated.
The drawings supply the material character; type and composition should give the
same studio identity to the surrounding page.

Palette: cool paper #f8f9fa, graphite #20242b, oxblood #583743,
plum #342732, chalk #f5edef, and lilac #c9b8dd. Project artwork retains its colors.
Instrument Serif carries large project names; DM Sans carries explanations,
navigation and smaller research titles. No new font downloads or animation library.

Layout: a wide Vibe Draw title and quiet explanation above the approved sequence;
a large book exchange beside a concise marketplace description; a dark donation
presentation with an explanatory branching diagram; a quieter research collection;
a large, direct contact invitation. All text is left aligned.

```
Current research / Vibe Draw       explanation
[             approved drawing sequence             ]

Released projects
[ book exchange painting ]       Simply Sefer / explanation / destination
                                 Find / identify / list

[ DigiDov / explanation ]         ETH / USDC
                                 donation link / receipt
                                 retain crypto / convert to dollars

More research
[ movement study ]               VR question
                                 Compact transport question

Contact invitation / email
```

## Review against the brief

A matching set of illustrated cards would flatten the real differences between
projects. Instead the page varies media, scale and color while repeating the
relationship between a project name, a concrete explanation and a destination.
The DigiDov diagram explains verified public capabilities; it is not a fabricated
product interface or evidence of a donation. No invented research result or
scooter prototype is added. The approved bear component is unchanged.

Changes are scoped to the art-direction route. Implementation and browser
verification will be recorded after the visual iterations.

## Implemented and reviewed

The first iteration used large serif category headings. Browser review showed
they competed with the project names, so category headings returned to smaller
sans-serif type. Large serif type now identifies the lead research, released
products and final invitation. The palette keeps the burgundy book, a plum/lilac
donation presentation and a cool gray-blue research surface.

The initial secondary-research composition put the movement drawing alongside
both questions. It now belongs to the VR entry alone; transport is a separate,
smaller row. This avoids suggesting the figure illustrates transport research.

The donation flow is server-rendered text and inline SVG, with no new client
island or animation dependency. The art-direction navigation now sends Research
to Vibe Draw, and the logo stays within this presentation instead of switching
to the older home page. The root route keeps its default presentation.

Local production build, lint, TypeScript and source-size checks passed. All 12
existing tests passed. Integrated-browser review covered the full desktop and
phone page, a 320 CSS-pixel narrow-phone fit check, and a 767 CSS-pixel tablet
view. Actual DOM viewport widths were verified because the browser's zoom made
requested viewport dimensions unreliable. No horizontal overflow was found.
Mobile navigation opens and closes on selection; reduced motion shows the
finished drawing and Replay without automatically animating it.

These checks do not constitute a new Lighthouse or field-performance audit.
Deployed confirmation will be added after the existing branch preview builds.
