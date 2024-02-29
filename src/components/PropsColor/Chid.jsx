const Chid = ({ colorValue, headerName }) => {
  return (
    <div>
      {headerName ? <h1>{headerName}</h1> : <h1>This Child Components</h1>}

      <div
        style={{
          //   backgroundColor: "red",
          backgroundColor: `${colorValue ? "green" : "red"}`,
          height: "200px",
          color: "white",
          marginTop: "50px",
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
        mollitia, molestiae quas vel sint commodi repudiandae consequuntur
        voluptatum laborum numquam blanditiis harum quisquam eius sed odit
        fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
        accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut
        molestias architecto voluptate aliquam nihil, eveniet aliquid culpa
        officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum
        nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque
        error repudiandae fuga? Ipsa laudantium molestias eos
      </div>
    </div>
  );
};

export default Chid;
