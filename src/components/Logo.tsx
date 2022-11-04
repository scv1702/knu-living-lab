import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="btn btn-square btn-ghost text-xl">
      <img src="/pig_logo.png" width={50} height={50} />
    </Link>
  );
}
