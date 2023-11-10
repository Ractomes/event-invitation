export type List = {
  title: string;
  icon: React.ReactElement;
} & React.HTMLAttributes<HTMLDivElement>;

export type Data = {
  title: string;
  list: List[];
};

export type Datas = Data[];
