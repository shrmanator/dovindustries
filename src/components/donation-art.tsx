import Image from "next/image";

export function DonationArt() {
  return <figure className="donation-art">
    <Image src="/images/art-digidov-receipt-v3.webp"
      alt="Charcoal and oil-paint study of a curled donor receipt on a deep plum ground"
      width={1280} height={960} sizes="(max-width: 800px) 90vw, 47vw" />
  </figure>;
}
