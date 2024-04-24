import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressBar from "./ProgressBar";
import StatusDisplay from "./StatusDisplay";

function TicketCard() {
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex m-3">
        <PriorityDisplay />
        <div className="ml-auto">
          <DeleteBlock />
        </div>
      </div>
      <h4>Ticket Title</h4>
      <hr className="h-px border-0 bg-page mb-2"></hr>
      <p className="whitespace-pre-wrap">this is the Ticket description</p>
      <div className="flex-grow"></div>
      <div className="flec mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">Platzhalter Datum </p>
          <ProgressBar />
        </div>
        <div className="ml-auto flex items-end"></div>
        <StatusDisplay />
      </div>
    </div>
  );
}

export default TicketCard;
