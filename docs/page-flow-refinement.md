# Page flow refinement, October 10

The bear stays the defining moment. The rest of the page should read as a curated selection of work, with quieter emphasis and a shared reading order.

## Direction

- Palette: cool white #f8f9fa, charcoal #20242b, burgundy #583743, plum #342732, blue-gray #4e5e66. Colour belongs to each project's artwork and title; avoid a new background block at every category change.
- Type: retain DM Sans. Category headings are smaller than project names; descriptions and destinations repeat the same roles across released projects.
- Layout: align to the existing content edges. Use image/copy, then copy/image on desktop; name, purpose, artwork, detail, destination on phones. Bring released work closer to the demonstration's caption.
- Secondary research: one VR painting accompanies two equally weighted questions in the adjacent column. On phones, VR retains its name/art/question order, followed by the transport question.
- Ending: invite discussion of the actual work, with named products in the supporting copy.

Desktop: bear → caption → released heading → [sefer art | identity/detail/link] → [identity/detail/link | receipt art] → [VR art | VR question / transport question] → contact.

Mobile: bear → caption → released heading → two name/purpose/art/detail/link entries → two research entries → contact.

## Reference review

Fresh integrated-browser passes inspected [Work Louder](https://worklouder.cc/), [Instrument](https://www.instrument.com/) and [Isomorphic Labs](https://www.isomorphiclabs.com/). Work Louder repeats identity and destinations across differently coloured scenes. Instrument's work collection holds varied subjects in a recurring frame. Isomorphic Labs uses recurring geometry to support its research identity. Instrument's embedded reel had a network error, so motion playback was not used as evidence.

The user clarified that immersive opening graphics and scroll-driven flying elements are unwanted. A fresh [Pentagram](https://www.pentagram.com/) pass inspected its featured-work presentation and transition to grouped projects. Its recurring project captions and changes in editorial scale are relevant; its homepage carousel and promotional overlays are not copied. The implementation adds no scroll choreography or ambient animation.

The broader OpenAI, Anthropic and studio comparison remains documented in `design-comparison-audit.md`. This pass adopts presentation relationships rather than their typography, promotional language or decorative effects. It adds no invented prototype or product result.

## Self-critique before implementation

Identical cards would erase the approved variation; repeated background panels would keep the present stop/start rhythm. Use a continuous page ground and alternate artwork placement instead. No numbered badges, new slogans, entrance effects or replacement art are needed. The research pair should match the substance available without making transport appear to be a finished prototype.

## Implementation and local review

The released projects use one small server-rendered `StudioProject` component. Both preserve name, purpose, art, explanation and destination; DigiDov reverses columns on desktop. Its enclosing plum panel and feature table were removed; the painting retains the colour. Product facts are preserved in a short paragraph. The demonstration-to-products spacing is reduced, and research continues on the same page ground.

VR and transport share a desktop composition with equal title and question emphasis. At narrow widths, VR's name precedes its painting and question, followed by the transport entry. The footer names research collaboration and the released products. The approved bear presentation is unchanged.

Local integrated-browser passes reviewed the desktop composition, product ordering at 390 px and narrow research at 320 px. Neither mobile width overflowed. Production build, lint and the source-size check passed; all authored source files remain below 300 lines. The pass adds no client JavaScript, new animation, font or artwork download.
