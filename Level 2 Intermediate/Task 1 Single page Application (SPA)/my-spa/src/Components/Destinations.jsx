const Destinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      image: "/pexels-pixabay-415708.jpg",
      description:
        "Experience the city of love with iconic landmarks and world-class cuisine",
      duration: "7 Days",
      price: "$2,499",
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      image: "/pexels-pixabay-415980.jpg",
      description:
        "Immerse yourself in ancient traditions meets cutting-edge technology",
      duration: "10 Days",
      price: "$3,299",
    },
    {
      id: 3,
      name: "Santorini, Greece",
      image: "/pexels-pixabay-236296.jpg",
      description:
        "Discover breathtaking sunsets and stunning white-washed villages",
      duration: "6 Days",
      price: "$2,199",
    },
    {
      id: 4,
      name: "Maldives Paradise",
      image: "/pexels-rbrigant44-771881.jpg",
      description:
        "Relax in luxury overwater villas surrounded by crystal-clear waters",
      duration: "5 Days",
      price: "$4,599",
    },
  ];

  return (
    <div className="destinations-page">
      <div className="page-header">
        <h1>Discover Your Next Adventure</h1>
        <p>Handpicked destinations that create unforgettable memories</p>
      </div>

      <div className="destinations-grid">
        {destinations.map((dest) => (
          <div key={dest.id} className="destination-card">
            <div className="destination-image">
              <img src={dest.image} alt={dest.name} />
              <div className="destination-overlay">
                <button className="btn-book">Book Now</button>
              </div>
            </div>
            <div className="destination-info">
              <h3>{dest.name}</h3>
              <p>{dest.description}</p>
              <div className="destination-meta">
                <span className="duration">🕐 {dest.duration}</span>
                <span className="price">{dest.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
