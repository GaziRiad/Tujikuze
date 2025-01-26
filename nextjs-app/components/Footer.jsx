import SectionHeading from "./SectionHeading";
import Image from "next/image";

import img from "../public/images/gradient.png";
import logo1 from "../public/images/logos/logo1.png";
import logo2 from "../public/images/logos/logo2.png";
import main from "../public/images/Logo.png";

function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-[1720px] px-4">
        <SectionHeading title="Contact us" />
        <h2 className="mb-14 text-sm lg:mb-48 lg:text-5xl">
          Fill out the form and contact us.
        </h2>
      </div>
      <section className="bg-[#111B13] px-4 pb-12 pt-11 lg:pt-20">
        <div className="mx-auto max-w-[1720px]">
          <div className="mb-16 grid w-full grid-cols-1 items-start gap-14 text-white lg:grid-cols-[60fr_40fr] lg:grid-rows-1 lg:gap-0">
            {/* First column */}
            <div className="order-2 max-w-96 lg:order-1">
              <h3 className="mb-7 text-lg">Credits</h3>
              <p className="mb-7 text-sm">
                This website was created and is maintained with the financial
                support of the Italian Agency for Development Cooperation
                (AICS). Its contents are the sole responsibility of ITC Ethical
                Fashion Initiative and do not necessarily reflect the views of
                the Italian Agency for Development Cooperation.
              </p>

              <p className="mb-7 text-sm">2023 © All rights reserved.</p>
              <p className="text-sm">
                The Ethical Fashion Initiative is a programme of the
                International Trade Centre, a joint agency of the United Nations
                and the World Trade Organization.
              </p>
            </div>

            {/* Second column */}
            <div className="order-1 lg:order-2 lg:max-w-96">
              <h3 className="mb-5">Subscribe to the newsletter</h3>
              <div className="mb-14 flex items-center gap-4 lg:mb-20">
                <input
                  type="email"
                  className="w-full bg-white px-[10px] py-[6px]"
                />
                <button className="border border-white px-[10px] py-[6px] text-sm text-light-500">
                  Join
                </button>
              </div>
              <Image
                src={img}
                alt="gradient footer image"
                className="h-[432px] w-full object-cover"
              />
            </div>
          </div>
          <div className="mb-5 flex items-center gap-24 border-b border-[#1A1A1A]/20 pb-5">
            <Image src={logo1} alt="logo 1" className="object-cover" />
            <Image src={logo2} alt="logo 2" className="object-cover" />
          </div>
          <div>
            <Image src={main} alt="logo 2" className="object-cover" />
          </div>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
