const admin = require("firebase-admin");
admin.initializeApp();

exports.imageModifier = require("./components/images/imageModifier").imageModifier;