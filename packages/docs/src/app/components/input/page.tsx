import { Input, Title } from "@backoffice-hq/ui";

export default function Page() {
    return (
        <>  
        <Title className="mb-8">Input</Title>
        <p>Inputs are used to collect data from users.</p>

        <h2>Usage</h2>
        <p>Use the Input component to create an input field.</p>

        <h2>Examples</h2>
        <Input type="text" placeholder="Enter your name" className="input" />
        <p>The default input field is used to collect text data from users.</p>

        <Input type="password" placeholder="Your password" />
        </>
    )
}