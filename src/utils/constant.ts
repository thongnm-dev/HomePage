
const Constant = {
    authorization: {
        encrptedAuthTokenName: String(process.env.VUE_APP_TOKEN_KEY),
        storeAuthKey: String(process.env.VUE_APP_STORE_KEY)
    },

    appDomain: `${String(process.env.VUE_APP_DOMAIN)}:${String(process.env.VUE_APP_PORT)}`
}

export default Constant;
