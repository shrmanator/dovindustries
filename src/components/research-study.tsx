import Image from "next/image";

type ResearchStudyProps = {
  id: string;
  title: string;
  question: string;
  image: string;
  alt: string;
};

export function ResearchStudy({ id, title, question, image, alt }: ResearchStudyProps) {
  return <article id={id} className="research-entry research-study">
    <h3>{title}</h3>
    <figure className="research-study-art">
      <Image src={image} alt={alt} width={1200} height={800}
        sizes="(max-width: 700px) 90vw, 44vw" />
    </figure>
    <p>{question}</p>
  </article>;
}
