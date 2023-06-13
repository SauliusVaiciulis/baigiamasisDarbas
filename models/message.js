const mongoose = require('mongoose');
const Schema = mongoose.Schema;

messageSchema = new Schema( {
	
    sender: String,
	recipient: String,
	body: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
}),
Message = mongoose.model('Message', messageSchema);

module.exports = Message;