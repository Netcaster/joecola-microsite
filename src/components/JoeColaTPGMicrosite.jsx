export default function JoeColaTPGMicrosite() {
  const pillars = [
    {
      title: "Legacy Engine",
      subtitle: "Joe Jackson Dream Factory",
      body:
        "A modern platform inspired by the discipline, discovery model, artist development, and performance preparation system associated with Joe Jackson's legacy.",
    },
    {
      title: "Beverage Platform",
      subtitle: "Joe Cola + Joe Cola Energy",
      body:
        "Consumer beverage lines positioned for white-label production, global distribution, collector drops, hospitality bundles, and event-led sell-through.",
    },
    {
      title: "Token Utility",
      subtitle: "$JoeBucks",
      body:
        "A utility layer for fan engagement, creator rewards, marketplace redemption, campaign access, contests, and community participation across the ecosystem.",
    },
    {
      title: "Distribution Infrastructure",
      subtitle: "TPG x R.I.S.E. x Device x Hospitality",
      body:
        "A force-multiplied go-to-market stack built around hotels, events, mobile devices, campus activations, nightlife, digital marketplaces, and global partner channels.",
    },
  ];

  const channels = [
    "Hotels & room block welcome kits",
    "FoxConn / FoxD device preload + marketplace",
    "Campus & nightlife activations",
    "Airport / venue / event kiosks",
    "Retail, on-premise, and festival sampling",
    "Creator drops, merch, and token redemption",
  ];

  const roadmap = [
    {
      phase: "Phase 01",
      title: "Reposition the Brand",
      points: [
        "Move from nostalgia beverage page to global cultural commerce platform",
        "Introduce Joe Jackson Dream Factory narrative",
        "Clarify Joe Cola and Joe Cola Energy product architecture",
        "Frame $JoeBucks as utility, engagement, and rewards infrastructure",
      ],
    },
    {
      phase: "Phase 02",
      title: "Ignite Global Awareness",
      points: [
        "Launch DJ remix and creator challenge ecosystem",
        "Activate legacy storytelling, cause marketing, and short-form content",
        "Drive fan onboarding through tokenized experiences",
        "Coordinate hospitality, retail, and event-based product seeding",
      ],
    },
    {
      phase: "Phase 03",
      title: "Force Distribution",
      points: [
        "Bundle product into room nights, creator packs, and branded activations",
        "Preload apps, wallet experiences, and marketplace access on devices",
        "Expand via TPG-led global channel partnerships",
        "Drive repeat purchase through loyalty, perks, and community drops",
      ],
    },
    {
      phase: "Phase 04",
      title: "Scale the Ecosystem",
      points: [
        "Regional launch sequencing across Africa, U.S., Europe, and beyond",
        "Music talent discovery competitions and community voting",
        "Data capture for partner sales, sponsorships, and enterprise licensing",
        "Platform expansion into media, live experiences, and creator commerce",
      ],
    },
  ];

  const kpis = [
    { value: "60+", label: "Countries targeted through scaled partner channels" },
    { value: "4", label: "Integrated platform layers" },
    { value: "24/7", label: "Omni-channel discovery and redemption model" },
    { value: "∞", label: "Creator, fan, and partner participation potential" },
  ];

  const cards = [
    {
      title: "For Investors",
      text: "Fund a global platform where beverage, culture, token utility, media, hospitality, and distribution reinforce each other.",
      cta: "Request Boardroom Deck",
    },
    {
      title: "For Distribution Partners",
      text: "Deploy Joe Cola and Joe Cola Energy across hospitality, retail, venues, campuses, and mobile-driven commerce channels.",
      cta: "Explore Distribution",
    },
    {
      title: "For Creators & DJs",
      text: "Enter remix challenges, activate your fan base, unlock rewards, and participate in the next-generation discovery engine.",
      cta: "Join the Movement",
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-950 text-white selection:bg-red-600/30 selection:text-white">
      <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.20),transparent_32%),radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_22%),linear-gradient(180deg,#0a0a0a_0%,#111111_100%)]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-red-700 blur-3xl" />
          <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.28em] text-red-400">TPG / Joe Cola / $JoeBucks</div>
              <div className="mt-1 text-sm text-white/70">Global beverage, creator, hospitality, and token-powered commerce platform</div>
            </div>
            <div className="flex flex-wrap gap-3 text-xs text-white/70">
              <span className="rounded-full border border-white/10 px-3 py-1">Legacy-Driven</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Utility-Enabled</span>
              <span className="rounded-full border border-white/10 px-3 py-1">Distribution-First</span>
            </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-12 px-6 pb-20 pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pb-24 lg:pt-10">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.28em] text-red-300">
              The system that built legends — reimagined for a connected world
            </div>

            <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white md:text-7xl">
              Joe Cola is not just a drink.
              <span className="block text-white/70">It is a global culture, commerce, and discovery engine.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
              Powered by TPG distribution strategy, proposed white-label manufacturing with HELL ENERGY, and the utility framework of $JoeBucks, this platform is built to convert legacy into product movement, creator participation, and worldwide sales momentum.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-red-600 px-6 py-4 text-sm font-semibold text-white shadow-2xl shadow-red-900/30 transition hover:bg-red-500"
              >
                Request Partnership Access
              </a>
              <a
                href="#platform"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-sm font-semibold text-white/90 transition hover:bg-white/10"
              >
                Explore the Platform
              </a>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
              {kpis.map((item) => (
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="text-3xl font-semibold text-white">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-white/65">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-black/40 p-4 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl">
              <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900 p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-[0.28em] text-red-400">Command Center</div>
                    <div className="mt-2 text-2xl font-semibold">Joe Cola x TPG Stack</div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/70">Production Model</div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    ["Legacy Narrative", "Joe Jackson Dream Factory"],
                    ["Product Layer", "Joe Cola / Joe Cola Energy"],
                    ["Token Layer", "$JoeBucks wallet, rewards, access"],
                    ["Distribution Layer", "Hotels / Devices / Campus / Events"],
                    ["Cause Layer", "Youth arts, talent development, global impact"],
                  ].map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="text-xs uppercase tracking-[0.22em] text-white/45">{label}</div>
                      <div className="mt-2 text-sm font-medium text-white/90">{value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 p-4">
                  <div className="text-xs uppercase tracking-[0.24em] text-red-300">Strategic Thesis</div>
                  <p className="mt-2 text-sm leading-7 text-white/80">
                    Build a repeatable system where culture creates attention, product creates volume, token utility creates stickiness, and distribution creates scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Platform Architecture</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">
            Four interlocking layers. One global engine.
          </h2>
          <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
            The microsite is built to speak to enterprise partners, investor audiences, distributors, creators, and hospitality decision-makers in one coherent commercial story.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 transition hover:border-red-500/30 hover:bg-white/[0.07]">
              <div className="text-xs uppercase tracking-[0.24em] text-red-300">{pillar.subtitle}</div>
              <h3 className="mt-3 text-2xl font-semibold text-white">{pillar.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{pillar.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Manufacturing Thesis</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Production credibility matters.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
              Joe Cola needs enterprise-grade supply confidence. The site positions proposed white-label alignment with HELL ENERGY as a strategic manufacturing and global distribution discussion point—supporting scalable fabrication, energy-line expansion, and speed to market.
            </p>
            <p className="mt-5 text-sm leading-7 text-white/55">
              This section is intentionally framed as a proposed strategic manufacturing pathway so your team can present strength without overstating a finalized relationship.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Premium European manufacturing narrative",
              "Energy drink adjacency and formulation credibility",
              "Scalable can-based production architecture",
              "Global channel readiness for white-label expansion",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-white/10 bg-neutral-900 p-6">
                <div className="text-lg font-medium text-white">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Go-To-Market</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              Distribution first. Demand second.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
              This is not a passive retail launch. The commercial model is built around force-multiplied placements, embedded product exposure, and tokenized engagement loops.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {channels.map((channel) => (
              <div key={channel} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm leading-7 text-white/80">
                {channel}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,rgba(127,29,29,0.18),rgba(10,10,10,0.0))]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Activation Model</div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              From fan energy to commercial velocity.
            </h2>
            <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
              Bedroom DJs, club DJs, creators, collectors, hospitality operators, and cause partners all enter the same ecosystem from different doors—but are monetized through one platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Creator Challenges",
                text: "Launch remix, mixtape, choreography, tribute, and performance competitions that onboard creators and audiences into the Joe Cola universe.",
              },
              {
                step: "02",
                title: "Token Utility",
                text: "Reward participation, votes, referrals, purchases, and brand engagement through $JoeBucks-based experiences and marketplace access.",
              },
              {
                step: "03",
                title: "Sales Conversion",
                text: "Convert participation into beverage purchases, room-night bundles, app installs, merch sales, sponsorship, and enterprise partner revenue.",
              },
            ].map((item) => (
              <div key={item.step} className="rounded-[2rem] border border-white/10 bg-black/30 p-8">
                <div className="text-xs uppercase tracking-[0.28em] text-red-300">Step {item.step}</div>
                <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Commercial Roadmap</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            A boardroom-ready sequence for launch and scale.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {roadmap.map((item) => (
            <div key={item.phase} className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
              <div className="text-xs uppercase tracking-[0.28em] text-red-300">{item.phase}</div>
              <h3 className="mt-3 text-2xl font-semibold">{item.title}</h3>
              <div className="mt-5 space-y-3">
                {item.points.map((point) => (
                  <div key={point} className="flex items-start gap-3 text-sm leading-7 text-white/75">
                    <span className="mt-2 h-2.5 w-2.5 flex-none rounded-full bg-red-500" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Cause Marketing</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Commerce with a visible mission.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/70 md:text-lg">
                The platform should visibly connect beverage sales and campaign participation with nonprofit outcomes tied to youth development, arts access, and opportunity creation in underserved communities worldwide.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Youth arts and music education",
                "Global creator opportunity funds",
                "Community challenge sponsorships",
                "Purpose-aligned nonprofit collaborations",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-white/10 bg-neutral-900 p-6 text-sm leading-7 text-white/80">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-400">Who This Serves</div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
            One platform. Three commercial entry points.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {cards.map((card) => (
            <div key={card.title} className="rounded-[2rem] border border-white/10 bg-black/30 p-8">
              <h3 className="text-2xl font-semibold">{card.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/70">{card.text}</p>
              <button className="mt-8 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                {card.cta}
              </button>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-red-500/20 bg-[linear-gradient(135deg,rgba(127,29,29,0.34),rgba(17,17,17,0.92))] p-10 shadow-2xl shadow-red-950/20 md:p-14">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.28em] text-red-300">Next Step</div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
                Build the new legacy economy.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/80 md:text-lg">
                Joe Cola, Joe Cola Energy, and $JoeBucks are positioned to become a globally distributed, culturally activated commercial engine backed by TPG strategy, creator participation, and scalable production pathways.
              </p>
            </div>

            <form className="grid gap-4 rounded-[1.75rem] border border-white/10 bg-black/25 p-6 backdrop-blur">
              <input
                type="text"
                placeholder="Name"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-red-500/40"
              />
              <input
                type="email"
                placeholder="Email"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-red-500/40"
              />
              <select className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-red-500/40">
                <option className="bg-neutral-900">I'm interested in...</option>
                <option className="bg-neutral-900">Investment</option>
                <option className="bg-neutral-900">Distribution</option>
                <option className="bg-neutral-900">Manufacturing</option>
                <option className="bg-neutral-900">Creator Participation</option>
                <option className="bg-neutral-900">Cause Marketing Partnership</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your interest"
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none transition focus:border-red-500/40"
              />
              <button
                type="button"
                className="rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-black transition hover:bg-red-100"
              >
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
