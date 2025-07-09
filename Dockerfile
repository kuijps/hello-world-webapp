FROM nginx:alpine

# Remove default Nginx config
RUN rm /etc/nginx/conf.d/default.conf

# Add custom config that listens on port 8080
COPY nginx.conf /etc/nginx/conf.d/

# Copy your static files
COPY . /usr/share/nginx/html
