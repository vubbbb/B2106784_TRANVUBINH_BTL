exports.getAllUsers  = (req, res) => {
    res.send({massage: "getAllUsers "});
};

exports.register = (req, res) => {
    res.send({massage: "register"});
};

exports.changePassword = (req, res) => {
    res.send({massage: "changePassword"});
};

exports.getUserInfo  = (req, res) => {
    res.send({massage: "getUserInfo  "});
};

exports.changeUserInfo = (req, res) => {
    res.send({massage: "changeUserInfo "});
};

exports.getUserCart = (req, res) => {
    res.send({massage: "getUserCart"});
};

exports.addCart  = (req, res) => {
    res.send({massage: "addCart "});
};

exports.updateBookInCart = (req, res) => {
    res.send({massage: "updateBookInCart"});
};

exports.removeBook = (req, res) => {
    res.send({massage: "removeBook"});
};
