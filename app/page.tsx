import Header from "./components/Header";
import type { CSSProperties, ReactNode } from "react";

type ImgProps = {
  src: string;
  alt: string;
  pos?: string;
  zoom?: number;
  tint?: boolean;
};

const Img = ({
  src,
  alt,
  pos = "50% 50%",
  zoom = 1,
  tint = false,
}: ImgProps) => (
  <div className="relative h-full w-full overflow-hidden">
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
      style={{
        objectPosition: pos,
        transformOrigin: pos,
        transform: `scale(${zoom})`,
        filter: tint
          ? "saturate(0.72) contrast(0.95) brightness(0.98)"
          : undefined,
      }}
    />

    {tint && (
      <div className="pointer-events-none absolute inset-0 bg-[#315d5b]/10 mix-blend-multiply" />
    )}
  </div>
);
const M = "/maya.jpg", O1 = "/office-1.jpg", O2 = "/office-2.jpg";

/* 24-column fluid grid (same coordinate system as the original site): cols 1 and 26 are the page gutters */
const Grid = ({ rows, className = "", children }: { rows: number; className?: string; children: ReactNode }) => (
  <div
    className={`flex w-full flex-col gap-6 px-[5vw] md:grid md:gap-x-[11px] md:gap-y-2 md:px-0 md:grid-cols-[minmax(5vw,1fr)_repeat(24,minmax(0,51px))_minmax(5vw,1fr)] ${className}`}
    style={{ gridTemplateRows: `repeat(${rows}, minmax(min(calc(min(100vw - 10vw, 1500px) * 0.028), calc((100svh - 7rem) / ${rows} - 8px)), auto))` }}
  >
    {children}
  </div>
);
const Cell = ({ a, className = "", children }: { a: string; className?: string; children?: ReactNode }) => (
  <div className={`md:[grid-area:var(--a)] ${className}`} style={{ "--a": a } as CSSProperties}>{children}</div>
);

const who = [
  [
    "High-achieving professionals",
    "You may look capable on the outside while feeling exhausted, emotionally on edge, or stuck in overthinking. Therapy can give you space to slow down and reconnect with yourself.",
    "/p.png",
    "50% 50%",
  ],

  [
    "Relationships & Wellbeing",
    "When past experiences affect your relationships, confidence, or sense of safety, therapy can help you understand these patterns and develop steadier, more connected ways of relating.",
    "/relationship.png",
    "50% 50%",
  ],

  [
    "Healing From Past Experiences",
    "Some experiences stay with us long after they happen. We can work carefully through trauma and long-standing patterns, with an emphasis on safety, stabilization, and feeling more regulated in daily life.",
    "/pasts.png",
    "50% 50%",
  ],
] as const;
const left = ["Anxiety", "Panic", "Trauma", "Complex trauma", "Burnout", "Perfectionism"];
const right = ["Overthinking", "Sleep difficulties", "Body tension", "Chronic stress", "Confidence & relationships", "…and more."];

const services = [
  ["Anxiety & Panic Therapy", "For constant worry, racing thoughts, panic, tension in the body, and trouble sleeping. We use CBT, mindfulness, and body-oriented tools to calm both mind and body."],
  ["Trauma Therapy & EMDR", "For single-incident trauma and long-standing patterns from childhood, relationships, or chronic stress. Care is paced with a focus on safety and stabilization, using EMDR and other evidence-based methods."],
  ["Burnout & Perfectionism Support", "For professionals, entrepreneurs, and creatives under high internal pressure. Together we slow down, reconnect, and build healthier ways to work and live."],
];

const faqs = [
  ["Where is your therapy office?", "My office is at 123rd Street 45 W, Santa Monica, CA 90401. It is a quiet, private space with natural light."],
  ["Do you offer online therapy?", "Yes. I offer secure telehealth sessions for clients located in California, as well as in-person sessions in Santa Monica."],
  ["What do you help with?", "Anxiety, panic, trauma, burnout, and perfectionism in adults, including the lingering effects of past experiences."],
  ["What methods do you use?", "I integrate evidence-based approaches such as CBT, EMDR, mindfulness-based practices, and body-oriented techniques."],
  ["What are your credentials?", "I am a licensed clinical psychologist with a PsyD."],
];

const nav = [["About", "#about"], ["Services", "#services"], ["Our Office", "#office"], ["FAQs", "#faqs"]];

