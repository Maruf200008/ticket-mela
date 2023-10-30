import Image from "next/image";
import img1 from "../../images/event/Event02.jpg";
import img2 from "../../images/event/Event05.jpg";

export default function EventDetails() {
  return (
    <div className=" space-y-6">
      <div className=" flex flex-col md:flex-row gap-5 items-end  justify-between">
        <h1 className=" text-[30px] sm:text-[40px]  md:w-[450px] font-semibold ">
          The Strange Love Movie 2023 Festival
        </h1>
        <div className=" bg-primary px-7 py-3 text-white">
          <p>April 26, 2025</p>
        </div>
      </div>
      <p className=" text-neutral-500 leading-7">
        Neque porro est qui dolorem ipsum quia quaed inventore veritatis et
        quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
        quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className=" text-secondary font-semibold text-xl">
        Biophilia is the idea that humans possess an inate tendency seek
        connections with nature. The term translates
      </p>
      <p className=" text-neutral-500 leading-7">
        When an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        Aelltes port lacus quis enim var sed efficitur turpis.
      </p>
      <div className=" grid sm:grid-cols-2 gap-5">
        <div>
          <Image src={img1} alt="img1" />
        </div>
        <div>
          <Image src={img2} alt="img1" />
        </div>
      </div>
      <p className=" text-neutral-500 leading-7">
        Neque porro est qui dolorem ipsum quia quaed inventore veritatis et
        quasi architecto beatae vitae dicta sunt explicabo. Aelltes port lacus
        quis enim var sed efficitur turpis gilla sed sit amet finibus eros.
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>
      <p className=" text-neutral-500 leading-7">
        When an unknown printer took a galley of type and scrambled it to make a
        type specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially unchanged.
        Aelltes port lacus quis enim var sed efficitur turpis gilla sed sit amet
        finibus eros. Lorem Ipsum is simply dummy text of the printing and
        typesetting industry.
      </p>
    </div>
  );
}
