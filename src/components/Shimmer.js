const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(10)
        .fill("")
        .map((e) => (
          <div className="shimmer-cards"></div>
        ))}
    </div>
  );
};

export default Shimmer;
