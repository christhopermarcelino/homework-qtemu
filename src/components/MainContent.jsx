import AboutMeetup from "./AboutMeetup";
import Header from "./Header";
import Members from "./Members";
import NextMeetup from "./NextMeetup";
import PastMeetups from "./PastMeetups";

export default function MainContent() {
  return (
    <main className="container-fluid">
      <Header />
      <NextMeetup />
      <AboutMeetup />
      <Members />
      <PastMeetups />
    </main>
  );
}
