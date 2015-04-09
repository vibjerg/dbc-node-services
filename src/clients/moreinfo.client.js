"use strict";

var baseclient = require("./base.client"),
    config = baseclient.config.moreinfo,
    _default = {
  authentication: {
    authenticationUser: config.user,
    authenticationGroup: config.group,
    authenticationPassword: config.password
  }
},
    moreinfo = baseclient.client(config.wsdl, _default);

module.exports = {
  info: function (pid) {
    return moreinfo.request("moreInfo", {
      identifier: {
        localIdentifier: pid.split(":").pop()
      }
    });
  }
};