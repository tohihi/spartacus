export interface OrderCancellation {
  userId: string;
  entries: OrderCancellationEntry[];
}

export interface OrderCancellationEntry {
  orderEntryNumber: number;
  cancelQuantity: string;
  notes: string;
  cancelReason: string;
}

export interface OrderCancellationResponse {
  cancelResult: string;
}
