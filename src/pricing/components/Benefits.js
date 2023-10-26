const benefits = [
  {
    title: "1",
    subtitle: "1",
  },
  {
    title: "2",
    subtitle: "2",
  },
  {
    title: "3",
    subtitle: "3",
  },
];

export default function Benefits() {
  return (
    <div className="bg-black">
      <div className="column-padding">
        <div className="content-grid xl">
          {benefits.map((benefit) => (
            <div key={benefit.title} className="spacing-base">
              <h3>
                {benefit.title}
                <br />
              </h3>
              <div>{benefit.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
