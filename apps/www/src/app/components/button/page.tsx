import { Button, Title } from "@backoffice-hq/ui";

export default function Page() {
  return (
    <>
      <Title className="mb-8">Button</Title>
      <p>Buttons are used to trigger actions or events.</p>
      
      <h2>Usage</h2>
      <p>Use the Button component to create a button.</p>
      
      <h2>Examples</h2>
      <Button variant="default">Click me</Button>
      <p>
        The default (primary) button is used for the main action on the page.
      </p>

      <h3>Secondary Button</h3>
      <Button variant="secondary">Secondary</Button>
      <p>The secondary button is used for less important actions.</p>

      <h3>Disabled Button</h3>
      <Button variant="default" disabled>
        Disabled
      </Button>
      <p>
        The disabled button is used to indicate that an action is not available.
      </p>

      <h3>Outline</h3>
      <Button variant="outline">Outline</Button>

      <h3>Ghost</h3>
      <Button variant="ghost">Ghost</Button>
      <p></p>

      <h3>Link</h3>
      <Button variant="link">Link</Button>
    </>
  );
}
