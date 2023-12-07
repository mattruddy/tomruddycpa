"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { PAGE_DATA } from "@/data";

export default function Tax() {
  const { title, body, imageFile } =
    PAGE_DATA.page.taxPreparation.individual.sectionOne;
  const { additionalSections } = PAGE_DATA.page.taxPreparation.individual;
  return (
    <ServiceLayout
      title={title}
      body={body}
      imageSrc={imageFile}
      defaultService="Individual Taxes"
      sections={additionalSections}
    />
  );
}
