import { v4 as uuidV4 } from 'uuid';

class User {
  id?: string;
  name: string;
  email: string;
  password: string;
  createdAt?: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }

    if (!this.createdAt) {
      this.createdAt = new Date();
    }
  }
}

export { User };
