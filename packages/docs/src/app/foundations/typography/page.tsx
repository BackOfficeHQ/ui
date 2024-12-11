import { Title } from "ui";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Page() {
  return (
    <>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/foundations">Foundations</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Typography</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="mt-8">
        <div className="border-b mb-8">
          <Title variant="display">Display</Title>
          <p className="my-8">
            Use the `display` variant for the most prominent titles on the page.
            This variant is typically used for main headings or section titles
            that need to stand out significantly.
          </p>
        </div>
        <div className="border-b mb-8">
          <Title variant="large">Heading</Title>
          <p className="my-8">
            Use the `large` variant for primary headings that are less prominent
            than the `display` variant but still important. This variant is
            suitable for section titles or headings that introduce new content.
          </p>
        </div>
        <div className="border-b mb-8">
          <Title variant="medium">Subheading</Title>
          <p className="my-8">
            Use the `medium` variant for subheadings or secondary titles that
            provide structure to the content. This variant is suitable for
            headings that introduce new sections or group related content
            together.
          </p>
        </div>
        <div className="border-b mb-8">
          <Title variant="small">Small</Title>
          <p className="my-8">
            Use the `small` variant for minor headings or labels that require
            less emphasis. This variant is suitable for headings that introduce
            minor sections or provide additional context to the content.
          </p>
        </div>
      </div>
    </>
  );
}
