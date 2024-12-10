import Link from "next/link";

const sidebarItems = [
  {
    title: "Guides",
    links: [
      { title: "Introduction", href: "/" },
      { title: "Getting Started", href: "#" },
      { title: "Components", href: "#" },
    ],
  },
  {
    title: "Foundations",
    links: [
      { title: "Colors", href: "#" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "#" },
    ],
  },
  {
    title: "Components",
    links: [
      { title: "Buttons", href: "#" },
      { title: "Forms", href: "#" },
      { title: "Navigation", href: "#" },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] border-r overflow-y-auto">
      <nav className="px-2 py-4">
        <div className="space-y-6">
          {sidebarItems.map((section) => (
            <div key={section.title} className="border-b pb-4">
              <h2 className="text-xs font-semibold text-zinc-500 uppercase mb-2 px-2">
                {section.title}
              </h2>
              <ul>
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-zinc-900 hover:bg-zinc-100 hover:text-zinc-900 px-2 py-1.5 rounded-md block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </aside>
  );
}
