export const Hero = () => {
  return (
    <div className="grid sm:grid-cols-2 ">
      <div className="flex flex-col m-2 p-10 gap-2">
        <h1 className="text-5xl text-black font-bold">Protect</h1>
        <h1 className="text-5xl text-purple-500 font-bold">Everything</h1>
        <h1 className="text-5xl text-black font-bold">You Build and</h1>
        <h1 className="text-5xl text-black font-bold">Run</h1>
        <p className="font-medium text-wrap">
          Null Secure connects code, cloud, and runtime into a single security
          graph that provides the end-to-end context required to automate risk
          reduction and threat response, enabling security teams to operate at
          AI speed. AI alone doesn't make security faster. Context does.
        </p>
        <div className="flex gap-4 my-5">
          <input
            className="border border-gray-400 text-heading text-sm rounded-full px-5 py-2.5 shadow-xs outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
            type="text"
            placeholder="Your work email here"
          />
          <button className="bg-blue-500 p-2 rounded-full px-6 font-bold  text-white flex items-center gap-2 hover:bg-blue-600 transition-all  hover:-translate-y-1 hover: hover:shadow-[0_8px_0_rgb(30,64,175)]">
            Get a demo
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
};
