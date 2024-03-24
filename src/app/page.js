import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section className="text-center my-12" id="about">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About us"} />
        <div className=" w-full grid sm:grid-cols-2 text-white mt-7 pb-4 sm:pb-28">
          <div className="sm:px-4">
            <div className="bg-[#4B494E] px-5 py-9 rounded text-start">
              <h1 className="text-2xl mb-2">The story of fresh cake</h1>
              <p className="py-2">
                Over 12 years of continuous development, Fresh Garden - Fresh
                cakes every day with a mission to bring customers nutritious -
                safe - natural products that are good for users health.
              </p>
            </div>
          </div>
          <div className="pr-20 hidden sm:block">
            <div className="bg-[#b1c23c] flex w-full items-center h-full mt-20">
              <div className="w-full">
                <Image
                  src="https://theme.hstatic.net/200000411281/1000949882/14/ha_image.jpg?v=364"
                  alt="The story of fresh cake"
                  className="w-full ml-16"
                  width={200}
                  height={200}
                ></Image>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-center my-8" id="contact">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact us"}
        />
        <div className="mt-8">
          <section className="grid lg:grid-cols-2 gap-14 pb-4 lg:items-center">
            <article className="text-start block h-full">
              <h3 className="mb-6 text-3xl tracking-wider">
                Want To Get In Touch?
              </h3>
              <p className="mb-4 text-lg text-gray-600">
                If you have any questions, feedback, or suggestions, We look
                forward to hearing from you and supporting you in any way we
                can.
              </p>
              <p className="mb-4 text-lg text-gray-600">
                Please feel free to reach out to us by filling out the form
                below or by sending an email directly to our address.
              </p>
              <p className="mb-4 text-lg text-gray-600">
                We will endeavor to respond to you as promptly as possible.
              </p>
            </article>
            <article>
              <form className="w-full bg-white max-[415px]:px-6 px-10 py-8 border-2 border-gray-200 shadow-md rounded-xl">
                <div className="mb-4">
                  <label htmlFor="name" className="block mb-2 text-start">
                    Your name
                  </label>
                  <input type="text" name="name" id="name"></input>
                </div>
                <div className="form-row mb-4">
                  <label htmlFor="email" className="block mb-2 text-start">
                    Your email
                  </label>
                  <input type="text" name="email" id="email"></input>
                </div>
                <div className="form-row mb-4">
                  <label htmlFor="message" className="block mb-2 text-start">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    className="!h-28"
                  ></textarea>
                </div>
                <button type="submit" className="btn block">
                  Submit
                </button>
              </form>
            </article>
          </section>
        </div>
      </section>
    </>
  );
}
