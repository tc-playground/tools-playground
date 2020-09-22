# Wayland

## Configuration Ubuntu

* __Enable/Disable__

    1. `sudoedit /etc/gdm3/custom.conf`

        ```conf
        [daemon]
        WaylandEnable=true 
        ```
    
    3. `sudo systemctl restart gdm3`