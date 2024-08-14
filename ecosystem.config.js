module.exports = {
  apps: [
    {
      name: "app",
      script: "./www/app.js",
      instances: 3,  
      max_memory_restart: "200M",  
      error_file: "/logs/err.log",  
      out_file: "/dev/null",  
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};