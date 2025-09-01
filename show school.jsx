export default function ShowSchools() {
  const mockSchools = [
    {
      name: "Greenwood High",
      address: "123 Green St",
      city: "Mumbai",
      image: "https://via.placeholder.com/150"
    },
    {
      name: "Sunrise School",
      address: "456 Sunshine Ave",
      city: "Delhi",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>List of Schools</h2>
      {mockSchools.map((school, index) => (
        <div key={index} style={{ border: '1px solid #ccc', marginBottom: 10, padding: 10 }}>
          <img src={school.image} alt={school.name} width="100%" />
          <h3>{school.name}</h3>
          <p>{school.address}, {school.city}</p>
        </div>
      ))}
    </div>
  );
}
