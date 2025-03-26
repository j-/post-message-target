const log = (message: string) => {
  const pre = document.createElement("pre");
  pre.textContent += message + "\n";
  document.getElementById("console")!.appendChild(pre);
};

window.addEventListener("message", (e) => {
  if (!e.data.command) return;
  log(`Got ${e.data.command} message\n${JSON.stringify(e.data, null, 2)}`);
});

const payload = { event: "READY" };
log(`Sending READY message\n${JSON.stringify(payload, null, 2)}`);
window.parent.postMessage(payload, "*");

document.getElementById("send")!.addEventListener("click", (e) => {
  e.preventDefault();
  const payload = {
    event: "SEND",
    variables: {
      timestamp: Date.now(),
      message: "Success",
      proceed: "yes",
    },
  };
  log(`Sending PROCEED message\n${JSON.stringify(payload, null, 2)}`);
  window.parent.postMessage(payload, "*");
});
