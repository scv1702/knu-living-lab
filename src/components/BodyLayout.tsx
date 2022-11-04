import Link from "next/link";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";
import Logo from "./Logo";
import Sidebar from "./Sidebar";
export function BodyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="drawer drawer-mobile relative">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content relative">
          <div className="navbar sticky top-0 isolate z-50 border-b-2 bg-base-100">
            <div className="flex-none lg:hidden">
              <label htmlFor="sidebar" className="btn btn-ghost btn-square">
                <Bars3Icon className="h-6 w-6" />
              </label>
            </div>
            <div className="flex-1">
              <Logo />
            </div>
            <Link className="btn btn-primary mr-2 px-2 font-semibold" href="/">
              회원가입
            </Link>
            <Link
              className="btn btn-primary btn-ghost px-2 font-semibold"
              href="/"
            >
              로그인
            </Link>
          </div>
          <main className="relative mx-auto w-full">{children}</main>
        </div>
        <div className="drawer-side">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <Sidebar />
        </div>
      </div>
    </>
  );
}
