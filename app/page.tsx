import TicketCard from "./(components)/TicketCard";

export const Dashboard = () => {
  return (
    <div className="p-5">
      <div className="lg:grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </div>
  );
};

export default Dashboard;
