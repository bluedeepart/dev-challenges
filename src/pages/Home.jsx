import PageHeading from "../components/PageHeading";

const Home = () => {
  return (
    <>
      <PageHeading>Home</PageHeading>
      <div className="coming-soon">
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <p>
            <span className="theme-text-red">Dev</span>challenges
          </p>
          <span style={{ fontSize: "16px" }}>By <a href="https://github.com/bluedeepart" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'underline', textUnderlineOffset: '2px'}}>bluedeepart</a></span>
        </div>
      </div>
    </>
  );
};

export default Home;
