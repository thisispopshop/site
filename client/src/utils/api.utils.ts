export let APIConfig = {
  //url: "http://localhost:3000/api",
  url: "https://thisispopshop.com/api",
  buildUrl(path: string): string {
    return `${this.url}${path}`;
  }
}
