import Image from "next/image";

const SingleAgent = () => {
  return (
    <div className="exclusive-agent-single mb30-sm">
      <div className="agent-img">
        <Image
          width={210}
          height={240}
          src="/images/team/jaana.jpeg"
          alt="team"
        />
      </div>
      <div className="agent-content pt20">
        <h6 className="title mb-0">Jaana Markkanen</h6>
        <p className="fz15 mb-0">Real estate agent</p>
      </div>
    </div>
  );
};

export default SingleAgent;
