export function isObjectRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null
}

export function hasStringField(obj: Record<string, unknown>, key: string): boolean {
  return typeof obj[key] === "string"
}

export function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === "string")
}
