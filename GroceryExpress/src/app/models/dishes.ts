export interface Value {
  id: number;
  meal: string;
  price: number;
  url: string;
}

export interface Dishes {
  value: Value[];
  success: boolean;
  error: string;
  failure: boolean;
}
