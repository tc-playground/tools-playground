# Enable IP Forwarding

1. Edit `sudo nano /etc/sysctl.conf`

    1. Ensure configuration : `net.ipv4.ip_forward = 1`

2. Reload: `sudo sysctl -p`

