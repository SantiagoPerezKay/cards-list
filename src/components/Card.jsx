
import "./card.css";
const Card = ({ user }) => {
  return (
    <div className="max-w-xs mx-auto min-w-[300px] min-h-[200px] my-4 p-4 bg-white shadow-lg rounded-xl border hover:scale-105 transition-transform" id="tarjeta">
      <h3 className="text-lg font-bold mb-2 text-center text-blue-600">Usuario</h3>
      <p className=" break-words"><strong>Nombre:</strong> {user.nombre}</p>
      <p className=" break-words"><strong>Apellido:</strong> {user.apellido}</p>
      <p className=" break-words" ><strong>Email:</strong> {user.email}</p>
    </div>
  );
};

export default Card;