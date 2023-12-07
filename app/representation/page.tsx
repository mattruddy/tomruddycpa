"use client";

import { ServiceLayout } from "@/components/ServiceLayout";
import { PAGE_DATA } from "@/data";

export default function Representation() {
  const { title, body, imageFile } =
    PAGE_DATA.page.irsRepresentation.sectionOne;
  const { additionalSections } = PAGE_DATA.page.irsRepresentation;
  return (
    <ServiceLayout
      title={title}
      body={body}
      imageSrc={imageFile}
      defaultService="IRS Representation"
      sections={additionalSections}
    />
  );
}
