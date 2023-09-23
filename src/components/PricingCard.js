import Image from "next/image";

export default function PricingCard({img, type, price }) {
  return (
    <div className=" pricingcard w-[30%] py-4 flex flex-wrap flex-col justify-center items-center gap-5 shadow-[0px_20px_20px_10px_#00000024]">
      <Image src={img} alt="image" className=" w-[50%] " />
      <p className="  text-3xl text-blue-700">{type}</p>
      <p className=" font-bold text-4xl text-green-500">${price}</p>
      <ul className=" flex flex-col gap-y-5 items-center justify-center text-center text-black">
        <li> Free Hand</li>
        <li>Gym Fitness</li>
        <li>Weight Loss</li>
        <li>Personal Trainer</li>
        <li>Cycling </li>
      </ul>
    </div>
  );
}
