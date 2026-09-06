import React from "react";
import type { Certificate } from "../../types";

export const CertificateModal: React.FC<{
  certificate: Certificate | null;
  isOpen: boolean;
  onClose: () => void;
  onViewPublic?: (certificateNumber: string) => void;
}> = () => null;