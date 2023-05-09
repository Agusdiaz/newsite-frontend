export type NewType = {
  id: number;
  createdAt: string;
  name: string;
  content: string;
  creator: string;
  image?: string;
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
