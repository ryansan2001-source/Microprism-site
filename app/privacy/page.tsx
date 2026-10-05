import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Microprism",
  description:
    "Microprism collects no personal data. Everything happens on your device. Read the full privacy policy.",
};

const POLICY_URL = "https://ryansan2001-source.github.io/Microprism-site/privacy/";

export default function Privacy() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-20">
      <span className="text-[12px] uppercase tracking-widest text-ember">
        Legal
      </span>
      <h1 className="mt-3 text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 text-[14px] text-fog-soft">
        Effective date: 2026-08-23 &middot; Last updated: 2026-10-05
      </p>

      <div className="prose-policy mt-10 space-y-8 leading-relaxed text-fog">
        <p>
          Microprism (&ldquo;the app,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;)
          is published by Ryan McGee. This Privacy Policy explains what
          information the app does and does not collect, how it is used, and the
          rights you have. It is hosted at{" "}
          <a href={POLICY_URL} className="text-ember hover:text-halation">
            {POLICY_URL}
          </a>
          . If you have questions, contact us at{" "}
          <a href="mailto:developer.ryan.mcgee@icloud.com" className="text-ember hover:text-halation">
            developer.ryan.mcgee@icloud.com
          </a>
          .
        </p>

        <Section title="1. Information We Collect">
          <p>
            <strong className="text-paper">
              Microprism does not collect, transmit, sell, or share any personal
              information.
            </strong>{" "}
            The app has no user accounts, no analytics, no advertising, and no
            third-party tracking. It does not include an advertising identifier
            (IDFA) and performs no cross-app or cross-website tracking.
          </p>
          <p>Everything the app does happens on your device:</p>
          <ul>
            <li>
              <strong className="text-paper">
                Photos and videos you capture or import
              </strong>{" "}
              stay on your device. They are saved to your photo library (with
              your permission) and, if you choose, kept in the app&rsquo;s
              on-device Studio library for later editing. We never upload them.
            </li>
            <li>
              <strong className="text-paper">Coaching and scene analysis.</strong>{" "}
              The live composition and exposure guidance uses Apple&rsquo;s
              on-device Vision and Foundation Models frameworks. Image analysis
              runs locally on your device. No image or analysis result is sent to
              us or anyone else.
            </li>
            <li>
              <strong className="text-paper">Face detection.</strong> To draw
              face boxes, lock focus on a face you tap, and coach portraits (for
              example, noticing closed eyes), the app detects faces in the live
              camera feed on your device. Face positions are used only in the
              moment and are never stored, used to identify anyone, or sent
              anywhere.
            </li>
            <li>
              <strong className="text-paper">Microphone.</strong> Used only while
              you record a video, to capture its audio. The audio is part of the
              clip saved to your photo library; it is never sent anywhere.
            </li>
            <li>
              <strong className="text-paper">App settings</strong> (such as your
              &ldquo;Keep RAW&rdquo; preference and creative-prompt schedule) are
              stored locally on your device using Apple&rsquo;s standard settings
              storage (UserDefaults).
            </li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>
            Because the app collects no personal information, there is no
            personal data for us to use. All processing, including capture, look
            and filter rendering, on-device coaching, and editing, is performed
            locally to provide the app&rsquo;s core photography features.
          </p>
        </Section>

        <Section title="3. Third-Party Services">
          <p>
            Microprism uses no third-party analytics, advertising, crash
            reporting, or data-collection SDKs.
          </p>
          <p>
            The app relies only on Apple&rsquo;s operating-system frameworks
            (Camera, Photos, Vision, Foundation Models, Notifications, and iCloud
            Drive). Your use of iCloud and the Photos library is governed by{" "}
            <a
              href="https://www.apple.com/legal/privacy/"
              className="text-ember hover:text-halation"
            >
              Apple&rsquo;s Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section title="4. How Your Information Is Shared">
          <p>
            We do not receive your information, so we do not share or sell it, and
            we never share personal data with any third party, including any
            third-party AI service. Content stays on your device except where you
            explicitly move it:
          </p>
          <ul>
            <li>
              <strong className="text-paper">Saving to Photos</strong> places
              your captures in your own photo library.
            </li>
            <li>
              <strong className="text-paper">Export to iCloud Drive</strong>{" "}
              (only when you initiate it) copies files into your own iCloud
              container, handled by Apple under Apple&rsquo;s policies.
            </li>
            <li>
              <strong className="text-paper">Sharing</strong> a photo via the iOS
              share sheet sends it only to the destination you choose.
            </li>
          </ul>
        </Section>

        <Section title="5. Data Retention and Deletion">
          <p>
            We retain no data about you. Content the app stores on your device,
            including your Photos library, the on-device Studio library, and app
            settings, remains under your control. You can delete photos in the
            Photos app, remove Studio items within the app, and remove all app
            data by deleting the app from your device.
          </p>
        </Section>

        <Section title="6. Your Privacy Rights">
          <p>
            Microprism collects no personal data, so there is generally nothing
            for us to access, correct, delete, or port. The rights below are
            provided for completeness and apply to any personal information we
            might hold, which, in the ordinary operation of the app, is none.
          </p>
          <h3 className="text-paper">GDPR (EEA / UK)</h3>
          <p>
            If you are in the European Economic Area or the United Kingdom, you
            have the right to access, rectify, erase, restrict, or object to
            processing of your personal data, and to data portability. Because
            the app processes all data locally on your device and transmits
            nothing to us, we act as a controller of no personal data collected
            through the app. To make a request or ask a question, contact{" "}
            <a href="mailto:developer.ryan.mcgee@icloud.com" className="text-ember hover:text-halation">
              developer.ryan.mcgee@icloud.com
            </a>
            .
          </p>
          <h3 className="text-paper">CCPA / CPRA (California)</h3>
          <p>
            If you are a California resident, you have the right to know, delete,
            correct, and opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo;
            of personal information.{" "}
            <strong className="text-paper">
              We do not collect, sell, or share personal information
            </strong>
            , and we have not done so in the preceding 12 months. To make a
            request, contact{" "}
            <a href="mailto:developer.ryan.mcgee@icloud.com" className="text-ember hover:text-halation">
              developer.ryan.mcgee@icloud.com
            </a>
            .
          </p>
        </Section>

        <Section title="7. Children's Privacy">
          <p>
            Microprism does not collect personal information from anyone,
            including children. The app is not directed to children under 13, and
            we do not knowingly collect data from children.
          </p>
        </Section>

        <Section title="8. Security">
          <p>
            Because your content never leaves your device through the app, it is
            protected by your device&rsquo;s own security (passcode, Face ID or
            Touch ID, and iOS data protection). We hold no servers or databases
            containing your information.
          </p>
        </Section>

        <Section title="9. Changes to This Policy">
          <p>
            We may update this policy. Changes are posted at{" "}
            <a href={POLICY_URL} className="text-ember hover:text-halation">
              {POLICY_URL}
            </a>{" "}
            with a new effective date.
          </p>
        </Section>

        <Section title="10. Contact Us">
          <p>
            Ryan McGee
            <br />
            <a href="mailto:developer.ryan.mcgee@icloud.com" className="text-ember hover:text-halation">
              developer.ryan.mcgee@icloud.com
            </a>
          </p>
        </Section>
      </div>

      <div className="mt-12 flex flex-wrap gap-6 text-[15px]">
        <Link href="/support/" className="font-semibold text-ember hover:text-halation">
          Support
        </Link>
        <Link href="/" className="font-semibold text-fog hover:text-paper">
          Back to home
        </Link>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold tracking-tight text-paper">{title}</h2>
      {children}
    </section>
  );
}
