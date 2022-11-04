import Link from "next/link";

const sidebarContent = [
  { name: "생활 용품", href: "/products/household" },
  { name: "위생 용품", href: "/products/hygiene" },
  { name: "주방 용품", href: "/products/kitchen" },
  { name: "식품", href: "/products/food" },
];

export default function Sidebar() {
  return (
    <ul className="menu w-60 overflow-y-auto border-2 border-t-0 bg-base-100 p-4 text-base-content">
      {sidebarContent.map((item) => {
        return (
          <li key={item.name}>
            <Link href={item.href} className="p-4">
              {item.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
