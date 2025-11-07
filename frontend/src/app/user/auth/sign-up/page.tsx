"use client";

import { useState } from "react";
import Link from "next/link";
import { GoEye } from "react-icons/go";
import { PiEyeClosed } from "react-icons/pi";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !nickname || !password || !passwordConfirm) {
      setError("모든 항목을 입력해주세요.");
      return;
    }

    if (password !== passwordConfirm) {
      setError("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    // TODO: 실제 회원가입 API 호출
    console.log({ email, nickname, password });
  };

  return (
    <div className="my-10 flex justify-center px-4">
      <div className="w-full max-w-md rounded-3xl bg-white px-8 py-10 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        {/* 제목 */}
        <h1 className="mb-8 text-center text-2xl font-bold text-neutral-900">이메일 회원가입</h1>

        {/* 에러 메시지 */}
        {error && <div className="mb-4 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</div>}

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

          {/* 닉네임 */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-800">닉네임</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="사용하실 닉네임을 입력하세요"
              className="w-full rounded-xl border border-gray-200 bg-[#eef3ff] px-4 py-3 text-[15px] text-gray-900 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
            />
          </div>

          {/* 비밀번호 */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-800">비밀번호</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력하세요"
                className="w-full rounded-xl border border-gray-200 bg-[#eef3ff] px-4 py-3 pr-11 text-[15px] text-gray-900 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
              />
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

          {/* 비밀번호 확인 */}
          <div className="space-y-1.5">
            <label className="text-sm font-medium text-gray-800">비밀번호 확인</label>
            <div className="relative">
              <input
                type={showPasswordConfirm ? "text" : "password"}
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                placeholder="비밀번호를 다시 입력하세요"
                className="w-full rounded-xl border border-gray-200 bg-[#eef3ff] px-4 py-3 pr-11 text-[15px] text-gray-900 transition outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/40"
              />
              {passwordConfirm.length > 0 && (
                <button
                  type="button"
                  onClick={() => setShowPasswordConfirm((prev) => !prev)}
                  className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  aria-label="비밀번호 확인 보기/가리기">
                  {showPasswordConfirm ? <GoEye size={22} /> : <PiEyeClosed size={22} />}
                </button>
              )}
            </div>
          </div>

          {/* 회원가입 버튼 */}
          <button
            type="submit"
            className="mt-1 w-full rounded-xl bg-[#2557ff] py-3 text-[15px] font-semibold text-white transition hover:bg-[#1740d8]">
            회원가입 완료
          </button>
        </form>

        {/* 하단 링크들 */}
        <div className="mt-6 text-center text-[14px] text-gray-700">
          이미 계정이 있으신가요?{" "}
          <Link href="/user/auth/sign-in" className="font-medium text-[#2557ff] hover:underline">
            로그인 하기
          </Link>
        </div>

        <div className="mt-6 text-center text-[15px] text-gray-900">
          <Link href="/" className="hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
