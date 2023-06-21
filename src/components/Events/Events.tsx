import { useEvents } from "./useEvents";

export const Events = () => {
  const { events } = useEvents();
  return (
    <div className="container">
      {events.map((e) => (
        <div key={e.time}>
          <h4 className="text-center mt-4 pt-4">{e.title}</h4>
          <p className="text-center">
            {e.to ? (
              <span className="text-primary">
                {e.from} - {e.to}
              </span>
            ) : (
              <span className="text-primary">{e.from}</span>
            )}

            {e.description && (
              <span className="w-50 mx-auto">
                <br />
                {e.description}
              </span>
            )}
          </p>
        </div>
      ))}
      {events.length === 0 && (
        <h3 className={`text-center mt-4 pt-4 mb-4 pb-4`}>
          Aktuell gibt es keine geplanten Termine.
        </h3>
      )}
    </div>
  );
};
