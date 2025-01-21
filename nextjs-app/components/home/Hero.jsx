import Image from "next/image";
import img1 from "../../public/images/1.jpg";
import img2 from "../../public/images/2.jpg";

function Hero() {
  return (
    <section className="flex h-screen items-center">
      <Image className="h-full w-[30%] object-cover" src={img1} alt="image 1" />
      <Image className="h-full w-[40%] object-cover" src={img2} alt="image 1" />
      <Image className="h-full w-[30%] object-cover" src={img1} alt="image 1" />
    </section>
  );
}

export default Hero;
