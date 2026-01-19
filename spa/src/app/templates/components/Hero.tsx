import { MgnlContent } from "@magnolia/frontend-helpers-base";
import Image from "../fragments/Image";
import Tags from "../../components/Tags";

export default function Hero({
  heroImage,
  heroTitle,
  timeToRead,
  heroTags,
}: {
  heroImage: MgnlContent;
  heroTitle: string;
  timeToRead: string;
  heroTags: MgnlContent;
}) {

  const getTags = (tags: MgnlContent) => {
    const tagNodes = (tags['@nodes']?.map((node: string) => tags[node]) || []) as MgnlContent[];
    return tagNodes
      .map((tag: MgnlContent) => tag?.field as string | undefined)
      .filter((field): field is string => Boolean(field));
  };

  const tags = getTags(heroTags);

  return (
    <section className="w-full bg-[#F5F5F5]">
      <Image image={heroImage} alt={heroTitle} caption={heroTitle} />
      <div className="max-w-[1200px] mx-auto">
        <div className="py-12 px-5 space-y-4">
          <h1 className="text-[64px]/[80px] font-bold text-[#008264]">{heroTitle}</h1>
          <div className="flex gap-10">
            <div className="time-to-read flex gap-2">
              <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M14.8043 7.09153C14.9301 6.97617 15.1283 6.98254 15.2464 7.10555C15.3624 7.22728 15.3624 7.41657 15.2464 7.53893L14.2161 8.54592C14.0883 8.66382 13.8882 8.66382 13.7604 8.54592L12.7621 7.55805L12.7601 7.55614C12.6336 7.43122 12.6343 7.22919 12.7621 7.10555C12.7666 7.10045 12.7712 7.09599 12.7764 7.09153C12.9023 6.97617 13.1005 6.98254 13.2192 7.10555L13.6749 7.55168C13.5374 5.37265 12.213 3.43453 10.2067 2.47534C7.12709 1.00311 3.40977 2.24973 1.90355 5.25984C0.39732 8.26995 1.67272 11.9034 4.75234 13.3762C7.83195 14.8485 11.5493 13.6012 13.0561 10.5917C13.1376 10.4362 13.3307 10.3706 13.493 10.4452H13.4937C13.6554 10.5229 13.7219 10.7141 13.6423 10.8722C12.5762 13.055 10.3841 14.5018 7.91346 14.6535C4.15441 14.8835 0.915697 12.0914 0.680308 8.41654C0.44492 4.74233 3.30219 1.57671 7.06123 1.34663C10.8209 1.11655 14.0596 3.9087 14.2944 7.58355L14.7906 7.10555L14.7914 7.10465C14.7956 7.09992 14.7994 7.09572 14.8043 7.09153ZM7.14163 3.19852C7.14163 3.02262 7.28769 2.87986 7.46765 2.87986C7.64762 2.87986 7.79368 3.02262 7.79368 3.19852V7.7873L10.291 10.5087L10.293 10.5106C10.4195 10.6355 10.4188 10.8376 10.291 10.9612C10.2336 11.016 10.156 11.046 10.0758 11.0441C9.9839 11.0453 9.89652 11.0084 9.83458 10.9421L7.2264 8.12508C7.17358 8.06454 7.14359 7.98806 7.14163 7.90839V3.19852Z" fill="#008264" />
              </svg>
              <div>{timeToRead}</div>
            </div>
            <div className="tags flex gap-2 items-center">
              <label>Topic: </label>
              <Tags tags={tags} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};