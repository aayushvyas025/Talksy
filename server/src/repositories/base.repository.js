class BaseRepository {
  constructor(model) {
    this.model = model;
  }

  async create(data) {
    const document = await this.model.create(data);
    return document;
  }

  async findOne(filter = {}, options = {}) {
    const { populate, select } = options;
    const query = this.model.findOne(filter);
    if (populate) query.populate(populate);
    if (select) query.select(select);
    return await query.exec();
  }

  async findById(id, options = {}) {
    const { populate, select } = options;
    const query = this.model.findById(id);
    if (populate) query.populate(populate);
    if (select) query.select(select);

    return await query.exec();
  }
}

module.exports = BaseRepository;
