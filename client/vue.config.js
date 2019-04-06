
/*
module.exports = {

    //so we can push to github repo
    publicPath: process.env.NODE_ENV === 'production'
      ? '/thisispopshop/'
      : '/'

  }*/

  module.exports = {
    devServer: {
      disableHostCheck: true
    }
  }