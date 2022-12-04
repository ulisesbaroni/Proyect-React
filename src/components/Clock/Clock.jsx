/* import * as React from "https://cdn.skypack.dev/react@18.2.0";
import * as ReactDOM from "https://cdn.skypack.dev/react-dom@18.2.0";

const AppClock = () => (
  <div className="app">
    <div className="containerClock">
    <img src="https://static.wixstatic.com/media/bbe01b_c4b47521203846faa70386699da89057~mv2.png/v1/crop/x_0,y_0,w_898,h_790/fill/w_480,h_420,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/FIFA%20World%20Cup%20Qatar%202022%20Logo%20(PNG-1080p)%20-%20FileVector69.png" alt="" style={{maxWidth: '120px'}} />
      <h1 className="headerTitle">Faltan</h1>
      <Timer deadline="December, 18, 2022" />
      <h1 className="headerTitle">Para la final del mundo!!</h1>
      <img src="https://www.marhaba.qa/wp-content/uploads/2022/08/laeeb-logo-fifa-qatar-2022.png" alt="" style={{maxWidth: '150px'}} />
    </div>
  </div>
);

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Timer = ({ deadline = new Date().toString() }) => {
  const parsedDeadline = React.useMemo(() => Date.parse(deadline), [deadline]);
  const [time, setTime] = React.useState(parsedDeadline - Date.now());

  React.useEffect(() => {
    const interval = setInterval(
      () => setTime(parsedDeadline - Date.now()),
      1000
    );

    return () => clearInterval(interval);
  }, [parsedDeadline]);

  return (
    <div className="timer">
      {Object.entries({
        Dias: time / DAY,
        Horas: (time / HOUR) % 24,
        Minutos: (time / MINUTE) % 60,
        Segundos: (time / SECOND) % 60
      }).map(([label, value]) => (
        <div key={label} className="col-4">
          <div className="box">
            <p>{`${Math.floor(value)}`.padStart(2, "0")}</p>
            <span className="text">{label}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
ReactDOM.render(<AppClock />, document.getElementById("clock-root"));

 */
