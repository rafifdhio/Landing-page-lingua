import Image from "next/image";
import Button from "../components/button";

function Page() {
  return (
    <>
      {/* Hero Section */}
      <section className="px-8 pt-8 ">
        <div className="bg-secondary min-h-[800px] rounded-[40px]">
          <div className="container mx-auto pt-36 flex item-center flex-row">
            {/* Hero Text*/}
            <div className="flex-1">
              <h1
                className="font-light text-[56px] leading-[126%] 
             text-text-primary w-8/12"
              >
                A <span className="font-medium text-primary-200">unique</span>{" "}
                approach to learning foreign languages online
              </h1>
              <p
                className="mt-[18px] text-text-body font-light
              text-lg leading-[190%] w-5/12"
              >
                Learn at your own pace, with lifetime access on mobile and
                desktop
              </p>
              <Button className="mt-8">Get Started</Button>
            </div>
            {/* Illustration */}
            <div className="flex-1 flex justify-end">
              <div className="relative w-fit mr-10">
                {/* BG 1*/}
                <div className="absolute w-[534px] aspect-1 bg-[#FFD680]/30 -rotate-[4.37deg] rounded-[60px] "></div>

                {/* Hero Image */}
                <div
                  className="w-[534px] relative aspect-1 bg-[#FFD680] rounded-[60px] 
              rotate-[10deg] overflow-hidden"
                >
                  <Image
                    src={"/hero.png"}
                    width={610}
                    height={566}
                    className="absolute -bottom-12 -rotate-[10deg]"
                    alt="hero"
                  />
                </div>

                {/* Jane */}
                <div
                  className="px-5 py-3 flex bg-white rounded-2xl absolute
              left-[-48px] top-[90px] drop-shadow-2 animate-bounce
              "
                >
                  <Image
                    src={"/avatar.png"}
                    width={48}
                    height={48}
                    className="border-outline border-[3px] rounded-full"
                  />
                  <div className="ml-4">
                    <p className="font-bold text-sm h-5 text-text-primary">
                      Jane Cooper
                    </p>
                    <span className="text-text-body text-xs leading-7 mt-1">
                      I loved the Italian course!
                    </span>
                  </div>
                </div>

                {/* Courses */}
                <div
                  className="px-5 py-[22px] bg-white rounded-2xl absolute
              right-[-40px] top-[190px] drop-shadow-2
              "
                >
                  <p className="text-primary-200 font-bold text-lg leading-[30px]">
                    10+ Courses
                  </p>
                  <span className="text-text-body text-xs leading-7 mt-1">
                    Multiple Categories
                  </span>
                </div>

                {/* Students */}
                <div
                  className="px-5 py-[22px] bg-white rounded-[29px] absolute
              bottom-[-45px] left-1/3 drop-shadow-2
              "
                >
                  <ul className="flex -space-x-3">
                    {Array.from(Array(4).keys()).map((index) => (
                      <li key={index}>
                        <Image
                          src={"/avatar.png"}
                          width={52}
                          height={52}
                          className="border-white border-2 rounded-full"
                        />
                      </li>
                    ))}
                    <li className="w-[52px] aspect-1 bg-outline border-white text-primary-200 border-2 rounded-full flex flex-col justify-center">
                      <p className="text-center text-primary-200 font-bold text-sm ledt-7">
                        50+
                      </p>
                    </li>
                  </ul>
                  <span className="text-text-body text-xs leading-7 mt-1">
                    Dedicated students per day
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}

      {/* Teachers Section */}

      {/* Member Section */}

      {/* Question Section */}
    </>
  );
}

export default Page;
