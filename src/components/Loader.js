import { TailSpin } from "react-loader-spinner";

function Loader() {
  return (
    <div>
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <TailSpin color="#000" height={80} width={80} />
      </div>
    </div>
  );
}

export default Loader;
