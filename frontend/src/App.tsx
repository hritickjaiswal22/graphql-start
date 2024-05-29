import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWithUser {
    getTodos {
      title
      id
      completed
      user {
        email
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);

  console.log(data);

  if (loading) return <h1>Loading</h1>;

  return (
    <table>
      <tbody>
        {data.getTodos.map((todo: any) => (
          <tr>
            <td>{todo.title}</td>
            <td>{todo?.user?.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
