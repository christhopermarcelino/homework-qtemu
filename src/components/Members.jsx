import SectionLayout from "./SectionLayout";
import SubTitle from "./SubTitle";

export default function Members() {
  return (
    <SectionLayout>
      <SubTitle text="Members" />
      <div className="bg-light px-4 py-3">
        <div className="row">
          <div className="col-3 col-sm-2 col-md-2 col-lg-1">
            <div
              style={{
                backgroundImage: `url(/images/profile.png)`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              className="w-auto h-100"
            ></div>
          </div>
          <div className="col-9 col-sm-10 col-md-10 col-lg-11">
            <p className="mb-1">Organizers</p>
            <div className="d-flex mb-0 gap-4 gap-md-5">
              <p>Adhy Wiranata</p>
              <p>4 others</p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
