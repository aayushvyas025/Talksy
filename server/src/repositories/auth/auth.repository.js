const BaseRepository = require("../base.repository");

class AuthRepository extends BaseRepository {
  constructor(model) {
    super(model);
  }

  async signup(data) {
    return await this.createUser(data);
  }
}

module.exports = AuthRepository;
