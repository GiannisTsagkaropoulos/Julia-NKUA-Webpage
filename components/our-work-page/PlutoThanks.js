import React from 'react';

function PlutoThanks() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      {/* Header / Hero Section */}
      <div className="text-center mb-20">
        <h3 className="text-4xl lg:text-5xl text-julia-blue-dark tracking-tight font-extrabold mb-6">
          A special thanks to{" "}
          <a
            target="_blank"
            href="https://plutojl.org"
            className="text-julia-blue-dark hover:underline decoration-julia-purple transition-all"
          >
            Pluto.jl
          </a>
        </h3>
        <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
          The ultimate browser-based notebook interface for the Julia language, 
          tightly linking code and computational results.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
        
        {/* Reactivity */}
        <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold uppercase tracking-widest text-julia-blue-light/60 mb-4 block">
            Reactivity
          </span>
          <h4 className="text-2xl font-bold text-slate-800 mb-4">
            Interactivity as a principle
          </h4>
          <p className="text-slate-600 leading-relaxed">
            A reactive environment where splitting code into cells makes your 
            workflow instantly interactive.
          </p>
        </div>

        {/* Reproducibility */}
        <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold uppercase tracking-widest text-julia-blue-light/60 mb-4 block">
            Reproducibility
          </span>
          <h4 className="text-2xl font-bold text-slate-800 mb-4">
            Reproducible by default
          </h4>
          <p className="text-slate-600 leading-relaxed">
            Pluto ensures that your work stays runnable for others, taking the 
            guesswork out of environment management.
          </p>
        </div>

        {/* Education */}
        <div className="group p-8 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
          <span className="text-sm font-bold uppercase tracking-widest text-julia-blue-dark mb-4 block">
            Education
          </span>
          <h4 className="text-2xl font-bold text-slate-800 mb-4">
            Designed for <em>Learning</em>
          </h4>
          <p className="text-slate-600 leading-relaxed mb-4">
            Powerful and helpful without being intimidating for students.
          </p>
          <div className="pt-4 border-t border-slate-200 mt-auto">
            <span className="text-julia-blue-dark font-bold italic">
              Prioritizing beginners over experts.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

export default PlutoThanks;