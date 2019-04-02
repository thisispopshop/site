export let APIConfig = {
  url: "http://localhost:3000",
  buildUrl(path: string): string {
    return `${this.url}${path}`;
  }
}