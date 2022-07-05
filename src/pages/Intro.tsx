const Intro = () => {
  const intoTextOptions = [
    `Full Stack Software Engineer`,
    `I build modern web & mobile applications`,
  ];

  return (
    <section
      className="flex items-center justify-center max-w-screen-xl min-h-screen mx-auto font-semibold text-white animate-tracking-in-expand-fwd-top"
      id="home"
    >
      <div>
        <p className="text-sm lg:text-lg">Hi, my name is</p>
        <h1 className="pb-4 text-5xl font-extrabold text-transparent bg-gradient-to-r from-indigo-200 via-indigo-300 to-indigo-200 bg-clip-text sm:text-8xl">
          Taylor Engel
        </h1>
        <h2 className="lg:text-2xl">
          I build modern web & mobile applications
        </h2>
      </div>
    </section>
  );
};

export default Intro;
