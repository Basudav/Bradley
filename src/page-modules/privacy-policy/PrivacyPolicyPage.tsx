import React from "react";
import { PageHero } from "@/components/sections/PageHero";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { PolicySection } from "./components/PolicySection";
import { siteConfig } from "@/config/site";

/**
 * NOTE TO SITE OWNER:
 * Please review this privacy policy to ensure it matches your business operations.
 */
export function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <>
      <PageHero
        title="Privacy Policy"
        lead={`Last updated: ${lastUpdated}. Plain English summary of how Bradley's Window Cleaning handles your information.`}
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <Section>
        <Container className="max-w-4xl space-y-6">
          <PolicySection title="1. No Cookies or Analytics Trackers">
            <p>
              This website does not use cookies, tracking pixels, or third-party advertising cookies. We do not track your activity across other websites or record personal behavioral analytics.
            </p>
          </PolicySection>

          <PolicySection title="2. Quote Request Information">
            <p>
              Our online quote form does not store your name, telephone number, address, or messages in a website database.
            </p>
            <p>
              When you submit the quote form, the website packages your details into a readable message and allows you to send it directly to us via <strong>WhatsApp</strong> or <strong>email</strong>. Your details are only sent when you click the action button to transmit the message.
            </p>
          </PolicySection>

          <PolicySection title="3. How We Use Your Details">
            <p>
              When you contact us via telephone, WhatsApp, or email, we use your contact details solely to:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Provide you with an accurate quote for your property.</li>
              <li>Schedule and carry out your window, gutter, fascia, or door clean.</li>
              <li>Contact you regarding arrival times or changes due to weather.</li>
            </ul>
            <p>
              We do not sell, rent, or pass your information to third-party marketing companies.
            </p>
          </PolicySection>

          <PolicySection title="4. Third-Party Services">
            <p>
              If you choose to contact us via WhatsApp, Facebook, or your personal email provider, your use of those platforms is governed by their respective privacy policies.
            </p>
          </PolicySection>

          <PolicySection title="5. Contact Us">
            <p>
              If you have any questions regarding how we handle your personal data, you can contact us at:
            </p>
            <p className="font-semibold text-navy">
              Email:{" "}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-blue-700 underline [overflow-wrap:anywhere]"
              >
                {siteConfig.email}
              </a>
              <br />
              Telephone: {siteConfig.phone.display}
              <br />
              Address: Elka&apos;s Rise, Ilkeston, United Kingdom
            </p>
          </PolicySection>
        </Container>
      </Section>

      <CtaBanner />
    </>
  );
}
