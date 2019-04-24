export let APIConfig = {
  //url: "http://localhost:3000",
  url: "http://13-52-175-75:3000",
  buildUrl(path: string): string {
    return `${this.url}${path}`;
  }
}