const Botstrap = () => {
  return (
    <div>
      <h1>Bootstrap</h1>
      <div
        className="container bg-info d-flex align-items-center justify-content-center  "
        style={{ height: "200px" }}
      >
        <div className="row w-100 bg-dark">
          <div className="col-md-4 bg-warning ">This is Column-1</div>
          <div className="col-md-4 bg-danger offset-sm-2 mt-4 mt-md-0 mt-lg-0 mt-xl-0">
            This is column-2
          </div>
        </div>
      </div>
    </div>
  );
};
export default Botstrap;
