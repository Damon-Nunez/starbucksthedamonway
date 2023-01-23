import Card from "react-bootstrap/Card";

function BasicCard({ item }) {
  return (
    <Card
      style={{
        width: 350,
        height: 240,
        borderColor:"transparent",
        padding:"17px",
      }}
    >
      <Card.Link href={item?.link}>
      <Card.Img variant="top" src={item?.image} />
      </Card.Link>
    </Card>
  );
}

export default BasicCard;