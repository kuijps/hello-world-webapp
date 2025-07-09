# Use lightweight Nginx image
FROM nginx:alpine

# Copy all files to Nginx html directory
COPY . /usr/share/nginx/html
