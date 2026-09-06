import Navbar from "../components/navbar/navbar";
import { useParams } from "react-router-dom";

export default function RecipePage() {
  // make api call to fetch the data for the current recipe

  const { name } = useParams();

  return (
    <body>
      <Navbar></Navbar>
      <p>{name}</p>
    </body>
  );
}
