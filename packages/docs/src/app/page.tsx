import Link from "next/link";

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto pt-12">
      <div className="flex mb-8">
        <div className="w-2/3">
          <h1 className="text-4xl font-bold mb-4">Back Office Design System</h1>
          <p className="text-xl">
            A set of guidelines, principles, and patterns for designing and
            building UI at
            <Link
              href="https://backoffice.co.th"
              target="_blank"
              className="underline decoration-dotted ml-2 underline-offset-2"
            >
              Back Office
            </Link>
            .
          </p>
        </div>
      </div>
      <div className="border-t pt-8">
        <h2 className="text-2xl font-bold">Open Source</h2>
        <p>
          Back Office Design System is open-sourced on GitHub.
          <Link
            href="https://github.com/BackOfficeHQ/ui/"
            target="_blank"
            className="mx-1.5 text-blue-600 hover:underline"
          >
            Contributions and feedback
          </Link>
          are welcome!
        </p>
      </div>
    </div>
  );
}
