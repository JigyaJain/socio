const RefreshData = () => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "3rem", height: "3rem", marginTop: "250px" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};

export default RefreshData;
