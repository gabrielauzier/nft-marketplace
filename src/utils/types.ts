export type Item = {
  id: string;
  name: string;
  creator: string;
  price: number;
  description: string;
  imageURL: any;
  bids: Bid[];
};

export type Bid = {
  id: string;
  name: string;
  price: number;
  imageURL: any;
  date: string;
};
