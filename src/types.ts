export type UserRole = "owner" | "lmo" | "gatc" | "admin";
export type User = Record<string, any> & { id: string; role: UserRole };
export type Application = Record<string, any> & { id: string; status: string };
export type Certificate = Record<string, any> & { id: string; status: string };
export type AuditLog = Record<string, any> & { id: string; action: string };
export type Instrument = Record<string, any> & { id: string };
export type Jurisdiction = Record<string, any> & { id: string };
export type Notification = Record<string, any> & { id: string };