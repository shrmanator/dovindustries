# DigiDov product study

## Direction and critique

The painted receipt's invented curl, texture and accounting marks make it feel
like a generated prop. Replace that metaphor with a deliberately composed
product detail. The first dark-background experiment repeats the brand, separates
the currency into another label, and crops the form without a clear focal point.

Palette: lavender ground `#ddd6e6`, paper `#fdfcfe`, ink `#302538`, selected amount
`#e5daed`, emphasis `#846195` and secondary text `#6b5a77`.
Type: the site's existing DM Sans, with large amount values and smaller token
equivalents. No additional font, image, texture or motion.

Composition: a close view of one donation selector. Brand and currency belong to
the form; the three amounts and selected $50 amount carry the picture. Keep the
existing 4:3 plane and captions so this change does not alter page rhythm.

Review against the brief: a screenshot with miniature controls is also a generic
portfolio default. Enlarge only the useful selector, remove the extra frame and
external labels, and make its text legible at phone sizes. Simply Sefer can remain
a painting; the two products need a common layout, not identical media.

## Sources and representation

The official public DigiDov site confirms ETH and USDC, reusable donation links,
automatic receipts, and the option of conversion to dollars. The read-only local
DigiDov source in `charitywallet/components/donation-form/amount-selector.tsx`
uses presets $20, $50 and $100, token equivalents, and a custom-amount option.
The source's USDC donation flow uses a 1:1 display rate.

This is a static, hand-authored SVG illustration of that selector, not a screenshot
of a completed donation or a live checkout. Its accessible description says so.
No donor, charity, transaction, wallet address or receipt is invented. The entire
figure retains the existing link to DigiDov. No new input or button is introduced.

The previous generated image remains in the repository for history but is no
longer referenced by the study. Drawing and rendering remain server-side; the
selector is a separate module, and no client code or dependency is added.

## Review corrections

The second version puts identity and currency inside the same form and increases
the amount scale. Browser review beside Simply Sefer showed a calmer picture with
useful subject matter. Correct the form's bottom margin rather than arbitrarily
clipping it, and increase token-equivalent and custom-amount text for phone use.
Keep the body copy and destinations; their hierarchy already reads correctly.
