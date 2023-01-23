import Card from "react-bootstrap/Card";

function BasicCard({ item }) {
  return (
    <Card
      style={{
        width: 300,
        height: 190,
        color: "rgba(255, 255, 255, 0.5)",
        boxShadow: "0px 12px 17px rgb(0 0 0 / 30%)",
        borderRadius: "25px",
      }}
    >
      <Card.Img variant="top" src={item?.image} />
    </Card>
  );
}

export default BasicCard;