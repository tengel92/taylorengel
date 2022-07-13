import { useState } from 'react';

const Intro = () => {
  const intoTextOptions = [
    `Full Stack Software Engineer`,
    `I build modern web & mobile applications`,
  ];

  const [notScrolled, setNotScrolled] = useState(true);

  window.onscroll = function (e) {
    setNotScrolled(false);
  };

  return (
    <section
      className="flex flex-col items-center justify-center max-w-screen-xl min-h-screen font-semibold text-white animate-tracking-in-expand-fwd-top"
      id="home"
    >
      <div className="mt-auto">
        <p className="text-sm lg:text-lg">Hi, my name is</p>
        <h1 className="pb-4 text-5xl font-extrabold text-transparent bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 bg-clip-text sm:text-8xl">
          Taylor Engel
        </h1>
        <h2 className="lg:text-2xl">
          I build modern web & mobile applications
        </h2>
      </div>

      <div className="mt-auto animate-bounce">
        {notScrolled && (
          <div className="flex flex-col items-center pb-3">
            <div className="text-indigo-400">scroll down</div>
            <div className="text-xl text-indigo-300 ">&darr;</div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Intro;
