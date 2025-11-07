"use client";

import { useState } from "react";
import Link from "next/link";
import { BiSolidMessageRounded } from "react-icons/bi";
import { GoEye } from "react-icons/go";
import { PiEyeClosed } from "react-icons/pi";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 로그인 로직 추가
    console.log({ email, password });
  };

  return (
    <div className="my-10 flex justify-center px-4">
      <div className="w-full max-w-sm rounded-3xl bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        {/* 제목 */}
        <h1 className="mb-8 text-center text-2xl font-bold text-neutral-900">회원가입 및 로그인 하기</h1>

        {/* 카카오 시작 버튼 */}
        <button
          type="button"
          // onClick={handleClickKakao}
          // disabled={isKakaoLoading || isLoading}
          className="mb-7 flex w-full items-center rounded-md border bg-yellow-300 px-10 py-2 text-center font-semibold hover:bg-yellow-400 disabled:opacity-50 md:px-11">
          {/*{isKakaoLoading ? <AiOutlineLoading3Quarters className={"animate-spin"} /> : <BiSolidMessageRounded size={22} />}*/}
          <BiSolidMessageRounded size={22} />
          <div className={"grow"} style={{ color: "rgba(0, 0, 0, 0.85)" }}>
            카카오로 시작하기
          </div>
        </button>

        {/* 구분선 */}
        <div className="mb-6 flex items-center text-sm text-gray-400">
          <div className="h-px flex-1 bg-gray-200" />
          <span className="px-3">또는 이메일로 로그인</span>
          <div className="h-px flex-1 bg-gray-200" />
        </div>

        {/* 폼 */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* 이메일 */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-800">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full rounded-xl border border-gray-200 bg-[#eef3ff] px-4 py-3 text-[15px] text-gray-900 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          {/* 비밀번호 */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-800">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="w-full rounded-xl border border-gray-200 bg-[#eef3ff] px-4 py-3 pr-11 text-[15px] text-gray-900 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
              />
              {/* 비밀번호 보기/가리기 아이콘 (텍스트가 있을 때만 표시) */}
              {password.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  aria-label="비밀번호 보기/가리기">
                  {showPassword ? <GoEye size={22} /> : <PiEyeClosed size={22} />}
                </button>
              )}
            </div>
          </div>

          {/* 이메일 로그인 버튼 */}
          <button
            type="submit"
            className="mt-1 w-full rounded-xl bg-[#2557ff] py-3 text-[15px] font-semibold text-white transition hover:bg-[#1740d8]">
            Email 로그인
          </button>
        </form>

        {/* 회원가입 / 비밀번호 재설정 */}
        <div className="mt-5 flex justify-center gap-8 text-sm text-gray-700">
          <Link href={"/user/auth/sign-up"} className="hover:underline">
            이메일 회원가입
          </Link>
          <span className="text-gray-300">|</span>
          <button type="button" className="hover:underline">
            비밀번호 재설정
          </button>
        </div>

        {/* Back to Home */}
        <div className="mt-8 text-center text-[15px] text-gray-900">
          <Link href="/" className="hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
