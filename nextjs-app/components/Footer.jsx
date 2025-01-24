import SectionHeading from "./SectionHeading";
import Image from "next/image";

import img from "../public/images/gradient.png";
import logo1 from "../public/images/logos/logo1.png";
import logo2 from "../public/images/logos/logo2.png";
import main from "../public/images/Logo.png";

function Footer() {
  return (
    <footer className="">
      <div className="mx-auto max-w-[1720px]">
        <SectionHeading title="Contact us" />
        <h2 className="mb-48 text-5xl">Fill out the form and contact us.</h2>
      </div>
      <section className="bg-[#111B13] px-3 pb-12 pt-20">
        <div className="mb-16 grid w-full grid-cols-[60fr_40fr] items-start text-white">
          <div className="max-w-96">
            <h3>Credits</h3>
            <p>
              This website was created and is maintained with the financial
              support of the Italian Agency for Development Cooperation (AICS).
              Its contents are the sole responsibility of ITC Ethical Fashion
              Initiative and do not necessarily reflect the views of the Italian
              Agency for Development Cooperation.
            </p>
          </div>

          <div className="max-w-96">
            <h3 className="mb-5">Subscribe to the newsletter</h3>
            <div className="mb-20 flex items-center gap-4">
              <input type="email" className="w-full bg-white px-2 py-2" />
              <button>Join</button>
            </div>
            <Image
              src={img}
              alt="gradient footer image"
              className="h-[432px] object-cover"
            />
          </div>
        </div>
        <div className="mb-5 flex items-center gap-24 border-b border-[#1A1A1A]/20 pb-5">
          <Image src={logo1} alt="logo 1" className="object-cover" />
          <Image src={logo2} alt="logo 2" className="object-cover" />
        </div>
        <div className="">
          <Image src={main} alt="logo 2" className="object-cover" />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
