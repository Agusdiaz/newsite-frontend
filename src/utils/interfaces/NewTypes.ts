export type NewType = {
  id: number;
  createdAt: string;
  name: string;
  content: string;
  image: string;
  creator: string;
};

export type SelectedNewType = {
  id: number;
  createdAt: string;
  name: string;
  content: string;
  image: string;
  creator: string;
  closeModal: Function;
};
