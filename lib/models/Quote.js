const pool = require('../utils/pool');

class Quote {
  id;
  detail;
  character_id;
  episode_id;

  constructor(row) {
    this.id = row.id;
    this.detail = row.detail;
    this.episode_id = row.episode_id;
    this.character_id = row.character_id;
  }

  static async count() {
    const { rows } = await pool.query('SELECT COUNT(*) FROM quotes');
    return Number(rows[0].count);
  }

  static async insert() {
    // implement insert to add new quote
  }
}

module.exports = { Quote };
