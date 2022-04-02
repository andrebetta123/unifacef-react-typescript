import { RouterStore } from "mobx-react-router";
import { action } from "mobx";

export default class NewRouterStoreAndre extends RouterStore {

  @action setHistory = (path: string) => {
    this.history.push(path);
  }
}

const router = new NewRouterStoreAndre();
export { router };