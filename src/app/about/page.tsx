import surya from "@/assets/images/surya.jpg";
import Image from "next/image";

export default function About() {
  return (
    <section className="container md:px-16 px-6 my-20">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">
        <div>
          <h1 className="font-sans font-extrabold text-4xl mb-8 bg-gradient-to-r from-emerald-300/10 to-sky-400/10 dark:from-emerald-300 dark:to-sky-400 bg-clip-text text-zinc-900 dark:text-transparent">
            I'm surya kiran,<br/> Frontend devloper.
          </h1>
          <div className="text-zinc-500 dark:text-white/50">
            <p>
              Hello! I'm a passionate frontend developer dedicated to crafting
              engaging, user-friendly experiences. With expertise in React and
              Shopify, I specialize in creating seamless, high-performing
              applications that blend functionality with aesthetics. My journey
              as a developer has taught me the importance of adaptability and
              continuous learning, which keeps me motivated to explore new tools
              and technologies.
            </p>
            <br />
            <p>
              Collaboration is at the heart of my work—I love working with
              diverse teams and exchanging ideas to deliver impactful solutions.
              Whether it's tackling a complex problem or diving into a new
              project, I'm always excited to take on challenges and grow
              alongside talented peers. If you're looking for someone who values
              growth, creativity, and a strong user experience, let's connect!
            </p>
          </div>
        </div>
        <div className="sm:order-[-1] sm:mb-12 lg:order-1 lg:mb-0">
          <div className="">
            <div className="max-w-[350px] mx-auto mb-2">
              <Image src={surya} alt="surya" />
            </div>
            <a
              download="resume.pdf"
              target="_blank"
              href='/documents/resume.pdf'
              className="flex cursor-pointer items-center justify-center gap-x-2 bg-gradient-to-r from-emerald-300/10 to-sky-400/10 dark:from-emerald-300 dark:to-sky-400 text-zinc-900 dark:text-gray-900 border border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:border-zinc-700 rounded-md duration-200 py-2 text-center font-medium"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="text-base"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19.903 8.586a.997.997 0 0 0-.196-.293l-6-6a.997.997 0 0 0-.293-.196c-.03-.014-.062-.022-.094-.033a.991.991 0 0 0-.259-.051C13.04 2.011 13.021 2 13 2H6c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V9c0-.021-.011-.04-.013-.062a.952.952 0 0 0-.051-.259c-.01-.032-.019-.063-.033-.093zM16.586 8H14V5.414L16.586 8zM6 20V4h6v5a1 1 0 0 0 1 1h5l.002 10H6z"></path>
                <path d="M8 12h8v2H8zm0 4h8v2H8zm0-8h2v2H8z"></path>
              </svg>
              Download Resumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
