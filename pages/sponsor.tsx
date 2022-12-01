import Hero from "../components/Hero";
import SponsorshipTier from "../components/SponsorshipTier";
import { useTranslations } from "next-intl";
import { ReactNode } from "react";
import Image from "next/image";

export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      metas: {
        title: "Sponsor, Open Source Day 2023 - Florence",
        description: "Open Source Day 2023 coming soon on March 2023. Stay tuned on our social",
      },
      messages: (await import(`../public/locales/${locale}.json`)).default,
    },
  };
}

export default function Sponsor() {
  const t = useTranslations("Sponsor");

  return (
    <>
      <div className="container">
        <Hero
          title={t("title")}
          subtitle={t("subtitle")}
          date={{
            where: t("where"),
            when: t("when"),
            length: t("length"),
            type: t("type"),
          }}
          description={t("description")}
          originals={false}
        />
        <section className="current_sponsors">
          <h2 className="sponsors_thanks" style={{ textAlign: "center" }}>Thanks to our sponsors</h2>
          <h3 className="sponsors_tier">Silver</h3>
          <div className="sponsors_logo">
            <a href="https://www.nephila.digital/" target="_blank" rel="noreferrer">
              <Image width={400} height={100} src="/nephila_logo.png" alt="Nephila" />
            </a>
          </div>
          <h3 className="sponsors_tier">Media</h3>
          <div className="sponsors_logo">
            <a href="https://www.wearedevelopers.com/" target="_blank" rel="noreferrer">
              <Image width={150} height={150} src="/WeAreDevelopers_logo.svg" alt="WeAreDevelopers" />
            </a>
            <a href="https://www.grusp.org/" target="_blank" rel="noreferrer">
              <Image width={100} height={100} src="/grusp_logo.svg" alt="Grusp" />
            </a>
            <a href="https://www.theredcode.it/" target="_blank" rel="noreferrer">
              <Image width={80} height={80} src="/the-red-code_logo.png" alt="TheRedCode" />
            </a>
            <a href="https://pisa.dev/" target="_blank" rel="noreferrer">
              <Image width={150} height={150} src="/pisa-dev_logo.svg" alt="PisaDev" />
            </a>
            <a href="https://firenze.dev/" target="_blank" rel="noreferrer">
              <Image width={100} height={100} src="/firenze-dev_logo.svg" alt="Firenzedev" />
            </a>
          </div>
          <h3 className="sponsors_tier">Swag</h3>
          <div className="sponsors_logo">
            <a href="https://www.gitkraken.com/" target="_blank" rel="noreferrer">
              <Image width={100} height={100} src="/gitkraken-logo-light-sq.svg" alt="Gitkraken" />
            </a>
            <a href="https://www.jetbrains.com/" target="_blank" rel="noreferrer">
              <Image width={100} height={100} src="/jb_beam.svg" alt="JetBrains" />
            </a>
          </div>
        </section>
        <section className="sponsors_2022">
          <SponsorshipTier
            title={t("platinum")}
            card_color="platinum"
            price={t("platinum_price")}
            offer={t("platinum_offer")}
            emailLink={t.rich("send_email", {
              email: (children: ReactNode) => (
                <a href="mailto:osday@schrodinger-hat.it?subject=OSDay 2023, Platinum Tier">
                  <u>{children}</u>
                </a>
              ),
            })}
          />
          <SponsorshipTier
            title={t("diamond")}
            card_color="diamond"
            price={t("diamond_price")}
            offer={t("diamond_offer")}
            emailLink={t.rich("send_email", {
              email: (children: ReactNode) => (
                <a href="mailto:osday@schrodinger-hat.it?subject=OSDay 2023, Diamond Tier">
                  <u>{children}</u>
                </a>
              ),
            })}
          />
          <SponsorshipTier
            title={t("gold")}
            card_color="gold"
            price={t("gold_price")}
            offer={t("gold_offer")}
            emailLink={t.rich("send_email", {
              email: (children: ReactNode) => (
                <a href="mailto:osday@schrodinger-hat.it?subject=OSDay 2023, Gold Tier">
                  <u>{children}</u>
                </a>
              ),
            })}
          />
          <SponsorshipTier
            title={t("silver")}
            card_color="silver"
            price={t("silver_price")}
            offer={t("silver_offer")}
            emailLink={t.rich("send_email", {
              email: (children: ReactNode) => (
                <a href="mailto:osday@schrodinger-hat.it?subject=OSDay 2023, Silver Tier">
                  <u>{children}</u>
                </a>
              ),
            })}
          />
          <SponsorshipTier
            title={t("community")}
            card_color="community"
            offer={t("community_offer")}
            emailLink={t.rich("send_email", {
              email: (children: ReactNode) => (
                <a href="mailto:osday@schrodinger-hat.it?subject=OSDay 2023, Community Partner">
                  <u>{children}</u>
                </a>
              ),
            })}
          />
          <SponsorshipTier
            title={t("media")}
            card_color="media"
            offer={t("media_offer")}
            emailLink={t.rich("send_email", {
              email: (children: ReactNode) => (
                <a href="mailto:osday@schrodinger-hat.it?subject=OSDay 2023, Media Partner">
                  <u>{children}</u>
                </a>
              ),
            })}
          />
        </section>

        <section className="after_main">
          <h2>
            {t.rich("heading_sponsor", {
              link: (children: ReactNode) => <a href="https://opencollective.com/schrodinger-hat">{children}</a>,
              email: (children: ReactNode) => (
                <a href="mailto:osday@schrodinger-hat.it?subject=OSDay 2023, Media Partner">
                  <u>{children}</u>
                </a>
              ),
            })}
          </h2>
        </section>
      </div>
    </>
  );
}
