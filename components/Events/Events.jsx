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
              <span className="text-primary">{e.von}</span>
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
    </div>
  );
};
