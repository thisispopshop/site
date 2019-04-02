// Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
// http://pm2.keymetrics.io/docs/usage/deployment/

module.exports = {
  apps : [{
    name: 'API',
    script: 'app.ts',
    cwd: '/api/bin/',
    instances: 4,
    exec_mode  : "cluster",
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'ec2-user',
      host : '13.52.175.75',
      ref  : 'origin/master:deploy',
      repo : 'git@github.com:thisispopshop/site.git',
      path : '/var/www/popshop',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
