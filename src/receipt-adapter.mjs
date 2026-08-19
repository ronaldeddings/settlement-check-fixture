import { mkdir, writeFile } from "node:fs/promises";

const RECEIPT_PATH = "output/last-completion-receipt.json";

export async function emitCompletionReceipt() {
  const receipt = {
    schemaVersion: 1,
    reference: "pine-field",
    completionSucceeded: true
  };

  await mkdir("output", { recursive: true });
  await writeFile(RECEIPT_PATH, `${JSON.stringify(receipt, null, 2)}\n`);
}

