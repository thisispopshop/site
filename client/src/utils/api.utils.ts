export let APIConfig = {
  //url: "http://localhost:3000",
  url: "https://thisispopshop.com",
  buildUrl(path: string): string {
    return `${this.url}${path}`;
  }
}
