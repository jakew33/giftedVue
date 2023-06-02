export class Gift {
  constructor(data) {
    this.id = data.id
    this.tag = data.tag
    this.url = data.url || "https://www.shutterstock.com/image-photo/red-gift-box-golden-ribbon-260nw-157822775.jpg"
    this.opened = data.opened
    this.creatorId = data.creatorId
    this.createdAt = data.createdAt
  }
}