export let APIConfig = {
  //url: "http://localhost:3000",
  //url: "https://13-52-175-75:3000",
  //note the ec2 public dns part works as well
  url: "https://thisispopshop.com",
  buildUrl(path: string): string {
    return `${this.url}${path}`;
  }
}