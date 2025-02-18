export interface RangeItem {
  id: string | number;
  name: string;
}

export interface RangeProps {
  items: RangeItem[];
  onChange?: (range: { start: RangeItem; end: RangeItem }) => void;
}
