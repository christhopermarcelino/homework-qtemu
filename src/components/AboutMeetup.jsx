import SectionLayout from "./SectionLayout";
import SubTitle from "./SubTitle";

export default function AboutMeetup() {
  return (
    <SectionLayout>
      <SubTitle text="About Meetup" />
      <div className="bg-light px-4 py-3">
        <p>
          Come and meet other developers interested in the JavaScript and it's
          library in the Greater Jakarta area. <br />
          Twitter: @JakartaJS and we use the hashtag #jakartajs
        </p>
      </div>
    </SectionLayout>
  );
}
