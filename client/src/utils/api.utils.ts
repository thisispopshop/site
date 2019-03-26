export let APIConfig = {
  url: "http://ec2-13-52-175-75.us-west-1.compute.amazonaws.com:3000",
  buildUrl(path: string): string {
    return `${this.url}${path}`;
  }
}