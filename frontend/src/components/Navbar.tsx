// src/components/Header.tsx
"use client";

import { useState } from "react";
import { Search, Menu, X, LayoutDashboard, CreditCard, Plus } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["전체", "유머/이슈", "정치", "경제", "암호화폐", "스포츠", "연애", "IT", "기타"];

  return (
    <nav className="bg-emerald-500 text-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          TalkAndVote
        </Link>

        {/* Search Bar */}
        <div className="mx-6 hidden flex-1 md:flex">
          <div className="flex w-full items-center rounded-lg bg-emerald-100 px-3 py-2 text-gray-800">
            <Search className="mr-2 h-5 w-5 text-gray-500" />
            <input type="text" placeholder="토픽 검색하기..." className="w-full bg-transparent placeholder-gray-500 outline-none" />
          </div>
        </div>

        {/* Right Actions */}
        <div className="hidden items-center gap-5 font-semibold md:flex">
          <Link href="#" className="flex items-center gap-1 hover:opacity-80">
            <LayoutDashboard className="h-5 w-5" />
            대시보드
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:opacity-80">
            <CreditCard className="h-5 w-5" />
            멤버십 가입
          </Link>
          <Link href="#" className="flex items-center gap-1 hover:opacity-80">
            <Plus className="h-5 w-5" />
            토픽 생성
          </Link>
          <Link href="/user/auth/sign-in" className="hover:opacity-80">
            로그인
          </Link>
          <Link href="/signup" className="rounded-md bg-white px-4 py-2 font-bold text-emerald-600 transition hover:bg-gray-100">
            회원가입
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="rounded-lg p-2 hover:bg-emerald-400 md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Nav Bar */}
      <nav className="hidden justify-center border-t border-emerald-400 py-2 md:flex">
        {navItems.map((item) => (
          <Link key={item} href="#" className="px-4 py-1 font-semibold hover:underline hover:opacity-90">
            {item}
          </Link>
        ))}
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="space-y-3 border-t border-emerald-400 bg-emerald-500 px-4 py-3 md:hidden">
          <div className="flex flex-col space-y-2 font-semibold">
            {navItems.map((item) => (
              <Link key={item} href="#" className="hover:underline">
                {item}
              </Link>
            ))}
          </div>

          <div className="mt-3 flex flex-col space-y-2 border-t border-emerald-400 pt-3">
            <Link href="#" className="flex items-center gap-2">
              <LayoutDashboard className="h-5 w-5" /> 대시보드
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <CreditCard className="h-5 w-5" /> 멤버십 가입
            </Link>
            <Link href="#" className="flex items-center gap-2">
              <Plus className="h-5 w-5" /> 토픽 생성
            </Link>
            <Link href="/login">로그인</Link>
            <Link href="/signup" className="rounded-md bg-white px-4 py-2 text-center font-bold text-emerald-600">
              회원가입
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
