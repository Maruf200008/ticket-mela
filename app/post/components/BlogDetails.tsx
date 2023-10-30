import Image from "next/image";
import img from "../../images/post/blog-5.jpg";
import calanderImg from "../../images/post/calendar.png";
import commentImg from "../../images/post/chat.png";
import folderImg from "../../images/post/folder.png";
export default function BlogDetails() {
  return (
    <div>
      <Image src={img} alt="img" />
      <div className=" mt-10 space-y-5">
        <h1 className=" text-[30px] font-semibold">
          The Foreign Oscar Nominations 2023
        </h1>
        <div className=" flex gap-7">
          <div className=" flex gap-3">
            <Image src={calanderImg} width={20} alt="calanderImg" />
            <p className=" text-neutral-600">March 23, 2023</p>
          </div>
          <div className=" flex gap-3 items-center">
            <Image
              src={folderImg}
              alt="calanderImg"
              className=" w-[25px] h-[18px]"
            />
            <p className=" text-neutral-600">Fantasy</p>
          </div>
          <div className=" flex gap-3 items-center">
            <Image
              src={commentImg}
              alt="calanderImg"
              className=" w-[22px] h-[20px]"
            />
            <p className=" text-neutral-600">0 Comments</p>
          </div>
        </div>
        <p className=" text-neutral-500 leading-7">
          Lorem ipsum dolor sit amet, cibo mundi ea duo, vim exerci phaedrum.
          There are many variations of passages of Lorem Ipsum available, but
          the majority have alteration in some injected or words which don’t
          look even slightly believable.
        </p>
        <p className=" text-neutral-500 leading-7">
          All the Lorem Ipsum generators on the Internet tend to repeat
          predefined chunks as necessary, making this the first true generator
          on the Internet. It uses a dictionary of over 200 Latin words,
          combined with a handful of model sentence structures, to generate
          Lorem Ipsum which looks reasonable.
        </p>
        <p className=" text-neutral-500 leading-7">
          Lorem Ipsum has been the industry’s standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type simen book. It has survived not only five centuries,
          but also the leap into electronic typesetting.
        </p>
        <h1 className=" text-[30px] font-semibold text-secondary">
          Lorem Ipsum has been the industry’s standard dummy text ever since
        </h1>
        <p className=" text-neutral-500 leading-7">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. orem Ipsum has been the industry’s standard dummy text ever
          since the when an unknown printer took a galley of type and scrambled
          it to ma
        </p>
      </div>
    </div>
  );
}
