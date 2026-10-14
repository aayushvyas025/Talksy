class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async createUser(data) {
    const document = new this.model.create(data);
    return await document.save();
  }
}

module.exports = BaseRepository;
