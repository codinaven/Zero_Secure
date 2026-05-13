import SecurityLogo from "./SecurityLogo";

export const Logo = () => {
  return (
    <div className="flex items-center p-0.5">
      <div className="hidden sm:block font-bold text-blue-500 pr-0.5 text-2xl hover:text-blue-400">
        NULL SECURE
      </div>
      <SecurityLogo />
    </div>
  );
};
