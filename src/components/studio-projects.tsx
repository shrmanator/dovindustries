import Image from "next/image";
import { DonationArt } from "./donation-art";
import { StudioProject } from "./studio-project";

export function StudioProjects() {
  return <div className="studio-projects">
    <StudioProject id="simplysefer" name="Simply Sefer"
      purpose="A marketplace for seforim and Judaica."
      detail="Identify a sefer from a photo, find a copy, or list one from your shelf."
      href="https://simplysefer.com" destination="Explore the marketplace"
      art={<Image src="/images/art-sefer-exchange-v3.webp"
        alt="Painterly study of a worn burgundy sefer being passed between two readers"
        width={1280} height={960} sizes="(max-width: 700px) 90vw, (max-width: 1378px) 43vw, 592px" />} />
    <StudioProject id="digidov" name="DigiDov"
      purpose="Crypto donations for nonprofits."
      detail="Accept ETH and USDC through a donation link, with receipts sent automatically."
      href="https://www.digidov.com/" destination="Explore DigiDov" art={<DonationArt />} />
  </div>;
}
