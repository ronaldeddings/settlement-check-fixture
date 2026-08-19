export function parsePrice(value) {
  const normalized = String(value).replace(/[$,]/g, "").trim();
  return Number.parseInt(normalized, 10);
}

