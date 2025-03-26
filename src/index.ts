const log = (message: string) => {
  const pre = document.createElement("pre");
  pre.textContent += message + "\n";
  document.getElementById("console")!.appendChild(pre);
};

window.addEventListener("message", (e) => {
  if (e.data.command !== "PROCESS") return;
  log(`GOT MESSAGE (${e.type}) ${JSON.stringify(e.data, null, 2)}`);
});

log("SENDING READY MESSAGE");
window.parent.postMessage({ event: "READY" }, "*");
