const CardComponent = ({
  origen,
  destino,
  fecha,
  hora,
  capacidad,
  precio,
  action,
}) => {
  return (
    <div className="content-flight" onClick={action}>
      <div className="origin-flight">
        <p>{origen}</p>
      </div>
      <div className="origin-flight">
        <p>{destino}</p>
      </div>
      <div className="origin-flight">
        <p>{fecha}</p>
      </div>
      <div className="origin-flight">
        <p>{hora}</p>
      </div>
      <div className="origin-flight">
        <p>{capacidad}</p>
      </div>
      <div className="origin-flight">
        <p>{precio}</p>
      </div>
    </div>
  );
};

export default CardComponent;
