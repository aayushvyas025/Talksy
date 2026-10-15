const BaseRepository = require("../base.repository");

class AuthRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }

  async createUser(data) {
    return await this.create(data);
  }

  async findByEmail(email) {
    return await this.findOne({ email });
  }
}

module.exports = AuthRepository;
