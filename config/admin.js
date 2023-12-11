module.exports = ({ env }) => ({
  auth: {
    secret: env(
      "ADMIN_JWT_SECRET",
      "UXHvaokmfwSWsY42Z2Xmf/aoes979+W1msFZ+IOZ570GnJyFQMoO6Vm7x4mgl/+n"
    ),
  },
  apiToken: {
    salt: env(
      "API_TOKEN_SALT",
      "PdAduBwY2RnkbD9GQy6JpjzscJNoMuuRucW+5Z2OiPuIEGgYNoQyc11OmO6YF0zC"
    ),
  },
  transfer: {
    token: {
      salt: env("TRANSFER_TOKEN_SALT"),
    },
  },
});
