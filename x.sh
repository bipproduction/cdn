server {
    listen 80 default_server;
    listen [::]:80 default_server;
    
    root /var/www/html;
    
    # Add index.php to the list if you are using PHP
    index index.html index.htm index.nginx-debian.html;
    
    server_name _;
    
    location / {
        
        try_files $uri $uri/ =404;
    }
    
    
}