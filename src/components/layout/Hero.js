import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Welcome to
          <br />
          the SSoy
          <br />
          cake&nbsp;
          <span className="text-primary">collection</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Cake is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button className="flex justify-center bg-primary hover:bg-black uppercase  text-white px-4 py-2 rounded-full">
            <Link href={"/menu"} className="flex gap-2 items-center">
              Order now
              <Right />
            </Link>
          </button>
          <button className="flex items-center border-0 py-2 text-gray-600 font-semibold hover:bg-inherit">
            <Link href={"/menu"} className="flex gap-2 items-center">
              Learn more
              <Right />
            </Link>
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={"/cake5.jpeg"}
          layout={"fill"}
          objectFit={"contain"}
          alt={"pizza"}
        />
      </div>
    </section>
  );
}
