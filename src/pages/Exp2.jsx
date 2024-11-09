import { useState } from "react";

const Exp2 = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div>
      <section className="py-8">
        <h2 className="text-3xl font-bold text-center mb-4">My Experience</h2>
        <span className="text-lg text-center block mb-6">My personal journey</span>

        <div className="max-w-[768px] mx-auto">
          {/* Tabs */}
          <div className="flex justify-center mb-6">
            <div
              className={`cursor-pointer text-lg font-semibold mx-4 ${
                toggleState === 1
                  ? "text-slate-900 border-b-2 border-slate-900"
                  : "text-slate-600 hover:text-slate-800"
              }`}
              onClick={() => toggleTab(1)}
            >
              <i className="uil uil-graduation-cap mr-2"></i> Education
            </div>
            <div
              className={`cursor-pointer text-lg font-semibold mx-4 ${
                toggleState === 2
                  ? "text-slate-900 border-b-2 border-slate-900"
                  : "text-slate-600 hover:text-slate-800"
              }`}
              onClick={() => toggleTab(2)}
            >
              <i className="uil uil-briefcase-alt mr-2"></i> Experience
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-[1fr_2px_1fr] gap-6 items-start relative">
            {/* Left Column: Education */}
            <div
              className={`space-y-8 transition-opacity duration-300 ${
                toggleState === 1 ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div>
                    <h3 className="text-xl font-semibold">Web Design</h3>
                    <span className="text-sm text-gray-600">2021 - Present</span>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div>
                    <h3 className="text-xl font-semibold">Art Director</h3>
                    <span className="text-sm text-gray-600">2020 - 2021</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Vertical Separator */}
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2">
                {/* Top rounder */}
                <span className="block w-4 h-4 bg-black rounded-full mx-auto"></span>
                <div className="h-[60px] bg-black w-px mx-auto"></div>
                {/* Middle rounder */}
                <span className="block w-4 h-4 bg-black rounded-full mx-auto"></span>
                <div className="h-[60px] bg-black w-px mx-auto"></div>
                {/* Bottom rounder */}
                <span className="block w-4 h-4 bg-black rounded-full mx-auto"></span>
              </div>
            </div>

            {/* Right Column: Experience */}
            <div
              className={`space-y-8 transition-opacity duration-300 ${
                toggleState === 2 ? "opacity-100" : "opacity-50"
              }`}
            >
              <div className="space-y-6">
                <div className="flex items-start gap-6">
                  <div>
                    <h3 className="text-xl font-semibold">Product Designer</h3>
                    <span className="text-sm text-gray-600">Sparta Inc</span>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div>
                    <h3 className="text-xl font-semibold">UX Designer</h3>
                    <span className="text-sm text-gray-600">CUS Corp</span>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div>
                    <h3 className="text-xl font-semibold">Web Developer</h3>
                    <span className="text-sm text-gray-600">SM Inc</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Exp2;
