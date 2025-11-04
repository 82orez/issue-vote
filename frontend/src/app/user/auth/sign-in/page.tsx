// app/login/page.tsx (예시)

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#fafafa]">
      <div className="w-full max-w-[320px]">
        {/* 상단 카드 (로그인 폼) */}
        <div className="border border-gray-300 bg-white px-10 pt-10 pb-6">
          {/* 로고 텍스트 */}
          <h1
            className="mb-8 text-center text-5xl font-semibold tracking-tight"
            style={{
              fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            }}>
            Instagram
          </h1>

          {/* 입력 폼 */}
          <form className="space-y-3">
            <input
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
              className="w-full rounded-sm border border-gray-300 bg-[#fafafa] px-2.5 py-2 text-xs focus:border-gray-400 focus:outline-none"
            />
            <input
              type="password"
              placeholder="비밀번호"
              className="w-full rounded-sm border border-gray-300 bg-[#fafafa] px-2.5 py-2 text-xs focus:border-gray-400 focus:outline-none"
            />

            <button type="submit" className="mt-2 w-full rounded-lg bg-[#0095f6] py-2 text-sm font-semibold text-white disabled:opacity-50">
              로그인
            </button>
          </form>

          {/* 또는 구분선 */}
          <div className="my-8 flex items-center">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="px-4 text-xs font-semibold text-gray-500">또는</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Facebook 로그인 */}
          <button type="button" className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-[#385185]">
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#385185] text-xs font-bold text-white">f</span>
            <span>Facebook으로 로그인</span>
          </button>

          {/* 비밀번호 찾기 */}
          <div className="mt-4 text-center">
            <a href="#" className="text-xs text-[#00376b]">
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </div>

        {/* 하단 카드 (가입하기) */}
        <div className="mt-4 border border-gray-300 bg-white py-4 text-center text-sm">
          <span className="mr-1">계정이 없으신가요?</span>
          <a href="#" className="font-semibold text-[#0095f6]">
            가입하기
          </a>
        </div>
      </div>
    </div>
  );
}
