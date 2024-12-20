import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Title } from "@backoffice-hq/ui";

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
        <Title className="mb-8">Typography</Title>
        <div className="prose max-w-none mb-12">
          <p>
            Typography is a fundamental aspect of our design system, providing a
            cohesive and consistent visual language across all user interfaces.
            Our typography guidelines ensure that text is legible, readable, and
            visually appealing, enhancing the overall user experience.
          </p>
          <p>
            The design system includes various typographic elements such as
            headings, subheadings, body text, and labels, each with specific
            styles and use cases. These elements are designed to create a clear
            hierarchy, guiding users through the content and making it easy to
            understand and navigate.
          </p>
          <p>
            By adhering to these typography guidelines, we maintain a unified
            look and feel across all our products, reinforcing our brand
            identity and improving usability.
          </p>
        </div>
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
