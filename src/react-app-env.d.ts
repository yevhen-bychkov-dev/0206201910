interface Person {
  name: string;
  job: string;
  photo: string;
  description: string;
  services: Service[];
  comments: Comment[];
}

interface Service {
  name: string;
  quantity: number;
  color: string;
}

interface Comment {
  name: string;
  date: string;
  text: string;
}
