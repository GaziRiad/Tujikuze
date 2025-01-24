import SectionHeading from "./SectionHeading";
import img from "../public/images/gradient.png";
import Image from "next/image";

function Footer() {
  return (
    <footer className="mb-48">
      <div className="mx-auto max-w-[1720px]">
        <SectionHeading title="Contact us" />
        <h2 className="mb-48 text-5xl">Fill out the form and contact us.</h2>
      </div>
      <div className="grid w-full grid-cols-[60fr_40fr] items-start bg-[#111B13] px-3 py-20 text-white">
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
          <h3>Subscribe to the newsletter</h3>
          <Image
            src={img}
            alt="gradient footer image"
            className="h-[432px] object-cover"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
