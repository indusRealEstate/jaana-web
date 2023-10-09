const SellingList = () => {
  const listItems = [
    "Find excellent deals",
    "More verified listings with the most accurate information and details ",
    "High-quality service level",
  ];

  return (
    <div className="list-style1 mb60 mb30-md">
      <ul>
        {listItems.map((item, index) => (
          <li key={index}>
            <i className="far fa-check text-white bgc-dark fz15" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellingList;
