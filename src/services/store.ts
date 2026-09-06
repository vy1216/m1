import type { Application, AuditLog, Certificate, Instrument, Jurisdiction, Notification, User } from "../types";

type StoreState = {
  users: User[];
  applications: Application[];
  certificates: Certificate[];
  auditLogs: AuditLog[];
  instruments: Instrument[];
  jurisdictions: Jurisdiction[];
  notifications: Notification[];
  currentUser: User | null;
  rulesConfig: {
    fee_schedule_json: Record<string, string>;
    validity_period_by_category_json: Record<string, string>;
    alert_threshold_days: number;
  };
};

const state: StoreState = {
  users: [],
  applications: [],
  certificates: [],
  auditLogs: [],
  instruments: [],
  jurisdictions: [{ id: "default", name: "New Delhi", district_code: "DL" }],
  notifications: [],
  currentUser: null,
  rulesConfig: {
    fee_schedule_json: {},
    validity_period_by_category_json: {},
    alert_threshold_days: 30,
  },
};

export const store = {
  getState: () => state,
  switchUser: (userId: string) => {
    state.currentUser = state.users.find((user) => user.id === userId) || null;
  },
  resetToSeed: () => undefined,
  assignApplication: (_applicationId: string) => ({ assignedTo: null, reason: "No scheduling data loaded" }),
  revokeCertificate: (_certificateId: string, _reason: string) => ({ success: false, error: "Certificate store is not connected" }),
  runLifecycleScan: () => ({ scanned: 0, expiringSoon: 0, expired: 0 }),
  recordAudit: (_action: string, _entityType: string, _entityId: string, _metadata?: Record<string, unknown>) => undefined,
};