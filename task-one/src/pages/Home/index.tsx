import ChartComponent from "../../components/chart";

const Home : React.FC = ()  => {
  return <>
    <main className="flex flex-col flex-1 justify-center items-center">
      <h1 className="text-3xl">Chart</h1>
      <ChartComponent/>
    </main>
  </>;
}

export default Home;
