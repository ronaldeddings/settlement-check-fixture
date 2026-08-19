import { emitCompletionReceipt } from "../../src/receipt-adapter.mjs";

const chunks = [];
for await (const chunk of process.stdin) {
  chunks.push(chunk);
}

let event = {};
try {
  event = JSON.parse(Buffer.concat(chunks).toString("utf8") || "{}");
} catch {
  event = {};
}

if (event.status === "completed") {
  await emitCompletionReceipt();
}

process.stdout.write("{}\n");