export default function Home() {
  return (
    <main>
      <Header />

      {/* 1. HERO */}
  <section id="top" className="grid md:grid-cols-[38%_1fr]">

  <div className="h-[58vh] min-h-[520px] max-h-[680px] md:h-[680px]">
    <Img
      src={M}
      alt="Dr. Maya Reynolds, PsyD, licensed clinical psychologist in Santa Monica"
      pos="50% 25%"
    />
  </div>

  <div className="relative flex flex-col justify-between gap-10 overflow-hidden bg-primary px-[5vw] py-10 text-paper md:py-14">
    
    <p className="text-sm uppercase tracking-[0.18em] text-brass">
      In-person & telehealth therapy · Santa Monica, CA
    </p>

    <div>
      <h1 className="text-4xl sm:text-5xl lg:text-6xl">
        Anxiety and trauma therapy in Santa Monica to help you feel calm and
        <span className="script !text-brass text-5xl sm:text-6xl lg:text-7xl">
          {" "}grounded
        </span>.
      </h1>

      <p className="mt-6 max-w-xl text-lg">
        Dr. Maya Reynolds, PsyD, is a licensed clinical psychologist helping
        adults with anxiety, trauma, and burnout feel more regulated, in
        session and in daily life.
      </p>
    </div>

    <a href="#book" className="btn-light self-start">
      Book a consultation
    </a>

    <div className="absolute bottom-0 right-0 hidden h-[34%] w-[13%] lg:block">
      <Img
        src={O2}
        alt="Calm sitting area in the Santa Monica therapy office"
        pos="18% 55%"
        zoom={1.6}
      />
    </div>

  </div>

</section>

      {/* 2. INTRO */}
      <section id="about" className="screen bg-secondary py-14 md:py-12">
        <Grid rows={17}>
          <Cell a="3/3/8/17" className="self-center"><h2 className="text-4xl sm:text-5xl">You may look &ldquo;functional&rdquo; on the outside while quietly bracing for something to go wrong.</h2></Cell>
          <Cell a="9/3/17/10"><p className="lead">I offer therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences.</p><p className="mt-4 leading-relaxed">Many of the people I work with are high-achieving, thoughtful, and self-aware, but internally feel exhausted, stuck in overthinking, or emotionally on edge.</p></Cell>
          <Cell a="9/10/17/17"><p className="leading-relaxed">My work often focuses on anxiety, panic, trauma, and burnout. I am a licensed clinical psychologist in Santa Monica, California, and I combine practical tools with real depth.</p>
            <div className="mt-6"><p className="font-script text-4xl text-accent">Dr. Maya Reynolds</p><p className="mt-1 text-xs uppercase tracking-[0.18em]">Licensed Clinical Psychologist, PsyD</p></div></Cell>
          <Cell a="1/19/17/27" className="aspect-[3/4] md:aspect-auto">
          <Img src="./book.jpg" alt="Sunlit therapy room with brick wall and tall windows" pos="75% 40%" /></Cell>
        </Grid>
      </section>

      {/* 3. WHO I HELP */}
{/* 3. WHO I HELP */}
<section className="screen bg-paper py-14 md:py-12">
  <Grid rows={21}>

    <Cell a="1/2/3/10">
      <h2 className="text-4xl sm:text-5xl">
        Who I <span className="script text-6xl">help</span>
      </h2>
    </Cell>

    {who.map(([t, d, s, p], i) => (
      <Cell
        key={t}
        a={`4/${5 + i * 7}/22/${12 + i * 7}`}
        className="flex flex-col gap-4"
      >
        <div className="aspect-[3/4] md:aspect-auto md:min-h-0 md:flex-1">
      <Img
  src={s}
  alt={`${t} receiving support from a therapist`}
  pos={p}
  tint
/>
        </div>

        <div>
          <h3 className="text-2xl lg:text-3xl">
            {t}
          </h3>

          <p className="mt-2 text-sm leading-relaxed">
            {d}
          </p>
        </div>
      </Cell>
    ))}

  </Grid>
</section>

      {/* 4. QUOTE BAND (background: /public/try.png, your sunset image) */}
      <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-primary py-24 text-paper md:h-[80svh] md:py-0">
        <div className="absolute inset-0 opacity-40"><Img src="/try.png" alt="Person sitting quietly on a beach at sunset" pos="50% 30%" /></div>
        <div className="absolute inset-0 bg-primary/60" />
        <div className="relative z-10 w-full">
          <Grid rows={1}>
            <Cell a="1/3/2/19"><h2 className="text-3xl sm:text-5xl">Feeling fine on the outside does not mean you are fine inside. <em>Therapy can be a place to slow down and reconnect.</em></h2></Cell>
          </Grid>
        </div>
      </section>

      {/* 5. AREAS OF EXPERTISE */}
      <section className="screen bg-paper py-14 md:py-12">
        <Grid rows={12}>
          <Cell a="1/3/4/9"><h2 className="text-4xl sm:text-5xl">Our areas of<br /><span className="script text-6xl">expertise</span></h2></Cell>
          {[left, right].map((col, c) => (
            <Cell key={c} a={`1/${10 + c * 8}/13/${18 + c * 8}`}>
              <ul>{col.map((a) => <li key={a} className="border-b border-primary/15 py-4 text-sm uppercase tracking-[0.18em]">{a}</li>)}</ul>
            </Cell>
          ))}
        </Grid>
      </section>

      {/* 6. HOW I WORK */}
<section className="screen bg-sage py-14 md:py-12">
  <Grid rows={23}>

    <Cell a="4/3/6/15">
      <p className="text-sm uppercase tracking-[0.18em]">
        How I work
      </p>
    </Cell>

    <Cell a="6/3/11/20">
      <h2 className="text-4xl sm:text-5xl">
        A warm, collaborative, and grounded approach.
      </h2>
    </Cell>

    <Cell a="12/3/21/11">
      <p className="lead">
        I believe therapy works best when you feel respected, understood,
        and actively involved.
      </p>

      <p className="mt-4 leading-relaxed">
        I integrate CBT, EMDR, mindfulness-based practices, and
        body-oriented techniques so we can understand both the emotional
        and physiological sides of what you feel.
      </p>
    </Cell>

    <Cell a="12/11/21/19">
      <p className="leading-relaxed">
        Sessions are structured enough to feel supportive, with space for
        reflection and depth. Trauma work is paced carefully, with an
        emphasis on safety and stabilization. My goal is not just symptom
        relief, but insight, resilience, and a stronger relationship with
        yourself.
      </p>
    </Cell>

    <Cell a="21/3/24/19">
      <a href="#about" className="link">
        Learn more about me
      </a>
    </Cell>

<Cell a="1/21/24/27" className="md:-mt-12 md:-mb-12">
  <Img
    src="/how_we_work.png"
    alt="Dr. Maya Reynolds in a warm therapy session with an adult client"
    pos="50% 50%"
  />
</Cell>

  </Grid>
</section>
      {/* 7. IMAGE + HEADLINE */}
      <section className="screen bg-paper py-14 md:py-12">
        <Grid rows={14}>
          <Cell a="1/1/15/15" className="aspect-[4/3] md:aspect-auto"><Img src={O1} alt="Sofa and artwork in the therapy office" pos="30% 60%" /></Cell>
          <Cell a="9/16/15/26" className="self-end"><h2 className="text-4xl sm:text-5xl">Practical tools and real depth, for life in a fast-paced <span className="script text-6xl">world</span>.</h2></Cell>
        </Grid>
      </section>

      {/* 8. SERVICES */}
      <section id="services" className="screen bg-paper py-14 md:py-6">
        <Grid rows={25}>
          <Cell a="3/3/7/10"><h2 className="text-4xl sm:text-5xl">Our <span className="script text-6xl">services</span> include…</h2></Cell>
          {services.map(([t, d], i) => (
            <Cell key={t} a={["4/11/13/18", "4/19/13/26", "15/11/24/18"][i]}>
              <h3 className="text-2xl lg:text-3xl">{t}</h3><p className="mt-3 text-sm leading-relaxed lg:text-base">{d}</p><a href="#book" className="link mt-4">Learn more</a>
            </Cell>
          ))}
          <Cell a="15/19/24/26"><h3 className="text-3xl">Not sure where to start?</h3><p className="mt-4 leading-relaxed">Reach out and we will talk through what you are experiencing and what kind of support fits.</p><a href="#book" className="link mt-6">Book a consultation</a></Cell>
        </Grid>
      </section>

      {/* 9. OUR OFFICE (new section) */}
      <section id="office" className="screen bg-secondary py-14 md:py-6">
        <div className="mx-auto w-full max-w-[1500px] px-[5vw]">
          <div className="mx-auto max-w-4xl text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">Our Office</p>
            <h2 className="text-4xl sm:text-5xl">A calm space for <span className="script text-6xl">healing</span></h2>
            <p className="mt-4 text-lg leading-relaxed">My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often tell me the space itself helps them feel more at ease when they arrive.</p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[[O1, "Therapy room with gray sofa, swivel chair, and tall brick-framed windows", "40% 50%", 1, "Natural light and a calm, grounding feel"], [O2, "Sofa, leather armchair, and olive tree in the counseling office", "20% 60%", 1.3, "Comfortable seating for every session"], [O2, "Bookshelf with plants and books in the therapy office", "92% 45%", 2, "Private, quiet, and uncluttered"]].map(([s, a, ps, z, c]) => (
              <figure key={c as string}><div className="aspect-[4/3] md:aspect-auto md:h-[27svh]"><Img src={s as string} alt={a as string} pos={ps as string} zoom={z as number} /></div><figcaption className="mt-2 text-sm">{c as string}</figcaption></figure>
            ))}
          </div>
          <ul className="mt-6 grid gap-4 border-t border-primary/15 pt-6 sm:grid-cols-2 lg:grid-cols-4">
            {[["Natural light", "Tall windows and soft daylight"], ["Private & quiet", "A calm setting for open conversation"], ["Comfortable & uncluttered", "Seating that helps you settle in"], ["In-person or telehealth", "Secure online sessions for California clients"]].map(([t, d]) => (
              <li key={t}><p className="font-serif text-xl">{t}</p><p className="mt-1 text-sm leading-relaxed">{d}</p></li>
            ))}
          </ul>
          <div className="mt-4 flex flex-col items-start justify-between gap-4 bg-primary p-4 text-paper sm:flex-row sm:items-center md:px-8">
            <address className="not-italic"><span className="text-xs uppercase tracking-[0.18em] text-brass">Visit my office</span><br /><span className="font-serif text-2xl">123rd Street 45 W, Santa Monica, CA 90401</span></address>
            <a href="#book" className="btn-light">Book a visit</a>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section id="faqs" className="screen bg-paper py-14 md:py-12">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-[5vw] md:grid-cols-[1fr_2fr]">
          <h2 className="text-4xl sm:text-5xl">Common <span className="script text-6xl">questions</span></h2>
          <div>
            {faqs.map(([q, a]) => (
              <details key={q} className="border-b border-primary/15 py-4">
                <summary className="cursor-pointer font-serif text-2xl">{q}</summary>
                <p className="mt-3 max-w-2xl leading-relaxed">{a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 11. SCHEDULE / CTA */}
      <section id="book" className="screen bg-sage py-14 md:py-12">
        <Grid rows={16}>
          <Cell a="1/6/3/16"><p className="text-sm font-semibold uppercase tracking-[0.18em]">Schedule an appointment</p></Cell>
          <Cell a="4/1/16/4" className="hidden md:block"><Img src={O2} alt="" pos="10% 60%" /></Cell>
          <Cell a="3/6/8/16"><h2 className="text-4xl sm:text-5xl">Let&rsquo;s talk about whether we are the right fit for <span className="script text-6xl">you</span>.</h2></Cell>
          <Cell a="8/6/14/16"><p className="text-lg leading-relaxed">If you want a Santa Monica psychologist who combines practical tools with depth-oriented work, and who understands the realities of a fast-paced life, I may be a good fit. Reach out to start.</p></Cell>
          <Cell a="14/6/17/16"><a href="mailto:?subject=Consultation%20request%20for%20Dr.%20Maya%20Reynolds" className="btn">Book now</a></Cell>
          <Cell a="1/18/17/27" className="aspect-[4/5] md:aspect-auto"><Img src={M} alt="Dr. Maya Reynolds smiling" pos="50% 20%" /></Cell>
        </Grid>
      </section>

      {/* FOOTER */}
      <footer className="bg-white">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-[5vw] py-16 md:grid-cols-[2fr_1fr_1fr_1fr]">
          <div><p className="font-serif text-4xl sm:text-5xl">Maya Reynolds</p><p className="mt-1 text-xs uppercase tracking-[0.4em] text-accent">Psychologist · Santa Monica</p><p className="mt-6 max-w-sm leading-relaxed">I want to make getting started simple. You are welcome to come into my office in Santa Monica or schedule secure telehealth sessions from anywhere in California, whatever works best for you.</p></div>
          <div><p className="text-sm uppercase tracking-[0.18em]">Navigate</p><ul className="mt-4 space-y-1 text-sm">{[["Home", "#top"], ...nav].map(([l, h]) => <li key={l}><a href={h}>{l}</a></li>)}</ul></div>
          <div><p className="text-sm uppercase tracking-[0.18em]">Services</p><ul className="mt-4 space-y-1 text-sm">{services.map(([t]) => <li key={t}><a href="#services">{t}</a></li>)}</ul></div>
          <div><p className="text-sm uppercase tracking-[0.18em]">Contact</p><address className="mt-4 text-sm not-italic leading-relaxed">123rd Street 45 W<br />Santa Monica, CA 90401<br /><em className="mt-3 block">In-person &amp; secure telehealth across California</em></address></div>
        </div>
        <p className="bg-primary px-[5vw] py-4 text-sm text-paper">© Dr. Maya Reynolds, PsyD · Licensed Clinical Psychologist · Santa Monica, CA</p>
      </footer>
    </main>
  );
}