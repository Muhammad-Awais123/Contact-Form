export default function Home() {
  return (
    <>
    <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    <div className="flex flex-col items-center justify-center w-full min-h-screen text-black">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">
        We'd Love to Hear from You
      </h1>
      <p className="text-lg md:text-xl text-center max-w-xl mb-6">
        Have questions, feedback, or a project idea? Fill out our simple contact form
        and our team will get back to you shortly.
      </p>
      <a
        href="/contact"
        className="bg-white text-purple-600 px-6 py-3 rounded-full text-lg font-semibold shadow-lg hover:scale-105 transform transition"
      >
        Contact Us
      </a>
    </div>
    </>

  );
}
