export default function PastMeetupCard({
  date,
  title,
  participant,
  className,
}) {
  return (
    <div className={`bg-light p-4 ${className}`}>
      <div class="card-header">
        <p>{date}</p>
      </div>
      <hr />
      <p>{title}</p>
      <p>{participant} went</p>
      <button className="btn btn-warning fw-bold">View</button>
    </div>
  );
}
