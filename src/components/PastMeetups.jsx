import PastMeetupCard from "./PastMeetupCard";
import SectionLayout from "./SectionLayout";
import SubTitle from "./SubTitle";

export default function PastMeetups() {
  return (
    <SectionLayout>
      <SubTitle text="Past Meetups" />
      <div className="row mx-0 gap-4 gap-sm-3 gap-md-4 gap-lg-4">
        <PastMeetupCard
          date="27 November 2017"
          title="#39 JakartaJS April Meetup with kumparan"
          participant={139}
          className="col-md"
        />
        <PastMeetupCard
          date="27 October 2017"
          title="#38 JakartaJS April Meetup with Blibli"
          participant={113}
          className="col-md"
        />
        <PastMeetupCard
          date="27 September 2017"
          title="#37 JakartaJS April Meetup with Hacktiv8"
          participant={110}
          className="col-md"
        />
      </div>
    </SectionLayout>
  );
}
