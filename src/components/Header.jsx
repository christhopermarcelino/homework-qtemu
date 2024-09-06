import SubTitle from "./SubTitle";

export default function Header() {
  return (
    <header className="bg-light p-4 mt-3 mx-4">
      <div className="row">
        <div className="col-md-3 mb-3 mb-md-0">
          <div
            style={{
              backgroundImage: `url(/images/hacktiv8.jpg)`,
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              minHeight: "10rem",
            }}
            className="w-100 h-100"
          ></div>
        </div>
        <div className="col-md-9">
          <SubTitle
            text="Hacktiv8 Meetup"
            className={"text-center text-md-start"}
          />
          <table className="table table-responsive table-borderless w-auto">
            <tbody>
              <tr>
                <td className="bg-transparent p-1">Location</td>
                <td className="bg-transparent p-1">Jakarta, Indonesia</td>
              </tr>
              <tr>
                <td className="bg-transparent p-1">Members</td>
                <td className="bg-transparent p-1">1078</td>
              </tr>
              <tr>
                <td className="bg-transparent p-1">Organizers</td>
                <td className="bg-transparent p-1">Adhy Wiranata</td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-warning fw-bold">Join us</button>
        </div>
      </div>
    </header>
  );
}
