import SectionLayout from "./SectionLayout";
import Section from "./SectionLayout";
import SubTitle from "./SubTitle";

export default function NextMeetup() {
  return (
    <SectionLayout>
      <SubTitle text="Next Meetup" />
      <div className="bg-light px-4 py-3">
        <p>Awesome meetup and event</p>
        <p>25 January 2019</p>
        <p>
          Hello, JavaScript & Node.js Ninjas! Get ready for our monthly meetup
          JakartaJS! <br />
          This will be our fifth meetup of 2018! The meetup format will contain
          some short stories and technical talks. <br />
          If you have a short announcement you'd like to share with the
          audience, you may do so during open mic announcements.
          <br />
          <br />
          Remember to bring a photo ID to get through building security. <br />{" "}
          <br />
          ----- <br /> <br /> See you there! <br />
          Best, Hengki, Giovanni, Sofian, Riza, Agung The JakartaJS Organizers
        </p>
      </div>
    </SectionLayout>
  );
}
